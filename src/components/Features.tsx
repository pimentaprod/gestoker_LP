const features = [
  {
    icon: "🏆",
    title: "Torneios",
    description:
      "Crie e gerencie torneios completos com blind structures, rebuy, add-on e ranking automático de jogadores.",
    accent: "#f0483e",
    iconBg: "rgba(240,72,62,0.12)",
  },
  {
    icon: "🃏",
    title: "Cash Game",
    description:
      "Controle mesas de cash game em tempo real — abertura, fechamento e histórico de sessões por jogador.",
    accent: "#f5c518",
    iconBg: "rgba(245,197,24,0.12)",
  },
  {
    icon: "👥",
    title: "Jogadores",
    description:
      "Cadastro completo com histórico de participação, finanças e ranking integrado ao clube.",
    accent: "#f0483e",
    iconBg: "rgba(240,72,62,0.12)",
  },
  {
    icon: "🍺",
    title: "Bar & Consumo",
    description:
      "Comanda individual por jogador, catálogo de produtos, controle de estoque e receita do bar.",
    accent: "#f0483e",
    iconBg: "rgba(240,72,62,0.12)",
  },
  {
    icon: "💎",
    title: "Jackpots",
    description:
      "Configure jackpots progressivos e exiba o valor acumulado em tempo real para engajar seus jogadores.",
    accent: "#f5c518",
    iconBg: "rgba(245,197,24,0.12)",
  },
  {
    icon: "📊",
    title: "Relatórios",
    description:
      "Acompanhe receita, entradas, saídas, rake e lucro líquido por período. Visualize desempenho de torneios, cash game e ranking de jogadores em um só lugar.",
    accent: "#f0483e",
    iconBg: "rgba(240,72,62,0.12)",
  },
  {
    icon: "✨",
    title: "Inteligência IA",
    description:
      "Relatórios inteligentes e insights gerados por IA para otimizar torneios e maximizar a receita do seu clube.",
    accent: "#f5c518",
    iconBg: "rgba(245,197,24,0.08)",
    premium: true,
  },
];

export default function Features() {
  return (
    <section
      id="funcionalidades"
      className="relative py-28"
      style={{ background: "#111827" }}
    >
      {/* ── Top diagonal divider ── */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "#0b0f19",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 30%)",
        }}
      />

      {/* ── Bottom diagonal divider ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "#0b0f19",
          clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#f5c518", fontFamily: "var(--font-body)" }}
          >
            Funcionalidades
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tudo que seu clube{" "}
            <span className="text-gradient-red">precisa</span>
          </h2>
          <p
            className="text-lg text-white/55 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Uma plataforma integrada que cobre cada aspecto da operação do seu
            clube — do primeiro buyin ao último drink.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-7 flex flex-col gap-4"
              style={
                feature.premium
                  ? { border: "1px solid rgba(245,197,24,0.2)" }
                  : {}
              }
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: feature.iconBg }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-lg font-bold text-white mb-2 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {feature.title}
                  {feature.premium && (
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(245,197,24,0.12)",
                        color: "#f5c518",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      IA
                    </span>
                  )}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="mt-auto h-px"
                style={{
                  background: `linear-gradient(to right, ${feature.accent}40, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
