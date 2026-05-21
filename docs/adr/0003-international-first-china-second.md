# ADR 0003: International Launch First, China Launch Second

## Status
Accepted

## Context
We want to monetize through advertising and reach both Chinese and international audiences. However, the requirements for launching in China vs. internationally are drastically different:

**International (Vercel/Netlify + Google AdSense)**
- Domain: Buy from any registrar ($10-15/year)
- Hosting: Free tier on Vercel/Netlify
- Deployment: Push to GitHub, auto-deploy (minutes)
- Advertising: Apply for Google AdSense (approval in days)
- Timeline: **1-2 weeks from start to live**

**China (Aliyun/Tencent Cloud + Baidu Union)**
- Domain: Must have ICP备案 (1-2 weeks process)
- Hosting: Aliyun/Tencent Cloud server (~¥100-500/month)
- Deployment: Manual server setup, SSL config, CDN
- Advertising: Baidu Union requires established site with traffic (may reject new sites)
- Timeline: **3-4 weeks minimum, possibly longer**

Additionally, Baidu Union and other Chinese ad networks often require:
- Site has been live for 3-6 months
- Minimum daily traffic (varies, often 1000+ UV/day)
- Quality content and good user experience

## Decision
We will launch in **two phases**:

### Phase 1: International Launch (Weeks 1-2)
- Deploy to Vercel with English + Chinese language support
- Domain: `personalitytest.com` or similar (no ICP required for international hosting)
- No advertising initially — focus on product validation and traffic growth
- Once traffic is established, apply for Google AdSense

### Phase 2: China Launch (Weeks 4-8)
- Purchase `.cn` domain or use existing domain
- Complete ICP备案 process (1-2 weeks)
- Deploy same codebase to Aliyun/Tencent Cloud
- Apply for Baidu Union / Tencent Ads / Bytedance Pangolin
- Use Phase 1 traffic data and user feedback to strengthen ad network applications

## Consequences

### Positive
- **Fast validation**: Product live in 1-2 weeks, not 4-6 weeks
- **Lower initial cost**: Vercel free tier vs. paying for Chinese servers from day 1
- **Proof of concept**: International traffic and user feedback help refine product before China launch
- **Better ad approval odds**: Established site with real traffic has higher Baidu Union approval rate
- **Risk mitigation**: If product fails, we haven't invested in ICP备案 and Chinese infrastructure

### Negative
- **Delayed China monetization**: Can't earn from Chinese users until Phase 2
- **Potential traffic loss**: Chinese users may experience slower load times on international hosting
- **Two deployments**: Need to maintain two hosting environments eventually

### Mitigations
- Use Vercel's global CDN to minimize latency for Chinese users in Phase 1
- Design codebase to be deployment-agnostic (same code works on Vercel and Aliyun)
- Set up analytics from day 1 to track Chinese vs. international traffic split

## What You Need for Phase 2 (China Launch)

When you're ready to launch in China, here's the complete checklist:

### 1. Domain & ICP备案
- **Buy a domain** (if you don't have one):
  - `.cn` domains must be registered through Chinese registrars (Aliyun, Tencent)
  - `.com` domains can be registered anywhere but still need ICP备案 to host in China
  - Cost: ¥50-100/year for `.cn`, $10-15/year for `.com`

- **ICP备案 (ICP Filing)**:
  - Required for any website hosted on servers in mainland China
  - Process: Submit via your hosting provider (Aliyun/Tencent Cloud)
  - Documents needed:
    - Business license (if company) OR personal ID (if individual)
    - Domain certificate
    - Hosting proof (from Aliyun/Tencent)
    - Website content description
    - Commitment letter (provided by hosting company)
  - Timeline: 1-2 weeks (sometimes up to 20 business days)
  - Cost: Free (but hosting provider may charge ¥0-100 service fee)

### 2. Hosting & Server
- **Choose a provider**:
  - Aliyun (阿里云): Most popular, good documentation
  - Tencent Cloud (腾讯云): Competitive pricing, good for Tencent ad integration
  - Huawei Cloud (华为云): Alternative option

- **Server specs** (for initial launch):
  - 2 vCPU, 4GB RAM, 40GB SSD
  - Cost: ¥100-300/month (varies by provider and region)
  - Bandwidth: 1-5 Mbps (can upgrade as traffic grows)

- **Additional services**:
  - CDN (Content Delivery Network): ¥50-200/month
  - SSL certificate: Free (Let's Encrypt) or ¥500-2000/year (paid cert)
  - Database: Can use Supabase (international) or Aliyun RDS (¥100-500/month)

### 3. Advertising Networks
You'll need to apply to Chinese ad networks. Requirements vary:

**Baidu Union (百度联盟)**
- Requirements:
  - ICP备案 completed
  - Site live for 3-6 months (preferred)
  - Quality content, good UX
  - Minimum traffic: ~1000 UV/day (unofficial threshold)
- Revenue share: ~50-70% to publisher
- Application: union.baidu.com

**Tencent Ads (腾讯广告联盟)**
- Requirements:
  - ICP备案 completed
  - Similar traffic requirements to Baidu
- Revenue share: ~50-70% to publisher
- Application: e.qq.com

**Bytedance Pangolin (穿山甲)**
- Requirements:
  - ICP备案 completed
  - More lenient on traffic requirements
  - Better for mobile/app ads
- Revenue share: ~50-70% to publisher
- Application: www.csjplatform.com

**Strategy**: Apply to all three. Approval rates vary, and you can run multiple networks simultaneously (different ad placements).

### 4. Business Entity (Optional but Recommended)
- **Individual ICP备案**: Possible, but limits monetization options
- **Company ICP备案**: Better for:
  - Higher ad network approval rates
  - Ability to issue invoices (发票)
  - More professional image
  - Easier to scale

If you don't have a company, you can:
- Register a sole proprietorship (个体工商户): ¥0-500, simpler process
- Register a company (有限公司): ¥1000-3000, more formal

### 5. Payment & Withdrawal
- Chinese ad networks pay to Chinese bank accounts
- You'll need:
  - Chinese bank account (personal or business)
  - OR use a payment service provider that can receive on your behalf

### Timeline Summary
```
Week 1-2:  Buy domain, prepare ICP documents
Week 2-3:  Submit ICP备案, wait for approval
Week 3-4:  Set up server, deploy site, configure CDN/SSL
Week 4-6:  Run site, accumulate traffic
Week 6-8:  Apply to ad networks
Week 8-10: Ad approval, integrate ads, start monetizing
```

### Estimated Initial Investment
- Domain: ¥50-100/year
- Server: ¥100-300/month
- CDN: ¥50-200/month
- SSL: ¥0 (free) or ¥500-2000/year
- Company registration (optional): ¥0-3000 one-time
- **Total first 3 months**: ¥500-2000 (without company) or ¥3500-5000 (with company)

## Alternatives Considered

### Alternative 1: China-first launch
Launch in China first, then expand internationally.

**Rejected because**: 
- Longer time to market (3-4 weeks vs 1-2 weeks)
- Higher upfront cost (servers, ICP备案)
- Ad networks may reject new site without traffic history

### Alternative 2: Simultaneous launch
Start ICP备案 and international development in parallel, launch both at once.

**Rejected because**:
- ICP备案 timeline is unpredictable (can take 3+ weeks)
- Delays international launch unnecessarily
- Can't use international feedback to improve China version

### Alternative 3: International-only, never launch in China
Skip China market entirely, focus on global audience.

**Rejected because**:
- China is a massive market for personality tests (16personalities has 269M+ tests from China)
- User explicitly wants to reach both markets
- Leaving money on the table
