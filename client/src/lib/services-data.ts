/**
 * Dados centralizados dos serviços da Libra Resolv
 * Usado nas páginas individuais, Services.tsx, Footer.tsx e navegação
 */

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  metaDescription: string;
  keywords: string;
  iconName: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "simples-nacional-mei",
    title: "Simples Nacional e MEI",
    shortTitle: "Simples Nacional e MEI",
    subtitle: "Contabilidade para Microempreendedores",
    description:
      "Gestão contábil completa para microempreendedores individuais (MEI) e empresas do Simples Nacional em São Carlos e região. Abertura, regularização e acompanhamento mensal personalizado.",
    metaDescription:
      "Contabilidade para MEI e Simples Nacional em São Carlos SP. Abertura de MEI, emissão de DAS, DASN-SIMEI, regularização e acompanhamento mensal. Libra Resolv Contabilidade. (16) 99752-1540.",
    keywords:
      "MEI São Carlos, Simples Nacional São Carlos, abrir MEI São Carlos, contador MEI, DASN-SIMEI, DAS MEI, contabilidade MEI, microempreendedor individual São Carlos",
    iconName: "Receipt",
  },
  {
    slug: "imposto-de-renda",
    title: "Imposto de Renda PF/PJ/ITR",
    shortTitle: "Imposto de Renda",
    subtitle: "Declaração de IR com Segurança",
    description:
      "Declaração de Imposto de Renda para Pessoa Física (IRPF), Pessoa Jurídica (IRPJ) e Imposto Territorial Rural (ITR) em São Carlos SP. Análise completa de rendimentos, deduções e restituição.",
    metaDescription:
      "Declaração de Imposto de Renda em São Carlos SP. IRPF, IRPJ e ITR com análise completa de rendimentos e deduções. Contador especializado. Libra Resolv Contabilidade. (16) 99752-1540.",
    keywords:
      "Imposto de Renda São Carlos, declaração IR São Carlos, IRPF São Carlos, IRPJ, ITR, contador imposto de renda, restituição IR, declaração IRPF 2026",
    iconName: "FileText",
  },
  {
    slug: "lucro-real-lucro-presumido",
    title: "Lucro Real e Lucro Presumido",
    shortTitle: "Lucro Real e Presumido",
    subtitle: "Planejamento Tributário Estratégico",
    description:
      "Assessoria especializada para empresas tributadas pelo Lucro Real e Lucro Presumido em São Carlos. Planejamento tributário estratégico e otimização da carga tributária.",
    metaDescription:
      "Contabilidade para Lucro Real e Lucro Presumido em São Carlos SP. Planejamento tributário, apuração de impostos e otimização fiscal. Libra Resolv Contabilidade. (16) 99752-1540.",
    keywords:
      "Lucro Real São Carlos, Lucro Presumido São Carlos, planejamento tributário, contador Lucro Real, apuração impostos, contabilidade empresarial São Carlos",
    iconName: "Calculator",
  },
  {
    slug: "contabilidade-imobiliaria",
    title: "Contabilidade Área Imobiliária",
    shortTitle: "Contabilidade Imobiliária",
    subtitle: "Especialista em Incorporação e Construção",
    description:
      "Contabilidade especializada para incorporadoras, construtoras, loteadoras e empresas do setor imobiliário em São Carlos e região. Expertise de mais de 35 anos no segmento.",
    metaDescription:
      "Contabilidade para construtoras e incorporadoras em São Carlos SP. Mais de 35 anos de experiência no setor imobiliário. Libra Resolv Contabilidade. (16) 99752-1540.",
    keywords:
      "contabilidade imobiliária São Carlos, contador construtora, contador incorporadora, contabilidade construção civil, loteamento, incorporação imóveis São Carlos",
    iconName: "Building2",
  },
  {
    slug: "regularizacao-obras-inss",
    title: "Regularização de Obras no INSS",
    shortTitle: "Regularização de Obras",
    subtitle: "Regularização e CND de Obras",
    description:
      "Regularização completa de obras junto ao INSS em São Carlos SP. Cadastro CEI/CNO, cálculo de contribuições previdenciárias e obtenção da CND para averbação no cartório.",
    metaDescription:
      "Regularização de obras no INSS em São Carlos SP. Cadastro CEI/CNO, cálculo de contribuições, CND para averbação. Contador especializado. Libra Resolv. (16) 99752-1540.",
    keywords:
      "regularização obras INSS São Carlos, CND obra, CEI obra, CNO INSS, averbação obra, contribuição previdenciária obra, regularizar obra São Carlos",
    iconName: "HardHat",
  },
  {
    slug: "abertura-contabilidade-empresas",
    title: "Abertura e Contabilidade de Empresas",
    shortTitle: "Abertura de Empresas",
    subtitle: "Do CNPJ à Contabilidade Mensal",
    description:
      "Abertura, alteração e encerramento de empresas em São Carlos SP. Registro na Junta Comercial, obtenção de CNPJ, inscrição estadual/municipal, alvará e contabilidade mensal completa.",
    metaDescription:
      "Abertura de empresas e contabilidade mensal em São Carlos SP. CNPJ, Junta Comercial, alvará, inscrição estadual e municipal. Libra Resolv Contabilidade. (16) 99752-1540.",
    keywords:
      "abertura empresa São Carlos, abrir CNPJ São Carlos, contabilidade mensal, abrir empresa São Carlos, alvará funcionamento, inscrição estadual, contador empresarial São Carlos",
    iconName: "Briefcase",
  },
];

export function getRelatedServices(currentSlug: string) {
  return servicesData
    .filter((s) => s.slug !== currentSlug)
    .map((s) => ({
      title: s.shortTitle,
      slug: s.slug,
      description: s.description,
    }));
}
