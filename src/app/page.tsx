import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StepToChange } from "@/components/sections/StepToChange";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { WhatIsWSS } from "@/components/sections/WhatIsWSS";
import { Endorsements } from "@/components/sections/Endorsements";
import { Point01 } from "@/components/sections/Point01";
import { Point02 } from "@/components/sections/Point02";
import { Point03Curriculum } from "@/components/sections/Point03Curriculum";
import { LiveContent } from "@/components/sections/LiveContent";
import { Point04Options } from "@/components/sections/Point04Options";
import { CTABlock } from "@/components/sections/CTABlock";
import { StudentSuccess } from "@/components/sections/StudentSuccess";
import { TeamMembers } from "@/components/sections/TeamMembers";
import { Blog } from "@/components/sections/Blog";
import { Recommended } from "@/components/sections/Recommended";
import { FAQ } from "@/components/sections/FAQ";
import { LegalSection } from "@/components/sections/LegalSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StepToChange />
        <TargetAudience />
        <WhatIsWSS />
        <Endorsements />
        <Point01 />
        <Point02 />
        <Point03Curriculum />
        <LiveContent />
        <Point04Options />
        <CTABlock />
        <StudentSuccess />
        <TeamMembers />
        <Blog />
        <Recommended />
        <FAQ />
        <LegalSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
