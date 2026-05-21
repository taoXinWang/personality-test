import { Answer, DimensionScore, DimensionCode, Archetype } from '../types';
import { questions } from '../data/questions';
import { dimensions } from '../data/dimensions';
import { archetypes } from '../data/archetypes';

/**
 * Calculate dimension scores from user answers
 */
export function calculateDimensionScores(answers: Answer[]): DimensionScore[] {
  const dimensionScores: DimensionScore[] = [];

  // Group questions by dimension
  const dimensionQuestions = {
    exploration: questions.filter(q => q.dimension === 'exploration'),
    structure: questions.filter(q => q.dimension === 'structure'),
    social: questions.filter(q => q.dimension === 'social'),
    harmony: questions.filter(q => q.dimension === 'harmony'),
    resilience: questions.filter(q => q.dimension === 'resilience')
  };

  // Calculate score for each dimension
  for (const [dimCode, dimQuestions] of Object.entries(dimensionQuestions)) {
    let totalScore = 0;

    dimQuestions.forEach(question => {
      const answer = answers.find(a => a.questionId === question.id);
      if (answer) {
        // Reverse scoring if needed: inverted = 8 - raw_score
        const score = question.reverse ? 8 - answer.score : answer.score;
        totalScore += score;
      }
    });

    // Convert to percentage (max score per dimension = 70)
    const percentage = (totalScore / 70) * 100;
    const pole = percentage >= 50 ? 'high' : 'low';

    // Determine preference strength
    let preferenceStrength: 'strong' | 'moderate' | 'slight';
    const distance = Math.abs(percentage - 50);
    if (distance > 20) {
      preferenceStrength = 'strong';
    } else if (distance > 5) {
      preferenceStrength = 'moderate';
    } else {
      preferenceStrength = 'slight';
    }

    dimensionScores.push({
      dimension: dimCode as DimensionCode,
      rawScore: totalScore,
      percentage: Math.round(percentage * 10) / 10, // Round to 1 decimal
      pole,
      preferenceStrength
    });
  }

  return dimensionScores;
}

/**
 * Generate archetype code from dimension scores
 */
export function generateArchetypeCode(dimensionScores: DimensionScore[]): string {
  const exploration = dimensionScores.find(d => d.dimension === 'exploration');
  const structure = dimensionScores.find(d => d.dimension === 'structure');
  const social = dimensionScores.find(d => d.dimension === 'social');
  const harmony = dimensionScores.find(d => d.dimension === 'harmony');
  const resilience = dimensionScores.find(d => d.dimension === 'resilience');

  if (!exploration || !structure || !social || !harmony || !resilience) {
    throw new Error('Missing dimension scores');
  }

  const dim = dimensions.find(d => d.code === 'exploration')!;
  const explorationCode = exploration.pole === 'high'
    ? dimensions.find(d => d.code === 'exploration')!.highPole.code
    : dimensions.find(d => d.code === 'exploration')!.lowPole.code;

  const structureCode = structure.pole === 'high'
    ? dimensions.find(d => d.code === 'structure')!.highPole.code
    : dimensions.find(d => d.code === 'structure')!.lowPole.code;

  const socialCode = social.pole === 'high'
    ? dimensions.find(d => d.code === 'social')!.highPole.code
    : dimensions.find(d => d.code === 'social')!.lowPole.code;

  const harmonyCode = harmony.pole === 'high'
    ? dimensions.find(d => d.code === 'harmony')!.highPole.code
    : dimensions.find(d => d.code === 'harmony')!.lowPole.code;

  const modifierCode = resilience.pole === 'high'
    ? dimensions.find(d => d.code === 'resilience')!.highPole.code
    : dimensions.find(d => d.code === 'resilience')!.lowPole.code;

  const baseCode = `${explorationCode}${structureCode}${socialCode}${harmonyCode}`;
  return `${baseCode}-${modifierCode}`;
}

/**
 * Get archetype details from code
 */
export function getArchetype(code: string): Archetype {
  const archetype = archetypes.find(a => a.fullCode === code);
  if (!archetype) {
    throw new Error(`Archetype not found for code: ${code}`);
  }
  return archetype;
}

/**
 * Shuffle array (Fisher-Yates algorithm)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generate unique result ID
 */
export function generateResultId(): string {
  return Math.random().toString(36).substring(2, 15) +
         Math.random().toString(36).substring(2, 15);
}
