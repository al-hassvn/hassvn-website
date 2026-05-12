"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useGSAP(() => {
    // Section reveal animations
    const sections = gsap.utils.toArray<HTMLElement>(".section-reveal");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax effects for floating elements
    gsap.utils.toArray<HTMLElement>(".parallax-float").forEach((el) => {
      gsap.to(el, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  });

  return (
    <>
      <LoadingScreen />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
