"use client";

import { motion } from "framer-motion";

/* ---------- SIMPLE FADE VARIANT ---------- */

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
      duration: 1,
      ease: [0.22, 1, 0.36, 1]  as const,
    },
  },
};

const PricingSection = () => {
  return (
    <section className="py-28 bg-[var(--background)]">
      <motion.div
        className="max-w-[1250px] mx-auto px-6 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.18, // 🔥 global stagger
            },
          },
        }}
      >
        {/* HEADER */}
        <motion.p
          variants={fadeUp}
          className="text-sm text-[var(--primary)] font-medium tracking-wide mb-4"
        >
          OUR IMPACT
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[var(--foreground)] leading-tight max-w-2xl mx-auto"
        >
          Empowering teams to scale smarter and faster
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-[var(--muted)] max-w-xl mx-auto text-sm sm:text-base"
        >
          Businesses of all sizes use our platform to improve financial
          visibility, optimize workflows, and unlock sustainable growth.
        </motion.p>

        {/* STATS */}
        <motion.div
          variants={fadeUp}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[var(--foreground)] tracking-tight">
              28%
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
              Increase in efficiency
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[var(--foreground)] tracking-tight">
              150K
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
              Transactions processed monthly
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[var(--foreground)] tracking-tight">
              12+
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
              Countries supported
            </p>
          </div>
        </motion.div>

        {/* PLAN LABEL */}
        <motion.p
          variants={fadeUp}
          className="mt-16 mb-10 text-sm text-[var(--muted)] tracking-wide"
        >
          SELECT PLAN
        </motion.p>

        {/* PRICING CARDS */}
        <motion.div
          variants={fadeUp}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* CARD 1 */}
          <div
            className="rounded-2xl p-8 text-left
            bg-gradient-to-br from-white to-[#f3f6f5]
            border border-[var(--border)]
            shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]"
          >
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Starter
            </h3>

            <p className="mt-6 text-2xl font-semibold text-[var(--foreground)]">
              ₹199
              <span className="text-base font-normal text-[var(--muted)]">
                {" "}
                /month
              </span>
            </p>

            <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
              <li>Basic analytics dashboard</li>
              <li>Up to 5 team members</li>
              <li>Email support</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div
            className="relative rounded-2xl p-8 text-left text-white overflow-hidden
            bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]
            shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent)]" />

            <h3 className="text-xl font-semibold relative z-10">Premium</h3>

            <p className="mt-6 text-2xl font-semibold relative z-10">
              ₹499
              <span className="text-base font-normal text-white/80">
                {" "}
                /month
              </span>
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/80 relative z-10">
              <li>Advanced analytics & insights</li>
              <li>Unlimited team members</li>
              <li>Priority support</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
