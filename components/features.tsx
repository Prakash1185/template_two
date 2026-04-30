"use client";

import { ArrowRightLeft, Landmark, Shield } from "lucide-react";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Blend } from "./animate-ui/icons/blend";
import { HouseWifi } from "./animate-ui/icons/house-wifi";
import { LockKeyholeOpen } from "./animate-ui/icons/lock-keyhole-open";
import { LockKeyhole } from "./animate-ui/icons/lock-keyhole";

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-[1250px] mx-auto px-6">
        {/* MAIN CARD */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl px-8 sm:px-12 md:px-20 py-12 sm:py-16 sm:py-20 shadow-sm">
          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start justify-between">
            {/* LEFT */}
            <div className="max-w-xl">
              <p className="text-sm tracking-wide text-[var(--primary)] font-medium mb-4">
                MODERN FINANCE
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight text-[var(--foreground)]">
                Tools that evolve
                <br />
                with your growth.
              </h2>
            </div>

            {/* RIGHT */}
            <p className="text-[var(--muted)] max-w-md text-sm sm:text-base">
              Build a smarter financial workflow with tools designed to simplify
              operations, improve visibility, and help your business scale with
              confidence.
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="mt-14 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* FEATURE 1 */}
            <div>
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
            </div>

            {/* FEATURE 2 */}
            <div>
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
            </div>

            {/* FEATURE 3 */}
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
