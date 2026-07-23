/**
 * Página: Simples Nacional e MEI em São Carlos SP
 * SEO: Keywords long-tail, conteúdo rico, schema Service
 */

import { Receipt, CheckCircle, AlertTriangle, Clock, DollarSign, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicesData, getRelatedServices } from "@/lib/services-data";

const service = servicesData.find((s) => s.slug === "simples-nacional-mei")!;

export default function SimplesNacionalMEI() {
  return (
    <ServicePageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      metaDescription={service.metaDescription}
      keywords={service.keywords}
      slug={service.slug}
      icon={<Receipt className="w-8 h-8 text-[#D4A843]" />}
      relatedServices={getRelatedServices(service.slug)}
    >
      {/* O que é o Simples Nacional */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          O que é o <span className="gold-text">Simples Nacional</span>?
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            O Simples Nacional é um regime tributário simplificado destinado a microempresas (ME) e empresas de pequeno porte (EPP) com faturamento anual de até R$ 4,8 milhões. Ele unifica o pagamento de diversos impostos federais, estaduais e municipais em uma única guia mensal (DAS), facilitando a gestão tributária do seu negócio.
          </p>
          <p>
            Já o <strong>Microempreendedor Individual (MEI)</strong> é uma categoria simplificada para profissionais autônomos e pequenos empreendedores com faturamento anual de até R$ 81.000. O MEI paga um valor fixo mensal e tem acesso a benefícios previdenciários como aposentadoria e auxílio-doença.
          </p>
        </div>
      </motion.article>

      {/* Nossos Serviços */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          O que fazemos por <span className="gold-text">você</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: FileCheck, text: "Abertura de MEI e empresas do Simples Nacional" },
            { icon: DollarSign, text: "Emissão mensal do DAS (guia de pagamento)" },
            { icon: FileCheck, text: "Declaração Anual do MEI (DASN-SIMEI)" },
            { icon: Clock, text: "Acompanhamento mensal de faturamento e limites" },
            { icon: AlertTriangle, text: "Regularização de MEI e Simples em atraso" },
            { icon: CheckCircle, text: "Desenquadramento e migração de regime tributário" },
            { icon: DollarSign, text: "Cálculo e planejamento tributário" },
            { icon: FileCheck, text: "Emissão de notas fiscais e orientação" },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-lg p-5 flex items-start gap-4"
            >
              <item.icon className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
              <span className="text-white/80 text-[15px]">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.article>

      {/* Vantagens do Simples Nacional */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Vantagens do <span className="gold-text">Simples Nacional</span>
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
              <span><strong>Pagamento unificado:</strong> Todos os impostos em uma única guia (DAS), incluindo IRPJ, CSLL, PIS, COFINS, IPI, ICMS, ISS e CPP.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
              <span><strong>Alíquotas reduzidas:</strong> Tributação progressiva de acordo com o faturamento, geralmente menor que outros regimes.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
              <span><strong>Menos burocracia:</strong> Obrigações acessórias simplificadas e menos declarações a entregar.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
              <span><strong>Facilidade em licitações:</strong> Preferência em empates e critérios de desempate em licitações públicas.</span>
            </li>
          </ul>
        </div>
      </motion.article>

      {/* Por que escolher a Libra Resolv */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-lg p-8 border-[#D4A843]/20"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Por que escolher a <span className="gold-text">Libra Resolv</span>?
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            Na Libra Resolv Contabilidade, oferecemos atendimento personalizado para MEIs e empresas do Simples Nacional em São Carlos e região. Com mais de 35 anos de experiência, o contador Valdimir da Cunha (CRC: 1SP154706) garante que sua empresa esteja sempre em dia com as obrigações fiscais.
          </p>
          <p>
            Nosso atendimento é presencial e online, de segunda a sexta das 08h às 18h e sábados das 08h às 12h. Entre em contato pelo WhatsApp <strong>(16) 99752-1540</strong> ou pelo e-mail <strong>librarsv@gmail.com</strong>.
          </p>
        </div>
      </motion.article>
    </ServicePageLayout>
  );
}
