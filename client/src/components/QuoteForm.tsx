/**
 * QuoteForm - Formulário detalhado de solicitação de orçamento
 * Design: Dark Luxe Contábil - azul escuro + dourado
 * Envia os dados via WhatsApp formatado
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Phone,
  Mail,
  Building2,
  FileText,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const serviceOptions = [
  "Simples Nacional e MEI",
  "Imposto de Renda PF",
  "Imposto de Renda PJ",
  "Imposto de Renda ITR",
  "Lucro Real",
  "Lucro Presumido",
  "Contabilidade Área Imobiliária",
  "Regularização de Obras no INSS",
  "Abertura de Empresa",
  "Contabilidade Mensal de Empresa",
  "Outro",
];

const companyTypes = [
  "Pessoa Física",
  "MEI",
  "Microempresa (ME)",
  "Empresa de Pequeno Porte (EPP)",
  "Média / Grande Empresa",
  "Construtora / Incorporadora",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  companyType: string;
  companyName: string;
  service: string;
  urgency: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  companyType: "",
  companyName: "",
  service: "",
  urgency: "",
  message: "",
};

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isValid =
    form.name.trim().length >= 2 &&
    form.phone.replace(/\D/g, "").length >= 10 &&
    form.service !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setSending(true);

    // Build WhatsApp message
    const lines = [
      `*Solicitação de Orçamento - Libra Resolv*`,
      ``,
      `*Nome:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
      form.email ? `*E-mail:* ${form.email}` : "",
      `*Tipo:* ${form.companyType || "Não informado"}`,
      form.companyName ? `*Empresa:* ${form.companyName}` : "",
      `*Serviço:* ${form.service}`,
      form.urgency ? `*Urgência:* ${form.urgency}` : "",
      form.message ? `\n*Mensagem:*\n${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(lines);
    const whatsappUrl = `https://wa.me/5516997521540?text=${encoded}`;

    // Small delay for visual feedback
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setSending(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setForm(initialFormData);
    setSubmitted(false);
  };

  // Success state
  if (submitted) {
    return (
      <section id="orcamento" className="relative py-24 section-darker">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/30 to-transparent" />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center glass-card rounded-lg p-12"
          >
            <div className="w-20 h-20 rounded-full bg-[#D4A843]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#D4A843]" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Solicitação <span className="gold-text">Enviada</span>!
            </h3>
            <p className="text-white/60 text-lg mb-3 leading-relaxed">
              Sua solicitação de orçamento foi encaminhada pelo WhatsApp.
              Nossa equipe entrará em contato em breve.
            </p>
            <p className="text-white/40 text-sm mb-8">
              Caso a janela do WhatsApp não tenha aberto, entre em contato diretamente pelo{" "}
              <a
                href="https://wa.me/5516997521540"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A843] hover:text-[#F0D78C] transition-colors"
              >
                (16) 99752-1540
              </a>
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#D4A843]/40 text-[#D4A843] font-semibold rounded-sm hover:bg-[#D4A843]/10 transition-all duration-300"
            >
              Enviar nova solicitação
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="orcamento" className="relative py-24 section-darker" aria-label="Formulário de solicitação de orçamento - Libra Resolv Contabilidade">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/30 to-transparent" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A843] text-sm font-semibold tracking-[0.2em] uppercase">
            Solicite um orçamento de contabilidade em São Carlos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Preencha o <span className="gold-text">Formulário</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Informe seus dados e o serviço desejado. Sua solicitação será enviada
            diretamente para nosso WhatsApp e responderemos o mais rápido possível.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-lg p-8 sm:p-10 space-y-8" aria-label="Formulário de solicitação de orçamento contábil">
            {/* Personal Info Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <User className="w-5 h-5 text-[#D4A843]" />
                Dados Pessoais
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                    Nome Completo <span className="text-[#D4A843]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      className="w-full pl-11 pr-4 py-3.5 bg-[#0B1A2E]/80 border border-[#D4A843]/15 rounded-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#D4A843]/50 focus:ring-1 focus:ring-[#D4A843]/30 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-white/70 text-sm font-medium mb-2">
                    Telefone / WhatsApp <span className="text-[#D4A843]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="(16) 99999-9999"
                      className="w-full pl-11 pr-4 py-3.5 bg-[#0B1A2E]/80 border border-[#D4A843]/15 rounded-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#D4A843]/50 focus:ring-1 focus:ring-[#D4A843]/30 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full pl-11 pr-4 py-3.5 bg-[#0B1A2E]/80 border border-[#D4A843]/15 rounded-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#D4A843]/50 focus:ring-1 focus:ring-[#D4A843]/30 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />

            {/* Company Info Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#D4A843]" />
                Dados da Empresa
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Company Type */}
                <div>
                  <label htmlFor="companyType" className="block text-white/70 text-sm font-medium mb-2">
                    Tipo de Contribuinte
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                    <select
                      id="companyType"
                      name="companyType"
                      value={form.companyType}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 bg-[#0B1A2E]/80 border border-[#D4A843]/15 rounded-sm text-white focus:outline-none focus:border-[#D4A843]/50 focus:ring-1 focus:ring-[#D4A843]/30 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-[#0B1A2E]">Selecione...</option>
                      {companyTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0B1A2E]">
                          {type}
                        </option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-white/70 text-sm font-medium mb-2">
                    Nome da Empresa
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="Razão social ou nome fantasia"
                      className="w-full pl-11 pr-4 py-3.5 bg-[#0B1A2E]/80 border border-[#D4A843]/15 rounded-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#D4A843]/50 focus:ring-1 focus:ring-[#D4A843]/30 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />

            {/* Service Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#D4A843]" />
                Serviço Desejado
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-white/70 text-sm font-medium mb-2">
                    Serviço <span className="text-[#D4A843]">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-[#0B1A2E]/80 border border-[#D4A843]/15 rounded-sm text-white focus:outline-none focus:border-[#D4A843]/50 focus:ring-1 focus:ring-[#D4A843]/30 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-[#0B1A2E]">Selecione o serviço...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-[#0B1A2E]">
                          {s}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <label htmlFor="urgency" className="block text-white/70 text-sm font-medium mb-2">
                    Nível de Urgência
                  </label>
                  <div className="relative">
                    <select
                      id="urgency"
                      name="urgency"
                      value={form.urgency}
                      onChange={handleChange}
                      className="w-full pl-4 pr-4 py-3.5 bg-[#0B1A2E]/80 border border-[#D4A843]/15 rounded-sm text-white focus:outline-none focus:border-[#D4A843]/50 focus:ring-1 focus:ring-[#D4A843]/30 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-[#0B1A2E]">Selecione...</option>
                      <option value="Baixa - Apenas pesquisando" className="bg-[#0B1A2E]">Baixa - Apenas pesquisando</option>
                      <option value="Média - Preciso em breve" className="bg-[#0B1A2E]">Média - Preciso em breve</option>
                      <option value="Alta - Preciso com urgência" className="bg-[#0B1A2E]">Alta - Preciso com urgência</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />

            {/* Message */}
            <div>
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#D4A843]" />
                Mensagem Adicional
              </h3>
              <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                Descreva sua necessidade ou dúvida
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Conte-nos mais detalhes sobre o que você precisa..."
                className="w-full px-4 py-3.5 bg-[#0B1A2E]/80 border border-[#D4A843]/15 rounded-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#D4A843]/50 focus:ring-1 focus:ring-[#D4A843]/30 transition-all duration-300 resize-none"
              />
            </div>

            {/* Required fields note */}
            <p className="text-white/30 text-xs">
              <span className="text-[#D4A843]">*</span> Campos obrigatórios
            </p>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                disabled={!isValid || sending}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4A843] text-[#0B1A2E] font-bold text-lg rounded-sm hover:from-[#D4A843] hover:to-[#F0D78C] transition-all duration-300 shadow-lg shadow-[#D4A843]/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:from-[#C9A84C] disabled:hover:to-[#D4A843] group"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                    Solicitar Orçamento via WhatsApp
                  </>
                )}
              </button>
              <a
                href="mailto:librarsv@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#D4A843]/30 text-[#D4A843] font-semibold rounded-sm hover:bg-[#D4A843]/10 transition-all duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                Prefiro enviar por e-mail
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
