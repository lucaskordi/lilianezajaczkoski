export interface PracticeArea {
  slug: string
  title: string
  description: string
  iconType: string
  content: string[]
  coverImage?: string
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'direito-criminal',
    title: 'Direito Criminal',
    description: 'Defesa em processos criminais, inquéritos policiais e medidas cautelares.',
    iconType: 'scale',
    coverImage: '/direitocrim.webp',
    content: [
      'O Direito Criminal é uma área fundamental do direito que trata da defesa dos direitos e garantias individuais em processos penais. Nossa atuação abrange desde a fase investigatória até o julgamento final, garantindo uma defesa técnica especializada e estratégica.',
      'Atuamos em defesa de clientes em inquéritos policiais, processos criminais, execuções penais e medidas cautelares. Nossa experiência permite identificar vícios processuais, garantir o respeito aos prazos legais e construir uma defesa sólida baseada em provas e argumentação jurídica.',
      'Entre os principais serviços oferecidos estão: defesa em crimes contra a vida, patrimônio, honra, liberdade sexual, e crimes contra a administração pública. Também atuamos em crimes de trânsito, crimes ambientais e crimes digitais.',
      'A estratégia de defesa é sempre personalizada, analisando cada caso de forma individualizada. Buscamos desde a absolvição até a redução de penas, negociação de acordos quando aplicável, e a garantia de todos os direitos processuais do acusado.',
      'Entendemos que estar envolvido em um processo criminal é uma situação delicada e estressante. Por isso, oferecemos um atendimento humanizado, mantendo o cliente sempre informado sobre o andamento do processo e as estratégias adotadas.',
    ],
  },
  {
    slug: 'direito-familia-sucessoes',
    title: 'Direito de Família e Sucessões',
    description: 'Divórcios, guarda e visita de filhos, pensão alimentícia, inventários e testamentos.',
    iconType: 'family',
    coverImage: '/family.webp',
    content: [
      'O Direito de Família é uma área que requer sensibilidade e conhecimento técnico profundo. Atuamos em questões que envolvem relações familiares, sempre buscando soluções que preservem os vínculos afetivos e garantam os direitos de todos os envolvidos.',
      'Nossos serviços incluem: divórcio consensual e litigioso, separação judicial e extrajudicial, reconhecimento e dissolução de união estável, guarda compartilhada e unilateral, regulamentação de visitas, pensão alimentícia para filhos e ex-cônjuge, e revisão de alimentos.',
      'Também atuamos em questões de direito sucessório, incluindo inventários extrajudiciais e judiciais, testamentos, planejamento sucessório, partilha de bens, e questões relacionadas a herança e legítima. O planejamento sucessório é essencial para evitar conflitos futuros e garantir que a vontade do testador seja respeitada.',
      'Em casos de adoção, reconhecimento de paternidade, investigação de paternidade, e alteração de nome e registro, oferecemos orientação completa e acompanhamento em todas as etapas processuais.',
      'Nossa abordagem prioriza a mediação e conciliação sempre que possível, buscando acordos que satisfaçam todas as partes e evitem o desgaste emocional e financeiro de processos litigiosos prolongados. Quando necessário, atuamos com determinação na defesa dos interesses de nossos clientes.',
    ],
  },
  {
    slug: 'direito-previdenciario',
    title: 'Direito Previdenciário',
    description: 'Aposentadorias, benefícios, revisões e contestações junto ao INSS.',
    iconType: 'shield',
    coverImage: '/previd.webp',
    content: [
      'O Direito Previdenciário é essencial para garantir que você receba todos os benefícios a que tem direito junto ao INSS. Atuamos em todas as fases: desde o planejamento previdenciário até a defesa em processos administrativos e judiciais.',
      'Oferecemos consultoria para identificar a melhor forma de aposentadoria para seu caso, considerando as regras de transição e as novas regras da reforma previdenciária. Analisamos tempo de contribuição, idade, e todas as modalidades disponíveis para encontrar a opção mais vantajosa.',
      'Atuamos na concessão de diversos benefícios: aposentadoria por idade e por tempo de contribuição, auxílio-doença, auxílio-acidente, pensão por morte, salário-maternidade, auxílio-reclusão, e BPC (Benefício de Prestação Continuada). Também prestamos assessoria em revisões de benefícios já concedidos.',
      'Nossos serviços incluem: análise de tempo de contribuição, reconhecimento de tempo especial, contagem de tempo rural, revisão de benefícios, defesa em perícias médicas, e ações judiciais contra negativas do INSS.',
      'A burocracia do INSS pode ser complexa e frustrante. Nossa experiência permite navegar pelo sistema de forma eficiente, garantindo que todos os documentos necessários sejam apresentados corretamente e que os prazos sejam respeitados. Estamos ao seu lado em cada etapa do processo.',
    ],
  },
  {
    slug: 'direito-civil',
    title: 'Direito Cível',
    description: 'Ações de indenização, contratos, responsabilidade civil e direito do consumidor.',
    iconType: 'document',
    coverImage: '/segjud.webp',
    content: [
      'O Direito Cível abrange uma vasta gama de relações jurídicas entre pessoas físicas e jurídicas. Nossa atuação visa proteger seus direitos patrimoniais e extrapatrimoniais, garantindo reparação adequada em caso de danos e segurança jurídica em contratos.',
      'Atuamos em ações de indenização por danos materiais e morais, decorrentes de acidentes, erros médicos, problemas com produtos e serviços, e outras situações que causem prejuízos. Buscamos sempre a reparação integral do dano sofrido.',
      'Na área contratual, oferecemos: elaboração e revisão de contratos diversos (compra e venda, prestação de serviços, locação, empréstimo, entre outros), análise de cláusulas contratuais, renegociação de contratos, e ações de rescisão contratual quando necessário.',
      'Também atuamos em questões de responsabilidade civil, incluindo responsabilidade do Estado, responsabilidade por produtos defeituosos, e responsabilidade em acidentes. Nossa experiência permite identificar todos os responsáveis e garantir a devida reparação.',
      'O Direito do Consumidor é uma área importante dentro do Direito Cível. Atuamos em defesa de consumidores em casos de cobranças indevidas, produtos defeituosos, serviços inadequados, cláusulas abusivas em contratos, e publicidade enganosa. Garantimos que seus direitos como consumidor sejam respeitados.',
    ],
  },
  {
    slug: 'direito-tributario',
    title: 'Direito Tributário',
    description: 'Consultoria, planejamento tributário, defesas administrativas e judiciais.',
    iconType: 'chart',
    coverImage: '/direitotrib.webp',
    content: [
      'O Direito Tributário é essencial para empresas e pessoas físicas que buscam otimizar sua carga fiscal de forma legal e eficiente. Oferecemos consultoria especializada em planejamento tributário, sempre dentro da legalidade e utilizando mecanismos previstos na legislação.',
      'Nossos serviços incluem: análise e escolha do melhor regime tributário (Simples Nacional, Lucro Presumido, Lucro Real), planejamento tributário para redução legal de impostos, estruturação societária com benefícios fiscais, e aproveitamento de incentivos fiscais disponíveis.',
      'Atuamos em defesas administrativas e judiciais contra autuações fiscais da Receita Federal, Receita Estadual e Receitas Municipais. Analisamos a legalidade dos lançamentos, identificamos vícios processuais, e defendemos seus interesses em todas as instâncias administrativas e judiciais.',
      'Também oferecemos consultoria em questões específicas como: recuperação de créditos tributários, parcelamento de débitos, análise de obrigações acessórias, e adequação à legislação tributária. A prevenção é sempre mais eficiente e econômica do que a correção posterior.',
      'Entendemos que a carga tributária brasileira é complexa e onerosa. Nosso objetivo é ajudar você a cumprir todas as obrigações fiscais de forma correta, aproveitando ao máximo os benefícios legais disponíveis e evitando autuações e multas desnecessárias.',
    ],
  },
  {
    slug: 'direito-trabalhista',
    title: 'Direito Trabalhista',
    description: 'Ações trabalhistas, rescisões, acordos e defesa de empregados ou empregadores.',
    iconType: 'briefcase',
    coverImage: '/direitotrab.webp',
    content: [
      'O Direito Trabalhista protege tanto os direitos dos trabalhadores quanto os interesses legítimos dos empregadores. Atuamos em defesa de ambas as partes, sempre buscando soluções que equilibrem os interesses e garantam o cumprimento da legislação trabalhista.',
      'Para trabalhadores, oferecemos: análise de rescisão contratual e cálculo de verbas rescisórias, ações trabalhistas para cobrança de direitos não pagos (horas extras, adicional noturno, férias, 13º salário, FGTS, entre outros), ações por danos morais e materiais, e defesa em processos trabalhistas.',
      'Também atuamos em questões específicas como: estabilidade provisória (gestante, acidentado, membro da CIPA), reconhecimento de vínculo empregatício, equiparação salarial, e questões relacionadas a acidentes de trabalho e doenças ocupacionais.',
      'Para empregadores, oferecemos: assessoria preventiva trabalhista, elaboração de contratos de trabalho, políticas internas e regulamentos, defesa em ações trabalhistas, negociação de acordos trabalhistas, e consultoria em reestruturações e demissões coletivas.',
      'A mediação e conciliação são sempre priorizadas quando possível, evitando processos longos e custosos. Quando necessário, atuamos com determinação na defesa dos interesses de nossos clientes, seja trabalhador ou empregador, sempre dentro da legalidade e ética profissional.',
    ],
  },
  {
    slug: 'consultas-pareceres-juridicos',
    title: 'Consultas & Pareceres Jurídicos',
    description: 'Análise de contratos, elaboração de pareceres e orientação estratégica.',
    iconType: 'consult',
    coverImage: '/comp.webp',
    content: [
      'Consultas e pareceres jurídicos são ferramentas essenciais para tomada de decisões estratégicas e prevenção de problemas jurídicos. Oferecemos análises técnicas detalhadas sobre questões jurídicas específicas, sempre com embasamento legal sólido e orientação prática.',
      'Nossos pareceres jurídicos abordam questões complexas de diversas áreas do direito, fornecendo análise detalhada da legislação aplicável, jurisprudência relevante, e recomendações estratégicas. São fundamentais para empresas que precisam de orientação antes de tomar decisões importantes.',
      'Na análise contratual, revisamos contratos diversos identificando riscos, cláusulas abusivas ou desfavoráveis, e sugerindo melhorias. Também elaboramos contratos personalizados que atendam às necessidades específicas de cada cliente, garantindo segurança jurídica e proteção de interesses.',
      'Oferecemos consultoria jurídica preventiva para empresas, ajudando a identificar e mitigar riscos antes que se tornem problemas. Isso inclui análise de compliance, adequação à legislação aplicável, e desenvolvimento de políticas internas que garantam conformidade legal.',
      'Nossos pareceres são elaborados com rigor técnico, sempre atualizados com a legislação vigente e jurisprudência mais recente. Fornecemos não apenas a análise jurídica, mas também recomendações práticas e estratégicas para que você possa tomar decisões informadas e seguras.',
    ],
  },
  {
    slug: 'mediacao-arbitragem',
    title: 'Mediação e Arbitragem',
    description: 'Resolução de conflitos de forma extrajudicial, rápida e eficaz.',
    iconType: 'contract',
    coverImage: '/conc.webp',
    content: [
      'A Mediação e Arbitragem são métodos alternativos de resolução de conflitos que oferecem vantagens significativas em relação ao processo judicial tradicional: maior rapidez, menor custo, preservação de relacionamentos, e soluções criativas adaptadas às necessidades das partes.',
      'Como mediadora, atuo facilitando a comunicação entre as partes em conflito, ajudando-as a encontrarem uma solução consensual que satisfaça ambos os interesses. A mediação é especialmente eficaz em conflitos familiares, comerciais, condominiais e trabalhistas, onde a preservação do relacionamento é importante.',
      'A arbitragem é um processo onde um árbitro ou tribunal arbitral decide a questão de forma definitiva, mas de maneira mais rápida e especializada que o processo judicial. É ideal para conflitos comerciais e empresariais, onde as partes desejam uma solução rápida e técnica.',
      'As vantagens desses métodos incluem: processos concluídos em semanas ou meses (não anos), custos significativamente menores, confidencialidade total, escolha de profissionais especializados na área do conflito, e soluções práticas que podem não estar disponíveis em uma decisão judicial tradicional.',
      'Muitos tribunais já exigem a tentativa de mediação antes de iniciar processos judiciais, demonstrando a eficácia desses métodos. Nossa experiência permite identificar quando a mediação ou arbitragem são as melhores opções e conduzir esses processos de forma eficiente e profissional.',
    ],
  },
  {
    slug: 'direito-imobiliario',
    title: 'Direito Imobiliário',
    description: 'Compra, venda, locação de imóveis, contratos e disputas condominiais.',
    iconType: 'home',
    coverImage: '/direitoimob.webp',
    content: [
      'O Direito Imobiliário envolve todas as questões relacionadas a imóveis, desde transações comerciais até questões condominiais. Nossa atuação garante segurança jurídica em uma das operações mais importantes da vida de pessoas e empresas.',
      'Atuamos em compra e venda de imóveis, elaborando e revisando contratos de compra e venda, analisando documentação imobiliária, verificando a regularidade do imóvel, e acompanhando todo o processo até a escritura e registro. Garantimos que todas as etapas sejam cumpridas corretamente.',
      'Na área de locação, oferecemos: elaboração de contratos de locação residencial e comercial, análise de contratos existentes, renegociação de contratos, ações de despejo e reintegração de posse, e defesa de locadores e locatários em questões diversas.',
      'Questões condominiais são uma área importante de nossa atuação. Oferecemos assessoria a síndicos e condôminos em assembleias, elaboração de convenções e regulamentos, resolução de conflitos condominiais, e ações relacionadas a obras, taxas condominiais e uso de áreas comuns.',
      'Também atuamos em questões de usucapião, regularização de imóveis, desapropriações, e questões relacionadas a incorporações imobiliárias. Nossa experiência permite identificar riscos e oportunidades em cada operação imobiliária, garantindo segurança e proteção de seus interesses.',
    ],
  },
  {
    slug: 'direito-empresarial',
    title: 'Direito Empresarial',
    description: 'Abertura de empresas, contratos empresariais, recuperação judicial e societário.',
    iconType: 'business',
    coverImage: '/comp.webp',
    content: [
      'O Direito Empresarial é essencial para empresas de todos os portes, desde a abertura até operações complexas de reestruturação. Oferecemos assessoria completa para garantir que sua empresa opere dentro da legalidade e com segurança jurídica.',
      'Nossos serviços incluem: assessoria na abertura de empresas (análise do tipo societário mais adequado, elaboração de contratos sociais, registro e obtenção de alvarás), alterações contratuais, transformação e incorporação de empresas, e dissolução e liquidação de sociedades.',
      'Na área contratual empresarial, elaboramos e revisamos contratos diversos: contratos de prestação de serviços, fornecimento, distribuição, franquia, joint ventures, e outros contratos comerciais. Garantimos que os contratos protejam seus interesses e sejam adequados ao seu negócio.',
      'Atuamos em processos de recuperação judicial e extrajudicial, ajudando empresas em dificuldades financeiras a reestruturarem suas dívidas e continuarem operando. Também oferecemos assessoria em falências e em negociações com credores.',
      'Questões societárias como assembleias, eleição de administradores, distribuição de lucros, e resolução de conflitos entre sócios também fazem parte de nossa atuação. Oferecemos consultoria estratégica para empresas que buscam crescer, se reestruturar ou resolver questões internas de forma eficiente.',
    ],
  },
  {
    slug: 'direito-digital',
    title: 'Direito Digital',
    description: 'Proteção de dados, crimes cibernéticos, contratos e regulamentações online.',
    iconType: 'lock',
    coverImage: '/lgpd.webp',
    content: [
      'O Direito Digital é uma área em constante evolução, essencial para empresas e pessoas que operam no ambiente digital. Atuamos em questões relacionadas à proteção de dados, crimes cibernéticos, contratos digitais e regulamentações online.',
      'A LGPD (Lei Geral de Proteção de Dados) trouxe obrigações importantes para empresas. Oferecemos assessoria completa para adequação à LGPD, incluindo: análise de processos de tratamento de dados, elaboração de políticas de privacidade, nomeação de DPO (Encarregado de Proteção de Dados), e implementação de medidas de segurança.',
      'Atuamos em defesa de empresas e pessoas vítimas de crimes cibernéticos, como fraudes online, invasão de sistemas, vazamento de dados, e outros crimes digitais. Também oferecemos defesa em casos de acusações de crimes cibernéticos, garantindo que os direitos sejam respeitados.',
      'Na área contratual digital, elaboramos termos de uso, políticas de privacidade, contratos de prestação de serviços digitais, e outros documentos essenciais para empresas que operam online. Garantimos conformidade com a legislação aplicável e proteção adequada de interesses.',
      'Também oferecemos consultoria em questões de propriedade intelectual digital, direitos autorais na internet, e-commerce, e regulamentações específicas de setores digitais. Nossa experiência permite navegar pelo complexo ambiente jurídico digital de forma eficiente e segura.',
    ],
  },
  {
    slug: 'direito-consumidor',
    title: 'Direito do Consumidor',
    description: 'Cobranças indevidas, defeitos de produtos e serviços, ações de reparação.',
    iconType: 'cart',
    coverImage: '/consm.webp',
    content: [
      'O Direito do Consumidor garante proteção aos consumidores em suas relações com fornecedores de produtos e serviços. Atuamos em defesa dos direitos do consumidor, garantindo reparação adequada em casos de violação desses direitos.',
      'Nossos serviços incluem: ações por produtos defeituosos ou com vícios ocultos, serviços inadequados ou não prestados, cobranças indevidas, cláusulas abusivas em contratos, publicidade enganosa ou abusiva, e cancelamento de contratos de adesão.',
      'Também atuamos em questões específicas como: planos de saúde, serviços bancários e financeiros, telefonia e internet, seguros, e-commerce, e outros setores onde os direitos do consumidor são frequentemente violados. Garantimos que você receba a reparação adequada pelos danos sofridos.',
      'Oferecemos orientação sobre seus direitos como consumidor e como exercê-los. Muitas vezes, uma notificação extrajudicial bem fundamentada resolve a questão sem necessidade de processo judicial, economizando tempo e recursos.',
      'Quando necessário, ingressamos com ações judiciais buscando: reparação de danos materiais e morais, cancelamento de débitos indevidos, revisão ou rescisão de contratos, e outras medidas necessárias para garantir seus direitos. O Código de Defesa do Consumidor oferece diversas garantias que muitas pessoas desconhecem.',
    ],
  },
  {
    slug: 'direito-ambiental',
    title: 'Direito Ambiental',
    description: 'Licenciamento, responsabilidades e ações relacionadas ao meio ambiente.',
    iconType: 'leaf',
    coverImage: '/direitoamb.webp',
    content: [
      'O Direito Ambiental é essencial para empresas que precisam operar em conformidade com a legislação ambiental e para pessoas que buscam proteção de seus direitos relacionados ao meio ambiente. Atuamos tanto na área preventiva quanto na defensiva.',
      'Para empresas, oferecemos: assessoria em licenciamento ambiental, análise de impactos ambientais, adequação à legislação ambiental, elaboração de políticas ambientais, e defesa em processos administrativos e judiciais relacionados a questões ambientais.',
      'Atuamos em defesa de empresas autuadas por órgãos ambientais, analisando a legalidade das autuações, identificando vícios processuais, e buscando a redução ou cancelamento de multas. Também oferecemos assessoria em processos de regularização ambiental.',
      'Para pessoas físicas e comunidades, atuamos em ações que buscam proteção ambiental, como ações civis públicas, ações populares, e ações de responsabilidade civil por danos ambientais. Garantimos que os direitos ao meio ambiente equilibrado sejam respeitados.',
      'Questões relacionadas a poluição, desmatamento, uso de recursos hídricos, e outras questões ambientais são complexas e requerem conhecimento técnico especializado. Nossa experiência permite navegar pela legislação ambiental de forma eficiente, sempre buscando soluções que equilibrem desenvolvimento e preservação ambiental.',
    ],
  },
  {
    slug: 'direito-administrativo',
    title: 'Direito Administrativo',
    description: 'Questões com órgãos públicos, concursos, licitações e contratos administrativos.',
    iconType: 'hammer',
    coverImage: '/adm.webp',
    content: [
      'O Direito Administrativo regula as relações entre o Estado e os cidadãos, bem como a organização e funcionamento da administração pública. Atuamos tanto na defesa de interesses de pessoas físicas e jurídicas em relação ao Estado quanto na assessoria a empresas que contratam com o poder público.',
      'Para pessoas físicas, oferecemos: defesa em processos administrativos diversos, recursos contra decisões de órgãos públicos, ações contra a Fazenda Pública, questões relacionadas a servidores públicos, e defesa em processos disciplinares.',
      'Na área de concursos públicos, oferecemos: análise de editais, defesa em recursos de questões, ações para garantir nomeação e posse, e defesa em processos de desclassificação. Garantimos que seus direitos como candidato sejam respeitados em todas as etapas do concurso.',
      'Para empresas, oferecemos assessoria em licitações públicas: análise de editais, preparação de propostas, defesa em recursos e impugnações, e assessoria em contratos administrativos. A experiência em licitações é essencial para empresas que desejam contratar com o poder público.',
      'Também atuamos em questões relacionadas a servidores públicos, incluindo questões previdenciárias específicas, direitos e vantagens, processos disciplinares, e aposentadorias especiais. Nossa experiência permite identificar todos os direitos disponíveis e garantir que sejam respeitados.',
    ],
  },
  {
    slug: 'direito-transito',
    title: 'Direito de Trânsito',
    description: 'Recursos de multas, defesa em infrações e acidentes.',
    iconType: 'car',
    coverImage: '/transito.webp',
    content: [
      'O Direito de Trânsito é essencial para motoristas que enfrentam questões relacionadas a multas, infrações, suspensão ou cassação da CNH, e acidentes de trânsito. Oferecemos defesa especializada para garantir que seus direitos sejam respeitados e que penalidades sejam aplicadas de forma justa.',
      'Atuamos em recursos contra multas de trânsito, analisando a legalidade da autuação, identificando vícios processuais, e buscando o cancelamento da multa quando aplicável. Muitas multas podem ser canceladas por questões técnicas ou processuais que não são conhecidas pelo cidadão comum.',
      'Em casos de suspensão ou cassação da CNH, oferecemos defesa completa, buscando a manutenção da habilitação ou a redução do prazo de suspensão. Analisamos todo o histórico de infrações e construímos uma defesa fundamentada para proteger seu direito de dirigir.',
      'Em acidentes de trânsito, atuamos tanto na defesa de vítimas quanto na defesa de acusados. Para vítimas, buscamos indenização por danos materiais e morais. Para acusados, oferecemos defesa em processos administrativos e criminais relacionados ao acidente.',
      'Também oferecemos assessoria em questões relacionadas a seguro obrigatório (DPVAT), questões com seguradoras, e processos relacionados a acidentes de trânsito. Nossa experiência permite identificar todos os direitos disponíveis e garantir a devida reparação ou defesa.',
    ],
  },
  {
    slug: 'direito-internacional',
    title: 'Direito Internacional',
    description: 'Imigração, contratos internacionais e comércio exterior.',
    iconType: 'globe',
    coverImage: '/intern.webp',
    content: [
      'O Direito Internacional envolve questões que transcendem fronteiras nacionais, incluindo imigração, contratos internacionais, comércio exterior, e questões relacionadas a estrangeiros no Brasil. Nossa atuação garante que questões internacionais sejam resolvidas de forma adequada e eficiente.',
      'Na área de imigração, oferecemos: assessoria para obtenção de vistos diversos (trabalho, estudo, residência permanente), processos de naturalização, regularização de situação migratória, e defesa em processos de deportação ou expulsão. A legislação migratória brasileira oferece diversas possibilidades que muitas pessoas desconhecem.',
      'Para empresas que operam internacionalmente, oferecemos assessoria em contratos internacionais, análise de legislação estrangeira aplicável, questões de comércio exterior, e adequação a regulamentações internacionais. Garantimos que operações internacionais sejam realizadas com segurança jurídica.',
      'Também atuamos em questões relacionadas a execução de sentenças estrangeiras no Brasil, questões de direito internacional privado, e questões relacionadas a propriedade intelectual internacional. A experiência em direito internacional é essencial para operações que envolvem múltiplas jurisdições.',
      'Questões internacionais são complexas e requerem conhecimento não apenas da legislação brasileira, mas também de tratados internacionais, convenções, e legislações estrangeiras. Nossa experiência permite navegar por essas questões de forma eficiente, sempre buscando a melhor solução para nossos clientes.',
    ],
  },
]

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find(area => area.slug === slug)
}

export function getAllPracticeAreaSlugs(): string[] {
  return practiceAreas.map(area => area.slug)
}

