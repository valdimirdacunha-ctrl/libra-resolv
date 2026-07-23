/**
 * CTA Section - "Não deixe o Leão esperando"
 * Uses the lion IR image as background for brand identity
 */

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const LEAO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663362290699/bWyiZvwZaPCaPdEyQMe6sQ/leao-ir_605237f1.jpeg";
const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663362290699/bWyiZvwZaPCaPdEyQMe6sQ/cta-bg-e7CyN83sWK897TWr9Y7vXy.webp";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden" aria-label="Declare seu Imposto de Renda com a Libra Resolv Contabilidade">
      {/* Background with geometric pattern */}
      <div className="absolute inset-0">
        <img src={CTA_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0B1A2E]/85" />
      </div>

      {/* Gold decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/40 to-transparent" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Lion image - left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4A843]/5 rounded-lg blur-2xl" />
              <img
                src={LEAO_IMG}
                alt="Não deixe o Leão esperando - Declare seu Imposto de Renda com a Libra Resolv Contabilidade em São Carlos SP"
                loading="lazy"
                width="384"
                height="480"
                className="relative w-full max-w-sm mx-auto rounded-lg shadow-2xl shadow-black/40 border border-[#D4A843]/10"
              />
            </div>
          </motion.div>

          {/* Text content - right side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Não deixe o <span className="gold-text">Leão</span> esperando
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Entre em contato agora e resolva suas questões contábeis com quem entende do assunto. 
              Atendimento rápido e personalizado via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5516997521540?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Libra%20Resolv."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-bold text-lg rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300 shadow-lg shadow-[#D4A843]/25 group"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                (16) 99752-1540
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="mailto:librarsv@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#D4A843]/40 text-[#D4A843] font-semibold text-lg rounded-sm hover:bg-[#D4A843]/10 transition-all duration-300"
              >
                Enviar E-mail
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
