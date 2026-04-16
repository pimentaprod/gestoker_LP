"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const faqs = [
  {
    question: "O Gestoker funciona no celular?",
    answer:
      "Sim. O Gestoker é acessado pelo navegador e funciona em qualquer dispositivo — celular, tablet ou computador. Não é necessário instalar nenhum aplicativo.",
  },
  {
    question: "Preciso instalar alguma coisa?",
    answer:
      "Não. O Gestoker é 100% online. Basta acessar pelo navegador e começar a usar — sem instalação, sem configuração de servidor.",
  },
  {
    question: "Como funciona o período de teste gratuito?",
    answer:
      "Você tem 15 dias de acesso completo ao plano escolhido, sem precisar informar cartão de crédito. Ao final do período, você decide se quer continuar.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, sem multa e sem burocracia. Se decidir cancelar, é só nos avisar pelo WhatsApp antes da próxima cobrança.",
  },
  {
    question: "Quantos usuários podem acessar o sistema simultaneamente?",
    answer:
      "Depende do plano. O Grinder permite até 3 usuários e o Regular até 6. Cada usuário tem acesso simultâneo e independente ao sistema.",
  },
  {
    question: "Os dados do clube ficam seguros?",
    answer:
      "Sim. Todos os dados são armazenados com criptografia em servidores seguros. Nenhuma informação do seu clube é compartilhada com terceiros.",
  },
  {
    question: "O que é a Inteligência do plano Regular?",
    answer:
      "A Inteligência age como um gerente do seu clube — analisando os dados em tempo real para identificar automaticamente riscos e oportunidades do negócio, antes que você precise procurar por eles.",
  },
  {
    question: "Tenho suporte se precisar de ajuda?",
    answer:
      "Sim. Todos os planos incluem suporte via WhatsApp. O plano Regular conta com atendimento prioritário.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-28"
      style={{ background: "#111827" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "#0b0f19",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 30%)",
        }}
      />
      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "#0b0f19",
          clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#f5c518", fontFamily: "var(--font-body)" }}
          >
            Dúvidas frequentes
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Perguntas{" "}
            <span className="text-gradient-gold">frequentes</span>
          </h2>
          <p
            className="text-lg"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}
          >
            Não encontrou o que procurava?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:underline"
              style={{ color: "#f5c518" }}
            >
              Fale conosco →
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: isOpen
                    ? "rgba(245,197,24,0.05)"
                    : "rgba(17,24,39,0.6)",
                  border: isOpen
                    ? "1px solid rgba(245,197,24,0.2)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold text-base"
                    style={{
                      color: isOpen ? "#f5c518" : "rgba(255,255,255,0.9)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "rgba(245,197,24,0.15)"
                        : "rgba(255,255,255,0.06)",
                      color: isOpen ? "#f5c518" : "rgba(255,255,255,0.4)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
