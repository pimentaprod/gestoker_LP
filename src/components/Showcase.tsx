"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const screens = [
  {
    number: "01",
    tag: "Dashboard",
    title: "Visão geral do seu clube em tempo real",
    description:
      "Acompanhe receita total, desempenho por modalidade e os melhores jogadores num único painel — com gráficos de lucro, participação e consumo no bar.",
    accent: "#f5c518",
    src: "/screenshots/dashboard.png",
    width: 2323,
    height: 835,
  },
  {
    number: "02",
    tag: "Torneios",
    title: "Crie e gerencie torneios completos",
    description:
      "Cadastre torneios com modalidade, buy-in e estrutura de blinds. Acompanhe o status de cada etapa e mantenha o histórico organizado por data.",
    accent: "#f0483e",
    src: "/screenshots/torneios.png",
    width: 2327,
    height: 554,
  },
  {
    number: "03",
    tag: "Cash Game",
    title: "Controle total das mesas de cash",
    description:
      "Abra mesas, registre sessões por jogador, recompras e cash-outs. Visualize rake acumulado e jackpots pagos por mesa em tempo real.",
    accent: "#f0483e",
    src: "/screenshots/cash-game.png",
    width: 2331,
    height: 735,
  },
  {
    number: "04",
    tag: "Jogadores",
    title: "Cadastro completo com histórico financeiro",
    description:
      "Registre jogadores com dados completos e acompanhe lucro total, número de torneios e sessões de cash — tudo em uma tela só.",
    accent: "#f0483e",
    src: "/screenshots/jogadores.png",
    width: 2320,
    height: 713,
  },
  {
    number: "05",
    tag: "Bar & Consumo",
    title: "Comanda individual por jogador",
    description:
      "Lance bebidas e comidas na conta de cada jogador durante a partida. Visualize comandas abertas e feche com um clique.",
    accent: "#f0483e",
    src: "/screenshots/bar.png",
    width: 2308,
    height: 804,
  },
  {
    number: "06",
    tag: "Jackpots",
    title: "Registre e acompanhe jackpots pagos",
    description:
      "Cadastre jackpots com mão vencedora, jogador e valor. Consulte o histórico completo e o total acumulado pago pelo clube.",
    accent: "#f5c518",
    src: "/screenshots/jackpots.png",
    width: 2317,
    height: 537,
  },
  {
    number: "07",
    tag: "Relatórios",
    title: "Visão financeira completa do seu clube",
    description:
      "Filtre por período e veja receita total, entradas, saídas, rake e lucro líquido. Acompanhe o desempenho de torneios, mesas de cash game e o ranking dos seus jogadores.",
    accent: "#f0483e",
    src: "/screenshots/relatorio.png?v=2",
    width: 851,
    height: 888,
    imageClass: "w-full h-auto block max-h-[336px] object-cover object-top",
    lightboxClass: "w-auto h-auto max-w-full max-h-[85vh] block mx-auto object-contain",
  },
  {
    number: "08",
    tag: "Inteligência IA",
    title: "Insights gerados por IA sobre seu clube",
    description:
      "Relatórios automáticos de receita, alertas de churn, score de risco por jogador e análise do bar — tudo gerado por IA com base nos dados reais do seu clube.",
    accent: "#f5c518",
    src: "/screenshots/inteligencia.png",
    width: 2327,
    height: 554,
    premium: true,
  },
];

export default function Showcase() {
  const [lightbox, setLightbox] = useState<(typeof screens)[0] | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="preview"
      className="relative py-28"
      style={{ background: "#0b0f19" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#f5c518", fontFamily: "var(--font-body)" }}
          >
            Preview
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Veja o Gestoker{" "}
            <span className="text-gradient-red">em ação</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
          >
            Cada tela foi pensada para simplificar a operação do seu clube —
            sem complexidade, sem papel.
          </p>
        </div>

        {/* Screens */}
        <div className="flex flex-col gap-28">
          {screens.map((screen, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={screen.number}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text side */}
                <div className="lg:w-[38%] shrink-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{
                        color: screen.accent,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {screen.number}
                    </span>
                    <div
                      className="h-px flex-1"
                      style={{
                        background: `linear-gradient(to right, ${screen.accent}50, transparent)`,
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `${screen.accent}18`,
                        color: screen.accent,
                        fontFamily: "var(--font-body)",
                        border: `1px solid ${screen.accent}30`,
                      }}
                    >
                      {screen.tag}
                    </span>
                    {screen.premium && (
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(245,197,24,0.1)",
                          color: "#f5c518",
                          fontFamily: "var(--font-body)",
                          border: "1px solid rgba(245,197,24,0.25)",
                        }}
                      >
                        IA
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {screen.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {screen.description}
                  </p>
                </div>

                {/* Screenshot side */}
                <div className="lg:w-[62%] w-full">
                  <div
                    className="rounded-2xl overflow-hidden cursor-zoom-in group"
                    onClick={() => setLightbox(screen)}
                    style={{
                      border: `1px solid ${screen.accent}25`,
                      boxShadow: `0 24px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px -10px ${screen.accent}20`,
                    }}
                  >
                    {/* Fake browser bar */}
                    <div
                      className="flex items-center gap-2 px-4 py-3"
                      style={{ background: "#0d111a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ background: "#f0483e40" }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: "#f5c51840" }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: "#30d15840" }} />
                      <div
                        className="ml-3 flex-1 rounded-md h-5 max-w-xs"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      />
                      {/* Expand hint */}
                      <span
                        className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                        style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                        Ampliar
                      </span>
                    </div>

                    <Image
                      src={screen.src}
                      alt={`Tela de ${screen.tag} do Gestoker`}
                      width={screen.width}
                      height={screen.height}
                      className={screen.imageClass ?? "w-full h-auto block"}
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 lg:p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-[98vw] rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${lightbox.accent}30`,
              boxShadow: `0 40px 100px -20px rgba(0,0,0,0.9), 0 0 60px -10px ${lightbox.accent}25`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Browser bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: "#0d111a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: "#f0483e40" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#f5c51840" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#30d15840" }} />
              <span
                className="ml-3 text-xs font-semibold"
                style={{ color: lightbox.accent, fontFamily: "var(--font-body)" }}
              >
                {lightbox.tag}
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="ml-auto flex items-center justify-center w-7 h-7 rounded-lg transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }}
                aria-label="Fechar"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <Image
              src={lightbox.src}
              alt={`Tela de ${lightbox.tag} do Gestoker`}
              width={lightbox.width}
              height={lightbox.height}
              className={lightbox.lightboxClass ?? lightbox.imageClass ?? "w-full h-auto block"}
              quality={95}
            />
          </div>
        </div>
      )}
    </section>
  );
}
