import React from "react";

import HeroSection from "../../components/sections/HeroSection";
import CodeyaanFeaturesSection from "../../components/sections/Codeyaan-Features-Section";
import IntegrationPlatformSection from "../../components/sections/Integration-Platform-Section";
import CodeyaanLearnSection from "@/components/sections/Codeyaan-Learn-Section.jsx";
import LearnerReviewsSection from "../../components/sections/Learner-Reviews-Section";
import LearningToolsIntegration from "@/components/sections/Learning-Tools-Integration.jsx";
import OurFeaturesSection from "@/components/sections/Our-Features-Section.jsx";

export default function Page() {
  return (
    <main className=" bg-black/90 overflow-x-hidden">

      {/* 🔥 HERO */}
      <div className="bg-linear-to-br from-indigo-500 to-purple-600">
        <div className="pt-14 sm:pt-16 md:pt-20">
          <HeroSection />
        </div>
      </div>

      {/* 🔽 CONTENT SECTIONS */}
      <div className="space-y-10 sm:space-y-14 md:space-y-20 px-4 sm:px-6 md:px-0 py-8 sm:py-10 md:py-14">

        <section className="relative overflow-hidden">
          <IntegrationPlatformSection />
        </section>

        <CodeyaanFeaturesSection />
        <CodeyaanLearnSection />
        <OurFeaturesSection />
        <LearningToolsIntegration />
        <LearnerReviewsSection />

      </div>

    </main>
  );
}