import CTASection from "@/components/cta";
import FeaturesSection from "@/components/features";
import Grid from "@/components/grid";
import HeroSection from "@/components/hero";
import PricingSection from "@/components/pricing";
import StepsSection from "@/components/steps";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Grid/>
      <StepsSection/>
      <PricingSection/>
      <CTASection/>
    </>
  );
}
