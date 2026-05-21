'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { DimensionScore, Archetype } from '@/lib/types';
import { getArchetype } from '@/lib/utils/scoring';
import { dimensions } from '@/lib/data/dimensions';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function ResultPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const [result, setResult] = useState<{
    dimensions: DimensionScore[];
    archetypeCode: string;
    archetype: Archetype;
  } | null>(null);

  useEffect(() => {
    // Load result from localStorage
    const stored = localStorage.getItem('testResult');
    if (stored) {
      const data = JSON.parse(stored);
      const archetype = getArchetype(data.archetypeCode);
      setResult({
        dimensions: data.dimensions,
        archetypeCode: data.archetypeCode,
        archetype
      });
    }
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">{t('Loading your results...', '加载结果中...')}</p>
        </div>
      </div>
    );
  }

  const { archetype, dimensions: dimensionScores } = result;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 pt-4 flex justify-end">
        <LanguageSwitcher />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Archetype Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4">
            {archetype.fullCode}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {archetype.name[language]}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {archetype.description[language]}
          </p>
        </div>

        {/* Dimension Scores */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t('Your Personality Dimensions', '你的性格维度')}
          </h2>
          <div className="space-y-6">
            {dimensionScores.map((score) => {
              const dim = dimensions.find(d => d.code === score.dimension);
              if (!dim) return null;

              const poleName = score.pole === 'high' ? dim.highPole.name[language] : dim.lowPole.name[language];
              const strengthLabel = language === 'zh'
                ? (score.preferenceStrength === 'strong' ? '强' :
                   score.preferenceStrength === 'moderate' ? '中等' : '轻微')
                : (score.preferenceStrength === 'strong' ? 'Strong' :
                   score.preferenceStrength === 'moderate' ? 'Moderate' : 'Slight');

              return (
                <div key={score.dimension}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {dim.name[language]}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        {poleName} ({strengthLabel} {t('preference', '倾向')})
                      </span>
                    </div>
                    <span className="text-blue-600 font-semibold">
                      {score.percentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all"
                      style={{ width: `${score.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scenario Applications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              💼 {t('Workplace', '职场')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {archetype.workplace[language]}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              ❤️ {t('Romance', '恋爱')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {archetype.romance[language]}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              👥 {t('Social', '社交')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {archetype.social[language]}
            </p>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t('Share Your Results', '分享你的结果')}
          </h2>
          <p className="mb-6 opacity-90">
            {t('Invite your friends to discover their personality type!', '邀请你的朋友发现他们的性格类型！')}
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('Copy Link', '复制链接')}
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              {t('Share on Social Media', '分享到社交媒体')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
