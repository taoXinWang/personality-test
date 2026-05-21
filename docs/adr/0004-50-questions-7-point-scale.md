# ADR 0004: 50-Question Test with 7-Point Likert Scale

## Status
Accepted

## Context
We need to determine the test format: how many questions, what response format, and how to balance accuracy with completion rate.

Key trade-offs:
- **More questions** = higher accuracy, but lower completion rate (user fatigue)
- **Fewer questions** = higher completion rate, but lower accuracy (measurement error)
- **More response options** = finer granularity, but can overwhelm users
- **Fewer response options** = simpler, but loses nuance

Research on personality tests shows:
- Tests under 30 questions have poor reliability
- Tests over 100 questions see significant drop-off
- 7-point scales are the psychometric standard (balance between granularity and usability)
- 5-point scales are simpler but lose precision
- Even/odd matters: even-point scales force a choice (no neutral), odd-point scales allow neutrality

16personalities uses 60 questions with a 7-point scale (Agree/Disagree spectrum).

## Decision
We will use:
- **50 questions total** (10 questions per dimension)
- **7-point Likert scale**: Strongly Disagree (1) to Strongly Agree (7)
- **Question distribution**: 
  - Each dimension gets exactly 10 questions
  - 6 forward-scored questions (agreement = high pole)
  - 4 reverse-scored questions (agreement = low pole)
- **Question order**: Fully randomized (users don't see questions grouped by dimension)

### Scale Labels
**English**:
1. Strongly Disagree
2. Disagree
3. Slightly Disagree
4. Neutral
5. Slightly Agree
6. Agree
7. Strongly Agree

**Chinese**:
1. 非常不同意
2. 不同意
3. 有点不同意
4. 中立
5. 有点同意
6. 同意
7. 非常同意

## Consequences

### Positive
- **Proven length**: 50 questions is short enough to maintain engagement (~10 minutes) but long enough for reliability
- **Standard methodology**: 7-point Likert is the academic standard, making our results defensible
- **Balanced measurement**: 10 questions per dimension provides adequate sampling of each trait
- **Bias reduction**: 6:4 forward/reverse ratio reduces acquiescence bias without confusing users
- **Randomization**: Prevents users from gaming the test by guessing which dimension is being measured

### Negative
- **Longer than competitors**: Some viral tests use 20-30 questions for faster completion
- **Reverse questions can confuse**: Some users may not notice the reversed wording and answer incorrectly
- **7 options may overwhelm**: Mobile users especially may find 7 buttons too many

### Mitigations
- Show progress bar so users know how far they've come
- Use clear visual design for the 7-point scale (radio buttons or slider)
- Write reverse questions using natural opposite statements, not just negations
- Allow users to save progress and return later (if registered)

## Why 6 Forward : 4 Reverse?

**Not 5:5** because:
- Reverse questions are cognitively harder (users must "flip" their thinking)
- Too many reverse questions frustrate users and increase error
- 6:4 is enough to detect acquiescence bias without overwhelming

**Not 10:0** because:
- Users who habitually agree (or disagree) with everything will get skewed scores
- Reverse questions force more careful reading

**Not 7:3 or 8:2** because:
- We want reverse questions to be a meaningful portion (40%) for bias detection
- But not so many that they dominate the experience

## Question Writing Principles

### Forward Questions (6 per dimension)
State the high pole of the dimension directly.

Examples:
- Exploration: "我喜欢尝试新鲜事物" / "I enjoy trying new things"
- Structure: "我喜欢提前规划我的一天" / "I like to plan my day in advance"

### Reverse Questions (4 per dimension)
State the low pole using natural opposite phrasing, not negation.

**Good** (natural opposite):
- Exploration: "我更喜欢按照熟悉的方式做事" / "I prefer to stick with familiar ways of doing things"

**Bad** (negation):
- Exploration: "我不喜欢尝试新事物" / "I don't like trying new things"

**Why**: Negations are harder to process and can lead to response errors.

## Scoring Formula

For each dimension:
1. Sum the raw scores (1-7) for all 10 questions
2. For the 4 reverse questions, invert the score: `inverted = 8 - raw_score`
3. Total possible score: 70 (10 questions × 7 max)
4. Convert to percentage: `(total / 70) × 100`

Example (Exploration dimension):
- Forward Q1: User selects 6 → score = 6
- Forward Q2: User selects 7 → score = 7
- Reverse Q3: User selects 2 → score = 8 - 2 = 6
- ... (7 more questions)
- Total: 52 / 70 = 74.3% → User is high on Exploration (Innovator)

## Alternatives Considered

### Alternative 1: 30 questions, 5-point scale
Shorter test for higher completion rate.

**Rejected because**:
- 6 questions per dimension is too few for reliable measurement
- 5-point scale loses precision (especially near the 50% threshold)
- Sacrifices accuracy for speed, which hurts credibility

### Alternative 2: 100 questions, 7-point scale
Longer test for maximum accuracy.

**Rejected because**:
- Completion rate drops significantly after 60 questions
- Diminishing returns: 100 questions isn't twice as accurate as 50
- User fatigue leads to careless responses, reducing actual accuracy

### Alternative 3: Adaptive testing (CAT)
Use Item Response Theory to select questions dynamically based on previous answers.

**Rejected because**:
- Requires extensive calibration data (thousands of responses per question)
- Complex to implement and maintain
- Overkill for a viral personality test (better suited for high-stakes assessments)

### Alternative 4: 5-point scale instead of 7-point
Simpler for users.

**Rejected because**:
- 7-point is the psychometric standard for personality research
- Near the 50% threshold, 5-point scale can misclassify users (e.g., someone who is 48% vs 52% might both select "3" on a 5-point scale)
- We need the extra granularity to calculate preference strength accurately
