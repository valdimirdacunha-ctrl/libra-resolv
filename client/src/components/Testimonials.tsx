/**
 * Testimonials Section - Libra Resolv
 * SEO: Review schema microdata, aria-labels, semantic blockquote tags
 * Design: Dark luxe with gold accents
 */

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Eleusis",
    role: "Empresário da \"Beleza Rara Perfumaria\"",
    text: "Excelente atendimento! A Libra resolveu todas as questões contábeis da minha empresa com muita agilidade e profissionalismo. Recomendo a todos.",
    rating: 5,
  },
  {
    name: "Dagmar",
    role: "Pessoa Física",
    text: "Fiz minha declaração de Imposto de Renda com a Libra Resolv e fiquei muito satisfeito. Processo rápido, transparente e sem dor de cabeça. Nota 10!",
    rating: 5,
  },
  {
    name: "Tijuca Empreendimentos Imobiliários Ltda.",
    role: "Incorporadora",
    text: "A regularização da nossa obra no INSS foi feita com total competência. O Valdimir é um profissional extremamente dedicado e conhecedor da área.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative py-24 section-darker"
      aria-label="Depoimentos de clientes da Libra Resolv Contabilidade"
    >
      <div className="container">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A843] text-sm font-semibold tracking-[0.2em] uppercase">
            Avaliações de clientes em São Carlos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            O que nossos <span className="gold-text">clientes</span> dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4" aria-label="Avaliação média: 5.0 de 5 estrelas com 26 avaliações no Google">
            <div className="flex gap-1" role="img" aria-label="5 estrelas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4A843] text-[#D4A843]" />
              ))}
            </div>
            <span className="text-white/70 text-lg ml-2">5.0 no Google (26 avaliações)</span>
          </div>
        </motion.header>

        <div
          className="grid md:grid-cols-3 gap-8"
          role="list"
          aria-label="Depoimentos de clientes"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card rounded-lg p-8 relative group hover:border-[#D4A843]/30 transition-all duration-500"
              role="listitem"
              itemScope
              itemType="https://schema.org/Review"
            >
              <Quote className="w-10 h-10 text-[#D4A843]/20 absolute top-6 right-6" aria-hidden="true" />
              
              <div className="flex gap-1 mb-6" role="img" aria-label={`${testimonial.rating} estrelas`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A843] text-[#D4A843]" />
                ))}
              </div>
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                <meta itemProp="bestRating" content="5" />
              </div>

              <blockquote className="text-white/70 leading-relaxed mb-6 text-[15px] italic" itemProp="reviewBody">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className="border-t border-white/10 pt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="font-semibold text-white text-sm" itemProp="name">{testimonial.name}</div>
                <div className="text-white/40 text-xs">{testimonial.role}</div>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
