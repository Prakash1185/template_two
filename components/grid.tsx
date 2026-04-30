"use client";

import { ArrowLeftRight, Building2, Plane } from "lucide-react";

const Grid = () => {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-[1250px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-[var(--primary)] font-medium tracking-wide mb-3">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[var(--foreground)]">
            Built for modern financial teams
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CARD 1 - STAT */}
          <div className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(145deg,#f6fbf8_0%,#edf6f2_100%)] p-8 shadow-[0_10px_30px_-22px_rgba(15,31,28,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-white hover:shadow-[0_28px_60px_-28px_rgba(16,185,129,0.35)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(15,31,28,0.05),transparent_38%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -right-8 top-8 size-24 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.28),transparent_70%)] blur-2xl animate-drift" />
            <div className="pointer-events-none absolute bottom-6 right-10 h-1.5 w-24 overflow-hidden rounded-full bg-white/70">
              <span className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-[var(--primary)]/60 animate-soft-pulse" />
            </div>

            <div className="relative flex h-full flex-col justify-between gap-12">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted)] backdrop-blur-sm">
                  <span className="size-2 rounded-full bg-[var(--primary)] shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
                  Live momentum
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-[var(--primary)] shadow-[0_8px_20px_-16px_rgba(15,31,28,0.45)] backdrop-blur-sm">
                  24h active
                </span>
              </div>

              <div>
                <h3 className="text-[54px] leading-none sm:text-[62px] font-semibold text-[var(--primary)] drop-shadow-[0_10px_28px_rgba(16,185,129,0.18)]">
                  5k+
                </h3>

                <p className="mt-5 max-w-xs text-lg leading-relaxed text-[var(--foreground)]/90">
                  Teams actively managing their finances with our platform
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-2 shadow-[0_12px_30px_-22px_rgba(15,31,28,0.4)] backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                  <span className="size-2 rounded-full bg-[var(--primary)] animate-soft-pulse" />
                  Teams onboarded this month
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 - FEATURE */}
          <div className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(145deg,#f6fbf8_0%,#edf6f2_100%)] p-8 shadow-[0_10px_30px_-22px_rgba(15,31,28,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-white hover:shadow-[0_28px_60px_-28px_rgba(16,185,129,0.35)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.11),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(15,31,28,0.06),transparent_36%)] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute right-10 top-10 h-28 w-28 rounded-full border border-white/70 bg-white/20 blur-[1px]" />
            <div className="pointer-events-none absolute right-14 top-14 h-20 w-20 rounded-full border border-[var(--primary)]/15 animate-drift" />

            <div className="relative flex h-full flex-col justify-between gap-10">
              <div className="max-w-md">
                <span className="mb-4 inline-flex items-center rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted)] backdrop-blur-sm">
                  Instant movement
                </span>
                <h3 className="max-w-md text-xl font-semibold leading-tight text-[var(--foreground)] sm:text-2xl">
                  Access your funds instantly whenever you need them
                </h3>
              </div>

              <div className="mt-2 flex items-center gap-4 sm:gap-6">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,var(--primary)_0%,#18c58a_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_16px_28px_-18px_rgba(16,185,129,0.75)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_18px_34px_-18px_rgba(16,185,129,0.85)]">
                  <Plane size={22} className="transition-transform duration-500 group-hover:rotate-12" />
                </div>

                <div className="flex flex-col items-center gap-2 text-[var(--muted)]">
                  <ArrowLeftRight className="size-6 transition-transform duration-500 group-hover:scale-110 group-hover:text-[var(--primary)]" />
                  <span className="rounded-full border border-[var(--border)] bg-white/75 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)] shadow-[0_10px_24px_-20px_rgba(15,31,28,0.35)]">
                    Live sync
                  </span>
                </div>

                <div className="flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,#101f1c_0%,#182c28_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_16px_28px_-18px_rgba(15,31,28,0.7)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_34px_-18px_rgba(15,31,28,0.78)]">
                  <Building2 size={22} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-2 shadow-[0_12px_30px_-22px_rgba(15,31,28,0.4)] backdrop-blur-sm">
                  <span className="size-2 rounded-full bg-[var(--primary)] animate-soft-pulse" />
                  Transfers settle in seconds
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3 - WIDE */}
          <div className="group lg:col-span-2 relative overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(145deg,#f6fbf8_0%,#edf6f2_100%)] p-8 shadow-[0_10px_30px_-22px_rgba(15,31,28,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-white hover:shadow-[0_30px_70px_-30px_rgba(16,185,129,0.28)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(15,31,28,0.07),transparent_36%)]" />
            <div className="pointer-events-none absolute -top-12 right-14 size-36 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_70%)] blur-3xl animate-drift" />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              {/* LEFT TEXT */}
              <div className="max-w-sm">
                <span className="mb-4 inline-flex items-center rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted)] backdrop-blur-sm">
                  Forecast view
                </span>
                <h3 className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
                  Stable growth, zero surprises
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Monitor your financial performance with predictable trends and
                  real-time insights — no unexpected fluctuations.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-2 text-xs text-[var(--foreground)] shadow-[0_12px_30px_-22px_rgba(15,31,28,0.4)] backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                    <span className="size-2 rounded-full bg-[var(--primary)] animate-soft-pulse" />
                    Cash flow forecast
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-2 text-xs text-[var(--foreground)] shadow-[0_12px_30px_-22px_rgba(15,31,28,0.4)] backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                    <span className="size-2 rounded-full bg-[#1f2937] animate-soft-pulse" />
                    Trend stability
                  </span>
                </div>
              </div>

              {/* RIGHT GRAPH (fake visual) */}
              <div className="relative w-full overflow-hidden rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,251,249,0.92))] p-4 shadow-[0_18px_40px_-28px_rgba(15,31,28,0.55)] backdrop-blur-sm lg:w-[470px]">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.5),transparent)] animate-shimmer" />
                <div className="mb-5 flex items-center justify-between text-sm text-[var(--muted)]">
                  <span>Overview</span>
                  <span className="rounded-full border border-[var(--border)] bg-white/80 px-3 py-1 text-xs font-medium text-[var(--foreground)] shadow-[0_8px_18px_-16px_rgba(15,31,28,0.4)]">
                    6 Months
                  </span>
                </div>

                <div className="relative h-[230px] overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf8_100%)]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:100%_24px,56px_100%] opacity-70" />
                  <div className="absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(15,31,28,0.18),transparent)]" />

                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-6 h-[84px] w-2 rounded-t-full bg-[linear-gradient(180deg,#10b981,#7ce7ba)] shadow-[0_0_0_8px_rgba(16,185,129,0.08)] animate-float" />
                    <div className="absolute bottom-0 left-16 h-[126px] w-2 rounded-t-full bg-[linear-gradient(180deg,#13c289,#9df0cf)] shadow-[0_0_0_8px_rgba(16,185,129,0.08)] animate-float [animation-delay:0.8s]" />
                    <div className="absolute bottom-0 left-28 h-[162px] w-2 rounded-t-full bg-[linear-gradient(180deg,#101f1c,#2a3c38)] shadow-[0_0_0_8px_rgba(15,31,28,0.06)] animate-float [animation-delay:1.2s]" />
                    <div className="absolute bottom-0 left-40 h-[116px] w-2 rounded-t-full bg-[linear-gradient(180deg,#10b981,#80e9be)] shadow-[0_0_0_8px_rgba(16,185,129,0.08)] animate-float [animation-delay:0.4s]" />
                    <div className="absolute bottom-0 left-52 h-[186px] w-2 rounded-t-full bg-[linear-gradient(180deg,#13c289,#c1f7e3)] shadow-[0_0_0_8px_rgba(16,185,129,0.08)] animate-float [animation-delay:1.5s]" />

                    <svg viewBox="0 0 470 230" className="absolute inset-0 h-full w-full opacity-95" aria-hidden="true">
                      <path
                        d="M24 165 C 82 168, 110 118, 154 128 S 242 184, 298 132 S 388 92, 446 108"
                        fill="none"
                        stroke="rgba(16,185,129,0.9)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="6 10"
                        className="animate-dash"
                      />
                      <path
                        d="M24 165 C 82 168, 110 118, 154 128 S 242 184, 298 132 S 388 92, 446 108"
                        fill="none"
                        stroke="rgba(16,185,129,0.18)"
                        strokeWidth="14"
                        strokeLinecap="round"
                      />
                      <circle cx="154" cy="128" r="5" fill="rgba(16,185,129,0.95)" />
                      <circle cx="298" cy="132" r="5" fill="rgba(16,185,129,0.95)" />
                      <circle cx="446" cy="108" r="5" fill="rgba(16,185,129,0.95)" />
                    </svg>

                    <div className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[11px] font-medium text-[var(--primary)] shadow-[0_12px_28px_-20px_rgba(15,31,28,0.5)] backdrop-blur-sm">
                      Net inflow +18.2%
                    </div>

                    <div className="absolute right-5 bottom-5 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_18px_40px_-26px_rgba(15,31,28,0.5)] backdrop-blur-sm">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                        Monthly projection
                      </p>
                      <p className="mt-1 text-lg font-semibold text-[var(--foreground)]">
                        $84.2k
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
