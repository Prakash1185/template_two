"use client";

import { motion } from "framer-motion";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Blend } from "./animate-ui/icons/blend";
import { HouseWifi } from "./animate-ui/icons/house-wifi";
import { LockKeyhole } from "./animate-ui/icons/lock-keyhole";

/* ---------- VARIANTS ---------- */

const leftToRight = {
  hidden: {
    opacity: 0,
    x: -24,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]  as const,
    },
  },
};

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
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]  as const,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-[1250px] mx-auto px-6">
        {/* 🔥 MASTER CONTROLLER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="bg-[var(--card)] border border-[var(--border)] rounded-3xl px-8 sm:px-12 md:px-20 py-12 sm:py-16 sm:py-20 shadow-sm"
        >
          {/* TOP */}
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start justify-between">
            {/* LEFT */}
            <motion.div
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="max-w-xl"
            >
              <motion.p
                variants={leftToRight}
                className="text-sm tracking-wide text-[var(--primary)] font-medium mb-4"
              >
                MODERN FINANCE
              </motion.p>

              <motion.h2
                variants={leftToRight}
                className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight text-[var(--foreground)]"
              >
                Tools that evolve
                <br />
                with your growth.
              </motion.h2>
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.p
              variants={leftToRight}
              transition={{ delay: 0.2 }}
              className="text-[var(--muted)] max-w-md text-sm sm:text-base"
            >
              Build a smarter financial workflow with tools designed to simplify
              operations, improve visibility, and help your business scale with
              confidence.
            </motion.p>
          </div>

          {/* 🔥 CARDS (delayed START) */}
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  delayChildren: 0.6, // 👈 THIS is the fix
                  staggerChildren: 0.2,
                },
              },
            }}
            className="mt-14 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <motion.div variants={fadeUp}>
              <div className="mb-4 text-[var(--primary)]">
                <AnimateIcon animateOnHover>
                  <Blend size={34} />
                </AnimateIcon>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Seamless transfers
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Move funds instantly and automate recurring payments without
                friction or delays in your workflow.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="mb-4 text-[var(--primary)]">
                <AnimateIcon animateOnHover>
                  <HouseWifi size={34} />
                </AnimateIcon>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Multi-account control
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Manage multiple financial accounts from a single dashboard and
                maintain full visibility over your funds.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="mb-4 text-[var(--primary)]">
                <AnimateIcon animateOnHover>
                  <LockKeyhole />
                </AnimateIcon>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Advanced protection
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Secure your transactions with built-in safeguards, role-based
                access, and real-time monitoring systems.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
