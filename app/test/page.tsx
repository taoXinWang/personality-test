'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/lib/data/questions';
import { shuffleArray, calculateDimensionScores, generateArchetypeCode, generateResultId } from '@/lib/utils/scoring';
import { Answer } from '@/lib/types';

export default function TestPage() {
  const router = useRouter();
  const [shuffledQuestions] = useState(() => shuffleArray(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const currentQuestion = shuffledQuestions[currentIndex];
  const progress = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, { questionId: currentQuestion.id, score }];
    setAnswers(newAnswers);

    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Test complete - calculate results
      const dimensionScores = calculateDimensionScores(newAnswers);
      const archetypeCode = generateArchetypeCode(dimensionScores);
      const resultId = generateResultId();

      // Store results in localStorage
      const result = {
        dimensions: dimensionScores,
        archetypeCode,
        timestamp: Date.now(),
        resultId
      };
      localStorage.setItem('testResult', JSON.stringify(result));

      // Navigate to results page
      router.push(`/result/${resultId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Question {currentIndex + 1} of {shuffledQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            {currentQuestion.text.en}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {[
              { score: 1, label: 'Strongly Disagree' },
              { score: 2, label: 'Disagree' },
              { score: 3, label: 'Slightly Disagree' },
              { score: 4, label: 'Neutral' },
              { score: 5, label: 'Slightly Agree' },
              { score: 6, label: 'Agree' },
              { score: 7, label: 'Strongly Agree' }
            ].map(({ score, label }) => (
              <button
                key={score}
                onClick={() => handleAnswer(score)}
                className="w-full p-4 text-left rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">{label}</span>
                  <span className="text-gray-400 dark:text-gray-500">{score}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Back Button */}
        {currentIndex > 0 && (
          <button
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Previous Question
          </button>
        )}
      </div>
    </div>
  );
}
