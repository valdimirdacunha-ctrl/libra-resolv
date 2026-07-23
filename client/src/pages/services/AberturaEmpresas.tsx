/**
 * Página: Abertura e Contabilidade de Empresas em São Carlos SP
 * SEO: Keywords long-tail, conteúdo rico, schema Service
 */

import { Briefcase, CheckCircle, FileText, Building2, ClipboardList, TrendingUp, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicesData, getRelatedServices } from "@/lib/services-data";

const service = servicesData.find((s) => s.slug === "abertura-contabilidade-empresas")!;

export default function AberturaEmpresas() {
  return (
    <ServicePageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      metaDescription={service.metaDescription}
      keywords={service.keywords}
      slug={service.slug}
      icon={<Briefcase className="w-8 h-8 text-[#D4A843]" />}
      relatedServices={getRelatedServices(service.slug)}
    >
      {/* Sobre o serviço */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Do CNPJ à <span className="gold-text">Contabilidade Mensal</span>
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            Abrir uma empresa envolve diversas etapas burocráticas que, quando mal conduzidas, podem gerar atrasos e custos desnecessários. Na Libra Resolv, cuidamos de todo o processo de abertura da sua empresa em São Carlos — desde a escolha do tipo societário e regime tributário até a obtenção do CNPJ, inscrição estadual, municipal e alvará de funcionamento.
          </p>
          <p>
            Após a abertura, oferecemos <strong>contabilidade mensal completa</strong> para que sua empresa esteja sempre em dia com as obrigações fiscais, trabalhistas e contábeis, permitindo que você foque no crescimento do seu negócio.
          </p>
        </div>
      </motion.article>

      {/* Etapas da abertura */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Etapas da <span className="gold-text">Abertura</span> de Empresa
        </h2>
        <div className="space-y-6">
          {[
            {
              step: "01",
              icon: ClipboardList,
              title: "Planejamento e Consultoria",
              desc: "Análise do seu negócio para definir o melhor tipo societário (MEI, EI, EIRELI, LTDA, SLU), natureza jurídica, CNAE adequado e regime tributário mais vantajoso (Simples Nacional, Lucro Presumido ou Lucro Real).",
            },
            {
              step: "02",
              icon: FileText,
              title: "Registro na Junta Comercial",
              desc: "Elaboração do contrato social ou requerimento de empresário, registro na JUCESP (Junta Comercial do Estado de São Paulo) e obtenção do NIRE.",
            },
            {
              step: "03",
              icon: Building2,
              title: "Obtenção do CNPJ",
              desc: "Inscrição no Cadastro Nacional de Pessoa Jurídica junto à Receita Federal, com a definição das atividades econômicas (CNAEs) da empresa.",
            },
            {
              step: "04",
              icon: Shield,
              title: "Inscrições e Alvarás",
              desc: "Inscrição Estadual (ICMS), Inscrição Municipal (ISS), alvará de funcionamento na Prefeitura de São Carlos, licenças sanitárias e ambientais quando necessário.",
            },
            {
              step: "05",
              icon: Users,
              title: "Início das Operações",
              desc: "Configuração de emissão de notas fiscais (NF-e, NFS-e), certificado digital, registro de funcionários e início da contabilidade mensal.",
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

      {/* Contabilidade mensal */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Contabilidade <span className="gold-text">Mensal</span> Completa
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: FileText, text: "Escrituração contábil e fiscal" },
            { icon: TrendingUp, text: "Apuração e emissão de guias de impostos" },
            { icon: Users, text: "Folha de pagamento e obrigações trabalhistas" },
            { icon: ClipboardList, text: "Obrigações acessórias (SPED, EFD, DCTF, DIRF)" },
            { icon: Shield, text: "Balancetes e demonstrações contábeis" },
            { icon: CheckCircle, text: "Planejamento tributário contínuo" },
            { icon: FileText, text: "Emissão de certidões negativas" },
            { icon: TrendingUp, text: "Relatórios gerenciais para tomada de decisão" },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-lg p-5 flex items-start gap-4">
              <item.icon className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
              <span className="text-white/80 text-[15px]">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.article>

      {/* Outros serviços empresariais */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Também <span className="gold-text">realizamos</span>
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <ul className="space-y-3">
            {[
              "Alteração contratual (mudança de sócios, endereço, atividades, capital social)",
              "Transformação de tipo societário (EI para LTDA, MEI para ME, etc.)",
              "Encerramento de empresas (distrato social, baixa de CNPJ)",
              "Regularização de empresas com pendências fiscais",
              "Migração entre regimes tributários",
              "Obtenção de certificado digital (e-CNPJ, e-CPF)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>

      {/* CTA */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-lg p-8 border-[#D4A843]/20"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Abra sua empresa com <span className="gold-text">segurança</span>
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            Na Libra Resolv Contabilidade, o contador Valdimir da Cunha (CRC: 1SP154706) cuida de toda a burocracia para que você possa focar no que realmente importa: o seu negócio. Com mais de 35 anos de experiência, oferecemos atendimento personalizado para empresas de todos os portes e segmentos em São Carlos e região.
          </p>
          <p>
            Agende uma consulta: WhatsApp <strong>(16) 99752-1540</strong> | E-mail: <strong>librarsv@gmail.com</strong>. Atendimento de segunda a sexta das 08h às 18h e sábados das 08h às 12h.
          </p>
        </div>
      </motion.article>
    </ServicePageLayout>
  );
}
