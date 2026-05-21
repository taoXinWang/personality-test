import { Archetype } from '../types';

// All 32 archetype variants (16 base × 2 modifiers)
export const archetypes: Archetype[] = [
  // ILOH - The Visionary Harmonizer
  {
    code: 'ILOH',
    modifier: 'S',
    fullCode: 'ILOH-S',
    name: { en: 'The Visionary Harmonizer', zh: '远见协调者' },
    description: {
      en: 'Creative and organized, socially engaged, seeks harmony. You bring people together around new ideas with structured execution. Your stable emotional foundation allows you to lead change initiatives with confidence.',
      zh: '富有创造力且有条理，善于社交，追求和谐。你通过结构化的执行将人们聚集在新想法周围。你稳定的情绪基础让你能够自信地领导变革举措。'
    },
    workplace: {
      en: 'Natural project leader who balances innovation with planning. Excels at change management and team alignment. Your emotional stability helps you navigate organizational politics smoothly.',
      zh: '天生的项目领导者，平衡创新与规划。擅长变革管理和团队协调。你的情绪稳定性帮助你顺利应对组织政治。'
    },
    romance: {
      en: 'Seeks deep connection with shared vision. Plans thoughtful experiences, values emotional harmony. Your confidence creates a secure foundation for the relationship.',
      zh: '寻求有共同愿景的深层连接。规划周到的体验，重视情感和谐。你的自信为关系创造了安全的基础。'
    },
    social: {
      en: 'The friend who organizes group activities around new experiences. Mediates conflicts, builds community. Your steady presence makes you a trusted anchor in your social circle.',
      zh: '组织围绕新体验的团体活动的朋友。调解冲突，建立社区。你稳定的存在使你成为社交圈中值得信赖的支柱。'
    }
  },
  {
    code: 'ILOH',
    modifier: 'T',
    fullCode: 'ILOH-T',
    name: { en: 'The Visionary Harmonizer', zh: '远见协调者' },
    description: {
      en: 'Creative and organized, socially engaged, seeks harmony. You bring people together around new ideas with structured execution. Your emotional sensitivity makes you highly attuned to team dynamics and drives continuous improvement.',
      zh: '富有创造力且有条理，善于社交，追求和谐。你通过结构化的执行将人们聚集在新想法周围。你的情感敏感性使你高度关注团队动态，并推动持续改进。'
    },
    workplace: {
      en: 'Natural project leader who balances innovation with planning. Excels at change management and team alignment. Your sensitivity to feedback helps you refine your approach constantly.',
      zh: '天生的项目领导者，平衡创新与规划。擅长变革管理和团队协调。你对反馈的敏感性帮助你不断完善方法。'
    },
    romance: {
      en: 'Seeks deep connection with shared vision. Plans thoughtful experiences, values emotional harmony. Your emotional awareness creates deep intimacy but may require reassurance.',
      zh: '寻求有共同愿景的深层连接。规划周到的体验，重视情感和谐。你的情感意识创造了深刻的亲密感，但可能需要安全感。'
    },
    social: {
      en: 'The friend who organizes group activities around new experiences. Mediates conflicts, builds community. Your emotional depth allows you to connect meaningfully but you may take conflicts personally.',
      zh: '组织围绕新体验的团体活动的朋友。调解冲突，建立社区。你的情感深度让你能够有意义地连接，但你可能会把冲突当成针对个人。'
    }
  }
];
