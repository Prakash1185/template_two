"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Create your account",
    desc: "Get started in minutes with a simple onboarding process and full dashboard access.",
  },
  {
    number: "2",
    title: "Move your funds",
    desc: "Transfer money securely and start organizing your financial operations instantly.",
  },
  {
    number: "3",
    title: "Track your growth",
    desc: "Monitor performance in real-time with insights designed for smarter decisions.",
  },
];

/* ---------- VARIANTS (REFINED + SMOOTH) ---------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardContainer = {
  hidden: {
    opacity: 0,
    x: -24,
    scale: 0.98,
    filter: "blur(5px)",
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const innerReveal = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(3px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const StepsSection = () => {
  return (
    <section className="py-28 bg-[#0b3a42] text-white">
      <div className="max-w-[1250px] mx-auto px-6">
        {/* HEADER */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm tracking-wide text-white/50 mb-4"
          >
            STEPS
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-tight max-w-2xl"
          >
            Build a smarter system that works for your financial growth.
          </motion.h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                delayChildren: 0.4, // wait for header fully
                staggerChildren: 0.3, // smoother stagger
              },
            },
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={cardContainer}
              className="relative rounded-2xl p-8 overflow-hidden
              bg-white/5 backdrop-blur-sm
              border border-white/10
              shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              {/* INNER CONTENT */}
              <motion.div
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.14,
                      delayChildren: 0.3, // content waits after card
                    },
                  },
                }}
              >
                {/* BIG NUMBER */}
                <motion.span
                  variants={innerReveal}
                  className="absolute top-4 left-6 text-[120px] font-semibold
                  text-white/10 leading-none select-none"
                >
                  {step.number}
                </motion.span>

                {/* TEXT */}
                <motion.div
                  variants={innerReveal}
                  className="relative z-10 mt-12"
                >
                  <h3 className="text-lg font-semibold">{step.title}</h3>

                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b3a42] via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
