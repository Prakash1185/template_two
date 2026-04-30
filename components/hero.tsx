"use client";

import Image from "next/image";
import { PrimaryButton } from "./buttons";

const HeroSection = () => {
  return (
    <section className="pt-36 pb-24 bg-[var(--background)]">
      <div className="max-w-[1250px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-[1.5] text-center lg:text-left">
          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.15] text-[var(--foreground)]">
            Manage your{" "}
            <span className="inline-block instrument">finances</span> smarter{" "}
            <span className="inline-block instrument">and</span> grow your{" "}
            <span className="inline-block instrument">business</span> faster.
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 text-[var(--muted)] text-base sm:text-lg max-w-[520px] mx-auto lg:mx-0">
            Built for modern teams to streamline payments, track cash flow, and
            simplify financial workflows — all in one place.
          </p>

          {/* INPUT + BUTTON */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-[500px] mx-auto lg:mx-0">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 h-11 px-4 rounded-md border border-[var(--border)] bg-white outline-none text-sm focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
            />

            <PrimaryButton>Get Started</PrimaryButton>
          </div>

          {/* LOGOS */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-[var(--muted)] text-sm font-medium">
            <span>Stripe</span>
            <span>Razorpay</span>
            <span>Notion</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-[0.8] flex justify-center lg:justify-end relative">
          <div className="relative w-[300px] sm:w-[380px] lg:w-[400px] xl:w-[460px]">
            <Image
              src="/hero.png"
              alt="Finance Dashboard"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
