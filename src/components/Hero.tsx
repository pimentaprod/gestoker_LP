import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* ── Background: radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(240,72,62,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Background: suit characters ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {[
          { char: "♠", top: "10%", left: "5%", delay: "0s", size: "140px" },
          { char: "♥", top: "20%", right: "8%", delay: "3s", size: "120px" },
          { char: "♦", bottom: "25%", left: "12%", delay: "6s", size: "100px" },
          { char: "♣", bottom: "15%", right: "6%", delay: "1.5s", size: "130px" },
          { char: "♠", top: "55%", left: "48%", delay: "4s", size: "90px" },
        ].map((s, i) => (
          <span
            key={i}
            className="absolute font-bold animate-suit-drift"
            style={{
              fontSize: s.size,
              top: s.top,
              left: (s as { left?: string }).left,
              right: (s as { right?: string }).right,
              bottom: (s as { bottom?: string }).bottom,
              color: i === 1 || i === 3 ? "#f0483e" : "white",
              opacity: 0.03,
              animationDelay: s.delay,
              lineHeight: 1,
            }}
          >
            {s.char}
          </span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div
              className="animate-fade-in-up inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                border: "1px solid rgba(240,72,62,0.35)",
                background: "rgba(240,72,62,0.08)",
                color: "#f0483e",
                fontFamily: "var(--font-body)",
              }}
            >
              <span style={{ color: "#f5c518" }}>✦</span>
              Gestão Completa para seu Clube
            </div>

            {/* H1 */}
            <div className="animate-fade-in-up delay-100">
              <h1
                className="text-5xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">Gerencie seu Clube</span>
                <br />
                <span className="text-gradient-red">como um Profissional</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="animate-fade-in-up delay-200 text-lg text-white/65 leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Torneios, cash game, bar e finanças em um só sistema.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #f0483e 0%, #d63832 100%)",
                  boxShadow: "0 4px 24px rgba(240,72,62,0.35)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Começar Teste Grátis
              </a>

              <a
                href="#funcionalidades"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white/80 hover:text-white transition-all duration-200 hover:border-white/40"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.04)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Ver Funcionalidades
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Trust strip */}
            <p
              className="animate-fade-in-up delay-400 text-sm text-white/40 flex flex-wrap gap-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span>
                <span style={{ color: "#10b981" }}>✓</span> 15 dias grátis
              </span>
              <span>
                <span style={{ color: "#10b981" }}>✓</span> Sem cartão de
                crédito
              </span>
              <span>
                <span style={{ color: "#10b981" }}>✓</span> Suporte via
                WhatsApp
              </span>
            </p>
          </div>

          {/* ── Right: Dashboard Mockup ── */}
          <div className="animate-fade-in-scale delay-500 relative lg:order-last order-first">
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-2xl blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(240,72,62,0.15) 0%, transparent 70%)",
                transform: "scale(1.1)",
              }}
            />

            {/* Floating container */}
            <div
              className="animate-float relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(240,72,62,0.1)",
              }}
            >
              {/* Browser chrome */}
              <div
                className="flex items-center gap-1.5 px-4 py-3"
                style={{
                  background: "#0d1525",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#f0483e" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#f5c518" }}
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#10b981" }}
                />
                <div
                  className="ml-3 flex-1 h-5 rounded-md flex items-center px-3"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    maxWidth: "200px",
                  }}
                >
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    gestoker.vercel.app
                  </span>
                </div>
              </div>

              {/* App layout */}
              <div
                className="flex"
                style={{ background: "#0b0f19", height: "340px" }}
              >
                {/* Sidebar */}
                <div
                  className="flex flex-col gap-2 p-3 shrink-0"
                  style={{
                    width: "160px",
                    background: "#0d1525",
                    borderRight: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Logo in sidebar */}
                  <div
                    className="px-2 py-2 mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <span className="text-white text-sm font-bold">Gest</span>
                    <span style={{ color: "#f0483e" }} className="text-sm font-bold">♠</span>
                    <span className="text-white text-sm font-bold">ker</span>
                  </div>
                  {[
                    { label: "Dashboard", active: true },
                    { label: "Torneios", active: false },
                    { label: "Cash Game", active: false },
                    { label: "Jogadores", active: false },
                    { label: "Bar", active: false },
                    { label: "Jackpots", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="px-2 py-1.5 rounded-lg text-xs font-medium transition-colors"
                      style={{
                        background: item.active
                          ? "rgba(240,72,62,0.15)"
                          : "transparent",
                        color: item.active
                          ? "#f0483e"
                          : "rgba(255,255,255,0.4)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 overflow-hidden">
                  {/* Metric cards row */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: "Receita Total", value: "R$ 12.4k", color: "#f0483e" },
                      { label: "Torneios Ativos", value: "3", color: "#f5c518" },
                      { label: "Jogadores", value: "47", color: "#10b981" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl p-3"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div
                          className="text-xs mb-1"
                          style={{
                            color: "rgba(255,255,255,0.4)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {metric.label}
                        </div>
                        <div
                          className="text-sm font-bold"
                          style={{
                            color: metric.color,
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div
                    className="rounded-xl p-3 mb-3"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="text-xs mb-3"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Receita Semanal
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[55, 40, 70, 45, 80, 60, 90].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background:
                              i === 6
                                ? "linear-gradient(to top, #f0483e, #ff8a85)"
                                : "rgba(240,72,62,0.3)",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Table rows */}
                  <div
                    className="rounded-xl p-3"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="text-xs mb-2"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Mesas Ativas
                    </div>
                    {[
                      { name: "Mesa 1 — NLH", players: "6/9", status: "ativa" },
                      { name: "Mesa 2 — PLO", players: "4/6", status: "ativa" },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className="flex items-center justify-between py-1"
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        <span
                          className="text-xs"
                          style={{
                            color: "rgba(255,255,255,0.6)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {row.name}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(16,185,129,0.15)",
                            color: "#10b981",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {row.players}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fade-out bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #0b0f19 0%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #0b0f19 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
