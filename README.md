# PersonalityTest - Project Summary

## What We're Building

A viral personality test website based on the Big Five personality model, designed to compete with 16personalities.com by offering scientific credibility with user-friendly presentation.

## Core Product

**Test Format**:
- 50 questions, 7-point Likert scale (Strongly Disagree to Strongly Agree)
- ~10 minutes to complete
- Questions randomized to prevent gaming

**Measurement Model**:
- 5 dimensions based on Big Five (OCEAN)
- Renamed for accessibility: Exploration, Structure, Social Energy, Harmony, Resilience
- Each dimension scored 0-100%

**Results**:
- 16 personality archetypes (generated from 4 dimensions)
- Type modifier based on 5th dimension (Stable -S or Turbulent -T)
- Complete profile includes:
  - Archetype code and name (e.g., ICOH-S "The Visionary Harmonizer")
  - 5 dimension scores with preference strengths
  - Detailed archetype description
  - 3 scenario applications (workplace, romance, social)

## Key Differentiators from 16personalities

1. **Scientific foundation**: Big Five instead of MBTI
2. **Continuous scoring**: Shows exact percentages, not just binary types
3. **Preference strength**: Indicates how strong each classification is
4. **Completely free**: No paywalls, all content accessible

## Go-to-Market Strategy

**Phase 1: International Launch (Weeks 1-2)**
- Deploy to Vercel (free hosting)
- Support English + Chinese languages
- Focus on product validation and traffic growth
- Add Google AdSense once traffic is established

**Phase 2: China Launch (Weeks 4-8)**
- Complete ICP备案 (domain registration)
- Deploy to Aliyun/Tencent Cloud
- Apply to Baidu Union / Tencent Ads / Bytedance Pangolin
- Use Phase 1 data to strengthen applications

## Monetization

**Primary**: Advertising (Google AdSense international, Baidu Union China)
**Future**: B2B/Enterprise features, affiliate partnerships

## Tech Stack

- **Frontend**: Next.js (React framework with SSR for SEO)
- **Backend**: Supabase (authentication, database, free tier)
- **Hosting**: Vercel (international) + Aliyun/Tencent Cloud (China)
- **Languages**: Chinese + English (i18n from day 1)

## Success Metrics

- **Viral growth**: Share rate, completion rate, return visitors
- **Traffic**: Target 100K+ monthly visitors for meaningful ad revenue
- **Engagement**: Time on result page, social shares
- **Quality**: Test-retest reliability, user satisfaction ratings

## Documentation

- **CONTEXT.md**: Canonical glossary of all domain terms
- **docs/adr/**: Architecture Decision Records documenting key choices
  - 0001: Why Big Five over MBTI
  - 0002: Why 16 archetypes not 32
  - 0003: Why international-first launch strategy
  - 0004: Why 50 questions with 7-point scale
  - 0005: Why free with ads, no paywall

## Next Steps

1. Generate the 16 archetype definitions (codes, names, descriptions)
2. Write the 50 test questions (10 per dimension, 6 forward + 4 reverse)
3. Design the result page layout and user flow
4. Set up Next.js project with i18n and Supabase
5. Implement test logic and scoring algorithm
6. Create shareable result pages with social meta tags
7. Deploy to Vercel and begin user testing

## China Launch Checklist (Phase 2)

When ready to launch in China:

**Domain & Filing**:
- [ ] Purchase domain (.cn or .com)
- [ ] Prepare ICP备案 documents (ID/business license, domain cert, hosting proof)
- [ ] Submit ICP备案 via Aliyun/Tencent (1-2 weeks wait)

**Infrastructure**:
- [ ] Set up Aliyun/Tencent Cloud server (2 vCPU, 4GB RAM)
- [ ] Configure CDN for faster loading
- [ ] Set up SSL certificate
- [ ] Deploy application to Chinese server

**Monetization**:
- [ ] Apply to Baidu Union (union.baidu.com)
- [ ] Apply to Tencent Ads (e.qq.com)
- [ ] Apply to Bytedance Pangolin (csjplatform.com)
- [ ] Set up Chinese bank account for ad payments

**Estimated costs**: ¥500-2000 for first 3 months (without company registration)

## Contact & Resources

- **16personalities reference**: https://www.16personalities.com/ch
- **Big Five research**: Academic literature on OCEAN model
- **ICP备案 guide**: Aliyun/Tencent Cloud documentation
- **Ad networks**: Google AdSense, Baidu Union, Tencent Ads, Bytedance Pangolin
