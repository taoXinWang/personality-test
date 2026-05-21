import { DimensionScore } from '../types';

export interface CompatibilityResult {
  score: number; // 0-100
  level: 'excellent' | 'good' | 'moderate' | 'challenging';
  strengths: {
    en: string[];
    zh: string[];
  };
  challenges: {
    en: string[];
    zh: string[];
  };
  advice: {
    en: string;
    zh: string;
  };
}

// Calculate compatibility between two personality profiles
export function calculateCompatibility(
  dimensions1: DimensionScore[],
  dimensions2: DimensionScore[]
): CompatibilityResult {
  let totalScore = 0;
  const strengths: { en: string[]; zh: string[] } = { en: [], zh: [] };
  const challenges: { en: string[]; zh: string[] } = { en: [], zh: [] };

  // Compare each dimension
  dimensions1.forEach((dim1) => {
    const dim2 = dimensions2.find(d => d.dimension === dim1.dimension);
    if (!dim2) return;

    const diff = Math.abs(dim1.percentage - dim2.percentage);

    // Similar scores = good compatibility
    if (diff < 20) {
      totalScore += 25;
      if (dim1.dimension === 'social') {
        strengths.en.push('Similar social energy levels');
        strengths.zh.push('相似的社交能量水平');
      } else if (dim1.dimension === 'harmony') {
        strengths.en.push('Aligned conflict resolution styles');
        strengths.zh.push('一致的冲突解决方式');
      }
    } else if (diff < 40) {
      totalScore += 15;
    } else {
      totalScore += 5;
      if (dim1.dimension === 'structure') {
        challenges.en.push('Different approaches to planning and organization');
        challenges.zh.push('计划和组织方式不同');
      } else if (dim1.dimension === 'exploration') {
        challenges.en.push('Different comfort levels with change and novelty');
        challenges.zh.push('对变化和新事物的接受度不同');
      }
    }
  });

  // Determine compatibility level
  let level: 'excellent' | 'good' | 'moderate' | 'challenging';
  let advice: { en: string; zh: string };

  if (totalScore >= 80) {
    level = 'excellent';
    advice = {
      en: 'You two are highly compatible! Your similar personalities create natural understanding and harmony.',
      zh: '你们非常合拍！相似的性格让你们自然而然地理解和和谐相处。'
    };
  } else if (totalScore >= 60) {
    level = 'good';
    advice = {
      en: 'You have good compatibility with some complementary differences that can strengthen your relationship.',
      zh: '你们有很好的兼容性，一些互补的差异可以加强你们的关系。'
    };
  } else if (totalScore >= 40) {
    level = 'moderate';
    advice = {
      en: 'Your differences require understanding and compromise, but can lead to personal growth for both.',
      zh: '你们的差异需要理解和妥协，但可以促进双方的个人成长。'
    };
  } else {
    level = 'challenging';
    advice = {
      en: 'Your personalities are quite different. Success requires patience, communication, and appreciation of differences.',
      zh: '你们的性格差异较大。成功需要耐心、沟通和欣赏彼此的不同。'
    };
  }

  // Add default strengths/challenges if none found
  if (strengths.en.length === 0) {
    strengths.en.push('Opportunity to learn from each other');
    strengths.zh.push('互相学习的机会');
  }
  if (challenges.en.length === 0) {
    challenges.en.push('May need extra communication to bridge differences');
    challenges.zh.push('可能需要额外的沟通来弥合差异');
  }

  return {
    score: totalScore,
    level,
    strengths,
    challenges,
    advice
  };
}

// Parse archetype code from URL or input
export function parseArchetypeCode(input: string): string | null {
  // Remove whitespace and convert to uppercase
  const cleaned = input.trim().toUpperCase();

  // Match pattern like ILOH-S, PLRC-T, etc.
  const match = cleaned.match(/^([IPL][LSR][OR][HC])-([ST])$/);

  return match ? match[0] : null;
}
