/**
 * ServicePageLayout - Layout compartilhado para páginas individuais de serviço
 * SEO: Breadcrumbs, schema markup, meta tags dinâmicas, internal linking
 * Design: Dark luxe consistente com o restante do site
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, FileText, ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  metaDescription: string;
  keywords: string;
  slug: string;
  icon: React.ReactNode;
  heroImage?: string;
  children: React.ReactNode;
  relatedServices: { title: string; slug: string; description: string }[];
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  metaDescription,
  keywords,
  slug,
  icon,
  children,
  relatedServices,
}: ServicePageProps) {
  useEffect(() => {
    document.title = `${title} em São Carlos SP | Libra Resolv Contabilidade`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", metaDescription);
    
    // Update meta keywords
    const metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw) metaKw.setAttribute("content", keywords);

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://www.libraresolv.com.br/servicos/${slug}`);

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `${title} | Libra Resolv Contabilidade`);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", metaDescription);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `https://www.libraresolv.com.br/servicos/${slug}`);

    // Inject JSON-LD Service schema
    const existingLd = document.querySelector('script[data-schema="service-page"]');
    if (existingLd) existingLd.remove();
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${title} em São Carlos SP`,
      description: metaDescription,
      url: `https://www.libraresolv.com.br/servicos/${slug}`,
      areaServed: {
        "@type": "City",
        name: "São Carlos",
        "@id": "https://www.wikidata.org/wiki/Q170404",
      },
      provider: {
        "@type": "AccountingService",
        name: "Libra Resolv Contabilidade",
        url: "https://www.libraresolv.com.br",
        telephone: "+5516997521540",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Profº Luis Augusto de Oliveira, 91 - Sala 59",
          addressLocality: "São Carlos",
          addressRegion: "SP",
          postalCode: "13564-010",
          addressCountry: "BR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "26",
          bestRating: "5",
        },
      },
    };
    const ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.setAttribute("data-schema", "service-page");
    ldScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(ldScript);

    // Inject JSON-LD BreadcrumbList schema
    const existingBc = document.querySelector('script[data-schema="breadcrumb-service"]');
    if (existingBc) existingBc.remove();
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://www.libraresolv.com.br",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Serviços",
          item: "https://www.libraresolv.com.br/#servicos",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: `https://www.libraresolv.com.br/servicos/${slug}`,
        },
      ],
    };
    const bcScript = document.createElement("script");
    bcScript.type = "application/ld+json";
    bcScript.setAttribute("data-schema", "breadcrumb-service");
    bcScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(bcScript);

    // Scroll to top
    window.scrollTo(0, 0);

    return () => {
      const ldEl = document.querySelector('script[data-schema="service-page"]');
      if (ldEl) ldEl.remove();
      const bcEl = document.querySelector('script[data-schema="breadcrumb-service"]');
      if (bcEl) bcEl.remove();
    };
  }, [title, metaDescription, keywords, slug]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1A2E]">
      <Header />

      {/* Breadcrumb */}
      <nav
        className="pt-24 pb-4 section-dark"
        aria-label="Breadcrumb"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <div className="container">
          <ol className="flex items-center gap-2 text-sm text-white/50 flex-wrap">
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link href="/">
                <a itemProp="item" className="hover:text-[#D4A843] transition-colors">
                  <span itemProp="name">Início</span>
                </a>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" aria-hidden="true" />
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link href="/#servicos">
                <a itemProp="item" className="hover:text-[#D4A843] transition-colors">
                  <span itemProp="name">Serviços</span>
                </a>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" aria-hidden="true" />
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="text-[#D4A843]"
            >
              <span itemProp="name">{title}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-dark py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <Link href="/">
                <a className="flex items-center gap-2 text-white/50 hover:text-[#D4A843] transition-colors text-sm">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao início
                </a>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-[#D4A843]/10 flex items-center justify-center border border-[#D4A843]/20">
                  {icon}
                </div>
                <span className="text-[#D4A843] text-sm font-semibold tracking-[0.2em] uppercase">
                  {subtitle}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                {title} <span className="gold-text">em São Carlos</span>
              </h1>

              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-3xl mb-10">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5516997521540?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-bold rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300 shadow-lg shadow-[#D4A843]/20"
                >
                  <Phone className="w-5 h-5" />
                  Solicitar Orçamento
                </a>
                <Link href="/#orcamento">
                  <a className="flex items-center gap-2 px-8 py-4 border border-[#D4A843]/30 text-[#D4A843] font-semibold rounded-sm hover:bg-[#D4A843]/10 transition-all duration-300">
                    <FileText className="w-5 h-5" />
                    Preencher Formulário
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main
        className="section-darker py-16 lg:py-24"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={metaDescription} />
        <meta itemProp="areaServed" content="São Carlos, SP, Brasil" />
        <div itemProp="provider" itemScope itemType="https://schema.org/AccountingService">
          <meta itemProp="name" content="Libra Resolv Contabilidade" />
          <meta itemProp="telephone" content="+5516997521540" />
        </div>
        <div className="container">
          <div className="max-w-4xl">
            {children}
          </div>
        </div>
      </main>

      {/* Related Services */}
      <section className="section-dark py-16 lg:py-20" aria-label="Serviços relacionados">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Outros <span className="gold-text">Serviços</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`}>
                <a className="glass-card rounded-lg p-6 hover:border-[#D4A843]/30 transition-all duration-300 group block">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4A843] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#D4A843] text-sm mt-4 group-hover:gap-2 transition-all">
                    Saiba mais <ChevronRight className="w-4 h-4" />
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-darker py-16 text-center">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Precisa de ajuda com <span className="gold-text">{title}</span>?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato com a Libra Resolv Contabilidade. Atendemos em São Carlos e região
            com agilidade e profissionalismo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5516997521540"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-bold rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300 shadow-lg shadow-[#D4A843]/20"
            >
              Fale pelo WhatsApp
            </a>
            <a
              href="tel:+5516997521540"
              className="px-8 py-4 border border-[#D4A843]/30 text-[#D4A843] font-semibold rounded-sm hover:bg-[#D4A843]/10 transition-all duration-300"
            >
              Ligar: (16) 99752-1540
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
