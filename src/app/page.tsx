import { HomeHero } from "@/components/home/HomeHero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { ServiceShowcase } from "@/components/home/ServiceShowcase";
import { ProjectGallery } from "@/components/home/ProjectGallery";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ParallaxBreak } from "@/components/home/ParallaxBreak";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ReviewMarquee } from "@/components/home/ReviewMarquee";
import { StatsTicker } from "@/components/home/StatsTicker";
import { ServiceAreaMap } from "@/components/home/ServiceAreaMap";
import { CtaBanner } from "@/components/home/CtaBanner";
import { LeadCollector } from "@/components/ui/LeadCollector";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServiceShowcase />
      <StatsStrip />
      <ProjectGallery />
      <WhyChooseUs />
      <ParallaxBreak />
      <ProcessTimeline />
      <ReviewMarquee />
      <StatsTicker />
      <ServiceAreaMap />
      <CtaBanner />
      <LeadCollector />
    </>
  );
}
