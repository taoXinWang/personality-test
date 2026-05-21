# Personality Test - Development Guide

## Project Status

✅ **Core functionality implemented:**
- Homepage with test introduction
- 50-question personality test with 7-point Likert scale
- Scoring algorithm based on Big Five model
- Result page showing archetype and dimension scores
- 16 personality archetypes (4 base archetypes implemented, 12 more to add)

## Quick Start

### Development Server

The server is currently running at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.129.175:3000

To start the development server:
```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
personality-test/
├── app/
│   ├── page.tsx              # Homepage
│   ├── test/
│   │   └── page.tsx          # Test page (50 questions)
│   └── result/[id]/
│       └── page.tsx          # Result page
├── lib/
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── data/
│   │   ├── dimensions.ts     # 5 personality dimensions
│   │   ├── questions.ts      # 50 test questions (EN + ZH)
│   │   └── archetypes.ts     # 16 personality archetypes
│   └── utils/
│       └── scoring.ts        # Scoring and calculation logic
├── components/               # React components (to be added)
├── CONTEXT.md               # Domain glossary
├── ARCHETYPES.md            # Archetype definitions
└── docs/adr/                # Architecture Decision Records
```

## What's Working

1. **Homepage** (`/`)
   - Introduction to the test
   - Call-to-action to start test
   - Feature highlights

2. **Test Page** (`/test`)
   - 50 randomized questions
   - 7-point Likert scale (Strongly Disagree to Strongly Agree)
   - Progress bar
   - Back button to review previous questions

3. **Result Page** (`/result/[id]`)
   - Personality archetype display
   - 5 dimension scores with visual bars
   - Preference strength indicators
   - Workplace, romance, and social insights
   - Share functionality (UI only, not yet functional)

## What Needs to Be Done

### 1. Complete Archetype Definitions (HIGH PRIORITY)

Currently only 4 archetypes are fully defined. Need to add the remaining 12:

**Completed:**
- ILOH (Visionary Harmonizer)
- ILOC (Strategic Catalyst)
- ILRH (Thoughtful Architect)
- ILRC (Independent Strategist)

**TODO:**
- ISOH (Adaptive Connector)
- ISOC (Bold Explorer)
- ISRH (Quiet Innovator)
- ISRC (Free Thinker)
- PLOH (Reliable Leader)
- PLOC (Decisive Commander)
- PLRH (Steady Supporter)
- PLRC (Principled Executor)
- PSOH (Easygoing Facilitator)
- PSOC (Straightforward Realist)
- PSRH (Gentle Realist)
- PSRC (Independent Pragmatist)

Each archetype needs both -S (Stable) and -T (Turbulent) variants.

Edit: `lib/data/archetypes.ts`

### 2. Add Internationalization (i18n)

Currently the app shows English text. Need to:
- Install `next-intl` or similar i18n library
- Add language switcher component
- Use Chinese translations from questions and archetypes data
- Set up locale routing (`/en/`, `/zh/`)

### 3. Add Database Integration

Currently results are stored in localStorage. For production:
- Set up Supabase project
- Create `results` table schema
- Implement API routes for saving/loading results
- Add optional user registration

### 4. Implement Share Functionality

- Copy link to clipboard
- Generate social media share links (Twitter, Facebook, WeChat)
- Add Open Graph meta tags for rich previews
- Generate shareable result images

### 5. Add Analytics

- Google Analytics for international version
- Baidu Analytics for China version
- Track: test completion rate, most common archetypes, average time

### 6. Advertising Integration

**Phase 1 (International):**
- Google AdSense integration
- Ad placements on result page (not on test page)

**Phase 2 (China):**
- Baidu Union / Tencent Ads integration
- Conditional ad loading based on user location

### 7. SEO Optimization

- Add meta tags and descriptions
- Create sitemap.xml
- Add structured data (JSON-LD)
- Optimize for "personality test" keywords

### 8. Mobile Optimization

- Test on mobile devices
- Improve touch targets for 7-point scale
- Optimize layout for small screens

### 9. Performance Optimization

- Add loading states
- Implement code splitting
- Optimize images
- Add service worker for offline support

### 10. Testing

- Write unit tests for scoring logic
- Add E2E tests with Playwright
- Test all 16 archetype calculations
- Validate question randomization

## Deployment

### Phase 1: International Version (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically
4. Add custom domain
5. Apply for Google AdSense

### Phase 2: China Version (Aliyun/Tencent Cloud)

1. Complete ICP备案 (domain registration)
2. Set up server on Aliyun/Tencent Cloud
3. Deploy Next.js app
4. Configure CDN
5. Apply for Baidu Union

See `docs/adr/0003-international-first-china-second.md` for detailed checklist.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## Environment Variables

Create `.env.local` for local development:

```env
# Supabase (when implemented)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Analytics (when implemented)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Ad Networks (when implemented)
NEXT_PUBLIC_ADSENSE_CLIENT=your_adsense_client_id
```

## Contributing

When adding new archetypes:
1. Follow the format in `lib/data/archetypes.ts`
2. Provide both English and Chinese descriptions
3. Include workplace, romance, and social scenarios
4. Create both -S and -T variants

## Resources

- **Design Reference**: https://www.16personalities.com/ch
- **Big Five Model**: Academic literature on OCEAN personality traits
- **Documentation**: See `CONTEXT.md` and `docs/adr/` for design decisions

## Current Status

🟢 **Ready for local testing**
🟡 **Needs archetype completion before production**
🔴 **Not yet ready for deployment**

Next immediate steps:
1. Complete all 16 archetype definitions
2. Test the full user flow
3. Add i18n support
4. Set up Supabase for result storage
