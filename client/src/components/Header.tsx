import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663362290699/bWyiZvwZaPCaPdEyQMe6sQ/logo-banner_5919caa5.jpeg";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B1A2E]/95 backdrop-blur-md shadow-lg shadow-black/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="Libra Resolv Contabilidade - Escritório de Contabilidade em São Carlos SP"
            width="200"
            height="56"
            loading="eager"
            className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/80 hover:text-[#D4A843] transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5516997521540?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Libra%20Resolv."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-semibold text-sm rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300 shadow-lg shadow-[#D4A843]/20"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-white/80 hover:text-[#D4A843] transition-colors"
          aria-label="Abrir menu de navegação"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#0B1A2E]/98 backdrop-blur-lg border-t border-[#D4A843]/10 animate-in slide-in-from-top duration-300">
          <nav className="container py-6 flex flex-col gap-4" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-base font-medium text-white/80 hover:text-[#D4A843] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5516997521540?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Libra%20Resolv."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-semibold rounded-sm mt-2"
            >
<Phone className="w-4 h-4" aria-hidden="true" />
            Fale Conosco pelo WhatsApp
          </a>
        </nav>
        </div>
      )}
    </header>
  );
}
