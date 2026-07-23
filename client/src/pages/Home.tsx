/**
 * Libra Resolv Contabilidade - Home Page
 * Design: Dark Luxe Contábil
 * Colors: Navy deep blue (#0B1A2E) + Gold accents (#D4A843)
 * Typography: Cormorant Garamond (headings) + Source Sans 3 (body)
 * SEO: Semantic HTML5, ARIA landmarks, structured content
 */

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  useEffect(() => {
    document.title = "Contador em São Carlos SP | Libra Resolv Contabilidade";
    
    // Update meta description dynamically for SPA
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Contador em São Carlos SP. Escritório de contabilidade especializado em Imposto de Renda, MEI, Simples Nacional, Lucro Real, Contabilidade Imobiliária, Regularização de Obras no INSS. Avaliação 5.0 no Google. (16) 99752-1540.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main id="main-content" role="main" aria-label="Conteúdo principal do site da Libra Resolv Contabilidade">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Testimonials />
        <CTA />
        <QuoteForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
