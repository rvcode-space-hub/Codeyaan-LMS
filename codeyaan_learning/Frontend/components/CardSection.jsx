"use client";

import React from "react";
import FeatureCards from "./FeatureCards";
import { BookOpen, Laptop, Award } from "lucide-react";

export default function CardSection() {
  const features = [
    {
      title: "Structured Learning",
      description: "Well-organized courses with step-by-step guidance.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects and improve skills.",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "Certifications",
      description: "Earn certificates to showcase your expertise.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-900 mb-10">
        Why Choose Codeyaan?
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((item, index) => (
          <FeatureCards
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
