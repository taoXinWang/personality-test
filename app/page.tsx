'use client';

import Link from "next/link";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 pt-4 flex justify-end">
        <LanguageSwitcher />
      </div>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('Discover Your Personality', '发现你的性格')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t(
              'Take our scientifically-based personality test and gain deep insights into who you are.',
              '参加我们基于科学的性格测试，深入了解你是谁。'
            )}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
            {t(
              'Based on the Big Five personality model, trusted by psychologists worldwide.',
              '基于大五人格模型，受到全球心理学家的信赖。'
            )}
          </p>

          <Link
            href="/test"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            {t('Start Test (10 minutes)', '开始测试（10分钟）')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">50</div>
            <div className="text-gray-600 dark:text-gray-300">
              {t('Questions', '道题目')}
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">16</div>
            <div className="text-gray-600 dark:text-gray-300">
              {t('Personality Types', '种性格类型')}
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-600 dark:text-gray-300">
              {t('Core Dimensions', '个核心维度')}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t("What You'll Learn", '你将了解到什么')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('Your Personality Archetype', '你的性格原型')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t(
                  'Discover which of 16 unique personality archetypes best describes you.',
                  '发现16种独特性格原型中哪一种最能描述你。'
                )}
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('Five Core Dimensions', '五个核心维度')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t(
                  'Understand your scores across five personality dimensions.',
                  '了解你在五个性格维度方面的得分。'
                )}
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('Workplace Insights', '职场洞察')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t(
                  'Learn how your personality manifests in professional settings.',
                  '了解你的性格如何在职业环境中表现。'
                )}
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('Relationship Guidance', '关系指导')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t(
                  'Gain insights into your romantic and social patterns.',
                  '深入了解你的恋爱和社交模式。'
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-blue-600 text-white p-12 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            {t('Ready to Discover Yourself?', '准备好发现自己了吗？')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t(
              'Join thousands who have gained clarity about their personality',
              '加入数千名已经清楚了解自己性格的人'
            )}
          </p>
          <Link
            href="/test"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            {t('Take the Free Test', '参加免费测试')}
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-700 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>
            {t(
              'Based on the scientifically validated Big Five personality model',
              '基于经过科学验证的大五人格模型'
            )}
          </p>
        </div>
      </footer>
    </div>
  );
}
