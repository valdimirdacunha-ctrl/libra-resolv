/**
 * FAQ Section - Perguntas Frequentes
 * Design: Dark Luxe Contábil - azul escuro + dourado
 * Accordion interativo com framer-motion
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  // Serviços Gerais
  {
    category: "Serviços Gerais",
    question: "Quais serviços a Libra Resolv oferece?",
    answer:
      "Oferecemos uma gama completa de serviços contábeis, incluindo: Simples Nacional e MEI, Imposto de Renda para Pessoa Física, Pessoa Jurídica e ITR, Lucro Real e Lucro Presumido, Contabilidade para a Área Imobiliária, Regularização de Obras no INSS, e Abertura e Contabilidade mensal de Empresas. Cada serviço é personalizado de acordo com a necessidade do cliente.",
  },
  {
    category: "Serviços Gerais",
    question: "Vocês atendem clientes de outras cidades além de São Carlos?",
    answer:
      "Sim! Embora nosso escritório esteja localizado em São Carlos, SP (na Avenida Plaza), atendemos clientes de toda a região e também de forma remota. Utilizamos ferramentas digitais para garantir um atendimento ágil e eficiente, independentemente da sua localização.",
  },
  {
    category: "Serviços Gerais",
    question: "Como funciona o atendimento da Libra Resolv?",
    answer:
      "Nosso atendimento é personalizado e pode ser feito presencialmente no escritório, por WhatsApp, telefone ou e-mail. Funcionamos de segunda a sexta, das 08h às 18h, e de sábado, das 08h às 12h. Para iniciar, basta entrar em contato pelo WhatsApp (16) 99752-1540 ou preencher o formulário de orçamento no site.",
  },
  // Imposto de Renda
  {
    category: "Imposto de Renda",
    question: "Quais documentos preciso para declarar o Imposto de Renda?",
    answer:
      "Os principais documentos são: CPF e documento de identidade, informes de rendimentos (empregador, bancos, corretoras), comprovantes de despesas médicas e educação, recibos de aluguel, documentos de compra e venda de bens (imóveis, veículos), informe de rendimentos de investimentos, e a declaração do ano anterior (se houver). Enviamos uma lista detalhada e personalizada ao iniciar o serviço.",
  },
  {
    category: "Imposto de Renda",
    question: "Qual o prazo para entregar a declaração do Imposto de Renda?",
    answer:
      "O prazo geralmente vai de março a maio de cada ano, conforme definido pela Receita Federal. Recomendamos que os documentos sejam reunidos com antecedência para evitar correria e possíveis erros. Quanto antes você enviar seus documentos, mais rápido processamos sua declaração e, se houver restituição, mais cedo ela será recebida.",
  },
  {
    category: "Imposto de Renda",
    question: "Vocês fazem declaração de ITR (Imposto Territorial Rural)?",
    answer:
      "Sim, realizamos a Declaração do Imposto sobre a Propriedade Territorial Rural (ITR). Esse serviço é essencial para proprietários de imóveis rurais e possui prazos específicos. Cuidamos de todo o processo, desde a apuração do valor da terra nua até a transmissão da declaração à Receita Federal.",
  },
  // Empresas
  {
    category: "Empresas",
    question: "Como funciona a abertura de uma empresa?",
    answer:
      "O processo de abertura envolve: definição do tipo societário (MEI, ME, EIRELI, LTDA, etc.), escolha do regime tributário mais vantajoso, registro na Junta Comercial, obtenção do CNPJ junto à Receita Federal, inscrição estadual e municipal, e alvará de funcionamento. Cuidamos de todas as etapas burocráticas para que você possa focar no seu negócio.",
  },
  {
    category: "Empresas",
    question: "Qual a diferença entre Simples Nacional, Lucro Presumido e Lucro Real?",
    answer:
      "O Simples Nacional é um regime simplificado para micro e pequenas empresas com faturamento anual de até R$ 4,8 milhões, com alíquotas reduzidas. O Lucro Presumido é indicado para empresas com faturamento de até R$ 78 milhões, onde o imposto é calculado sobre uma margem de lucro presumida. O Lucro Real é obrigatório para empresas com faturamento acima de R$ 78 milhões ou de determinados setores, e o imposto incide sobre o lucro efetivo. Analisamos cada caso para indicar o regime mais econômico.",
  },
  {
    category: "Empresas",
    question: "Quanto custa a contabilidade mensal para minha empresa?",
    answer:
      "O valor da contabilidade mensal varia conforme o porte da empresa, regime tributário, volume de notas fiscais e complexidade das operações. Oferecemos planos acessíveis e personalizados. Entre em contato pelo WhatsApp ou preencha o formulário de orçamento para receber uma proposta sem compromisso.",
  },
  // Área Imobiliária
  {
    category: "Área Imobiliária",
    question: "O que é a contabilidade para a área imobiliária?",
    answer:
      "É uma contabilidade especializada para incorporadoras, construtoras, imobiliárias e empresas do setor imobiliário. Envolve o controle contábil de empreendimentos, apuração de tributos específicos do setor (como o RET - Regime Especial de Tributação), gestão de custos de obra e obrigações acessórias próprias da atividade imobiliária.",
  },
  {
    category: "Área Imobiliária",
    question: "Como funciona a regularização de obras no INSS?",
    answer:
      "A regularização de obras no INSS (matrícula CEI/CNO) é obrigatória para construções, reformas e demolições. O processo inclui: cadastro da obra, cálculo das contribuições previdenciárias devidas, recolhimento dos valores e obtenção da CND (Certidão Negativa de Débitos) da obra. Sem essa regularização, não é possível averbar a construção no cartório de registro de imóveis.",
  },
  // MEI
  {
    category: "MEI",
    question: "Preciso de contador sendo MEI?",
    answer:
      "Embora o MEI não seja obrigado por lei a ter um contador, contar com assessoria contábil traz diversas vantagens: orientação sobre o limite de faturamento (R$ 81 mil/ano), auxílio na declaração anual (DASN-SIMEI), planejamento para migração de regime quando necessário, emissão correta de notas fiscais e orientação sobre direitos previdenciários. Muitos MEIs perdem dinheiro ou têm problemas com o fisco por falta de orientação adequada.",
  },
  {
    category: "MEI",
    question: "Minha empresa ultrapassou o limite do MEI. O que fazer?",
    answer:
      "Se o faturamento ultrapassou R$ 81 mil/ano, é necessário fazer o desenquadramento do MEI e migrar para Microempresa (ME). Cuidamos de todo o processo de transição, incluindo a escolha do melhor regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real), alteração cadastral e adequação das obrigações fiscais. É importante agir rapidamente para evitar multas e cobranças retroativas.",
  },
];

// Group FAQs by category
const categories = Array.from(new Set(faqItems.map((item) => item.category)));

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 rounded-lg ${
          isOpen
            ? "glass-card border-[#D4A843]/30"
            : "glass-card hover:border-[#D4A843]/20"
        }`}
        aria-expanded={isOpen}
      >
        <div
          className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 ${
            isOpen ? "bg-[#D4A843]/20" : "bg-[#D4A843]/10"
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 text-[#D4A843] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <div className="flex-1">
          <h3
            className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
              isOpen ? "text-[#D4A843]" : "text-white"
            }`}
            style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif" }}
          >
            {item.question}
          </h3>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-white/60 text-[15px] leading-relaxed mt-4 pr-4">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  // Inject FAQPage JSON-LD schema for Google rich snippets
  useEffect(() => {
    const existingFaqLd = document.querySelector('script[data-schema="faq-page"]');
    if (existingFaqLd) return; // Already injected

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "faq-page");
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-schema="faq-page"]');
      if (el) el.remove();
    };
  }, []);

  const filteredItems = faqItems.filter(
    (item) => item.category === activeCategory
  );

  const handleToggle = (globalIndex: number) => {
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };

  return (
    <section id="faq" className="relative py-24 section-dark">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/30 to-transparent" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#D4A843] text-sm font-semibold tracking-[0.2em] uppercase">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Perguntas <span className="gold-text">Frequentes</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Reunimos as dúvidas mais comuns dos nossos clientes. Se não encontrar
            a resposta que procura, entre em contato conosco.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] shadow-lg shadow-[#D4A843]/20"
                  : "border border-[#D4A843]/20 text-white/60 hover:text-[#D4A843] hover:border-[#D4A843]/40"
              }`}
              style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif" }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredItems.map((item, index) => {
            const globalIndex = faqItems.indexOf(item);
            return (
              <FAQAccordionItem
                key={globalIndex}
                item={item}
                isOpen={openIndex === globalIndex}
                onToggle={() => handleToggle(globalIndex)}
                index={index}
              />
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-14"
        >
          <div className="glass-card rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-[#D4A843]" />
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif" }}
              >
                Não encontrou sua resposta?
              </h3>
            </div>
            <p className="text-white/50 text-sm mb-6">
              Nossa equipe está pronta para esclarecer qualquer dúvida. Fale
              conosco pelo WhatsApp ou preencha o formulário de orçamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5516997521540?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os%20da%20Libra%20Resolv."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-bold text-sm rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300 shadow-lg shadow-[#D4A843]/20"
              >
                <MessageCircle className="w-4 h-4" />
                Perguntar pelo WhatsApp
              </a>
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#D4A843]/30 text-[#D4A843] font-semibold text-sm rounded-sm hover:bg-[#D4A843]/10 transition-all duration-300"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
