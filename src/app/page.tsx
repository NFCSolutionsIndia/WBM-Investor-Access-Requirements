"use client";

import { useTheme } from "@/components/ui/ThemeProvider";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import MetalTicker from "@/components/home/MetalTicker";
import ScrollStory from "@/components/home/ScrollStory";
import NumbersThatSpeak from "@/components/home/NumbersThatSpeak";
import ChooseYourPath from "@/components/home/ChooseYourPath";
import SystemModel4x5 from "@/components/home/SystemModel4x5";
import MineralsSection from "@/components/home/MineralsSection";

import GlobalFootprint from "@/components/home/GlobalFootprint";
import ReadyToCollaborate from "@/components/home/ReadyToCollaborate";
import ImpactPurpose from "@/components/home/ImpactPurpose";
import IndustriesQuickView from "@/components/home/IndustriesQuickView";
import TechnologySnapshot from "@/components/home/TechnologySnapshot";
import DataCenterBlock from "@/components/home/DataCenterBlock";
import WhyNow from "@/components/home/WhyNow";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)]">
      {/* Page Sections */}
      <div>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Impact & Purpose (The only difference is who touches it) */}
        <ImpactPurpose />

        {/* 3. How It Works (The orchestration layer) */}
        <HowItWorks />

        {/* 4. Technology Snapshot (Inside look at LiBERT) */}
        <TechnologySnapshot />



        {/* 6. Minerals Section */}
        <div id="minerals">
          <MineralsSection />
        </div>

        {/* 7. Scrolling Metal Ticker */}
        <MetalTicker />

        {/* 8. AI Data Centres */}
        <DataCenterBlock />

        {/* 9. Three Waste Streams */}
        <div id="system"><ScrollStory /></div>

        {/* 10. Industries Quick View */}
        <IndustriesQuickView />

        {/* 11. KPI Stats */}
        <NumbersThatSpeak />

        {/* 12. 4x5 System / Business Model (Our Model) */}
        <SystemModel4x5 isDark={isDark} />

        {/* 13. Why Now (Geopolitical Choke Point) */}
        <WhyNow />

        {/* 14. Choose Your Path */}
        <div id="resources">
          <ChooseYourPath />
        </div>
 

        {/* 16. Global Footprint (Distribution) */}
        <div id="about">
          <GlobalFootprint isDark={isDark} />
        </div>

        {/* 18. CTA / Contact */}
        <ReadyToCollaborate />
      </div>

    </main>

  );
}

