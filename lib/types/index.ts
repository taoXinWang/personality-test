// Core type definitions for the personality test system

export type DimensionCode = 'exploration' | 'structure' | 'social' | 'harmony' | 'resilience';

export type Pole = 'high' | 'low';

export interface Dimension {
  code: DimensionCode;
  name: {
    en: string;
    zh: string;
  };
  highPole: {
    code: string;
    name: {
      en: string;
      zh: string;
    };
  };
  lowPole: {
    code: string;
    name: {
      en: string;
      zh: string;
    };
  };
}

export interface Question {
  id: number;
  dimension: DimensionCode;
  text: {
    en: string;
    zh: string;
  };
  reverse: boolean; // true if agreement indicates low pole
}

export interface Answer {
  questionId: number;
  score: number; // 1-7
}

export interface DimensionScore {
  dimension: DimensionCode;
  rawScore: number; // 0-70
  percentage: number; // 0-100
  pole: Pole; // high if >=50%, low if <50%
  preferenceStrength: 'strong' | 'moderate' | 'slight';
}

export interface ArchetypeCode {
  exploration: string; // I or P
  structure: string; // L or S
  social: string; // O or R
  harmony: string; // H or C
  modifier: string; // S or T (from resilience)
}

export interface Archetype {
  code: string; // e.g., "ILOH"
  modifier: string; // "S" or "T"
  fullCode: string; // e.g., "ILOH-S"
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  workplace: {
    en: string;
    zh: string;
  };
  romance: {
    en: string;
    zh: string;
  };
  social: {
    en: string;
    zh: string;
  };
}

export interface TestResult {
  dimensions: DimensionScore[];
  archetype: Archetype;
  timestamp: number;
  resultId: string; // unique ID for sharing
}

export type Language = 'en' | 'zh';

export interface TestProgress {
  currentQuestion: number;
  totalQuestions: number;
  answers: Answer[];
}
