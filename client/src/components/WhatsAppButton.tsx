import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/5516997521540?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Libra%20Resolv."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in"
      aria-label="Fale com a Libra Resolv Contabilidade pelo WhatsApp - (16) 99752-1540"
      title="Enviar mensagem pelo WhatsApp para Libra Resolv Contabilidade"
    >
      <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" aria-hidden="true" />
    </a>
  );
}
