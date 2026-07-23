import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Páginas de serviço individuais
import SimplesNacionalMEI from "./pages/services/SimplesNacionalMEI";
import ImpostoDeRenda from "./pages/services/ImpostoDeRenda";
import LucroRealPresumido from "./pages/services/LucroRealPresumido";
import ContabilidadeImobiliaria from "./pages/services/ContabilidadeImobiliaria";
import RegularizacaoObrasINSS from "./pages/services/RegularizacaoObrasINSS";
import AberturaEmpresas from "./pages/services/AberturaEmpresas";

// Blog
import Blog from "./pages/Blog";
import ImpostoDeRenda2026 from "./pages/blog/ImpostoDeRenda2026";
import MEISaoCarlos from "./pages/blog/MEISaoCarlos";
import LucroRealPresumidoBlog from "./pages/blog/LucroRealPresumido";
import RegularizacaoObrasINSSBlog from "./pages/blog/RegularizacaoObrasINSS";
import AbrirEmpresaSaoCarlos from "./pages/blog/AbrirEmpresaSaoCarlos";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      {/* Serviços */}
      <Route path={"/servicos/simples-nacional-mei"} component={SimplesNacionalMEI} />
      <Route path={"/servicos/imposto-de-renda"} component={ImpostoDeRenda} />
      <Route path={"/servicos/lucro-real-lucro-presumido"} component={LucroRealPresumido} />
      <Route path={"/servicos/contabilidade-imobiliaria"} component={ContabilidadeImobiliaria} />
      <Route path={"/servicos/regularizacao-obras-inss"} component={RegularizacaoObrasINSS} />
      <Route path={"/servicos/abertura-contabilidade-empresas"} component={AberturaEmpresas} />
      {/* Blog */}
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/como-declarar-imposto-de-renda-2026-guia-completo"} component={ImpostoDeRenda2026} />
      <Route path={"/blog/mei-tudo-que-voce-precisa-saber-para-abrir-em-sao-carlos"} component={MEISaoCarlos} />
      <Route path={"/blog/lucro-real-ou-lucro-presumido-qual-melhor-para-sua-empresa"} component={LucroRealPresumidoBlog} />
      <Route path={"/blog/regularizacao-de-obras-inss-passo-a-passo"} component={RegularizacaoObrasINSSBlog} />
      <Route path={"/blog/como-abrir-empresa-em-sao-carlos-guia-passo-a-passo"} component={AbrirEmpresaSaoCarlos} />
      {/* 404 */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
