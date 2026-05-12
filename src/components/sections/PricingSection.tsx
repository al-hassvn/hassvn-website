"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

const tiers = [
  {
    name: "Starter",
    icon: Zap,
    price: "$2,500",
    description: "Perfect for small businesses and personal brands",
    features: [
      "Custom Website Design",
      "Up to 5 Pages",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form Integration",
      "2 Revision Rounds",
      "14-Day Delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    icon: Crown,
    price: "$5,500",
    description: "For growing brands that need more impact",
    features: [
      "Everything in Starter",
      "Up to 10 Pages",
      "Advanced SEO Strategy",
      "CMS Integration",
      "Blog Setup",
      "Performance Optimization",
      "Analytics Dashboard",
      "4 Revision Rounds",
      "21-Day Delivery",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "Custom",
    description: "Full-scale digital transformation",
    features: [
      "Everything in Professional",
      "Unlimited Pages",
      "Custom Web Application",
      "AI Integration",
      "E-commerce Platform",
      "Priority Support",
      "Unlimited Revisions",
      "Dedicated Maintenance",
      "Custom Timeline",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 lg:px-8 bg-hassvn-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] 
          bg-hassvn-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Crown className="w-4 h-4 text-hassvn-electric-blue" />
            <span className="text-sm text-hassvn-soft-white">Pricing</span>
          </motion.div>

          <TextReveal
            text="Investment Plans"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hassvn-soft-white mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-hassvn-muted-white"
          >
            Transparent pricing for exceptional results. Every plan includes my 
            full commitment to your project's success.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 
                ${tier.highlighted 
                  ? "glass-strong border-hassvn-electric-blue/30 neon-glow" 
                  : "glass border-white/5"
                }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 
                  rounded-full bg-gradient-to-r from-hassvn-electric-blue to-hassvn-neon-purple 
                  text-hassvn-black text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <tier.icon className={`w-8 h-8 mb-4 ${tier.highlighted ? "text-hassvn-electric-blue" : "text-hassvn-muted-white"}`} />
                <h3 className="text-2xl font-display font-semibold text-hassvn-soft-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-hassvn-muted-white">{tier.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-display font-bold text-hassvn-soft-white">
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="text-hassvn-muted-white ml-2">/project</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-hassvn-soft-white">
                    <Check className={`w-4 h-4 flex-shrink-0 ${tier.highlighted ? "text-hassvn-electric-blue" : "text-hassvn-muted-white"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="/contact"
                className={`w-full py-4 rounded-xl font-semibold text-center block transition-all duration-300
                  ${tier.highlighted 
                    ? "bg-gradient-to-r from-hassvn-electric-blue to-hassvn-neon-blue text-hassvn-black hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]" 
                    : "glass text-hassvn-soft-white hover:bg-white/10"
                  }`}
              >
                {tier.cta}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
