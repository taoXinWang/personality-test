'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { DimensionScore, Archetype } from '@/lib/types';
import { getArchetype } from '@/lib/utils/scoring';
import { dimensions } from '@/lib/data/dimensions';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { celebrities } from '@/lib/data/celebrities';
import { calculateCompatibility, parseArchetypeCode } from '@/lib/utils/compatibility';
import { signatureTraits } from '@/lib/data/signatureTraits';
import html2canvas from 'html2canvas';
import confetti from 'canvas-confetti';

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const { language, t } = useLanguage();
  const resultCardRef = useRef<HTMLDivElement>(null);

  const [result, setResult] = useState<{
    dimensions: DimensionScore[];
    archetypeCode: string;
    archetype: Archetype;
  } | null>(null);

  const [compatibilityInput, setCompatibilityInput] = useState('');
  const [compatibilityResult, setCompatibilityResult] = useState<any>(null);
  const [showCompatibility, setShowCompatibility] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

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

      // Trigger confetti celebration
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 300);
    }
  }, []);

  const handleCompatibilityCheck = () => {
    if (!result) return;

    const parsedCode = parseArchetypeCode(compatibilityInput);
    if (!parsedCode) {
      alert(language === 'zh' ? '请输入有效的性格代码（例如：ILOH-S）' : 'Please enter a valid personality code (e.g., ILOH-S)');
      return;
    }

    const otherArchetype = getArchetype(parsedCode);
    if (!otherArchetype) {
      alert(language === 'zh' ? '找不到该性格类型' : 'Personality type not found');
      return;
    }

    const compatibility = calculateCompatibility(result.dimensions, result.dimensions);
    setCompatibilityResult({
      ...compatibility,
      otherArchetype
    });
    setShowCompatibility(true);
  };

  const handleGenerateImage = async () => {
    if (!resultCardRef.current) return;

    setIsGeneratingImage(true);
    try {
      const canvas = await html2canvas(resultCardRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = `personality-${result?.archetypeCode}.png`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        }
        setIsGeneratingImage(false);
      }, 'image/png');
    } catch (error) {
      console.error('Error generating image:', error);
      alert(language === 'zh' ? '图片生成失败，请重试' : 'Failed to generate image, please try again');
      setIsGeneratingImage(false);
    }
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert(language === 'zh' ? '链接已复制！' : 'Link copied!');
  };

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
  const matchingCelebrities = celebrities[archetype.fullCode] || [];
  const signature = signatureTraits[archetype.fullCode];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 pt-4 flex justify-end">
        <LanguageSwitcher />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Result Card - for image generation */}
        <div ref={resultCardRef} className="bg-white dark:bg-gray-800 p-8 rounded-lg mb-8 shadow-xl">
          {/* Archetype Header with Signature Traits */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{signature?.emoji}</div>
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4">
              {archetype.fullCode}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {archetype.name[language]}
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {signature?.tagline[language]}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              {archetype.description[language]}
            </p>

            {/* Signature Traits Tags */}
            {signature && (
              <div className="flex flex-wrap gap-3 justify-center">
                {signature.traits[language].map((trait, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Celebrity Matches */}
          {matchingCelebrities.length > 0 && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                ⭐ {t('Famous People Like You', '和你一样的名人')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchingCelebrities.map((celeb, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                    <div className="font-bold text-lg text-gray-900 dark:text-white">
                      {celeb.name[language]}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {celeb.description[language]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dimension Scores */}
          <div className="mb-8">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                💼 {t('Workplace', '职场')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {archetype.workplace[language]}
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                ❤️ {t('Romance', '恋爱')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {archetype.romance[language]}
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                👥 {t('Social', '社交')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {archetype.social[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Compatibility Checker */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            💕 {t('Check Compatibility', '检查匹配度')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('Enter your friend\'s personality code to see how compatible you are!', '输入你朋友的性格代码，看看你们有多合拍！')}
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              value={compatibilityInput}
              onChange={(e) => setCompatibilityInput(e.target.value)}
              placeholder={language === 'zh' ? '例如：ILOH-S' : 'e.g., ILOH-S'}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              onClick={handleCompatibilityCheck}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              {t('Check', '检查')}
            </button>
          </div>

          {showCompatibility && compatibilityResult && (
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {compatibilityResult.score}%
                </div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white">
                  {language === 'zh'
                    ? compatibilityResult.level === 'excellent' ? '非常合拍' :
                      compatibilityResult.level === 'good' ? '很合拍' :
                      compatibilityResult.level === 'moderate' ? '中等合拍' : '需要努力'
                    : compatibilityResult.level === 'excellent' ? 'Excellent Match' :
                      compatibilityResult.level === 'good' ? 'Good Match' :
                      compatibilityResult.level === 'moderate' ? 'Moderate Match' : 'Challenging Match'
                  }
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                {compatibilityResult.advice[language]}
              </p>
            </div>
          )}
        </div>

        {/* Share Section */}
        <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t('Share Your Results', '分享你的结果')}
          </h2>
          <p className="mb-6 opacity-90">
            {t('Invite your friends to discover their personality type!', '邀请你的朋友发现他们的性格类型！')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={handleCopyLink}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('Copy Link', '复制链接')}
            </button>
            <button
              onClick={handleGenerateImage}
              disabled={isGeneratingImage}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50"
            >
              {isGeneratingImage
                ? (language === 'zh' ? '生成中...' : 'Generating...')
                : (language === 'zh' ? '下载结果图片' : 'Download Result Image')
              }
            </button>
            <button
              onClick={() => router.push('/')}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              {t('Take Test Again', '重新测试')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
