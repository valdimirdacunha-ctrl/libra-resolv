/**
 * Dados centralizados dos artigos do blog da Libra Resolv
 * SEO: Cada artigo é otimizado para palavras-chave de contabilidade em São Carlos
 */

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  keywords: string;
  category: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "como-declarar-imposto-de-renda-2026-guia-completo",
    title: "Como Declarar o Imposto de Renda 2026: Guia Completo",
    excerpt:
      "Tudo o que você precisa saber para declarar o Imposto de Renda 2026 corretamente. Prazos, documentos necessários, deduções permitidas e como evitar cair na malha fina. Guia atualizado para moradores de São Carlos e região.",
    metaDescription:
      "Guia completo para declarar o Imposto de Renda 2026. Prazos, documentos, deduções e dicas para evitar a malha fina. Contador em São Carlos SP. Libra Resolv Contabilidade.",
    keywords:
      "declarar imposto de renda 2026, IRPF 2026, como declarar IR, malha fina, deduções imposto de renda, contador São Carlos, imposto de renda São Carlos",
    category: "Imposto de Renda",
    author: "Valdimir da Cunha",
    authorRole: "Contador - CRC 1SP154706",
    publishDate: "2026-03-15",
    readTime: "12 min",
    featured: true,
  },
  {
    slug: "mei-tudo-que-voce-precisa-saber-para-abrir-em-sao-carlos",
    title: "MEI: Tudo o Que Você Precisa Saber Para Abrir em São Carlos",
    excerpt:
      "Guia prático e atualizado sobre como abrir um MEI em São Carlos SP. Requisitos, limites de faturamento, atividades permitidas, obrigações fiscais e quando é hora de migrar para outro regime tributário.",
    metaDescription:
      "Como abrir MEI em São Carlos SP. Requisitos, faturamento, atividades permitidas, DAS e DASN-SIMEI. Guia completo do contador Valdimir da Cunha. Libra Resolv Contabilidade.",
    keywords:
      "abrir MEI São Carlos, MEI São Carlos, microempreendedor individual, como abrir MEI, DAS MEI, DASN-SIMEI, limite faturamento MEI 2026, contador MEI São Carlos",
    category: "MEI e Simples Nacional",
    author: "Valdimir da Cunha",
    authorRole: "Contador - CRC 1SP154706",
    publishDate: "2026-02-20",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "lucro-real-ou-lucro-presumido-qual-melhor-para-sua-empresa",
    title: "Lucro Real ou Lucro Presumido: Qual o Melhor Para Sua Empresa?",
    excerpt:
      "Entenda as diferenças entre Lucro Real e Lucro Presumido e descubra qual regime tributário é mais vantajoso para a sua empresa. Análise comparativa com exemplos práticos para empresários de São Carlos.",
    metaDescription:
      "Lucro Real ou Lucro Presumido? Comparação completa dos regimes tributários com exemplos práticos. Planejamento tributário em São Carlos SP. Libra Resolv Contabilidade.",
    keywords:
      "Lucro Real ou Lucro Presumido, regime tributário, planejamento tributário, qual regime tributário escolher, contador São Carlos, contabilidade empresarial São Carlos",
    category: "Planejamento Tributário",
    author: "Valdimir da Cunha",
    authorRole: "Contador - CRC 1SP154706",
    publishDate: "2026-01-10",
    readTime: "15 min",
    featured: false,
  },
  {
    slug: "regularizacao-de-obras-inss-passo-a-passo",
    title: "Regularização de Obras no INSS: Passo a Passo Completo",
    excerpt:
      "Guia definitivo para regularizar sua obra junto ao INSS. Entenda o que é o CNO, como calcular as contribuições previdenciárias, obter a CND e averbar a construção no cartório de imóveis em São Carlos.",
    metaDescription:
      "Como regularizar obra no INSS. Passo a passo: CNO, contribuições previdenciárias, CND e averbação. Contador especializado em São Carlos SP. Libra Resolv Contabilidade.",
    keywords:
      "regularizar obra INSS, CND obra, CNO INSS, averbação construção, contribuição previdenciária obra, regularização obra São Carlos, INSS obra São Carlos",
    category: "Regularização de Obras",
    author: "Valdimir da Cunha",
    authorRole: "Contador - CRC 1SP154706",
    publishDate: "2026-04-05",
    readTime: "14 min",
    featured: false,
  },
  {
    slug: "como-abrir-empresa-em-sao-carlos-guia-passo-a-passo",
    title: "Como Abrir Uma Empresa em São Carlos: Guia Passo a Passo",
    excerpt:
      "Guia completo para abrir sua empresa em São Carlos SP. Da escolha do tipo societário ao alvará de funcionamento, passando por CNPJ, Junta Comercial, inscrição estadual e municipal. Tudo o que você precisa saber.",
    metaDescription:
      "Como abrir empresa em São Carlos SP. Passo a passo: tipo societário, CNPJ, Junta Comercial, alvará, inscrição estadual e municipal. Libra Resolv Contabilidade. (16) 99752-1540.",
    keywords:
      "abrir empresa São Carlos, como abrir empresa, CNPJ São Carlos, alvará funcionamento São Carlos, Junta Comercial, inscrição estadual, contador abertura empresa São Carlos",
    category: "Abertura de Empresas",
    author: "Valdimir da Cunha",
    authorRole: "Contador - CRC 1SP154706",
    publishDate: "2026-03-28",
    readTime: "11 min",
    featured: false,
  },
];

export function getRelatedArticles(currentSlug: string, count: number = 3) {
  return blogArticles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, count);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString + "T12:00:00");
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
