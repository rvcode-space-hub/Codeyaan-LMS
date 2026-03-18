import React from "react";

import HeroSection from "../../components/sections/HeroSection";
import FeatureSection from "../../components/sections/FeatureSection";
import ProductFeaturesSection from "../../components/sections/ProductFeaturesSection";
import FeatureHighlightSection from "@/components/sections/FeatureHighlightSection.jsx";
import ProductFeaturesShowcaseSection from "../../components/sections/DetailedFeaturesSection";
import IntegrationsSection from "../../components/sections/IntegrationsSection";
import TestimonialSection from "../../components/sections/ReviewSection";

export default function Page() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* 🔥 HERO */}
      <div className="bg-linear-to-br from-indigo-500 to-purple-600">
        <div className="pt-14 sm:pt-16 md:pt-20">
          <HeroSection />
        </div>
      </div>

      {/* 🔽 CONTENT SECTIONS */}
      <div className="space-y-10 sm:space-y-14 md:space-y-20 px-4 sm:px-6 md:px-0 py-8 sm:py-10 md:py-14">

        <section className="relative overflow-hidden">
          <ProductFeaturesSection />
        </section>

        <FeatureSection />

        <FeatureHighlightSection />

        <ProductFeaturesShowcaseSection />

        <IntegrationsSection />

        <TestimonialSection />

      </div>

    </main>
  );
}