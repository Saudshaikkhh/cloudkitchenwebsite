import { Suspense } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}