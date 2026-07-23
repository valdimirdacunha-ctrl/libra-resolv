/**
 * Página: Regularização de Obras no INSS em São Carlos SP
 * SEO: Keywords long-tail, conteúdo rico, schema Service
 */

import { HardHat, CheckCircle, AlertTriangle, FileCheck, Building, ClipboardList, Scale } from "lucide-react";
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicesData, getRelatedServices } from "@/lib/services-data";

const service = servicesData.find((s) => s.slug === "regularizacao-obras-inss")!;

export default function RegularizacaoObrasINSS() {
  return (
    <ServicePageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      metaDescription={service.metaDescription}
      keywords={service.keywords}
      slug={service.slug}
      icon={<HardHat className="w-8 h-8 text-[#D4A843]" />}
      relatedServices={getRelatedServices(service.slug)}
    >
      {/* O que é a regularização */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          O que é a <span className="gold-text">Regularização de Obras</span> no INSS?
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            Toda obra de construção civil no Brasil — seja residencial, comercial ou industrial — precisa ser regularizada junto ao INSS (Instituto Nacional do Seguro Social) para que possa ser averbada no Cartório de Registro de Imóveis. Essa regularização envolve o cadastro da obra, o cálculo e recolhimento das contribuições previdenciárias incidentes sobre a mão de obra utilizada e a obtenção da <strong>CND (Certidão Negativa de Débitos)</strong>.
          </p>
          <p>
            Sem a CND da obra, não é possível averbar a construção na matrícula do imóvel, o que impede a venda, financiamento ou qualquer negociação formal do imóvel construído.
          </p>
        </div>
      </motion.article>

      {/* Quando é necessário */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Quando é <span className="gold-text">necessário</span> regularizar?
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <ul className="space-y-3">
            {[
              "Construção de imóvel residencial (casa, sobrado, edifício)",
              "Construção de imóvel comercial ou industrial",
              "Reforma ou ampliação com acréscimo de área",
              "Demolição total ou parcial de edificação",
              "Obras de loteamento e urbanização",
              "Regularização de construções antigas sem averbação",
              "Venda ou financiamento de imóvel construído",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>

      {/* Etapas do processo */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Etapas da <span className="gold-text">Regularização</span>
        </h2>
        <div className="space-y-6">
          {[
            {
              step: "01",
              icon: ClipboardList,
              title: "Cadastro CEI/CNO",
              desc: "Registro da obra no Cadastro Nacional de Obras (CNO), antigo CEI, junto à Receita Federal. Esse cadastro é obrigatório e identifica a obra para fins previdenciários.",
            },
            {
              step: "02",
              icon: Scale,
              title: "Cálculo das Contribuições",
              desc: "Apuração do valor das contribuições previdenciárias devidas, com base na área construída, tipo de obra, padrão de acabamento e mão de obra utilizada. Utilizamos a aferição indireta (CUB) ou a contabilidade regular, conforme o caso.",
            },
            {
              step: "03",
              icon: Building,
              title: "Recolhimento e Declaração",
              desc: "Emissão das guias GPS para recolhimento das contribuições e envio da DCTF/DCTFWeb com as informações da obra. Acompanhamento do processamento junto à Receita Federal.",
            },
            {
              step: "04",
              icon: FileCheck,
              title: "Obtenção da CND",
              desc: "Emissão da Certidão Negativa de Débitos (CND) da obra, documento necessário para a averbação da construção no Cartório de Registro de Imóveis.",
            },
          ].map((item) => (
            <div key={item.step} className="glass-card rounded-lg p-6 flex gap-5">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#D4A843]/10 flex items-center justify-center border border-[#D4A843]/20">
                  <span className="text-[#D4A843] font-bold text-lg">{item.step}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-5 h-5 text-[#D4A843]" />
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-white/60 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.article>

      {/* Nossos serviços */}
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
            { icon: ClipboardList, text: "Abertura e encerramento de CNO (Cadastro Nacional de Obras)" },
            { icon: Scale, text: "Cálculo das contribuições previdenciárias da obra" },
            { icon: FileCheck, text: "Emissão de guias GPS e DCTFWeb" },
            { icon: CheckCircle, text: "Obtenção da CND para averbação no cartório" },
            { icon: Building, text: "Regularização de obras antigas e em atraso" },
            { icon: HardHat, text: "Assessoria completa para construtoras e incorporadoras" },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-lg p-5 flex items-start gap-4">
              <item.icon className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
              <span className="text-white/80 text-[15px]">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.article>

      {/* Diferencial */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-lg p-8 border-[#D4A843]/20"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Experiência que faz a <span className="gold-text">diferença</span>
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            Com mais de 35 anos de atuação no setor imobiliário e de construção civil, o contador Valdimir da Cunha (CRC: 1SP154706) possui ampla experiência na regularização de obras de todos os tipos e portes. Desde casas residenciais até grandes empreendimentos, a Libra Resolv conduz todo o processo com agilidade e segurança.
          </p>
          <p>
            Atendimento em São Carlos e região, presencial e online. WhatsApp <strong>(16) 99752-1540</strong> | E-mail: <strong>librarsv@gmail.com</strong>.
          </p>
        </div>
      </motion.article>
    </ServicePageLayout>
  );
}
