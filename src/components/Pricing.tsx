import { WHATSAPP_URL } from "@/lib/constants";

const plans = [
  {
    name: "Grinder",
    subtitle: "Para clubes iniciantes",
    price: "390",
    popular: false,
    features: [
      "3 usuários no clube",
      "15 torneios por mês",
      "Até 400 jogadores cadastrados",
      "30 jogadores ativos simultâneos",
      "Gestão de Cash Game",
      "Controle de Bar",
      "Jackpots",
      "Suporte via WhatsApp",
    ],
  },
  {
    name: "Regular",
    subtitle: "Para clubes estabelecidos",
    price: "690",
    popular: true,
    features: [
      "6 usuários no clube",
      "30 torneios por mês",
      "Até 1.000 jogadores cadastrados",
      "60 jogadores ativos simultâneos",
      "Gestão de Cash Game",
      "Controle de Bar",
      "Jackpots",
      "Inteligência Artificial",
      "Relatórios avançados",
      "Suporte prioritário via WhatsApp",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="relative py-28" style={{ background: "#0b0f19" }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,197,24,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#f5c518", fontFamily: "var(--font-body)" }}
          >
            Planos e Preços
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simples e{" "}
            <span className="text-gradient-gold">transparente</span>
          </h2>
          <p
            className="text-lg text-white/55 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Sem taxas ocultas. Cancele quando quiser.
          </p>
        </div>

        {/* Free trial banner */}
        <div
          className="max-w-2xl mx-auto mb-10 flex items-center gap-3 px-6 py-4 rounded-2xl"
          style={{
            background: "rgba(245,197,24,0.07)",
            border: "1px solid rgba(245,197,24,0.25)",
          }}
        >
          <span className="text-xl">🎁</span>
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: "#f5c518", fontFamily: "var(--font-body)" }}
            >
              Experimente grátis por 15 dias
            </p>
            <p
              className="text-xs"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-body)",
              }}
            >
              Sem cartão de crédito · Acesso completo ao plano escolhido
            </p>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300"
              style={
                plan.popular
                  ? {
                      background:
                        "linear-gradient(160deg, rgba(240,72,62,0.08) 0%, rgba(17,24,39,0.8) 60%)",
                      border: "1px solid rgba(240,72,62,0.4)",
                      boxShadow:
                        "0 0 40px rgba(240,72,62,0.1), 0 20px 60px -20px rgba(0,0,0,0.6)",
                    }
                  : {
                      background: "rgba(17,24,39,0.6)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #f0483e 0%, #d63832 100%)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    ⭐ Mais Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div>
                <h3
                  className="text-2xl font-extrabold text-white mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "var(--font-body)",
                    marginBottom: "8px",
                  }}
                >
                  R$
                </span>
                <span
                  className="text-5xl font-extrabold leading-none"
                  style={{
                    color: plan.popular ? "#f0483e" : "white",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-sm"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "var(--font-body)",
                    marginBottom: "6px",
                  }}
                >
                  /mês
                </span>
              </div>

              {/* Divider */}
              <div
                className="h-px"
                style={{
                  background: plan.popular
                    ? "rgba(240,72,62,0.25)"
                    : "rgba(255,255,255,0.06)",
                }}
              />

              {/* Features list */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm"
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-xs shrink-0"
                      style={{
                        background: plan.popular
                          ? "rgba(240,72,62,0.15)"
                          : "rgba(255,255,255,0.06)",
                        color: plan.popular ? "#f0483e" : "#10b981",
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
                style={
                  plan.popular
                    ? {
                        background:
                          "linear-gradient(135deg, #f0483e 0%, #d63832 100%)",
                        color: "white",
                        boxShadow: "0 4px 20px rgba(240,72,62,0.3)",
                        fontFamily: "var(--font-body)",
                      }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.85)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        fontFamily: "var(--font-body)",
                      }
                }
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Começar 15 dias grátis
              </a>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <p
          className="text-center mt-10 text-sm"
          id="contato"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
        >
          Dúvidas sobre qual plano escolher?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:underline"
            style={{ color: "#f5c518" }}
          >
            Fale conosco no WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
