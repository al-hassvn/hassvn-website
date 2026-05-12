"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Globe,
  Code2,
  Search,
  Bot,
  Palette,
  Smartphone,
  MessageSquare,
  ShoppingCart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Premium, conversion-focused website designs that captivate visitors and drive results. Every pixel crafted with purpose.",
    features: ["Responsive Design", "UI/UX Focus", "Brand Alignment", "Fast Loading"],
    color: "from-cyan-500/20 to-blue-500/20",
    glowColor: "rgba(0, 212, 255, 0.3)",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that push your brand to the top of search results. Technical excellence meets content strategy.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"],
    color: "from-emerald-500/20 to-teal-500/20",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Cutting-edge AI solutions that automate workflows, enhance productivity, and create intelligent digital experiences.",
    features: ["Workflow Automation", "AI Integration", "Smart Analytics", "Chatbots"],
    color: "from-violet-500/20 to-purple-500/20",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description:
      "Full-stack SaaS applications built for scale. From MVP to enterprise-grade platforms with modern architecture.",
    features: ["Full-Stack", "Cloud Native", "API Design", "Scalable"],
    color: "from-blue-500/20 to-indigo-500/20",
    glowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Strategic brand identities that resonate. From visual systems to brand voice, creating memorable digital presences.",
    features: ["Brand Strategy", "Visual Identity", "Guidelines", "Assets"],
    color: "from-pink-500/20 to-rose-500/20",
    glowColor: "rgba(236, 72, 153, 0.3)",
  },
  {
    icon: Smartphone,
    title: "Web Apps",
    description:
      "Progressive web applications with native-like performance. Interactive, fast, and built for modern user expectations.",
    features: ["PWA", "SPA Architecture", "Real-time", "Offline"],
    color: "from-amber-500/20 to-orange-500/20",
    glowColor: "rgba(245, 158, 11, 0.3)",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI that enhances customer experience. Custom-trained bots for your specific business needs.",
    features: ["Custom Training", "NLP", "Integration", "Analytics"],
    color: "from-fuchsia-500/20 to-pink-500/20",
    glowColor: "rgba(217, 70, 239, 0.3)",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "High-converting online stores built for growth. Seamless checkout experiences that turn browsers into buyers.",
    features: ["Shopify", "Custom", "Payment", "Inventory"],
    color: "from-lime-500/20 to-green-500/20",
    glowColor: "rgba(132, 204, 22, 0.3)",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={400}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor={service.glowColor}
        glarePosition="all"
        className="h-full"
      >
        <div
          className={`group relative h-full p-8 rounded-2xl glass border border-white/5 
            hover:border-white/20 transition-all duration-500 overflow-hidden`}
        >
          {/* Glow effect on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
              group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Content */}
          <div className="relative z-10">
            <div
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 
                flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              style={{ boxShadow: `0 0 30px ${service.glowColor}` }}
            >
              <Icon className="w-7 h-7 text-hassvn-electric-blue" />
            </div>

            <h3 className="text-xl font-display font-semibold text-hassvn-soft-white mb-3 
              group-hover:text-hassvn-electric-blue transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-hassvn-muted-white text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 text-hassvn-muted-white 
                    border border-white/10"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1 text-hassvn-electric-blue text-sm font-medium 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn More
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute top-4 right-4 w-2 h-2 rounded-full"
              style={{ background: service.glowColor, boxShadow: `0 0 10px ${service.glowColor}` }}
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 lg:px-8 bg-hassvn-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
          bg-hassvn-electric-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-hassvn-electric-blue" />
            <span className="text-sm text-hassvn-soft-white">What I Do</span>
          </motion.div>

          <TextReveal
            text="Premium Digital Services"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hassvn-soft-white mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-hassvn-muted-white"
          >
            End-to-end digital solutions crafted with precision, powered by cutting-edge 
            technology, and designed to elevate your brand above the competition.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
