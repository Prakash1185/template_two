"use client";

import { PrimaryButton } from "./buttons";

const CTASection = () => {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-[1250px] mx-auto px-6">

        <div className="rounded-3xl px-8 sm:px-12 py-12
          bg-gradient-to-br from-[#0b3a42] to-[#0e4a54]
          text-white
          flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10
        ">

          {/* LEFT */}
          <div className="max-w-lg">
            <p className="text-sm text-white/60 mb-3 tracking-wide">
              TRY IT NOW
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight">
              Ready to simplify your financial workflow?
            </h2>

            <p className="mt-4 text-white/70 text-sm">
              Manage payments, automate processes, and gain full visibility
              over your finances — all in one place.
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

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

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;