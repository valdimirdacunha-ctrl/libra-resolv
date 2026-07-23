import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1A2E]">
      <div className="text-center space-y-6 px-4">
        <div className="text-8xl font-bold gold-text">404</div>
        <h1 className="text-2xl font-bold text-white">Página não encontrada</h1>
        <p className="text-white/60 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-bold rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300"
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
}
