import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção individual. Entendemos suas necessidades específicas e oferecemos soluções sob medida.",
  },
  {
    title: "Expertise em Nichos Especializados",
    description: "Contabilidade para área imobiliária, regularização de obras no INSS e regimes tributários complexos como Lucro Real.",
  },
  {
    title: "Agilidade e Transparência",
    description: "Processos ágeis com comunicação clara. Você sempre sabe o que está acontecendo com suas obrigações contábeis.",
  },
  {
    title: "Tecnologia a Seu Favor",
    description: "Utilizamos ferramentas modernas para garantir precisão nos cálculos e entregas dentro dos prazos legais.",
  },
  {
    title: "Nota Máxima no Google",
    description: "5.0 estrelas com 26 avaliações reais de clientes satisfeitos. Nossa reputação fala por si.",
  },
  {
    title: "Localização Estratégica",
    description: "Escritório localizado na Avenida Plaza em São Carlos, SP, com fácil acesso e atendimento presencial e remoto.",
  },
];

export default function WhyUs() {
  return (
    <section id="diferenciais" className="relative py-24 section-dark" aria-label="Diferenciais da Libra Resolv Contabilidade em São Carlos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A843] text-sm font-semibold tracking-[0.2em] uppercase">
            Por que escolher um contador em São Carlos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Por que escolher a <span className="gold-text">Libra Resolv</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Motivos para escolher a Libra Resolv">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-4"
              role="listitem"
            >
              <CheckCircle2 className="w-6 h-6 text-[#D4A843] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
