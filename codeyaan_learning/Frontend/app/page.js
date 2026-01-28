'use client';
import CardSection from "@/components/CardSection";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div className="min-h-screen bg-purple-100/10">
     <HeroSection />
      {/* Feature Cards Section */}
      <section className=" px-6 md:px-11 py-12">
        <CardSection />
      </section>
    </div>
  );
}
