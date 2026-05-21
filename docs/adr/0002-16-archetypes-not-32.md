# ADR 0002: 16 Archetypes from 4 Dimensions, Not 32 from 5

## Status
Accepted

## Context
We have 5 personality dimensions (Exploration, Structure, Social Energy, Harmony, Resilience). If we use all 5 dimensions to generate types, we get 2^5 = 32 possible combinations.

However, 32 types creates several problems:
- **Cognitive overload**: Users struggle to remember and differentiate 32 types
- **Content burden**: Writing unique descriptions for 32 types is 2x the work
- **Weak brand**: "32 personalities" doesn't have the same ring as "16 personalities"
- **Diluted identity**: With 32 types, each type represents only 3% of the population, making them feel less special

The "16 types" structure has proven successful (MBTI, 16personalities) because it's the sweet spot: enough variety to feel personalized, few enough to be memorable.

## Decision
We will generate **16 archetypes** using only 4 dimensions:
- **Type-generating dimensions**: Exploration, Structure, Social Energy, Harmony
- **Modifier dimension**: Resilience

Each archetype gets a 4-letter code (e.g., ICOH) based on the type-generating dimensions. Resilience adds a suffix (-S for Stable, -T for Turbulent), creating 32 total variants, but we market and describe the **16 base archetypes**.

Example:
- Base archetype: **ICOH - The Visionary Harmonizer**
- Variants: ICOH-S (stable) and ICOH-T (turbulent)
- The detailed description is written for ICOH, with brief notes on how S vs T modifies it

## Consequences

### Positive
- **Memorable structure**: "16 personality archetypes" is a clear, marketable concept
- **Manageable content**: 16 detailed descriptions instead of 32
- **Familiar mental model**: Matches user expectations from MBTI/16personalities
- **Nuance preserved**: The -S/-T modifier still captures the 5th dimension's influence

### Negative
- **Asymmetric treatment**: Resilience is treated differently than the other 4 dimensions
- **Potential confusion**: Users might wonder why Resilience doesn't generate new types
- **Less granularity**: Two people with the same 4-letter code but different Resilience scores are "the same type"

### Mitigations
- Clearly explain that Resilience is a "modifier" that affects *how* you express your archetype, not *what* archetype you are
- Show Resilience prominently in the result profile, so users don't feel it's being hidden
- In the detailed description, include a section on how S vs T variants differ

## Why Resilience as the Modifier?

We chose Resilience (emotional stability) as the modifier dimension because:

1. **Internal vs. external**: The other 4 dimensions describe *how you interact with the world* (exploration, planning, socializing, cooperating). Resilience describes *your internal emotional state*.

2. **Orthogonal to behavior**: A person can be an Innovator-Planner-Outgoing-Harmonizer regardless of whether they're emotionally stable or turbulent. Resilience affects the *intensity* and *stress response* of those behaviors, not the behaviors themselves.

3. **Precedent**: 16personalities uses "Identity" (Assertive vs Turbulent) as a 5th modifier dimension in exactly this way, and users accept it.

4. **Naming sensitivity**: "Neuroticism" (the Big Five term) has negative connotations. By making it a modifier rather than a type-generator, we reduce the risk of users feeling labeled as "the neurotic type."

## Alternatives Considered

### Alternative 1: Use all 5 dimensions, create 32 types
**Rejected because**: Too many types, too much content, weaker brand.

### Alternative 2: Use only 4 dimensions, drop Resilience entirely
**Rejected because**: Resilience is a core part of Big Five and provides valuable insight. Dropping it would reduce scientific validity.

### Alternative 3: Let users choose which 4 dimensions to use
**Rejected because**: Creates inconsistency and confusion. Everyone needs to use the same system for results to be comparable.
