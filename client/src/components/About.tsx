/**
 * About Section - Libra Resolv
 * SEO: Person schema, semantic tags, keyword-rich content, descriptive alt
 * Design: Dark luxe with gold accents
 */

import { motion } from "framer-motion";
import { Award, MapPin, Shield, Users } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663362290699/bWyiZvwZaPCaPdEyQMe6sQ/about-bg-SnQCD6by4jXC69UWWowYo3.webp";
const CONTADOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663362290699/bWyiZvwZaPCaPdEyQMe6sQ/contador_8a34e0f2.jpeg";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 overflow-hidden section-darker"
      aria-label="Sobre a Libra Resolv Contabilidade e o contador Valdimir da Cunha"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <img src={ABOUT_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#D4A843]/40 rounded-tl-lg" aria-hidden="true" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#D4A843]/40 rounded-br-lg" aria-hidden="true" />
              
              <img
                src={CONTADOR_IMG}
                alt="Valdimir da Cunha - Contador responsável pela Libra Resolv Contabilidade em São Carlos SP - CRC 1SP154706 - Especialista em contabilidade imobiliária e regularização de obras"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl shadow-black/40"
                loading="lazy"
                width="400"
                height="400"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-2 lg:right-4 glass-card rounded-lg p-4 gold-glow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4A843]/20 flex items-center justify-center" aria-hidden="true">
                  <Award className="w-5 h-5 text-[#D4A843]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">CRC: 1SP154706</div>
                  <div className="text-xs text-white/50">Registro ativo no CRC-SP</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div>
              <span className="text-[#D4A843] text-sm font-semibold tracking-[0.2em] uppercase">
                Escritório de Contabilidade em São Carlos SP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                Sobre a <span className="gold-text">Libra Resolv</span>
              </h2>
            </div>

            <p className="text-white/70 text-lg leading-relaxed">
              A <strong className="text-white" itemProp="worksFor">Libra Resolv Contabilidade</strong> é um escritório 
              de assessoria e consultoria contábil localizado em <strong className="text-white">São Carlos, SP</strong>, 
              liderado pelo contador <strong className="text-white"><span itemProp="name">Valdimir da Cunha</span></strong> 
              (<span itemProp="qualifications">CRC: 1SP154706</span>), profissional especializado na atividade de Incorporação 
              e Construção de Imóveis e Loteamento. Desde 1990 até o momento, Valdimir 
              atuou como contador responsável pela antiga Construtora Bianco e atual 
              Estilo Construtora São Carlos Ltda. Em 2023, fundou a empresa Libra Resolv, 
              prestando serviços de assessoria e consultoria contábil para empresas de 
              segmentos diversos.
            </p>
            <meta itemProp="jobTitle" content="Contador" />

            <p className="text-white/70 text-lg leading-relaxed">
              Com dedicação e expertise, nosso escritório de contabilidade atende pessoas físicas e jurídicas 
              com soluções de consultoria contábil e assessoria tributária completas e personalizadas. 
              Se você está procurando um contador em São Carlos, nosso compromisso é resolver suas questões 
              contábeis com agilidade, transparência e segurança, permitindo que você foque no que 
              realmente importa: o crescimento do seu negócio.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4" role="list" aria-label="Diferenciais da Libra Resolv">
              {[
                { icon: Shield, title: "Confiança", desc: "Nota 5.0 no Google com 26 avaliações" },
                { icon: Users, title: "Atendimento", desc: "Personalizado e ágil" },
                { icon: Award, title: "Expertise", desc: "Profissional qualificado com CRC ativo" },
                { icon: MapPin, title: "São Carlos, SP", desc: "Atendimento presencial e online" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4" role="listitem">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A843]/10 flex items-center justify-center shrink-0" aria-hidden="true">
                    <item.icon className="w-5 h-5 text-[#D4A843]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-white/50 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
