/* global */
/**
 * Deep case-study data.
 * Schema:
 *   - chapters[]:  narrative sections rendered as two-column blocks
 *       eyebrow, title, intro?, paragraphs?[], bullets?[], risks?{intro,items[]},
 *       constraints?[{who,want}], outro?(string|string[]), followUp?, pullquote?,
 *       slot?{id,label,aspect?}
 *   - sections[]:  high-visual blocks (solution / outcomes recap) with body[] flow
 *   - outcomes[]:  metric grid
 *   - learnings:   final dark-tinted callout
 *   - reflection:  optional closing band
 */
window.CASE_DATA = {

  /* ─────────────────────────────  BRIZA  ───────────────────────────── */
  briza: {
    slug: 'briza',
    num: '01',
    client: 'Briza',
    title: 'Building Briza from the Ground Up',
    intro:
      "Briza is a B2B platform that helps businesses manage their creator relationships, handling everything from onboarding and authentication to workflow coordination across large rosters of influencers and content creators.",
    role: 'Sole Product Designer',
    year: '2025',
    timeline: '4 months',
    industry: 'Creator economy · Early-stage SaaS',
    platform: 'Web app',
    team: 'Founder-Engineer',
    facts: [
      { k: 'Role', v: 'Sole Product Designer' },
      { k: 'Collaborators', v: 'Founder-Engineer' },
      { k: 'Timeline', v: '4 months' },
      { k: 'Status', v: 'Pre-launch' }
    ],
    hero: 'assets/briza-hero.png',
    heroFit: 'contain',
    tone: 'peach',
    wideMedia: true,

    chapters: [
      {
        tocLabel: 'Overview',
        eyebrow: 'Overview',
        title: 'Joining as sole designer, from concept to handoff',
        bg: 'plain',
        blocks: [
          {
            paragraphs: [
              "I joined as the sole designer when the product existed only as a concept. Over 4 months, working directly with the founder-engineer, I defined the product’s UX foundations, designed the core systems, and built the interaction patterns the platform would grow from.",
              "There was no prior design, no user data, and no established workflows to reference. Every decision had to balance what users would need immediately with what the platform would need to support at scale.",
              "The MVP is currently in pre-launch. This case study covers the foundational design work from concept to handoff."
            ],
            slot: { id: 'briza-overview', label: 'Product ecosystem overview / platform map', src: 'assets/briza-cover.png', fit: 'contain' }
          }
        ]
      },
      {
        tocLabel: 'Defining Foundations',
        eyebrow: 'The Challenge',
        title: 'Defining Product Foundations Under Ambiguity',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              "The hardest part of designing Briza wasn’t the interfaces, it was making product decisions without the data that usually informs them.",
              "Businesses that manage creators at scale have complex, idiosyncratic workflows. Some manage 10 creators tightly; others loosely coordinate hundreds. Without behavioral data, I couldn’t optimize for an existing pattern. I had to design a system flexible enough to serve both without becoming so abstract it served neither.",
              "The approach I took was to anchor every foundational decision in operational consequence. Rather than asking “what does the user want to do here,” I asked “what breaks at scale if we get this wrong.” That reframe shaped how I structured permissions, creator states, and workflow logic from the start.",
              "Early on, I mapped three archetypes of creator management operations, lean teams running high-volume campaigns, mid-size teams with strict approval workflows, and agencies managing creators on behalf of clients. None of these were real Briza users yet, but they gave me a stress-test frame for evaluating whether a design decision would hold under real operational pressure."
            ],
            outro: "That groundwork meant the MVP wasn’t just functional, it was structurally ready to evolve.",
            slot: {
              id: 'briza-archetypes',
              fit: 'contain',
              label: 'Creator lifecycle mapping / three operational archetypes',
              caption: 'Creator lifecycle mapping across three operational archetypes, used to stress-test foundational decisions before any interface design began.'
            }
          }
        ]
      },
      {
        tocLabel: 'AI-Assisted Exploration',
        eyebrow: 'AI-Assisted Workflows',
        title: 'AI-Assisted Product Exploration',
        bg: 'plain',
        blocks: [
          {
            paragraphs: [
              "With no usage data and a 4-month timeline, I used AI-assisted workflows to expand exploration capacity during the most uncertain phases of the project.",
              "The most valuable application was edge-case generation during authentication design. I used AI to simulate failure scenarios, expired invitations, partial onboarding completions, permission conflicts mid-flow, faster than I could have mapped them manually. One scenario that emerged from this process was a creator being invited by two different business accounts simultaneously. It seemed unlikely, but the founder confirmed it would absolutely happen in real operations. That insight directly shaped how we structured account linking and conflict resolution in the auth flow, work that would have been expensive to fix post-launch.",
              "AI also accelerated documentation and cross-functional alignment. During a phase where the product scope was shifting weekly, I used AI-assisted drafts to keep design specs and flow documentation current without losing iteration speed. This kept the founder-engineer unblocked even when decisions were still in flux."
            ],
            outro: "The goal was never to replace product thinking. It was to spend less time on the mechanical parts of exploration so I could spend more time on the decisions that actually required judgment.",
            slot: {
              id: 'briza-edgecases',
              fit: 'contain',
              label: 'Edge-case mapping / authentication flow',
              caption: 'Edge-case mapping for the authentication flow, AI-assisted exploration surfaced the dual-account conflict scenario that reshaped how account linking was structured.'
            }
          }
        ]
      },
      {
        tocLabel: 'Creator Management',
        eyebrow: 'Creator Management',
        title: 'Creator Management System',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              "The creator management system had one core tension: businesses needed enough flexibility to reflect their actual workflows, but too much configurability too early would overwhelm users and create inconsistent data.",
              "My solution was progressive disclosure of complexity. The default view was deliberately simple, a clean roster with status, recent activity, and quick actions. Advanced workflow features (custom creator states, bulk permission changes, segmentation) existed but were surfaced only when operationally relevant. This meant a small team onboarding their first 20 creators had the same starting experience as an agency preparing to manage 300.",
              "The creator state model was the decision I spent the most time on. I defined six states, Invited, Active, Paused, Under Review, Offboarded, and Archived, each with specific transition rules and UI behavior. This was more than a status label system; it became the operational backbone of how businesses tracked creator relationships over time."
            ],
            slot: {
              id: 'briza-roster',
              fit: 'contain',
              label: 'Creator roster / six-state model',
              caption: 'Campaign and creator management'
            }
          }
        ]
      },
      {
        tocLabel: 'Strategic Tradeoffs',
        eyebrow: 'Strategic Tradeoffs',
        title: 'Strategic Tradeoffs',
        bg: 'plain',
        blocks: [
          {
            constraints: [
              { who: 'Flexibility vs. Simplicity', want: 'The platform needed to support genuinely different operational models without requiring businesses to configure everything from scratch. The resolution was modular defaults, sensible out-of-the-box behavior that could be extended, not a blank canvas that required assembly. Every configurable element had a working default that reflected the most common use case.' },
              { who: 'Speed vs. System Consistency', want: 'At month two, scope pressure created a temptation to design one-off solutions for specific flows rather than extending the emerging system. I pushed back on this. Every new pattern that didn’t align with the existing interaction logic was a future debt, either in user confusion or in redesign cost. We slowed down twice to consolidate patterns rather than ship faster and fragment the experience.' },
              { who: 'Ideal Experience vs. Technical Constraints', want: 'Several interaction patterns I designed for the creator management dashboard would have required significant engineering complexity during MVP. Rather than diluting the concept or forcing a costly build, I staged them, designing the full intended experience as a documented future state, and shipping a simpler version that preserved the structural logic without requiring the full implementation. This kept the vision intact while respecting the reality of a two-person team.' }
            ]
          }
        ]
      },
      {
        tocLabel: 'Final Design',
        eyebrow: 'Final Design',
        title: 'Final design',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              "A selection of the final screens, bringing together the authentication flow, creator management system, and the progressive-disclosure patterns into a cohesive product experience."
            ],
            carousel: [
              { id: 'briza-final-1', label: 'Final design, screen 1' },
              { id: 'briza-final-2', label: 'Final design, screen 2' },
              { id: 'briza-final-3', label: 'Final design, screen 3' },
              { id: 'briza-final-4', label: 'Final design, screen 4' }
            ]
          }
        ]
      }
    ],

    learnings: {
      eyebrow: 'Learnings & Reflection',
      title: 'Designing Briza changed how I think about early-stage product work.',
      paragraphs: [
        "The biggest shift was learning to treat constraints as design inputs rather than obstacles. A two-person team, no prior data, and a four-month timeline weren’t limitations to work around, they were the conditions that shaped every decision. Designing within them honestly produced better foundations than trying to design around them would have.",
        "I also came away with a clearer view of what “scalable UX” actually means in practice. It’s not about building every feature, it’s about making structural decisions early that don’t need to be undone later. The creator state model, the permission logic, the invitation flow, none of those were the most visible parts of the product. But they were the decisions that would determine whether Briza could grow without accumulating design debt."
      ]
    },

    reflection: {
      eyebrow: 'Reflection',
      title: 'Design logic and engineering logic as part of the same discussion.',
      paragraphs: [
        "Working closely with a founder-engineer sharpened my ability to connect design decisions to technical and business reality in real time.",
        "The best outcomes came from conversations where neither of us was translating for the other, where design logic and engineering logic were part of the same discussion."
      ]
    },

    next: 'pearson'
  },

  /* ─────────────────────  AUTOMOTIVE (companion app)  ───────────────── */
  automotive: {
    slug: 'automotive',
    num: '02',
    client: 'Global automotive brand · Companion app',
    title: 'Driving long-term engagement through behavioral design',
    intro:
      "A global automotive brand’s companion app already collected detailed telemetry, driving habits, sustainability scores, vehicle usage. Drivers explored it once or twice and rarely came back. Over 8 months I led the design of a behavioral progression system that turned passive driving data into an ongoing engagement experience, delivered to full handoff across global markets.",
    role: 'Lead Product Designer',
    year: '2025',
    timeline: '8 months',
    industry: 'Automotive · Mobility',
    platform: 'iOS · Android (native)',
    team: 'Product · Engineering · Brand · Legal · Researchers',
    facts: [
      { k: 'Role', v: 'Lead Product Designer (team of 2)' },
      { k: 'Via', v: 'Zallpy' },
      { k: 'Timeline', v: '8 months' },
      { k: 'Scope', v: 'Global markets, handoff delivered' }
    ],
    hero: 'assets/bmw-hero.png',
    heroFit: 'contain',
    tone: 'dark',
    wideMedia: true,

    chapters: [
      {
        tocLabel: 'Overview',
        title: 'A data problem that wasn’t really about data',
        blocks: [
          {
            paragraphs: [
              "A global automotive brand had a data problem that wasn’t really about data.",
              "Their companion app already collected detailed telemetry, driving habits, sustainability scores, vehicle usage patterns. Users opened it, explored their metrics once or twice, and rarely came back. The platform was informative. It just wasn’t motivating.",
              "Over 8 months, working as part of a two-designer team embedded in a cross-functional initiative spanning engineering, product, legal, and brand stakeholders across global markets, I led the product design strategy for a behavioral progression system that transformed passive driving data into an ongoing engagement experience.",
              "The project went to full handoff across global markets."
            ],
            highlight: {
              eyebrow: 'The core insight',
              body: 'Informative, but not motivating. The data was all there, the reason to come back wasn’t.',
              tone: 'dark'
            },
            slot: { id: 'auto-hero', label: 'Final product mockup', fit: 'contain' }
          }
        ]
      },
      {
        tocLabel: 'The problem',
        title: 'A passive dashboard, not a motivational system',
        blocks: [
          {
            subhead: 'Three questions drivers couldn’t answer',
            paragraphs: [
              "Drivers had access to detailed performance data. Most couldn’t answer three basic questions from it:"
            ],
            bullets: [
              'What does this mean?',
              'Am I getting better?',
              'What should I do next?'
            ],
            outro: [
              "The app functioned as a passive reporting dashboard. Without progression, milestones, or emotional reinforcement, engagement dropped sharply after the first session. Internal data confirmed the pattern was consistent across markets."
            ],
            comparison: [
              {
                eyebrow: 'Before',
                title: 'Passive reporting dashboard',
                body: 'Telemetry without narrative, numbers floated, then drivers stopped opening the app.',
                items: [
                  'Static metrics, no progression',
                  'No milestones or wins to anchor',
                  'No recovery from missed sessions',
                  'Engagement decayed after one session'
                ]
              },
              {
                eyebrow: 'After',
                title: 'Active motivational system',
                body: 'Progression mechanics that respect the premium tone of the brand.',
                items: [
                  'Continuous progress, visible improvement',
                  'Achievable milestones + contextual challenges',
                  'Streak forgiveness when life intervenes',
                  'Sustained engagement across markets'
                ],
                picked: true
              }
            ]
          },
          {
            subhead: 'The constraint that made everything harder',
            paragraphs: [
              "The business needed to increase recurring engagement, reinforce sustainable driving behaviors, and create a more emotionally rewarding ownership experience, without compromising the premium positioning the brand had spent decades building.",
              "That last constraint was the one that made everything harder."
            ]
          }
        ]
      },
      {
        tocLabel: 'Reframing the problem',
        title: 'Reframing the problem',
        blocks: [
          {
            subhead: 'From “make it more engaging” to “feel continuous progress”',
            paragraphs: [
              "The project was initially briefed as a gamification feature.",
              "After analyzing behavioral patterns and running early research sessions, I pushed back on that framing. The issue wasn’t that users needed entertainment, it was that the experience offered no sense of progression. Users couldn’t tell if they were improving, and the app gave them no reason to believe it was worth checking again.",
              "I reframed the product question from “how do we make the app more engaging” to “how do we help users feel continuous progress over time.” That shift changed the entire strategic direction, and required buy-in from stakeholders who had already formed opinions about what gamification should look like."
            ],
            pullquote: 'How do we help users feel continuous progress over time?'
          },
          {
            subhead: 'The resistance was real',
            paragraphs: [
              "Getting alignment meant reorienting every stakeholder conversation away from feature debates and toward shared behavioral objectives: long-term retention, emotional engagement, sustainable motivation."
            ],
            constraints: [
              { who: 'Brand teams', want: 'Protective of premium perception, no “cheap” gamification.' },
              { who: 'Legal', want: 'Concerns about behavioral manipulation patterns.' },
              { who: 'Engineering', want: 'Questioned scalability of mechanics not yet defined.' }
            ],
            outro: "That alignment process took the better part of the first two months."
          }
        ]
      },
      {
        tocLabel: 'Research & insights',
        title: 'Research & strategic insights',
        blocks: [
          {
            subhead: 'What actually motivated drivers',
            paragraphs: [
              "Research confirmed what the behavioral data suggested: users weren’t motivated by isolated scores or social comparison. They responded to visible improvement, consistency, and goals that felt achievable rather than evaluative."
            ],
            bullets: [
              'Users wanted guidance, not raw metrics',
              'Progress-based feedback outperformed judgment-based scoring',
              'Consistency mattered more than competition',
              'Emotional continuity, progress carrying forward, drove return behavior'
            ],
            insightCard: {
              title: 'Research diagnostic',
              badge: 'High confidence',
              rows: [
                { label: 'Detected issue',  body: 'Engagement drops sharply after the first session. Drivers stop opening the app within days of activation.' },
                { label: 'Root cause',      body: 'Telemetry without progression, metrics feel evaluative rather than supportive, with no anchor for personal improvement.' },
                { label: 'Recommendation',  body: 'Reframe gamification as behavioral progression. Reinforce personal growth over social comparison; protect emotional continuity over rigid consistency.' },
                { label: 'Expected impact', body: 'Sustained engagement across markets, stronger emotional connection to the vehicle, premium brand perception preserved.' }
              ]
            },
            slot: { id: 'auto-research', label: 'Research synthesis / affinity mapping' }
          },
          {
            subhead: 'Ruling out the obvious answers',
            paragraphs: [
              "These insights ruled out leaderboard-based competition and score-driven ranking systems early. Both tested well for initial novelty and poorly for sustained engagement. More importantly, both conflicted with how the brand needed to feel.",
              "The strategic direction became clear: a behavioral progression system centered on personal growth, achievable milestones, and positive reinforcement, subtle and supportive rather than overtly game-like."
            ],
            comparison: [
              { eyebrow: 'Rejected', title: 'Leaderboard competition',     body: 'Conflicts with premium brand identity. Reduces motivation among lower-ranked drivers.' },
              { eyebrow: 'Rejected', title: 'Score-driven ranking',        body: 'Reinforces judgment over progress. Users disengage when the score feels arbitrary.' },
              { eyebrow: 'Picked',   title: 'Personal-growth progression', body: 'Reinforces consistency and visible improvement, the patterns research surfaced.', picked: true }
            ]
          }
        ]
      },
      {
        tocLabel: 'Progression system',
        title: 'Designing the progression system',
        blocks: [
          {
            subhead: 'Four interconnected layers, designed to work together',
            paragraphs: [
              "The system introduced four interconnected layers of progression, designed to work together rather than as isolated features."
            ],
            bento: [
              { tone: 'pink',     size: 'lg', eyebrow: 'Layer 01', k: 'Challenges', label: 'Personalized & contextual', sub: 'Driven by individual behavior and vehicle usage, achievable, never punitive. Difficulty adapts to avoid both frustration and boredom.', spark: 'M0 45 Q 25 38 50 32 T 100 18 T 150 12 T 200 8' },
              { tone: 'soft',     size: 'md', eyebrow: 'Layer 02', k: 'Milestones', label: 'Metrics → visible progression', sub: 'Achievement moments, consistency indicators, cumulative impact. Users see where they’ve been, not just where they are.' },
              { tone: 'ochre',    size: 'md', eyebrow: 'Layer 03', k: 'Streaks',    label: 'Forgiveness, not perfection', sub: 'Lightweight recovery mechanics that hold emotional continuity without removing accountability.' },
              { tone: 'lavender', size: 'md', eyebrow: 'Layer 04', k: 'Feedback',   label: 'Designed as a system', sub: 'Reward cadence, pacing, and recovery tuned together, so it feels like it understands your driving life, not like it’s tracking you.' }
            ],
            slot: { id: 'auto-progression', label: 'Progression UI, challenges, milestones, streaks' }
          },
          {
            subhead: 'The most debated layer: streak protection',
            paragraphs: [
              "Research showed users abandoned motivation systems disproportionately after missing a single session, one gap became permission to stop entirely. We introduced lightweight forgiveness mechanics that maintained emotional continuity without eliminating accountability.",
              "The debate wasn’t whether to include it; it was how forgiving to make it without undermining the sense that consistency mattered."
            ]
          }
        ]
      },
      {
        tocLabel: 'Tradeoffs & reflection',
        title: 'Systems thinking & tradeoffs',
        blocks: [
          {
            subhead: 'Every mechanic had downstream consequences',
            paragraphs: [
              "Every behavioral mechanic introduced downstream consequences. Progression hierarchy affected notification strategy. Challenge frequency affected brand perception. Streak logic affected data interpretation. Designing one layer without considering the others would have produced a system that worked in isolation and broke in practice.",
              "The ideal experience included deeper personalization, adaptive behavioral recommendations, expanded social mechanics, and dynamic coaching patterns. Technical constraints and an 8-month timeline made that scope unrealistic for launch."
            ],
            outro: [
              "The decision was to build a scalable foundation rather than a fully mature ecosystem:"
            ],
            bullets: [
              'Clarity over feature density',
              'Emotional continuity over complexity',
              'Scalable mechanics over highly customized experiences'
            ],
            followUp: 'Each tradeoff was documented as a future iteration opportunity rather than abandoned, the handoff included a phased roadmap for extending the system post-launch.'
          },
          {
            subhead: 'The hardest single call',
            paragraphs: [
              "The hardest single call was streak recovery. Engineering could support it technically, but the brand team needed convincing that forgiveness mechanics wouldn’t undermine the premium, performance-oriented identity."
            ],
            highlight: {
              eyebrow: 'Resolution',
              body: 'Frame streak protection not as leniency but as intelligence, the system recognizing real driving patterns rather than enforcing artificial consistency.',
              tone: 'dark'
            }
          }
        ]
      },
      {
        tocLabel: 'Final Design',
        eyebrow: 'Final Design',
        title: 'Final design',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              "The final designs across the progression system, challenges, milestones, streak protection, and the achievements hub, delivered to full handoff across global markets."
            ],
            slot: { id: 'automotive-final-1', label: 'Final design', fit: 'contain' }
          }
        ]
      }
    ],

    reflection: {
      eyebrow: 'Reflection',
      title: 'Behavioral systems succeed through clarity, not feature quantity.',
      paragraphs: [
        "Looking back, the biggest mistake was introducing too many parallel motivational systems simultaneously in early concepts. Combining challenges, streaks, milestones, and multiple driving dimensions created more onboarding complexity than the experience needed at launch. If returning to the product post-launch, I’d validate which mechanics generated the strongest long-term engagement before expanding the ecosystem.",
        "The broader lesson this project reinforced: behavioral systems succeed less through feature quantity and more through emotional clarity, pacing, and consistency. The most important design decisions weren’t the interaction patterns, they were the structural choices about what the system would and wouldn’t do, and why."
      ]
    },

    next: 'alice'
  },

  /* ─────────────────────────────  PEARSON  ─────────────────────────── */
  pearson: {
    slug: 'pearson',
    num: '03',
    client: 'Pearson · Assessment commerce',
    title: 'Designing a context-aware Express Checkout experience',
    intro:
      "Pearson’s checkout abandonment wasn’t about price or confusion, it was operational friction for returning customers who already knew exactly what they wanted. Over one month, working as the sole designer embedded in Pearson’s product team, I redesigned checkout from a static linear flow into a context-aware Express Checkout that adapted to purchase history, account type, and product eligibility. Abandonment dropped 51%.",
    role: 'Sole Product Designer',
    year: '2024',
    timeline: '1 month',
    industry: 'EdTech · Clinical assessments',
    platform: 'Responsive web',
    team: 'Product · Engineering · Business · Operations',
    facts: [
      { k: 'Role', v: 'Sole Product Designer' },
      { k: 'Company', v: 'Pearson' },
      { k: 'Timeline', v: '1 month' },
      { k: 'Outcome', v: '51% ↓ checkout abandonment' }
    ],
    hero: 'assets/pearson-hero.png',
    heroFit: 'contain',
    tone: 'lavender',
    wideMedia: true,

    chapters: [
      {
        tocLabel: 'Overview',
        title: 'A checkout problem the data didn’t make obvious',
        blocks: [
          {
            subhead: '\n',
            paragraphs: [
              "Pearson’s assessment commerce platform had a checkout problem that wasn’t immediately obvious from the data. Abandonment rates were high, but the cause wasn’t price sensitivity or product confusion, it was operational friction for customers who already knew exactly what they wanted.",
              "Returning customers, who made up the majority of high-intent purchases, were navigating the same multi-step checkout every time they ordered. Same shipping address. Same payment method. Same products. The platform treated every transaction as if it were the first.",
              "Over one month, working as the sole designer embedded within Pearson’s product team, I redesigned the checkout experience for returning customers, shifting from a static linear flow to a context-aware Express Checkout that adapted dynamically based on purchase history, account type, and product eligibility. The redesign reduced checkout abandonment by 51%."
            ],
            highlight: {
              eyebrow: 'The reframe',
              body: 'Not a faster checkout. A system that understands purchasing context and reduces unnecessary decisions.',
              tone: 'dark'
            }
          }
        ]
      },
      {
        tocLabel: 'Business & user complexity',
        title: 'Understanding the business & user complexity',
        blocks: [
          {
            subhead: 'A specialised commerce ecosystem',
            intro:
              "Pearson’s assessment products don’t operate like standard e-commerce. The purchasing environment included:",
            bullets: [
              'Organisational and personal accounts',
              'Qualification-restricted products',
              'Mixed physical and digital carts',
              'Invoice workflows',
              'International shipping edge cases',
              'Integrations with Q-global and aimsweb'
            ],
            outro: [
              "Inside that complexity, the behavioral data told a clear story. High-intent users were abandoning not because they were uncertain, but because the system kept asking questions it already knew the answers to."
            ],
            stats: [
              { eyebrow: 'Address reuse', k: '80%',     label: 'reused shipping & delivery prefs', sub: 'Returning customers reusing the same shipping and delivery preferences.' },
              { eyebrow: 'Repeat ISBN',   k: '43,000+', label: 'customers re-ordering one ISBN',    sub: 'Repeatedly ordering a single ISBN product within six months.' },
              { eyebrow: 'High-intent',   k: '↑',       label: 'unnecessary checkout steps',        sub: 'Confident buyers navigating flows they had already completed before.' }
            ],
            followUp: 'The checkout experience had been designed for flexibility. It was optimised for the wrong thing.'
          }
        ]
      },
      {
        tocLabel: 'Reframing the problem',
        title: 'Reframing the problem',
        blocks: [
          {
            subhead: 'From simplifying checkout to understanding context',
            paragraphs: [
              "The original brief was straightforward: make checkout faster for repeat customers.",
              "Early in discovery I pushed back on that framing. The problem wasn’t form length, it was that the platform had no mechanism for using what it already knew about a customer. Reducing steps without addressing that would produce a lighter version of the same broken experience.",
              "I reframed the product question from “how do we simplify checkout” to “how do we design a system that understands purchasing context and reduces unnecessary decisions.” That shift changed the entire scope of the work, and required buy-in from product and engineering stakeholders who had scoped the project as a UI optimisation, not a systems problem."
            ],
            pullquote: 'How do we design a system that understands purchasing context and reduces unnecessary decisions?',
            outro: [
              "Getting that alignment took most of the first week. I mapped the existing checkout states against real customer behavioral patterns and presented the gap as an operational risk, not a design preference. Once the data made the argument, the conversation changed."
            ]
          }
        ]
      },
      {
        tocLabel: 'Research & insights',
        title: 'Research & strategic insights',
        blocks: [
          {
            subhead: 'Behavioral patterns over usability issues',
            paragraphs: [
              "Discovery focused on behavioral patterns rather than usability issues. Working with product managers and business stakeholders, I analysed:"
            ],
            bullets: [
              'Returning customer purchase behavior',
              'Checkout abandonment patterns',
              'Cart interaction data',
              'Saved account usage',
              'Product qualification dependencies'
            ],
            outro: [
              "The most important finding was that returning customers behaved predictably enough for the system to make informed assumptions on their behalf. That insight became the strategic foundation for the entire redesign."
            ]
          },
          {
            subhead: 'Hidden operational complexity',
            paragraphs: [
              "Discovery also revealed how quickly the edge cases multiplied. Different combinations of inputs created exponentially different checkout states:"
            ],
            bullets: [
              'Organisational accounts',
              'Q-global products',
              'Qualification-restricted items',
              'Mixed carts',
              'International shipping',
              'Missing payment methods'
            ],
            outro: [
              "What looked like a simple flow on the surface required a highly orchestrated logic system underneath. Mapping that matrix in full, before any interface design began, was the decision that prevented the project from collapsing under its own complexity mid-build."
            ]
          }
        ]
      },
      {
        tocLabel: 'Adaptive checkout system',
        title: 'Designing an adaptive checkout system',
        blocks: [
          {
            subhead: 'From linear flows to adaptive logic',
            paragraphs: [
              "Instead of a single static flow, I designed a context-aware checkout architecture that evaluated each returning customer against a set of eligibility signals:"
            ],
            bullets: [
              'Existing shipping information',
              'Saved payment methods',
              'Purchase history',
              'Qualification status',
              'Product compatibility',
              'External account validation'
            ],
            outro: [
              "Depending on available context, customers could proceed directly into Express Checkout, enter a partial-edit state for specific fields, or fall back into the standard checkout experience. The system made the routing decision, not the user."
            ],
            comparison: [
              { eyebrow: 'State A', title: 'Express Checkout',           body: 'Signals are complete. Proceed directly to confirmation in a single screen.', picked: true },
              { eyebrow: 'State B', title: 'Partial-edit state',         body: 'A critical data point is missing. Edit only what is required, then complete inline.' },
              { eyebrow: 'State C', title: 'Standard checkout fallback', body: 'Edge cases or sensitive account changes route safely back to the full flow.' }
            ]
          },
          {
            subhead: 'Balancing speed with control',
            paragraphs: [
              "The hardest product call was determining how much automation customers would actually trust. Completely removing editability created risk for users purchasing regulated educational products tied to organisations or qualification systems. A pure one-click experience wasn’t appropriate here.",
              "The resolution was to reduce unnecessary decisions while preserving visibility and control where reassurance mattered most:"
            ],
            bullets: [
              'Critical account information remained visible',
              'Customers could edit key sections without restarting the entire flow',
              'Edge cases automatically redirected into safer fallback experiences',
              'Express Checkout remained an opt-in layer over standard checkout, not a replacement'
            ],
            outro: "That balance, speed without opacity, was what made the system trustworthy enough to actually use."
          }
        ]
      },
      {
        tocLabel: 'Systems thinking & collaboration',
        title: 'Systems thinking & cross-functional collaboration',
        blocks: [
          {
            subhead: 'Designing for what Pearson could maintain',
            paragraphs: [
              "A major constraint throughout the project was engineering capacity. A completely separate checkout product wasn’t feasible. I worked closely with the engineering team to design a modular architecture that reused existing checkout infrastructure wherever possible:"
            ],
            bullets: [
              'Shared component patterns',
              'Reusable edit states',
              'Consistent validation behavior',
              'Scalable account structures'
            ],
            pullquote: 'The goal wasn’t the fastest checkout possible. It was the fastest checkout Pearson could realistically maintain and scale.'
          },
          {
            subhead: 'Forcing boundary decisions',
            paragraphs: [
              "Stakeholder alignment was the other major challenge. Different teams pulled in different directions:"
            ],
            constraints: [
              { who: 'Business teams',       want: 'Maximum friction reduction.' },
              { who: 'Engineering',          want: 'Maintainability and reusable architecture.' },
              { who: 'Operations',           want: 'Order accuracy and compliance integrity.' },
              { who: 'Product',              want: 'Delivery timelines against scope that kept expanding.' }
            ],
            outro: [
              "The recurring flashpoint was Express Checkout eligibility rules. Without clear constraints, edge cases multiplied and operational risk grew with them. I ran flow mapping sessions and iterative reviews specifically to force boundary decisions, turning open-ended scope debates into documented product rules. Once eligibility had clear criteria, the rest of the alignment followed."
            ]
          }
        ]
      },
      {
        tocLabel: 'Before & After',
        eyebrow: 'Before & After',
        title: 'The redesign, before and after',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              "The shift in one view, the original multi-step checkout returning customers repeated on every order, beside the context-aware Express Checkout that routes them straight to confirmation."
            ],
            beforeAfter: {
              before: { id: 'pearson-before', label: 'Original multi-step checkout' },
              after: { id: 'pearson-after', label: 'Express Checkout' }
            }
          }
        ]
      }
    ],

    outcomes: [
      { k: '51%',  label: 'reduction in checkout abandonment', sub: 'for returning customers at launch' },
      { k: '80%',  label: 'returning customers reused address', sub: '+ saved delivery preferences' },
      { k: '43k+', label: 'customers re-ordering one ISBN',     sub: 'within a single 6-month period' }
    ],

    reflection: {
      eyebrow: 'Reflection',
      title: 'True simplification isn’t about removing functionality.',
      paragraphs: [
        "The biggest lesson from this project was how quickly adaptive systems generate complexity behind the scenes.",
        "What started as a UI optimisation became a large-scale orchestration problem involving qualification logic, account inheritance, external system dependencies, and dynamic purchasing states. The simplicity users experienced on the front end was only possible because of the operational rigour applied out of sight.",
        "That’s what I took away as the core principle: true simplification isn’t about removing functionality. It’s about intelligently reducing unnecessary decisions while preserving the flexibility and trust users still need, and building the system logic that makes that invisible."
      ]
    },

    next: 'automotive'
  },

  /* ─────────────────────────────  LOADSMART (Alice)  ──────────────── */
  alice: {
    slug: 'alice',
    num: '04',
    client: 'Loadsmart · Carrier sourcing',
    title: 'Redesigning carrier sourcing workflows during a critical operational transition',
    intro:
      "When Loadsmart discontinued DAT, a third-party platform central to same-day load sourcing, Carrier Sales Representatives lost a core part of their daily workflow overnight, just as leadership anticipated a freight-market rebound. Over 4 weeks, working as the sole designer alongside two PMs and engineering, I redesigned the sourcing workflows and carrier visibility tools reps depended on. The redesign shipped to real users and cut contract processing time by 83%.",
    role: 'Sole Product Designer',
    year: '2024',
    timeline: '4 weeks',
    industry: 'Logistics · Supply chain',
    platform: 'Web (internal workflow)',
    team: '2 PMs · Engineering · Carrier Operations · Carrier Sales Reps',
    facts: [
      { k: 'Role', v: 'Sole Product Designer' },
      { k: 'Company', v: 'Loadsmart' },
      { k: 'Timeline', v: '4 weeks' },
      { k: 'Outcome', v: '83% ↓ contract processing time' }
    ],
    hero: 'assets/alice-hero.png',
    heroFit: 'contain',
    tone: 'dark',
    wideMedia: true,

    chapters: [
      {
        tocLabel: 'Overview',
        title: 'When discontinuing a tool exposed a fragile system',
        blocks: [
          {
            subhead: 'Overview',
            paragraphs: [
              "When Loadsmart discontinued DAT, a third-party platform central to same-day load sourcing, it didn’t just remove a tool. It exposed how fragile the operational infrastructure underneath it had always been.",
              "Carrier Sales Representatives lost a core part of their daily workflow overnight. What replaced it was a patchwork of Slack conversations, personal spreadsheets, and undocumented workarounds. Leadership was simultaneously anticipating a freight market rebound, meaning sourcing volume was about to increase significantly on top of an already broken system.",
              "Over 4 weeks, working as the sole designer alongside two Product Managers, engineering, and carrier operations teams, I redesigned the sourcing workflows and carrier visibility tools that reps depended on daily. The redesign shipped to real users and reduced contract processing time by 83%."
            ],
            highlight: {
              eyebrow: 'The reframe',
              body: 'Not “what replaces DAT.” What does a sourcing workflow actually need to look like for reps operating under time pressure?',
              tone: 'dark'
            }
          }
        ]
      },
      {
        tocLabel: 'The operational problem',
        title: 'The operational problem',
        blocks: [
          {
            subhead: 'The problem ran deeper than the tool',
            paragraphs: [
              "The DAT discontinuation was the trigger, but the real problem ran deeper.",
              "Experienced representatives had been succeeding despite the system for a long time. Sourcing decisions depended on tribal knowledge, who you knew, which Slack channel had the right information, which spreadsheet was most up to date. The platform provided data but not intelligence. It showed information without helping reps act on it.",
              "Two weeks into the project it became clear this wasn’t a tooling replacement problem. It was a workflow visibility problem. The question shifted from “what replaces DAT” to “what does a sourcing workflow actually need to look like for reps operating under time pressure.”"
            ],
            pullquote: 'The platform provided data but not intelligence. It showed information without helping reps act on it.'
          }
        ]
      },
      {
        tocLabel: 'Field research in Chicago',
        title: 'Field research in Chicago',
        blocks: [
          {
            subhead: 'Watching the work, not just asking about it',
            paragraphs: [
              "To answer that question properly, I proposed a week of in-person field research in Chicago before any design work began.",
              "Shadowing reps in their actual work environment revealed things no stakeholder interview would have surfaced. We observed live sourcing operations, interviewed 12 employees, and ran two collaborative workshops with PMs and operational stakeholders."
            ],
            stats: [
              { eyebrow: 'On-site', k: '1 wk', label: 'field research in Chicago', sub: 'Shadowing live sourcing operations before any design began.' },
              { eyebrow: 'Interviews', k: '12', label: 'employees across roles',   sub: 'Carrier sales, capacity development, and operations.' },
              { eyebrow: 'Workshops', k: '2',  label: 'with PMs & stakeholders',   sub: 'Mapping journeys and aligning on priorities.' }
            ]
          },
          {
            subhead: 'Two user groups, treated identically',
            paragraphs: [
              "The most important finding was the distinction between two user groups with fundamentally different needs that the existing system treated identically:"
            ],
            comparison: [
              { eyebrow: 'Group A', title: 'Capacity Development', body: 'Long-term carrier relationships and contracts, relationship-driven, measured in weeks and months.' },
              { eyebrow: 'Group B', title: 'Carrier Sales Reps',   body: 'Fast-paced same-day sourcing, transactional, measured in minutes.', picked: true }
            ],
            outro: [
              "Designing one workflow for both had meant neither worked well. That insight became the foundation for every prioritization decision that followed.",
              "After synthesizing the research, I mapped operational journeys for both groups and built an opportunity tree evaluating priorities across business impact, operational friction, engineering complexity, and time-to-value. Rather than redesigning the entire sourcing ecosystem, we focused on high-leverage improvements that could ship within the timeline without requiring a full infrastructure rebuild."
            ],
            slot: { id: 'alice-opportunity', label: 'Operational journeys + opportunity tree', fit: 'contain' }
          }
        ]
      },
      {
        tocLabel: 'Design strategy',
        title: 'Design strategy',
        blocks: [
          {
            subhead: 'Straight to high-fidelity, on purpose',
            paragraphs: [
              "With the operational impact already being felt across teams, speed was a hard constraint.",
              "Because Loadsmart had a mature design system, I made the call to skip low-fidelity wireframes entirely and move directly into high-fidelity prototypes. This was a deliberate tradeoff, it compressed the iteration cycle and allowed us to validate with real users against realistic interfaces rather than abstract flows. Given the 4-week timeline and the operational urgency, the risk of moving fast was lower than the risk of moving slow."
            ],
            pullquote: 'The risk of moving fast was lower than the risk of moving slow."'
          },
          {
            subhead: 'Four principles',
            numberedList: [
              { title: 'Reduce context switching',                  body: 'Reps were navigating four to five different tools to complete a single sourcing decision. The goal was to collapse that into a single coherent workflow.' },
              { title: 'Surface sourcing intelligence, not just data', body: 'The existing platform showed information. The redesign needed to show what to do with it, loads aligned with carrier preferences, operational history, and sourcing context visible at the moment of decision.' },
              { title: 'Centralize carrier intelligence',            body: 'Relationship history, contract status, and performance data consolidated into a single portfolio view rather than scattered across systems.' },
              { title: 'Scope to workflow visibility first',          body: 'I narrowed the initial scope to visibility and sourcing intelligence rather than attempting full automation, which allowed the team to move quickly while still addressing the critical operational gaps.' }
            ]
          }
        ]
      },
      {
        tocLabel: 'Cross-functional collaboration',
        title: 'Cross-functional collaboration',
        blocks: [
          {
            subhead: 'Now vs. six months from now',
            paragraphs: [
              "The compressed timeline created constant stakeholder pressure. Different teams pulled in different directions:"
            ],
            constraints: [
              { who: 'Operations',  want: 'Immediate fixes optimized for short-term efficiency.' },
              { who: 'Leadership',  want: 'Solutions that hold up under anticipated freight-market growth.' },
              { who: 'Engineering', want: 'Solutions compatible with existing infrastructure.' }
            ],
            outro: [
              "The recurring tension was between fixing what was broken now and building something that wouldn’t need to be replaced in six months. I grounded every stakeholder conversation in observed operational behavior from the Chicago research, concrete examples of what reps were actually doing, not assumptions about what they should be doing. That evidence made tradeoff discussions faster and less political.",
              "Facilitating workshops and framing decisions around operational outcomes rather than feature lists kept the team aligned across four weeks of parallel workstreams under genuine time pressure."
            ],
            pullquote: 'I grounded every conversation in what reps were actually doing, not assumptions about what they should be doing.'
          }
        ]
      },
      {
        tocLabel: 'The solution',
        title: 'The solution',
        blocks: [
          {
            subhead: 'Carrier portfolio visibility',
            paragraphs: [
              "Carrier Sales Representatives gained centralized visibility into their full carrier portfolio and active contracts within a single experience, replacing the fragmented multi-tool workflow that had developed in DAT’s absence. Relationship management that had previously required navigating multiple systems happened in one place."
            ],
            slot: { id: 'alice-portfolio', label: 'Carrier portfolio & active contracts, single view', src: 'assets/alice-flat-1.png', fit: 'contain' }
          },
          {
            subhead: 'Smarter load-to-carrier matching',
            paragraphs: [
              "The redesigned sourcing workflow surfaced loads aligned with each carrier’s preferences, operational history, and sourcing context at the moment reps needed to act. Instead of pulling data from disconnected sources and making manual judgment calls, reps had the sourcing intelligence they needed in the flow of their actual work."
            ],
            outro: "Both solutions shipped to real users within the 4-week timeline.",
            slot: { id: 'alice-matching', label: 'Load-to-carrier matching in the sourcing flow', src: 'assets/alice-flat-2.png', fit: 'contain' }
          }
        ]
      }
    ],

    outcomes: [
      { k: '83%',  label: 'reduction in contract processing time', sub: 'after launch to real users' },
      { k: '4 wks', label: 'research to shipped solution',         sub: 'high-fidelity, no wireframes' },
      { k: '2',    label: 'user workflows untangled',              sub: 'capacity development vs. same-day sourcing' }
    ],

    reflection: {
      eyebrow: 'Reflection',
      title: 'Operational efficiency is deeply connected to confidence and visibility.',
      paragraphs: [
        "The most important lesson from this project was how much operational teams adapt around product limitations over time. Experienced reps had built sophisticated personal systems to compensate for what the platform didn’t do. Those workarounds were invisible to anyone who hadn’t spent time watching people actually work.",
        "That’s what the Chicago field research week was really for. Not to gather requirements, to see what the system looked like from inside someone’s actual day.",
        "The other thing this project reinforced: operational efficiency is deeply connected to confidence and visibility. Reps weren’t struggling because the workflows were too complex. They were struggling because the system gave them information without helping them know what to do next. Designing clarity within operational complexity, without oversimplifying the real decisions reps had to make, was the actual design problem. The interfaces were just how we solved it."
      ]
    },

    next: 'briza'
  }
};

// Alias so the i18n layer can pick EN vs PT (case-data-pt.js sets CASE_DATA_PT).
window.CASE_DATA_EN = window.CASE_DATA;
