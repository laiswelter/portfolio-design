/* global window */
/**
 * Portuguese (pt-BR) parallel of case-data.js. Same schema and non-text
 * fields (slugs, ids, image paths, tones, flags); only human-readable
 * strings are translated. case-study.jsx selects this when LANG === 'pt'.
 */
window.CASE_DATA_PT = {

  /* ─────────────────────────────  BRIZA  ───────────────────────────── */
  briza: {
    slug: 'briza',
    num: '01',
    client: 'Briza',
    title: 'Construindo a Briza do zero',
    intro:
      'A Briza é uma plataforma B2B que ajuda empresas a gerenciar criadores de conteúdo, reunindo em um só lugar desde o onboarding e autenticação até a gestão de campanhas e dos relacionamentos com grandes redes de influenciadores.',
    role: 'Product Designer única',
    year: '2025',
    timeline: '4 meses',
    industry: 'Economia dos criadores · SaaS em estágio inicial',
    platform: 'Aplicação web',
    team: 'Founder-Engenheiro',
    facts: [
      { k: 'Função', v: 'Product Designer única' },
      { k: 'Colaboradores', v: 'Founder-Engenheiro' },
      { k: 'Prazo', v: '4 meses' },
      { k: 'Status', v: 'Pré-lançamento' }
    ],
    hero: 'assets/briza-hero.png',
    heroFit: 'contain',
    tone: 'peach',
    wideMedia: true,

    chapters: [
      {
        tocLabel: 'Visão geral',
        eyebrow: 'Visão geral',
        title: 'Construindo o produto do zero',
        bg: 'plain',
        blocks: [
          {
            paragraphs: [
              'Entrei como designer única quando o produto existia apenas como conceito. Ao longo de 4 meses, trabalhando diretamente com o founder-engenheiro, defini a estrutura da experiência do produto, desenhei os sistemas centrais e defini os padrões de interação que serviriam de base para a evolução da plataforma.',
              'Não havia design anterior, dados de usuários nem fluxos de trabalho estabelecidos como referência. Cada decisão precisava resolver os problemas do MVP sem limitar o crescimento do produto no futuro.',
              'O MVP está atualmente em pré-lançamento. Este case cobre o trabalho de design fundamental, da definição do produto até a entrega para desenvolvimento.'
            ],
            slot: { id: 'briza-overview', label: 'Visão geral do ecossistema do produto / mapa da plataforma', src: 'assets/briza-cover.png', fit: 'contain' }
          }
        ]
      },
      {
        tocLabel: 'Definindo fundações',
        eyebrow: 'O desafio',
        title: 'Definindo as bases do produto sob ambiguidade',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              'O maior desafio da Briza não foi desenhar interfaces, e sim tomar decisões de produto sem dados reais de uso.',
              'Empresas que gerenciam criadores em escala têm fluxos de trabalho muito diferentes entre si. Algumas gerenciam 10 criadores de perto; outras coordenam centenas de forma solta. Sem dados comportamentais, eu não podia otimizar para um padrão existente. Tive que desenhar um sistema flexível o bastante para servir aos dois sem ficar tão abstrato a ponto de não servir a nenhum.',
              'A abordagem que adotei foi basear cada decisão fundamental em seu impacto na operação. Em vez de perguntar “o que o usuário quer fazer aqui”, eu perguntava “o que deixa de funcionar quando o produto cresce se errarmos isso”. Essa mudança de perspectiva definiu como estruturei permissões, estados de criadores e a lógica de fluxo desde o início.',
              'Logo no começo, mapeei três arquétipos de operações de gestão de criadores: times enxutos rodando campanhas de alto volume, times de médio porte com fluxos de aprovação rígidos e agências gerenciando criadores em nome de clientes. Nenhum deles era ainda um usuário real da Briza, mas me deram um cenário para testar se uma decisão de design se sustentaria sob situações reais de uso.'
            ],
            outro: 'Essa base significou que o MVP não era apenas funcional — estava preparado para crescer.',
            slot: {
              id: 'briza-archetypes',
              fit: 'contain',
              label: 'Mapeamento do ciclo de vida do criador / três arquétipos operacionais',
              caption: 'Mapeamento do ciclo de vida do criador nos três arquétipos operacionais, usado para testar as decisões fundamentais antes de qualquer design de interface começar.'
            }
          }
        ]
      },
      {
        tocLabel: 'Exploração assistida por IA',
        eyebrow: 'IA como apoio à exploração do produto',
        title: 'Exploração de produto assistida por IA',
        bg: 'plain',
        blocks: [
          {
            paragraphs: [
              'Sem dados de uso e com um prazo de 4 meses, usei IA como apoio para explorar mais possibilidades nas fases mais incertas do projeto.',
              'A aplicação mais valiosa foi a geração de casos extremos durante o design da autenticação. Usei IA para simular cenários de falha — convites expirados, onboardings concluídos pela metade, conflitos de acesso no meio do fluxo — mais rápido do que eu conseguiria mapeá-los manualmente. Um cenário que surgiu desse processo foi o de um criador convidado por duas contas empresariais diferentes ao mesmo tempo. Parecia improvável, mas o founder confirmou que isso aconteceria em operações reais. Esse insight moldou diretamente como estruturamos a associação entre contas e a resolução de conflitos no fluxo de autenticação — um trabalho que teria sido caro de corrigir após o lançamento.',
              'A IA também acelerou a documentação e o alinhamento entre áreas. Numa fase em que o escopo do produto mudava semanalmente, usei rascunhos assistidos por IA para manter as specs de design e a documentação de fluxos atualizadas sem perder velocidade de iteração. Isso fez com que o founder-engenheiro conseguisse seguir desenvolvendo mesmo quando as decisões ainda estavam em aberto.'
            ],
            outro: 'O objetivo nunca foi substituir o pensamento de produto. Foi gastar menos tempo em tarefas repetitivas para poder dedicar mais tempo às decisões que de fato exigiam julgamento.',
            slot: {
              id: 'briza-edgecases',
              fit: 'contain',
              label: 'Mapeamento de casos extremos / fluxo de autenticação',
              caption: 'Mapeamento de casos extremos do fluxo de autenticação; a exploração assistida por IA revelou o cenário de conflito de conta dupla que mudou como a associação entre contas foi estruturada.'
            }
          }
        ]
      },
      {
        tocLabel: 'Gestão de criadores',
        eyebrow: 'Gestão de criadores',
        title: 'Sistema de gestão de criadores',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              'O sistema de gestão de criadores tinha um desafio central: as empresas precisavam de flexibilidade suficiente para refletir seus fluxos reais, mas opções demais cedo demais sobrecarregaria os usuários e geraria dados inconsistentes.',
              'Minha solução foi a revelação progressiva da complexidade. A visão padrão era deliberadamente simples — um elenco limpo com status, atividade recente e ações rápidas. Recursos avançados de fluxo (estados de criador personalizados, mudanças de permissão em massa, segmentação) existiam, mas só apareciam quando eram realmente necessárias. Isso significava que um time pequeno integrando seus primeiros 20 criadores tinha a mesma experiência inicial de uma agência se preparando para gerenciar 300.',
              'O modelo de estados do criador foi a decisão em que mais dediquei tempo. Defini seis estados — Convidado, Ativo, Pausado, Em revisão, Desligado e Arquivado — cada um com regras de transição e comportamento de UI específicos. Era mais do que um sistema de rótulos de status; tornou-se a base do funcionamento do produto de como as empresas acompanhavam suas relações com criadores ao longo do tempo.'
            ],
            slot: {
              id: 'briza-roster',
              fit: 'contain',
              label: 'Elenco de criadores / modelo de seis estados',
              caption: 'Gestão de campanhas e criadores'
            }
          }
        ]
      },
      {
        tocLabel: 'Trade-offs estratégicos',
        eyebrow: 'Trade-offs estratégicos',
        title: 'Trade-offs estratégicos',
        bg: 'plain',
        blocks: [
          {
            constraints: [
              { who: 'Flexibilidade vs. Simplicidade', want: 'A plataforma precisava suportar modelos operacionais genuinamente diferentes sem exigir que as empresas configurassem tudo do zero. A solução foram padrões modulares — um comportamento padrão pronto para uso que podia ser estendido, não uma tela em branco que exigia montagem. Cada elemento configurável tinha um padrão funcional que refletia o caso de uso mais comum.' },
              { who: 'Velocidade vs. Consistência do sistema', want: 'No segundo mês, o aumento do escopo criou a tentação de desenhar soluções pontuais para fluxos específicos em vez de estender o sistema que estava sendo construído. Eu resisti a isso. Todo padrão novo que não se alinhava à lógica de interação existente era um problema futuro — seja em confusão do usuário, seja em custo de redesign. Desaceleramos duas vezes para consolidar padrões em vez de entregar mais rápido e tornar a experiência inconsistente.' },
              { who: 'Experiência ideal vs. Restrições técnicas', want: 'Vários padrões de interação que desenhei para o dashboard de gestão de criadores exigiriam complexidade de engenharia significativa durante o MVP. Em vez de diluir o conceito ou forçar uma construção custosa, eu os dividi em etapas — desenhando a experiência pretendida por completo como um estado futuro documentado e entregando uma versão mais simples que mantinha a lógica do produto sem exigir a implementação completa. Isso manteve a visão intacta respeitando a realidade de um time de duas pessoas.' }
            ]
          }
        ]
      },
      {
        tocLabel: 'Design final',
        eyebrow: 'Design final',
        title: 'Design final',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              'Uma seleção das telas finais, reunindo o fluxo de autenticação, o sistema de gestão de criadores e os padrões de revelação progressiva em uma experiência de produto coesa.'
            ],
            carousel: [
              { id: 'briza-final-1', label: 'Design final, tela 1' },
              { id: 'briza-final-2', label: 'Design final, tela 2' },
              { id: 'briza-final-3', label: 'Design final, tela 3' },
              { id: 'briza-final-4', label: 'Design final, tela 4' }
            ]
          }
        ]
      }
    ],

    learnings: {
      eyebrow: 'Aprendizados & Reflexão',
      title: 'Construir a Briza mudou minha forma de pensar sobre produtos em estágio inicial.',
      paragraphs: [
        'A maior mudança foi aprender a enxergar as restrições como parte do processo de design, não como obstáculos. Um time de duas pessoas, sem dados anteriores e um prazo de quatro meses não eram limitações a contornar — eram as condições que moldaram cada decisão. Trabalhar dentro dessas limitações produziu bases melhores do que tentar desenhar ao redor delas teria produzido.',
        'Também saí com uma visão mais clara do que “UX escalável” realmente significa na prática. Não é construir cada funcionalidade — é tomar cedo decisões de base que não precisem ser desfeitas depois. O modelo de estados do criador, a lógica de permissões, o fluxo de convites: nenhum deles era a parte mais visível do produto. Mas eram as decisões que determinariam se a Briza poderia crescer sem acumular dívida de design.'
      ]
    },

    reflection: {
      eyebrow: 'Reflexão',
      title: 'Design e engenharia funcionam melhor quando resolvem problemas juntos.',
      paragraphs: [
        'Trabalhar de perto com um founder-engenheiro fortaleceu minha capacidade de conectar decisões de design à realidade técnica e de negócio em tempo real.',
        'Os melhores resultados vieram de conversas em que nenhum de nós traduzia para o outro — em que a visão de design e a lógica de engenharia eram tomadas em conjunto.'
      ]
    },

    next: 'pearson'
  },

  /* ─────────────────────  AUTOMOTIVE (companion app)  ───────────────── */
  automotive: {
    slug: 'automotive',
    num: '02',
    client: 'Marca automotiva global · App complementar',
    title: 'Engajamento de longo prazo por meio de design comportamental',
    intro:
      'O app complementar de uma marca automotiva global já coletava uma grande quantidade de dados sobre direção, sustentabilidade e uso do veículo. Os motoristas exploravam uma ou duas vezes e raramente voltavam. Ao longo de 8 meses, liderei o design de um sistema de progressão comportamental que transformou dados de direção em uma experiência de engajamento contínuo, entregue para desenvolvimento nos mercados globais.',
    role: 'Product Designer Líder',
    year: '2025',
    timeline: '8 meses',
    industry: 'Automotivo · Mobilidade',
    platform: 'iOS · Android (nativo)',
    team: 'Produto · Engenharia · Marca · Jurídico · Pesquisadores',
    facts: [
      { k: 'Função', v: 'Product Designer Líder (time de 2)' },
      { k: 'Via', v: 'Zallpy' },
      { k: 'Prazo', v: '8 meses' },
      { k: 'Escopo', v: 'Mercados globais, entrega para desenvolvimento' }
    ],
    hero: 'assets/bmw-hero.png',
    heroFit: 'contain',
    tone: 'dark',
    wideMedia: true,

    chapters: [
      {
        tocLabel: 'Visão geral',
        title: 'Um problema que ia muito além dos dados.',
        blocks: [
          {
            paragraphs: [
              'Uma marca automotiva global tinha um problema que ia muito além dos dados.',
              'Seu app complementar já coletava uma grande quantidade de dados sobre direção, sustentabilidade e uso do veículo. Os usuários abriam, exploravam suas métricas uma ou duas vezes e raramente voltavam. O app mostrava muitas informações, mas não dava aos usuários um motivo para voltar.',
              'Ao longo de 8 meses, como parte de um time de dois Product Designers trabalhando em uma iniciativa multidisciplinar que abrangia stakeholders de engenharia, produto, jurídico e marca em mercados globais, liderei a estratégia de design de produto de um sistema de progressão comportamental que transformou dados de direção em uma experiência de engajamento contínuo.',
              'O projeto foi entregue para desenvolvimento nos mercados globais.'
            ],
            highlight: {
              eyebrow: 'O insight central',
              body: 'Os dados estavam lá. O motivo para voltar, não.',
              tone: 'dark'
            },
            slot: { id: 'auto-hero', label: 'Mockup final do produto', fit: 'contain' }
          }
        ]
      },
      {
        tocLabel: 'O problema',
        title: 'Um painel informativo, não um sistema motivacional',
        blocks: [
          {
            subhead: 'Três perguntas que os motoristas não conseguiam responder',
            paragraphs: [
              'Os motoristas tinham acesso a dados de desempenho detalhados. A maioria não conseguia responder três perguntas básicas a partir deles:'
            ],
            bullets: [
              'O que isso significa?',
              'Estou melhorando?',
              'O que devo fazer a seguir?'
            ],
            outro: [
              'O app funcionava como um painel informativo. Sem progressão, marcos ou incentivo para continuar usando, o engajamento caía drasticamente após a primeira sessão. Os dados internos confirmaram que o padrão era consistente entre os mercados.'
            ],
            comparison: [
              {
                eyebrow: 'Antes',
                title: 'Painel informativo',
                body: 'Dados de direção sem narrativa: os números pairavam e então os motoristas paravam de abrir o app.',
                items: [
                  'Métricas estáticas, sem progressão',
                  'Sem marcos ou conquistas para ancorar',
                  'Sem recuperação de sessões perdidas',
                  'O engajamento decaía após uma sessão'
                ]
              },
              {
                eyebrow: 'Depois',
                title: 'Sistema motivacional ativo',
                body: 'Mecânicas de progressão que respeitam o tom premium da marca.',
                items: [
                  'Progresso contínuo, melhora visível',
                  'Marcos alcançáveis + desafios contextuais',
                  'Perdão de sequência quando a vida interfere',
                  'Engajamento sustentado entre mercados'
                ],
                picked: true
              }
            ]
          },
          {
            subhead: 'A restrição que tornou tudo mais difícil',
            paragraphs: [
              'O negócio precisava aumentar o engajamento recorrente, reforçar comportamentos de direção sustentáveis e tornar a experiência de ter o carro mais envolvente — sem comprometer o posicionamento premium que a marca levou décadas para construir.',
              'Foi essa última restrição que tornou tudo mais difícil.'
            ]
          }
        ]
      },
      {
        tocLabel: 'Reenquadrando o problema',
        title: 'Reenquadrando o problema',
        blocks: [
          {
            subhead: 'De “torná-lo mais engajador” para “ajudar os usuários a perceber sua evolução”',
            paragraphs: [
              'O projeto foi inicialmente briefado como uma funcionalidade de gamificação.',
              'Depois de analisar padrões comportamentais e conduzir as primeiras sessões de pesquisa, questionei essa abordagem. O problema não era que os usuários precisassem de entretenimento — era que a experiência não deixava claro que o motorista estava evoluindo. Os usuários não sabiam dizer se estavam melhorando, e o app não lhes dava motivo para acreditar que valia a pena conferir de novo.',
              'Reenquadrei a pergunta de produto de “como tornamos o app mais engajador” para “como ajudamos os usuários a perceber sua evolução ao longo do tempo”. Essa mudança alterou toda a direção estratégica e exigiu o apoio de stakeholders que já tinham uma ideia bem definida da solução.'
            ],
            pullquote: 'Como ajudamos os usuários a perceber sua evolução ao longo do tempo?'
          },
          {
            subhead: 'A resistência era real',
            paragraphs: [
              'Conseguir alinhamento significou reorientar cada conversa com stakeholders, afastando-a de debates sobre funcionalidades e aproximando-a de objetivos comportamentais compartilhados: retenção de longo prazo, engajamento emocional, motivação sustentável.'
            ],
            constraints: [
              { who: 'Times de marca', want: 'Protetores da percepção premium, nada de gamificação “barata”.' },
              { who: 'Jurídico', want: 'Preocupações com padrões de manipulação comportamental.' },
              { who: 'Engenharia', want: 'Questionava a escalabilidade de mecânicas ainda não definidas.' }
            ],
            outro: 'Esse processo de alinhamento tomou boa parte dos dois primeiros meses.'
          }
        ]
      },
      {
        tocLabel: 'Pesquisa & insights',
        title: 'Pesquisa & insights estratégicos',
        blocks: [
          {
            subhead: 'O que de fato motivava os motoristas',
            paragraphs: [
              'A pesquisa confirmou o que os dados comportamentais sugeriam: os usuários não eram motivados por pontuações sozinhas ou comparação social. Eles respondiam a evolução visível, consistência e metas que pareciam alcançáveis em vez de avaliativas.'
            ],
            bullets: [
              'Os usuários queriam orientação, não números soltos',
              'Feedback baseado em progresso superou a pontuação baseada em julgamento',
              'Consistência importava mais do que competição',
              'Sensação de continuidade — o progresso seguindo adiante — impulsionava o comportamento de retorno'
            ],
            insightCard: {
              title: 'Diagnóstico de pesquisa',
              badge: 'Alta confiança',
              rows: [
                { label: 'Problema detectado',  body: 'O engajamento cai drasticamente após a primeira sessão. Os motoristas param de abrir o app poucos dias após a ativação.' },
                { label: 'Causa raiz',      body: 'Os usuários viam muitos dados, mas não percebiam evolução. As métricas parecem avaliativas em vez de apoiadoras, sem âncora para a melhora pessoal.' },
                { label: 'Recomendação',  body: 'Reenquadrar a gamificação como progressão comportamental. Reforçar o crescimento pessoal em vez da comparação social; manter a sensação de progresso em vez da consistência rígida.' },
                { label: 'Impacto esperado', body: 'Engajamento sustentado entre mercados, conexão emocional mais forte com o veículo e percepção premium da marca preservada.' }
              ]
            },
            slot: { id: 'auto-research', label: 'Síntese de pesquisa / mapa de afinidade' }
          },
          {
            subhead: 'Descartando as respostas óbvias',
            paragraphs: [
              'Esses insights descartaram cedo a competição por placar e os rankings baseados em pontuação. Ambos testaram bem para a novidade inicial e mal para o engajamento sustentado. Mais importante: ambos iam contra a sensação que a marca precisava transmitir.',
              'A direção estratégica ficou clara: um sistema de progressão comportamental centrado em crescimento pessoal, marcos alcançáveis e feedback positivo — sutil e apoiador, em vez de abertamente parecido com um jogo.'
            ],
            comparison: [
              { eyebrow: 'Rejeitado', title: 'Competição por placar',     body: 'Conflita com a identidade premium da marca. Reduz a motivação dos motoristas mais mal posicionados.' },
              { eyebrow: 'Rejeitado', title: 'Ranking por pontuação',        body: 'Reforça o julgamento em vez do progresso. Os usuários se desengajam quando a pontuação parece arbitrária.' },
              { eyebrow: 'Escolhido',   title: 'Progressão por crescimento pessoal', body: 'Reforça a consistência e a evolução visível — os padrões que a pesquisa revelou.', picked: true }
            ]
          }
        ]
      },
      {
        tocLabel: 'Sistema de progressão',
        title: 'Desenhando o sistema de progressão',
        blocks: [
          {
            subhead: 'Quatro camadas interconectadas, desenhadas para funcionar como um único sistema',
            paragraphs: [
              'O sistema introduziu quatro camadas interconectadas de progressão, pensadas para funcionar em conjunto, e não como recursos isolados.'
            ],
            bento: [
              { tone: 'pink',     size: 'lg', eyebrow: 'Camada 01', k: 'Desafios', label: 'Personalizados & contextuais', sub: 'Guiados pelo comportamento individual e pelo uso do veículo — alcançáveis, sempre possíveis de alcançar. A dificuldade se adapta para evitar tanto a frustração quanto o tédio.', spark: 'M0 45 Q 25 38 50 32 T 100 18 T 150 12 T 200 8' },
              { tone: 'soft',     size: 'md', eyebrow: 'Camada 02', k: 'Marcos', label: 'Métricas → progressão visível', sub: 'Momentos de conquista, indicadores de consistência, evolução ao longo do tempo. Os usuários veem por onde passaram, não apenas onde estão.' },
              { tone: 'ochre',    size: 'md', eyebrow: 'Camada 03', k: 'Sequências',    label: 'Perdão, não perfeição', sub: 'Mecânicas leves de recuperação que mantêm a sensação de continuidade sem remover a responsabilidade.' },
              { tone: 'lavender', size: 'md', eyebrow: 'Camada 04', k: 'Feedback',   label: 'Desenhado como um sistema', sub: 'Ritmo das recompensas, cadência e recuperação ajustados em conjunto, para que pareça que ele entende como cada motorista realmente usa o carro, não que está te vigiando.' }
            ],
            slot: { id: 'auto-progression', label: 'UI de progressão — desafios, marcos, sequências' }
          },
          {
            subhead: 'A camada mais debatida: proteção de sequência',
            paragraphs: [
              'A pesquisa mostrou que os usuários abandonavam sistemas de motivação com frequência após perder uma única sessão — uma falha virava permissão para parar de vez. Introduzimos pequenas flexibilizações que mantinham a sensação de continuidade sem eliminar a responsabilidade.',
              'O debate não era se devíamos incluí-la; era até onde poderíamos flexibilizar isso sem minar a noção de que a consistência importava.'
            ]
          }
        ]
      },
      {
        tocLabel: 'Trade-offs & reflexão',
        title: 'Pensamento sistêmico & trade-offs',
        blocks: [
          {
            subhead: 'Cada mecânica tinha impactos em outras partes do produto',
            paragraphs: [
              'Todo recurso comportamental introduzia impactos em outras partes do produto. A hierarquia de progressão afetava a estratégia de notificações. A frequência de desafios afetava a percepção da marca. A lógica de sequência afetava a interpretação dos dados. Desenhar uma parte do sistema sem considerar as outras teria produzido um sistema que funcionava isolado e quebrava na prática.',
              'A experiência ideal incluía personalização mais profunda, recomendações comportamentais adaptativas, mecânicas sociais ampliadas e padrões dinâmicos de coaching. Restrições técnicas e um prazo de 8 meses tornavam esse escopo irreal para o lançamento.'
            ],
            outro: [
              'A decisão foi construir uma base escalável em vez de um sistema completo:'
            ],
            bullets: [
              'Clareza acima da densidade de funcionalidades',
              'Sensação de continuidade acima da complexidade',
              'Mecânicas escaláveis acima de experiências altamente customizadas'
            ],
            followUp: 'Cada trade-off foi documentado como uma oportunidade de iteração futura, em vez de abandonado — a entrega para desenvolvimento incluiu um roadmap de evolução para estender o sistema após o lançamento.'
          },
          {
            subhead: 'A decisão mais difícil',
            paragraphs: [
              'A decisão mais difícil foi a recuperação de sequência. A engenharia conseguia suportá-la tecnicamente, mas o time de marca precisava ser convencido de que pequenas flexibilizações não minariam a identidade premium e orientada à performance.'
            ],
            highlight: {
              eyebrow: 'Resolução',
              body: 'Apresentar a proteção de sequência não como leniência, mas como inteligência — o sistema reconhecendo padrões reais de direção em vez de impor uma rotina irreal para os usuários.',
              tone: 'dark'
            }
          }
        ]
      },
      {
        tocLabel: 'Design final',
        eyebrow: 'Design final',
        title: 'Design final',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              'Os designs finais de todo o sistema de progressão — desafios, marcos, proteção de sequência e o hub de conquistas — entregues para desenvolvimento nos mercados globais.'
            ],
            slot: { id: 'automotive-final-1', label: 'Design final', fit: 'contain' }
          }
        ]
      }
    ],

    reflection: {
      eyebrow: 'Reflexão',
      title: 'Bons sistemas comportamentais dependem mais de clareza do que de quantidade de recursos.',
      paragraphs: [
        'Olhando para trás, o maior erro foi introduzir muitas mecânicas ao mesmo tempo nos primeiros conceitos. Combinar desafios, sequências, marcos e múltiplas dimensões de direção criou mais complexidade de onboarding do que a experiência precisava no lançamento. Se voltasse ao produto depois do lançamento, eu validaria quais mecânicas geraram o engajamento de longo prazo mais forte antes de expandir o produto.',
        'A lição mais ampla que este projeto reforçou: sistemas comportamentais têm sucesso menos pela quantidade de recursos e mais pela clareza da experiência, pelo ritmo e pela consistência. No fim, as decisões mais importantes não estavam na interface, mas em definir o que o sistema deveria fazer, o que não deveria fazer e por quê.'
      ]
    },

    next: 'alice'
  },

  /* ─────────────────────────────  PEARSON  ─────────────────────────── */
  pearson: {
    slug: 'pearson',
    num: '03',
    client: 'Pearson · Comércio de avaliações',
    nextLabel: 'Pearson → Design de uma experiência de Express Checkout',
    title: 'Design de uma experiência de Express Checkout sensível ao contexto',
    intro:
      'O abandono no checkout da Pearson não tinha relação com preço ou dificuldade de uso. O problema era a fricção enfrentada por clientes recorrentes que já sabiam exatamente o que queriam comprar. Durante um mês, fui a única Product Designer dedicada ao time de produto da Pearson e redesenhei o checkout de um fluxo linear estático para um Express Checkout sensível ao contexto que se adaptava ao histórico de compras, ao tipo de conta e à elegibilidade do produto. O abandono no checkout caiu 51%.',
    role: 'Product Designer única',
    year: '2024',
    timeline: '1 mês',
    industry: 'EdTech · Avaliações clínicas',
    platform: 'Web responsivo',
    team: 'Produto · Engenharia · Negócios · Operações',
    facts: [
      { k: 'Função', v: 'Product Designer única' },
      { k: 'Empresa', v: 'Pearson' },
      { k: 'Prazo', v: '1 mês' },
      { k: 'Resultado', v: '51% ↓ abandono de checkout' }
    ],
    hero: 'assets/pearson-hero.png',
    heroFit: 'contain',
    tone: 'lavender',
    wideMedia: true,

    chapters: [
      {
        tocLabel: 'Visão geral',
        title: 'Um problema que os dados sozinhos não mostravam',
        blocks: [
          {
            subhead: '\n',
            paragraphs: [
              'A plataforma de comércio de avaliações da Pearson tinha um problema de checkout que não ficava evidente olhando apenas para os dados. As taxas de abandono eram altas, mas a causa não era sensibilidade a preço nem confusão com o produto — era fricção operacional para clientes que já sabiam exatamente o que queriam.',
              'Clientes recorrentes, que representavam a maioria das compras de alta intenção, percorriam o mesmo checkout de várias etapas toda vez que pediam. Mesmo endereço. Mesmo método de pagamento. Mesmos produtos. A plataforma tratava cada transação como se fosse a primeira.',
              'Ao longo de um mês, atuando como designer única inserida no time de produto da Pearson, redesenhei a experiência de checkout para clientes recorrentes, passando de um fluxo linear estático para um Express Checkout sensível ao contexto que se adaptava dinamicamente com base no histórico de compras, no tipo de conta e na elegibilidade do produto. O redesign reduziu o abandono no checkout em 51%.'
            ],
            highlight: {
              eyebrow: 'Mudando a pergunta',
              body: 'O objetivo não era criar um checkout mais rápido. Um sistema que entende o contexto de compra e reduz decisões desnecessárias.',
              tone: 'dark'
            }
          }
        ]
      },
      {
        tocLabel: 'Complexidade de negócio & usuário',
        title: 'Entendendo a complexidade de negócio e de usuário',
        blocks: [
          {
            subhead: 'Um ecossistema de comércio especializado',
            intro:
              'Os produtos de avaliação da Pearson não funcionam como um e-commerce padrão. O ambiente de compra incluía:',
            bullets: [
              'Contas organizacionais e pessoais',
              'Produtos restritos por qualificação',
              'Carrinhos mistos, físicos e digitais',
              'Fluxos de faturamento',
              'Casos extremos de envio internacional',
              'Integrações com Q-global e aimsweb'
            ],
            outro: [
              'Dentro dessa complexidade, os dados comportamentais contavam uma história clara. Usuários de alta intenção abandonavam não por incerteza, mas porque o sistema insistia em fazer perguntas cujas respostas já conhecia.'
            ],
            stats: [
              { eyebrow: 'Reuso de endereço', k: '80%',     label: 'reutilizaram preferências de envio e entrega', sub: 'Clientes recorrentes reutilizando as mesmas preferências de envio e entrega.' },
              { eyebrow: 'ISBN repetido',   k: '43.000+', label: 'clientes repetindo um único ISBN',    sub: 'Pedindo repetidamente um único produto por ISBN em seis meses.' },
              { eyebrow: 'Alta intenção',   k: '↑',       label: 'etapas desnecessárias de checkout',        sub: 'Compradores confiantes percorrendo fluxos que já haviam concluído antes.' }
            ],
            followUp: 'A experiência de checkout fora desenhada para a flexibilidade. Estava otimizada para a coisa errada.'
          }
        ]
      },
      {
        tocLabel: 'Reenquadrando o problema',
        title: 'Reenquadrando o problema',
        blocks: [
          {
            subhead: 'De simplificar o checkout a entender o contexto',
            paragraphs: [
              'O briefing original era direto: tornar o checkout mais rápido para clientes recorrentes.',
              'Logo no início do discovery, contestei esse enquadramento. O problema não era o tamanho do formulário — era que a plataforma não tinha mecanismo para usar o que já sabia sobre o cliente. Reduzir etapas sem resolver isso só criaria uma versão mais curta da mesma experiência problemática.',
              'Reenquadrei a pergunta de produto de “como simplificamos o checkout” para “como desenhamos um sistema que entende o contexto de compra e reduz decisões desnecessárias”. Essa mudança redefiniu completamente o projeto e exigiu o apoio de stakeholders de produto e engenharia que tinham dimensionado o projeto como uma otimização de UI, não como um problema de sistemas.'
            ],
            pullquote: 'Como desenhamos um sistema que entende o contexto de compra e reduz decisões desnecessárias?',
            outro: [
              'Conseguir esse alinhamento tomou a maior parte da primeira semana. Mapeei os estados de checkout existentes contra os padrões comportamentais reais dos clientes e apresentei a lacuna como um risco operacional, não como uma preferência de design. Quando os dados passaram a contar essa história, a conversa mudou.'
            ]
          }
        ]
      },
      {
        tocLabel: 'Pesquisa & insights',
        title: 'Pesquisa & insights estratégicos',
        blocks: [
          {
            subhead: 'Entendendo padrões de comportamento, não apenas problemas de usabilidade',
            paragraphs: [
              'A fase de discovery focou em padrões comportamentais em vez de problemas de usabilidade. Trabalhando com product managers e stakeholders de negócio, analisei:'
            ],
            bullets: [
              'Comportamento de compra de clientes recorrentes',
              'Padrões de abandono de checkout',
              'Dados de interação com o carrinho',
              'Uso de contas salvas',
              'Dependências de qualificação de produtos'
            ],
            outro: [
              'O principal insight foi que os clientes recorrentes se comportavam de forma previsível o suficiente para o sistema tomar decisões com base nesses padrões em nome deles. Esse insight virou a base estratégica de todo o redesign.'
            ]
          },
          {
            subhead: 'Complexidade operacional oculta',
            paragraphs: [
              'A pesquisa também revelou a rapidez com que os casos extremos se multiplicavam. Diferentes combinações de entradas criavam estados de checkout exponencialmente diferentes:'
            ],
            bullets: [
              'Contas organizacionais',
              'Produtos Q-global',
              'Itens restritos por qualificação',
              'Carrinhos mistos',
              'Envio internacional',
              'Métodos de pagamento ausentes'
            ],
            outro: [
              'O que parecia um fluxo simples na superfície exigia um sistema de lógica altamente orquestrado por baixo. Mapear toda essa lógica, antes de qualquer design de interface começar, foi a decisão que impediu o projeto de desabar sob a própria complexidade no meio da construção.'
            ]
          }
        ]
      },
      {
        tocLabel: 'Sistema de checkout adaptável',
        title: 'Desenhando um sistema de checkout adaptável',
        blocks: [
          {
            subhead: 'De fluxos lineares a lógica adaptável',
            paragraphs: [
              'Em vez de um único fluxo estático, desenhei uma arquitetura de checkout adaptável ao contexto que analisava cada cliente recorrente contra um conjunto de sinais de elegibilidade:'
            ],
            bullets: [
              'Informações de envio já existentes',
              'Métodos de pagamento salvos',
              'Histórico de compras',
              'Status de qualificação',
              'Compatibilidade de produtos',
              'Validação de conta externa'
            ],
            outro: [
              'Dependendo do contexto disponível, os clientes podiam ir direto para o Express Checkout, entrar num estado de edição parcial para campos específicos ou retornar à experiência de checkout padrão. Era o sistema que decidia qual fluxo cada cliente deveria seguir, não o usuário.'
            ],
            comparison: [
              { eyebrow: 'Estado A', title: 'Express Checkout',           body: 'Todas as informações necessárias já estão disponíveis. Vá direto para a confirmação em uma única tela.', picked: true },
              { eyebrow: 'Estado B', title: 'Estado de edição parcial',         body: 'Falta apenas uma informação importante. Edite apenas o necessário e finalize ali mesmo.' },
              { eyebrow: 'Estado C', title: 'Fallback para checkout padrão', body: 'Casos extremos ou mudanças sensíveis de conta retornam com segurança ao fluxo completo.' }
            ]
          },
          {
            subhead: 'Equilibrando velocidade e controle',
            paragraphs: [
              'A decisão de produto mais difícil foi determinar até que ponto os clientes confiariam na automação. Remover por completo a capacidade de edição criava risco para usuários comprando produtos educacionais regulados, vinculados a organizações ou sistemas de qualificação. Uma experiência totalmente automatizada não era apropriada aqui.',
              'A solução foi reduzir decisões desnecessárias preservando visibilidade e controle onde a segurança importava mais:'
            ],
            bullets: [
              'Informações críticas da conta permaneciam visíveis',
              'Os clientes podiam editar seções-chave sem reiniciar todo o fluxo',
              'Casos extremos eram redirecionados automaticamente para experiências de fallback mais seguras',
              'O Express Checkout permanecia como uma camada opcional sobre o checkout padrão, não como substituto'
            ],
            outro: 'Esse equilíbrio — velocidade sem perder transparência — foi o que tornou o sistema confiável o bastante para ser de fato usado.'
          }
        ]
      },
      {
        tocLabel: 'Pensamento sistêmico & colaboração',
        title: 'Pensamento sistêmico & colaboração multifuncional',
        blocks: [
          {
            subhead: 'Projetando uma solução sustentável',
            paragraphs: [
              'Uma grande restrição ao longo do projeto foi a disponibilidade da equipe de engenharia. Um produto de checkout completamente separado não era viável. Trabalhei de perto com o time de engenharia para desenhar uma arquitetura modular que aproveitava a infraestrutura de checkout existente sempre que possível:'
            ],
            bullets: [
              'Padrões de componentes compartilhados',
              'Estados de edição reutilizáveis',
              'Comportamento de validação consistente',
              'Estruturas de conta escaláveis'
            ],
            pullquote: 'O objetivo não era criar o checkout mais rápido possível. Era o checkout mais rápido que a Pearson conseguiria, de forma realista, manter e escalar.'
          },
          {
            subhead: 'Definindo limites claros',
            paragraphs: [
              'O alinhamento entre stakeholders foi o outro grande desafio. Times diferentes puxavam em direções diferentes:'
            ],
            constraints: [
              { who: 'Times de negócio',       want: 'Redução máxima de fricção.' },
              { who: 'Engenharia',          want: 'Manutenibilidade e arquitetura reutilizável.' },
              { who: 'Operações',           want: 'Precisão dos pedidos e integridade de compliance.' },
              { who: 'Produto',              want: 'Prazos de entrega contra um escopo que não parava de crescer.' }
            ],
            outro: [
              'O principal ponto de discussão eram as regras de elegibilidade do Express Checkout. Sem restrições claras, os casos extremos se multiplicavam e o risco operacional crescia junto. Conduzi sessões de mapeamento de fluxo e revisões iterativas justamente para forçar decisões de limite, transformando discussões abertas em regras claras de produto. Quando a elegibilidade ganhou critérios claros, o resto do alinhamento veio em seguida.'
            ]
          }
        ]
      },
      {
        tocLabel: 'Antes & Depois',
        eyebrow: 'Antes & Depois',
        title: 'O redesign, antes e depois',
        bg: 'tint',
        blocks: [
          {
            paragraphs: [
              'A mudança em uma só imagem: o checkout original de várias etapas que os clientes recorrentes repetiam a cada pedido, ao lado do Express Checkout sensível ao contexto que os leva direto à confirmação.'
            ],
            beforeAfter: {
              before: { id: 'pearson-before', label: 'Checkout original de várias etapas' },
              after: { id: 'pearson-after', label: 'Express Checkout' }
            }
          }
        ]
      }
    ],

    outcomes: [
      { k: '51%',  label: 'de redução no abandono de checkout', sub: 'para clientes recorrentes no lançamento' },
      { k: '80%',  label: 'dos clientes recorrentes reutilizaram o endereço', sub: '+ preferências de entrega salvas' },
      { k: '43k+', label: 'clientes repetindo um único ISBN',     sub: 'em um único período de 6 meses' }
    ],

    reflection: {
      eyebrow: 'Reflexão',
      title: 'Simplificar de verdade não é remover funcionalidade.',
      paragraphs: [
        'A maior lição deste projeto foi perceber como experiências simples dependem de sistemas complexos nos bastidores.',
        'O que começou como uma otimização de interface acabou se tornando um desafio de arquitetura de produto envolvendo lógica de qualificação, herança de contas, dependências de sistemas externos e estados de compra dinâmicos. A simplicidade que os usuários experimentavam na ponta só era possível por causa de uma lógica robusta que o usuário nunca chega a perceber.',
        'Esse foi o principal aprendizado que levei desse projeto: simplificar de verdade não é remover funcionalidade. É reduzir de forma inteligente as decisões desnecessárias preservando a flexibilidade sem abrir mão da confiança de que os usuários ainda precisam — e construir a lógica de sistema que torna isso invisível.'
      ]
    },

    next: 'automotive'
  },

  /* ─────────────────────────────  LOADSMART (Alice)  ──────────────── */
  alice: {
    slug: 'alice',
    num: '04',
    client: 'Loadsmart · Busca de transportadoras',
    title: 'Redesenho dos fluxos de busca de transportadoras durante uma transição operacional crítica',
    intro:
      'Quando a Loadsmart descontinuou o DAT, uma plataforma essencial para a busca de cargas no mesmo dia, os Carrier Sales Representatives perderam uma parte importante do seu fluxo de trabalho praticamente da noite para o dia — justo quando a liderança previa uma retomada do mercado de fretes. Ao longo de 4 semanas, atuando como designer única ao lado de dois PMs e da engenharia, redesenhei os fluxos de busca e as ferramentas para acompanhar transportadoras das quais os reps dependiam. A solução foi validada com usuários reais e reduziu o tempo de processamento de contratos em 83%.',
    role: 'Product Designer única',
    year: '2024',
    timeline: '4 semanas',
    industry: 'Logística · Cadeia de suprimentos',
    platform: 'Web (fluxo interno)',
    team: '2 PMs · Engenharia · Operações de transportadoras · Carrier Sales Reps',
    facts: [
      { k: 'Função', v: 'Product Designer única' },
      { k: 'Empresa', v: 'Loadsmart' },
      { k: 'Prazo', v: '4 semanas' },
      { k: 'Resultado', v: '83% ↓ tempo de processamento de contratos' }
    ],
    hero: 'assets/alice-hero.png',
    heroFit: 'contain',
    tone: 'dark',
    wideMedia: true,

    chapters: [
      {
        tocLabel: 'Visão geral',
        title: 'Quando descontinuar uma ferramenta expôs um sistema frágil',
        blocks: [
          {
            subhead: 'Visão geral',
            paragraphs: [
              'Quando a Loadsmart descontinuou o DAT, uma plataforma essencial para a busca de cargas no mesmo dia, não removeu apenas uma ferramenta. Expôs o quanto a infraestrutura operacional por baixo sempre havia sido frágil.',
              'Os Carrier Sales Representatives perderam uma parte importante do seu fluxo de trabalho praticamente da noite para o dia. O que entrou no lugar foi uma colcha de retalhos de conversas no Slack, planilhas pessoais e gambiarras não documentadas. Ao mesmo tempo, a liderança previa uma retomada do mercado de fretes, ou seja, o volume de trabalho estava prestes a aumentar sobre um sistema que já não dava conta da operação.',
              'Ao longo de 4 semanas, atuando como designer única ao lado de dois Product Managers, da engenharia e dos times de operações de transportadoras, redesenhei os fluxos de busca e as ferramentas para acompanhar transportadoras das quais os reps dependiam diariamente. A solução foi validada com usuários reais e reduziu o tempo de processamento de contratos em 83%.'
            ],
            highlight: {
              eyebrow: 'O reenquadramento',
              body: 'Não “o que substitui o DAT”. Como deveria funcionar um fluxo de busca para quem trabalha sob pressão de tempo?',
              tone: 'dark'
            }
          }
        ]
      },
      {
        tocLabel: 'O problema operacional',
        title: 'O problema operacional',
        blocks: [
          {
            subhead: 'O problema ia mais fundo do que a ferramenta',
            paragraphs: [
              'A descontinuação do DAT foi o gatilho, mas o problema real ia mais fundo.',
              'Representantes experientes vinham tendo sucesso apesar do sistema havia muito tempo. As decisões de busca dependiam de conhecimento informal acumulado pelo time — quem você conhecia, qual canal do Slack tinha a informação certa, qual planilha estava mais atualizada. A plataforma mostrava informações, mas não ajudava as pessoas a tomar decisões.',
              'Duas semanas dentro do projeto ficou claro que isso não era um problema de substituição de ferramenta. Era um problema de visibilidade sobre o processo. A pergunta passou de “o que substitui o DAT” para “como deveria funcionar um fluxo de busca para quem trabalha sob pressão de tempo”.'
            ],
            pullquote: 'A plataforma mostrava informações, mas não ajudava as pessoas a tomar decisões.'
          }
        ]
      },
      {
        tocLabel: 'Pesquisa de campo em Chicago',
        title: 'Pesquisa de campo em Chicago',
        blocks: [
          {
            subhead: 'Observando o trabalho, não só perguntando sobre ele',
            paragraphs: [
              'Para responder a essa pergunta direito, propus uma semana de pesquisa de campo presencial em Chicago antes de começar qualquer proposta de solução.',
              'Acompanhar os reps no ambiente real de trabalho revelou coisas que nenhuma entrevista com stakeholders teria trazido à tona. Observamos o trabalho acontecendo na prática, entrevistamos 12 funcionários e conduzimos dois workshops colaborativos com PMs e stakeholders operacionais.'
            ],
            stats: [
              { eyebrow: 'Presencial', k: '1 sem', label: 'de pesquisa de campo em Chicago', sub: 'Acompanhando operações de busca ao vivo antes de qualquer design começar.' },
              { eyebrow: 'Entrevistas', k: '12', label: 'funcionários de várias funções',   sub: 'Carrier sales, desenvolvimento de capacidade e operações.' },
              { eyebrow: 'Workshops', k: '2',  label: 'com PMs & stakeholders',   sub: 'Mapeando jornadas e alinhando prioridades.' }
            ]
          },
          {
            subhead: 'Dois grupos de usuários, tratados de forma idêntica',
            paragraphs: [
              'O principal insight foi a distinção entre dois grupos de usuários com necessidades fundamentalmente diferentes que o sistema existente tratava de forma idêntica:'
            ],
            comparison: [
              { eyebrow: 'Grupo A', title: 'Desenvolvimento de capacidade', body: 'Relações e contratos de longo prazo com transportadoras — guiados por relacionamento, medidos em semanas e meses.' },
              { eyebrow: 'Grupo B', title: 'Carrier Sales Reps',   body: 'Busca de mesmo dia em ritmo acelerado — transacional, medida em minutos.', picked: true }
            ],
            outro: [
              'Desenhar um único fluxo para os dois significou que nenhum funcionava bem. Esse insight virou a base de cada decisão de priorização que veio depois.',
              'Depois de sintetizar a pesquisa, mapeei as jornadas operacionais dos dois grupos e construí um mapa de oportunidades avaliando prioridades por impacto no negócio, fricção operacional, complexidade de engenharia e retorno mais rápido. Em vez de redesenhar todo o ecossistema de busca, focamos em melhorias de maior impacto que pudessem ser entregues dentro do prazo sem exigir uma reconstrução completa da infraestrutura.'
            ],
            slot: { id: 'alice-opportunity', label: 'Jornadas operacionais + mapa de oportunidades', fit: 'contain' }
          }
        ]
      },
      {
        tocLabel: 'Estratégia de design',
        title: 'Estratégia de design',
        blocks: [
          {
            subhead: 'Direto para alta fidelidade, por escolha.',
            paragraphs: [
              'Com o impacto operacional já sendo sentido entre os times, a velocidade era uma restrição inegociável.',
              'Como a Loadsmart tinha um design system maduro, decidi pular completamente os wireframes de baixa fidelidade e ir direto para protótipos de alta fidelidade. Foi uma decisão consciente: reduziu o tempo de iteração e nos permitiu validar com usuários reais contra protótipos próximos do produto final em vez de fluxos abstratos. Dado o prazo de 4 semanas e a urgência operacional, o risco de ir rápido era menor do que o risco de ir devagar.'
            ],
            pullquote: 'O risco de ir rápido era menor do que o risco de ir devagar.'
          },
          {
            subhead: 'Quatro princípios',
            numberedList: [
              { title: 'Reduzir a troca de contexto',                  body: 'Os reps navegavam por quatro a cinco ferramentas diferentes para concluir uma única decisão de busca. O objetivo era condensar isso em um único fluxo coerente.' },
              { title: 'Destacar as informações mais importantes para a busca, não só dados', body: 'A plataforma existente mostrava informação. O redesign precisava mostrar o que fazer com ela — cargas alinhadas às preferências da transportadora, histórico operacional e contexto da operação visíveis no momento da decisão.' },
              { title: 'Centralizar as informações sobre transportadoras',            body: 'Histórico de relacionamento, status de contrato e dados de desempenho consolidados em uma única visão de portfólio, em vez de espalhados por vários sistemas.' },
              { title: 'Priorizar primeiro a clareza do fluxo',          body: 'Restringi o escopo inicial à visibilidade e às informações necessárias para decidir em vez de tentar automação completa, o que permitiu ao time avançar rápido enquanto resolvia as lacunas operacionais críticas.' }
            ]
          }
        ]
      },
      {
        tocLabel: 'Colaboração multifuncional',
        title: 'Colaboração multifuncional',
        blocks: [
          {
            subhead: 'Resolver o problema de hoje sem comprometer o amanhã',
            paragraphs: [
              'O prazo comprimido criava pressão constante dos stakeholders. Times diferentes puxavam em direções diferentes:'
            ],
            constraints: [
              { who: 'Operações',  want: 'Correções imediatas otimizadas para eficiência de curto prazo.' },
              { who: 'Liderança',  want: 'Soluções que continuem funcionando com o crescimento do produto.' },
              { who: 'Engenharia', want: 'Soluções compatíveis com a infraestrutura existente.' }
            ],
            outro: [
              'A tensão recorrente era entre consertar o que estava quebrado agora e construir algo que não precisasse ser substituído em seis meses. Eu ancorava cada conversa com stakeholders no comportamento operacional observado na pesquisa de Chicago — exemplos concretos do que os reps de fato faziam, não suposições sobre o que deveriam fazer. Essa evidência tornou as discussões sobre decisões mais rápidas e menos políticas.',
              'Facilitar workshops e conduzir as decisões em torno de problemas reais do negócio, em vez de listas de funcionalidades, manteve o time alinhado ao longo de quatro semanas de frentes de trabalho paralelas sob real pressão de tempo.'
            ],
            pullquote: 'Ancorei cada conversa no que os reps de fato faziam, não em suposições sobre o que deveriam fazer.'
          }
        ]
      },
      {
        tocLabel: 'A solução',
        title: 'A solução',
        blocks: [
          {
            subhead: 'Visibilidade do portfólio de transportadoras',
            paragraphs: [
              'Os Carrier Sales Representatives passaram a ter uma visão centralizada de todo o seu portfólio de transportadoras e contratos ativos em uma única experiência, substituindo o fluxo fragmentado de várias ferramentas que surgira na ausência do DAT. O acompanhamento do relacionamento que antes exigia navegar por múltiplos sistemas passou a acontecer em um só lugar.'
            ],
            slot: { id: 'alice-portfolio', label: 'Portfólio de transportadoras & contratos ativos, em uma única visão', src: 'assets/alice-flat-1.png', fit: 'contain' }
          },
          {
            subhead: 'Casamento mais inteligente entre carga e transportadora',
            paragraphs: [
              'O fluxo de busca redesenhado destacava cargas alinhadas às preferências de cada transportadora, ao histórico operacional e ao contexto da operação no momento em que os reps precisavam agir. Em vez de puxar dados de fontes desconectadas e fazer julgamentos manuais, os reps tinham o contexto necessário para decidir no fluxo de trabalho.'
            ],
            outro: 'Ambas as soluções foram validadas com usuários reais dentro do prazo de 4 semanas.',
            slot: { id: 'alice-matching', label: 'Casamento carga-transportadora no fluxo de busca', src: 'assets/alice-flat-2.png', fit: 'contain' }
          }
        ]
      }
    ],

    outcomes: [
      { k: '83%',  label: 'de redução no tempo de processamento de contratos', sub: 'após o lançamento para usuários reais' },
      { k: '4 sem', label: 'da pesquisa à solução entregue',         sub: 'alta fidelidade, sem wireframes' },
      { k: '2',    label: 'fluxos de usuário desembaraçados',              sub: 'desenvolvimento de capacidade vs. busca de mesmo dia' }
    ],

    reflection: {
      eyebrow: 'Reflexão',
      title: 'Eficiência operacional depende de confiança e visibilidade.',
      paragraphs: [
        'A lição mais importante deste projeto foi o quanto os times operacionais se adaptam em torno das limitações do produto ao longo do tempo. Reps experientes haviam criado seus próprios processos para contornar as limitações do sistema. Essas gambiarras eram invisíveis para quem não tinha passado tempo observando as pessoas realmente trabalharem.',
        'Era para isso que servia, de fato, a semana de pesquisa de campo em Chicago. Não para levantar requisitos, mas para ver como o sistema parecia de dentro do dia real de alguém.',
        'A outra coisa que este projeto reforçou: eficiência operacional depende de confiança e visibilidade. Os reps não tinham dificuldade porque os fluxos eram complexos demais. Tinham dificuldade porque o sistema entregava informação sem ajudar a tomar decisões sobre o que fazer em seguida. Criar clareza dentro da complexidade operacional, sem simplificar demais as decisões reais que os reps precisavam tomar, era o verdadeiro problema de design. A interface foi só a parte visível da solução.'
      ]
    },

    next: 'briza'
  }
};
