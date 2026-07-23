/**
 * Footer - Libra Resolv
 * SEO: Semantic footer, address tag, microdata, aria-labels, internal links
 * Design: Dark luxe with gold accents
 */

import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const LOGO_HORIZONTAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663362290699/bWyiZvwZaPCaPdEyQMe6sQ/logo-horizontal_5a7a9d41.jpeg";

const footerServices = [
  { label: "Simples Nacional e MEI", slug: "simples-nacional-mei" },
  { label: "Imposto de Renda PF/PJ/ITR", slug: "imposto-de-renda" },
  { label: "Lucro Real e Lucro Presumido", slug: "lucro-real-lucro-presumido" },
  { label: "Contabilidade Imobiliária", slug: "contabilidade-imobiliaria" },
  { label: "Regularização Obras INSS", slug: "regularizacao-obras-inss" },
  { label: "Abertura de Empresas", slug: "abertura-contabilidade-empresas" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#071220] border-t border-[#D4A843]/10"
      role="contentinfo"
      aria-label="Rodapé do site da Libra Resolv Contabilidade"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <img
              src={LOGO_HORIZONTAL}
              alt="Libra Resolv Contabilidade - Escritório de Contabilidade em São Carlos SP"
              className="h-16 w-auto object-contain"
              loading="lazy"
              width="200"
              height="64"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Assessoria e Consultoria Contábil em São Carlos, SP. 
              Soluções completas para pessoas físicas e jurídicas com mais de 35 anos de experiência.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/librarsv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#D4A843]/10 flex items-center justify-center hover:bg-[#D4A843]/20 transition-colors"
                aria-label="Siga a Libra Resolv no Instagram"
                title="Instagram da Libra Resolv Contabilidade"
              >
                <Instagram className="w-5 h-5 text-[#D4A843]" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/5516997521540"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#D4A843]/10 flex items-center justify-center hover:bg-[#D4A843]/20 transition-colors"
                aria-label="Fale com a Libra Resolv pelo WhatsApp"
                title="WhatsApp da Libra Resolv Contabilidade"
              >
                <Phone className="w-5 h-5 text-[#D4A843]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Serviços contábeis">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Serviços Contábeis
            </h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="text-white/50 text-sm hover:text-[#D4A843] transition-colors"
                    title={`${service.label} em São Carlos SP - Libra Resolv`}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Links rápidos do site">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "/#inicio" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Sobre Nós", href: "/#sobre" },
                { label: "Depoimentos", href: "/#depoimentos" },
                { label: "Orçamento", href: "/#orcamento" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contato", href: "/#contato" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#D4A843] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <address className="space-y-4 not-italic">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A843] mt-1 shrink-0" aria-hidden="true" />
                <p className="text-white/50 text-sm">
                  Av. Profº Luis Augusto de Oliveira, 91 - Sala 59
                  <br />Vila Marina, São Carlos - SP
                  <br />CEP: 13566-340
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A843] shrink-0" aria-hidden="true" />
                <a
                  href="tel:+5516997521540"
                  className="text-white/50 text-sm hover:text-[#D4A843] transition-colors"
                  title="Ligar para Libra Resolv Contabilidade"
                >
                  (16) 99752-1540
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4A843] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:librarsv@gmail.com"
                  className="text-white/50 text-sm hover:text-[#D4A843] transition-colors"
                  title="Enviar e-mail para Libra Resolv Contabilidade"
                >
                  librarsv@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-white/50 text-sm">
                  Seg a Sex: 08:00 - 18:00
                  <br />Sábado: 08:00 - 12:00
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} Libra Resolv Contabilidade - Escritório de Contabilidade em São Carlos SP. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            CNPJ: 51.137.158/0001-49 | CRC: 1SP154706 | Contador: Valdimir da Cunha
          </p>
        </div>
      </div>
    </footer>
  );
}
