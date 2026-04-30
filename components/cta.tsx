"use client";

import { motion } from "framer-motion";

/* ---------- VARIANTS ---------- */

const container = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 14,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const CTASection = () => {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-[1250px] mx-auto px-6">
        {/* MAIN CTA BOX */}
        <motion.div
          className="rounded-3xl px-8 sm:px-12 py-12
          bg-gradient-to-br from-[#0b3a42] to-[#0e4a54]
          text-white
          flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {/* INNER CONTENT CONTROL */}
          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 w-full"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.18,
                  delayChildren: 0.25,
                },
              },
            }}
          >
            {/* LEFT */}
            <div className="max-w-lg">
              <motion.p
                variants={fadeUp}
                className="text-sm text-white/60 mb-3 tracking-wide"
              >
                TRY IT NOW
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight"
              >
                Ready to simplify your financial workflow?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-white/70 text-sm"
              >
                Manage payments, automate processes, and gain full visibility
                over your finances — all in one place.
              </motion.p>
            </div>

            {/* RIGHT BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
            >
              {/* PRIMARY */}
              <button
                className="h-11 px-6 rounded-md text-sm font-medium
                bg-white text-[#0b3a42]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_20px_-8px_rgba(0,0,0,0.5)]
                hover:bg-white/90 transition"
              >
                Get Started Now
              </button>

              {/* SECONDARY */}
              <button
                className="h-11 px-6 rounded-md text-sm font-medium
                border border-white/20 text-white
                hover:bg-white/10 transition"
              >
                Learn More →
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
