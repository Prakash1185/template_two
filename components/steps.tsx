"use client";

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

const StepsSection = () => {
  return (
    <section className="py-28 bg-[#0b3a42] text-white">
      <div className="max-w-[1250px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm tracking-wide text-white/50 mb-4">STEPS</p>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-tight max-w-2xl">
            Build a smarter system that works for your financial growth.
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 overflow-hidden
              bg-white/5 backdrop-blur-sm
              border border-white/10
              shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_-10px_rgba(0,0,0,0.5)]
              group"
            >
              {/* BIG FADED NUMBER */}
              <span
                className="absolute top-4 left-6 text-[120px] font-semibold
                text-white/10 leading-none select-none
                transition-all duration-500
                group-hover:text-white/20"
              >
                {step.number}
              </span>

              {/* CONTENT */}
              <div className="relative z-10 mt-12">
                <h3 className="text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* GRADIENT FADE OVER NUMBER */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b3a42] via-transparent to-transparent" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StepsSection;