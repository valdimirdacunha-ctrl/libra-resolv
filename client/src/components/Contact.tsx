/**
 * Contact Section - Libra Resolv
 * SEO: Semantic address, aria-labels, title attributes, descriptive alt, lazy loading
 * Design: Dark luxe with gold accents
 */

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const CITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663362290699/bWyiZvwZaPCaPdEyQMe6sQ/saocarlos-city-UbUmBjpNdLehNGdU5TFNJf.webp";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço do Escritório",
    lines: [
      "Av. Profº Luis Augusto de Oliveira, 91",
      "Sala 59 - Vila Marina",
      "São Carlos - SP, 13566-340",
      "Localizado na Avenida Plaza",
    ],
    link: "https://www.google.com/maps/place/Libra+Resolv+Contabilidade/@-21.9965908,-47.8912748,17z/data=!3m1!4b1!4m6!3m5!1s0x94b8770ad79983a1:0x73c4070b8cf6610c!8m2!3d-21.9965908!4d-47.8912748",
    linkText: "Abrir no Google Maps",
    linkTitle: "Ver localização da Libra Resolv Contabilidade no Google Maps",
  },
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    lines: ["(16) 99752-1540"],
    link: "https://wa.me/5516997521540?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Libra%20Resolv.",
    linkText: "Chamar no WhatsApp",
    linkTitle: "Enviar mensagem pelo WhatsApp para Libra Resolv Contabilidade",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["librarsv@gmail.com"],
    link: "mailto:librarsv@gmail.com",
    linkText: "Enviar e-mail",
    linkTitle: "Enviar e-mail para Libra Resolv Contabilidade",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    lines: ["Segunda a Sexta: 08:00 às 18:00", "Sábado: 08:00 às 12:00"],
    link: undefined,
    linkText: undefined,
    linkTitle: undefined,
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative py-24 section-dark"
      aria-label="Informações de contato da Libra Resolv Contabilidade em São Carlos"
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
            Contato do escritório de contabilidade em São Carlos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Entre em <span className="gold-text">Contato</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Nosso escritório de contabilidade fica na 
            Avenida Plaza em São Carlos, SP. Oferecemos consultoria contábil presencial e online. 
            Entre em contato por telefone, WhatsApp ou e-mail e agende uma consulta.
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card rounded-lg p-6 flex gap-5 hover:border-[#D4A843]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D4A843]/10 flex items-center justify-center shrink-0" aria-hidden="true">
                  <info.icon className="w-6 h-6 text-[#D4A843]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-white/60 text-sm">{line}</p>
                  ))}
                  {info.link && (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[#D4A843] text-sm font-medium hover:text-[#F0D78C] transition-colors"
                      title={info.linkTitle}
                    >
                      {info.linkText} &rarr;
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Instagram link */}
            <motion.a
              href="https://www.instagram.com/librarsv/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-card rounded-lg p-6 flex gap-5 hover:border-[#D4A843]/30 transition-all duration-300 group block"
              title="Siga a Libra Resolv Contabilidade no Instagram"
              aria-label="Seguir a Libra Resolv no Instagram - @librarsv"
            >
              <div className="w-12 h-12 rounded-lg bg-[#D4A843]/10 flex items-center justify-center shrink-0" aria-hidden="true">
                <Instagram className="w-6 h-6 text-[#D4A843]" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Instagram</h3>
                <p className="text-white/60 text-sm">@librarsv</p>
                <span className="inline-block mt-2 text-[#D4A843] text-sm font-medium group-hover:text-[#F0D78C] transition-colors">
                  Seguir no Instagram &rarr;
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* Map / City Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Google Maps Embed */}
            <div className="glass-card rounded-lg overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1849.5!2d-47.8912748!3d-21.9965908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8770ad79983a1%3A0x73c4070b8cf6610c!2sLibra%20Resolv%20Contabilidade!5e0!3m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização da Libra Resolv Contabilidade na Avenida Plaza em São Carlos SP"
              />
            </div>

            {/* City image */}
            <div className="relative rounded-lg overflow-hidden h-48">
              <img
                src={CITY_IMG}
                alt="São Carlos SP - Cidade sede da Libra Resolv Contabilidade, conhecida como Capital da Tecnologia"
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="192"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2E]/90 via-[#0B1A2E]/30 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4A843]" aria-hidden="true" />
                  <span className="text-white font-semibold">São Carlos, SP</span>
                </div>
                <p className="text-white/60 text-sm mt-1">Capital da Tecnologia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
