/**
 * Blog Listing Page - Libra Resolv
 * SEO: BlogPosting schema, meta tags, internal linking
 * Design: Dark luxe with gold accents, grid layout
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogArticles, formatDate } from "@/lib/blog-data";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | Dicas de Contabilidade em São Carlos SP | Libra Resolv";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Blog da Libra Resolv Contabilidade. Artigos sobre Imposto de Renda, MEI, Simples Nacional, Lucro Real, abertura de empresas e regularização de obras em São Carlos SP."
      );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://www.libraresolv.com.br/blog");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://www.libraresolv.com.br/blog");
    window.scrollTo(0, 0);
  }, []);

  const featuredArticle = blogArticles.find((a) => a.featured);
  const otherArticles = blogArticles.filter((a) => !a.featured);

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
          <ol className="flex items-center gap-2 text-sm text-white/50">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
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
              className="text-[#D4A843]"
            >
              <span itemProp="name">Blog</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-dark py-12 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[#D4A843] text-sm font-semibold tracking-[0.2em] uppercase">
              Blog Contábil
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Artigos e <span className="gold-text">Dicas</span> de Contabilidade
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Conteúdo atualizado sobre Imposto de Renda, MEI, Simples Nacional, planejamento tributário,
              abertura de empresas e muito mais. Escrito pelo contador Valdimir da Cunha, com mais de 35 anos de experiência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section-darker py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href={`/blog/${featuredArticle.slug}`}>
                <a className="block glass-card rounded-lg overflow-hidden hover:border-[#D4A843]/30 transition-all duration-500 group">
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[#D4A843]/10 text-[#D4A843] border border-[#D4A843]/20 rounded-sm">
                        Destaque
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-white/5 text-white/60 border border-white/10 rounded-sm">
                        {featuredArticle.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#D4A843] transition-colors leading-tight">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-3xl">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-6 text-sm text-white/40">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#D4A843]" aria-hidden="true" />
                          <time dateTime={featuredArticle.publishDate}>
                            {formatDate(featuredArticle.publishDate)}
                          </time>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#D4A843]" aria-hidden="true" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-2 text-[#D4A843] font-semibold group-hover:gap-3 transition-all">
                        Ler artigo completo <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-darker py-12 lg:py-20">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Todos os <span className="gold-text">Artigos</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {otherArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <a
                    className="block glass-card rounded-lg p-6 lg:p-8 hover:border-[#D4A843]/30 transition-all duration-300 group h-full"
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                  >
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[#D4A843]/10 text-[#D4A843]/70 border border-[#D4A843]/15 rounded-sm mb-4">
                      {article.category}
                    </span>

                    <h3
                      className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#D4A843] transition-colors leading-snug"
                      itemProp="headline"
                    >
                      {article.title}
                    </h3>

                    <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3" itemProp="description">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-white/40 border-t border-white/5 pt-4 mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#D4A843]/60" aria-hidden="true" />
                          <time dateTime={article.publishDate} itemProp="datePublished">
                            {formatDate(article.publishDate)}
                          </time>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#D4A843]/60" aria-hidden="true" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <span className="text-[#D4A843] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ler <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <meta itemProp="author" content={article.author} />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16 text-center">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Tem dúvidas sobre <span className="gold-text">contabilidade</span>?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Fale com a Libra Resolv Contabilidade. Atendemos em São Carlos e região com mais de 35 anos de experiência.
          </p>
          <a
            href="https://wa.me/5516997521540?text=Ol%C3%A1!%20Vi%20o%20blog%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-bold rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300 shadow-lg shadow-[#D4A843]/20"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
