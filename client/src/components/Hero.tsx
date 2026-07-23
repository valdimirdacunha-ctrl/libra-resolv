/**
 * Hero Section - Libra Resolv
 * Design: Dark luxe - navy background with golden accents
 * SEO: Semantic HTML5, optimized h1, descriptive alt tags, aria-labels
 */

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663362290699/bWyiZvwZaPCaPdEyQMe6sQ/hero-bg-dXGuNKRj4vXQRLSzD2Pqre.webp";
const LOGO_SQUARE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663362290699/bWyiZvwZaPCaPdEyQMe6sQ/logo-square_13f71bfb.jpeg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Escritório de contabilidade e consultoria contábil em São Carlos SP - Libra Resolv"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_BG}
          alt="Escritório de contabilidade profissional - Libra Resolv em São Carlos SP"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2E]/95 via-[#0B1A2E]/85 to-[#0B1A2E]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2E] via-transparent to-transparent" />
      </div>

      {/* Decorative gold line left */}
      <div className="absolute left-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-[#D4A843]/30 to-transparent hidden lg:block" aria-hidden="true" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Google Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A843]/30 bg-[#D4A843]/5"
              aria-label="Avaliação 5.0 estrelas no Google com 26 avaliações"
            >
              <div className="flex gap-0.5" role="img" aria-label="5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4A843] text-[#D4A843]" />
                ))}
              </div>
              <span className="text-sm text-[#D4A843] font-medium">
                5.0 no Google &mdash; 26 avaliações
              </span>
            </motion.div>

            {/* SEO-optimized H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
              <span className="text-white">Contador e Contabilidade</span>
              <br />
              <span className="gold-text">que resolve</span>
              <br />
              <span className="text-white/90 text-3xl sm:text-4xl lg:text-5xl font-medium">
                para sua empresa em São Carlos - SP
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/65 max-w-xl leading-relaxed">
              Escritório de assessoria e consultoria contábil em São Carlos, SP. 
              Cuidamos do seu Imposto de Renda, Simples Nacional, MEI, 
              Lucro Real, Regularização de obras no INSS e muito mais. 
              Procurando um contador perto de você? Conte com mais de 35 anos de excelência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-bold text-base rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300 shadow-lg shadow-[#D4A843]/25 group"
                aria-label="Solicitar orçamento de serviços contábeis"
              >
                Solicite um Orçamento
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#D4A843]/30 text-[#D4A843] font-semibold text-base rounded-sm hover:bg-[#D4A843]/10 transition-all duration-300"
                aria-label="Ver nossos serviços de contabilidade"
              >
                Nossos Serviços
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4" role="list" aria-label="Números da Libra Resolv">
              <div role="listitem">
                <div className="text-2xl sm:text-3xl font-bold gold-text">35+</div>
                <div className="text-sm text-white/50 font-sans">Anos de experiência</div>
              </div>
              <div className="w-px bg-[#D4A843]/20" aria-hidden="true" />
              <div role="listitem">
                <div className="text-2xl sm:text-3xl font-bold gold-text">100+</div>
                <div className="text-sm text-white/50 font-sans">Clientes atendidos</div>
              </div>
              <div className="w-px bg-[#D4A843]/20" aria-hidden="true" />
              <div role="listitem">
                <div className="text-2xl sm:text-3xl font-bold gold-text">5.0</div>
                <div className="text-sm text-white/50 font-sans">Nota no Google</div>
              </div>
            </div>
          </motion.div>

          {/* Logo / Visual - 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex lg:col-span-2 justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-8 rounded-full bg-[#D4A843]/8 blur-3xl" aria-hidden="true" />
              {/* Inner glow ring */}
              <div className="absolute -inset-3 rounded-2xl border border-[#D4A843]/10" aria-hidden="true" />
              <img
                src={LOGO_SQUARE}
                alt="Logo da Libra Resolv Contabilidade - Balança e caduceu dourado, símbolo de equilíbrio e profissionalismo contábil em São Carlos SP"
                className="relative w-64 xl:w-72 h-auto rounded-xl shadow-2xl shadow-black/40"
                width="288"
                height="288"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1A2E] to-transparent" aria-hidden="true" />
    </section>
  );
}
