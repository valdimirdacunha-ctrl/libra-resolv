/**
 * BlogArticleLayout - Layout compartilhado para artigos do blog
 * SEO: Article schema, breadcrumbs, meta tags dinâmicas, internal linking
 * Design: Dark luxe consistente com o restante do site
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Phone } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { BlogArticle, getRelatedArticles, formatDate } from "@/lib/blog-data";

interface BlogArticleLayoutProps {
  article: BlogArticle;
  children: React.ReactNode;
}

export default function BlogArticleLayout({ article, children }: BlogArticleLayoutProps) {
  const relatedArticles = getRelatedArticles(article.slug, 3);

  useEffect(() => {
    document.title = `${article.title} | Blog - Libra Resolv Contabilidade`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", article.metaDescription);

    const metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw) metaKw.setAttribute("content", article.keywords);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://www.libraresolv.com.br/blog/${article.slug}`);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `${article.title} | Libra Resolv`);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", article.metaDescription);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `https://www.libraresolv.com.br/blog/${article.slug}`);
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute("content", "article");

    window.scrollTo(0, 0);
  }, [article]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1A2E]">
      <Header />

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription,
            author: {
              "@type": "Person",
              name: article.author,
              jobTitle: article.authorRole,
            },
            publisher: {
              "@type": "Organization",
              name: "Libra Resolv Contabilidade",
              url: "https://www.libraresolv.com.br",
            },
            datePublished: article.publishDate,
            dateModified: article.publishDate,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.libraresolv.com.br/blog/${article.slug}`,
            },
            articleSection: article.category,
            wordCount: 2000,
            inLanguage: "pt-BR",
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav
        className="pt-24 pb-4 section-dark"
        aria-label="Breadcrumb"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <div className="container">
          <ol className="flex items-center gap-2 text-sm text-white/50 flex-wrap">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/">
                <a itemProp="item" className="hover:text-[#D4A843] transition-colors">
                  <span itemProp="name">Início</span>
                </a>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/blog">
                <a itemProp="item" className="hover:text-[#D4A843] transition-colors">
                  <span itemProp="name">Blog</span>
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
              <span itemProp="name">{article.title}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <section className="section-dark py-12 lg:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Link href="/blog">
                <a className="flex items-center gap-2 text-white/50 hover:text-[#D4A843] transition-colors text-sm">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao Blog
                </a>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[#D4A843]/10 text-[#D4A843] border border-[#D4A843]/20 rounded-sm mb-6">
                {article.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-3xl">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-white/50 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#D4A843]" aria-hidden="true" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D4A843]" aria-hidden="true" />
                  <time dateTime={article.publishDate}>{formatDate(article.publishDate)}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4A843]" aria-hidden="true" />
                  <span>{article.readTime} de leitura</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="section-darker py-16 lg:py-24">
        <div className="container">
          <article className="max-w-4xl" itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content={article.title} />
            <meta itemProp="author" content={article.author} />
            <meta itemProp="datePublished" content={article.publishDate} />
            <div
              itemProp="articleBody"
              className="prose prose-invert prose-lg max-w-none
                [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:font-heading
                [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:font-heading
                [&_p]:text-white/70 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-base [&_p]:sm:text-lg
                [&_ul]:space-y-3 [&_ul]:mb-6 [&_ul]:pl-0
                [&_ol]:space-y-3 [&_ol]:mb-6 [&_ol]:pl-0
                [&_li]:text-white/70 [&_li]:text-base [&_li]:sm:text-lg [&_li]:leading-relaxed
                [&_strong]:text-white [&_strong]:font-semibold
                [&_a]:text-[#D4A843] [&_a]:underline [&_a]:hover:text-[#F0D78C] [&_a]:transition-colors
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#D4A843]/40 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-white/60 [&_blockquote]:my-8
              "
            >
              {children}
            </div>
          </article>
        </div>
      </main>

      {/* Author Box */}
      <section className="section-dark py-12 border-t border-white/5">
        <div className="container">
          <div className="max-w-4xl">
            <div className="glass-card rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-[#D4A843]/10 flex items-center justify-center border border-[#D4A843]/20 shrink-0">
                  <User className="w-8 h-8 text-[#D4A843]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{article.author}</h3>
                  <p className="text-[#D4A843] text-sm mb-3">{article.authorRole}</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Contador com mais de 35 anos de experiência, especializado em Incorporação e Construção de Imóveis e Loteamento.
                    Atende em São Carlos SP pela Libra Resolv Contabilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-darker py-16 lg:py-20" aria-label="Artigos relacionados">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
              Outros <span className="gold-text">Artigos</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <a className="glass-card rounded-lg p-6 hover:border-[#D4A843]/30 transition-all duration-300 group block">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#D4A843]/70 mb-3 block">
                      {related.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4A843] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-3 mb-4">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/40">
                      <span>{formatDate(related.publishDate)}</span>
                      <span>{related.readTime}</span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-dark py-16 text-center">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Precisa de ajuda com <span className="gold-text">{article.category}</span>?
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
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-bold rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300 shadow-lg shadow-[#D4A843]/20"
            >
              <Phone className="w-5 h-5" />
              Fale pelo WhatsApp
            </a>
            <Link href="/#orcamento">
              <a className="px-8 py-4 border border-[#D4A843]/30 text-[#D4A843] font-semibold rounded-sm hover:bg-[#D4A843]/10 transition-all duration-300">
                Solicitar Orçamento
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
