"use client";

import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import AirplaneIcon from "./ui/airplane-icon";
import WorldIcon from "./ui/world-icon";

/* ---------- ANIMATION VARIANTS ---------- */

const cardContainer = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]  as const,
    },
  },
};

const innerReveal = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]  as const,
    },
  },
};

const Grid = () => {
  return (
    <section
      data-section-snap="true"
      className="min-h-screen py-24 bg-[var(--background)] flex items-center"
    >
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
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {/* CARD 1 */}
          <motion.div
            variants={cardContainer}
            className="rounded-2xl p-8
            bg-[linear-gradient(180deg,#ffffff_0%,#f7faf9_100%)]
            border border-[var(--border)]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_25px_-12px_rgba(0,0,0,0.15)]"
          >
            <motion.div
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.25,
                  },
                },
              }}
            >
              <motion.h3
                variants={innerReveal}
                className="text-[52px] sm:text-[60px] font-semibold text-[var(--primary)]"
              >
                5k+
              </motion.h3>

              <motion.p
                variants={innerReveal}
                className="mt-4 text-lg text-[var(--foreground)] max-w-xs"
              >
                Teams actively managing their finances with our platform
              </motion.p>
            </motion.div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardContainer}
            className="rounded-2xl p-8
            bg-[linear-gradient(180deg,#ffffff_0%,#f7faf9_100%)]
            border border-[var(--border)]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_25px_-12px_rgba(0,0,0,0.15)]"
          >
            <motion.div
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.25,
                  },
                },
              }}
            >
              <motion.h3
                variants={innerReveal}
                className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] max-w-md"
              >
                Access your funds instantly whenever you need them
              </motion.h3>

              <motion.div
                variants={innerReveal}
                className="mt-8 flex items-center gap-6"
              >
                {/* LEFT ICON */}
                <div
                  className="size-14 rounded-xl flex items-center justify-center text-white
                  bg-[var(--primary)]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_20px_-10px_rgba(0,0,0,0.3)]"
                >
                  <AirplaneIcon
                    airPlaneDuration={1}
                    windDuration={1}
                    exitDuration={2}
                  />
                </div>

                <ArrowLeftRight className="text-[var(--muted)]" />

                {/* RIGHT ICON */}
                <div
                  className="size-14 rounded-xl flex items-center justify-center text-white
                  bg-[var(--foreground)]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_20px_-10px_rgba(0,0,0,0.35)]"
                >
                  <WorldIcon />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={cardContainer}
            className="lg:col-span-2 rounded-2xl p-8
            bg-[linear-gradient(180deg,#ffffff_0%,#f7faf9_100%)]
            border border-[var(--border)]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_30px_-15px_rgba(0,0,0,0.2)]"
          >
            <motion.div
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.25,
                  },
                },
              }}
              className="flex flex-col lg:flex-row items-center justify-between gap-10"
            >
              {/* TEXT */}
              <motion.div variants={innerReveal} className="max-w-sm">
                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">
                  Stable growth, zero surprises
                </h3>

                <p className="mt-3 text-sm text-[var(--muted)]">
                  Monitor your financial performance with predictable trends and
                  real-time insights — no unexpected fluctuations.
                </p>
              </motion.div>

              {/* GRAPH */}
              <motion.div
                variants={innerReveal}
                className="w-full lg:w-[420px] h-[220px] rounded-xl p-4
                bg-white border border-[var(--border)]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_25px_-12px_rgba(0,0,0,0.2)]"
              >
                <div className="relative h-full">
                  <div className="absolute top-0 left-0 w-full flex justify-between text-sm text-[var(--muted)]">
                    <span>Summary</span>
                    <span>6 Months</span>
                  </div>

                  <div className="absolute top-6 left-0 text-xl font-semibold text-[var(--foreground)]">
                    $1,876,580
                  </div>

                  <svg
                    className="absolute bottom-0 left-0 w-full h-[75%]"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="areaGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="var(--primary)"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="var(--primary)"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0,80 C15,70 25,65 35,60 C45,55 55,50 65,48 C75,45 85,35 100,30 L100,100 L0,100 Z"
                      fill="url(#areaGradient)"
                    />

                    <path
                      d="M0,80 C15,70 25,65 35,60 C45,55 55,50 65,48 C75,45 85,35 100,30"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Grid;
