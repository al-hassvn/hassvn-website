"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const testimonials = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVenture Labs",
    avatar: "SC",
    content: "HASSVN transformed our entire digital presence. The attention to detail and technical excellence is unmatched. Our conversion rate increased by 340% after the redesign.",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Founder",
    company: "Nova Finance",
    avatar: "MJ",
    content: "Working with HASSVN was a game-changer. The SaaS platform they built for us is not only beautiful but incredibly performant. Our users love the experience.",
    rating: 5,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Luxe Brands Co",
    avatar: "ER",
    content: "The e-commerce platform HASSVN created exceeded every expectation. Sales are up 200% and the brand identity they developed is absolutely stunning.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Park",
    role: "CTO",
    company: "DataFlow Systems",
    avatar: "DP",
    content: "HASSVN's AI automation solutions saved us countless hours. The chatbot they built handles 80% of our customer inquiries automatically. Truly next-level work.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 lg:px-8 bg-hassvn-charcoal overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
          bg-hassvn-electric-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <MessageSquare className="w-4 h-4 text-hassvn-electric-blue" />
            <span className="text-sm text-hassvn-soft-white">Testimonials</span>
          </motion.div>

          <TextReveal
            text="What Clients Say"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hassvn-soft-white mb-6"
            delay={0.2}
          />
        </div>

        {/* Testimonial carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-12 border border-white/5"
            >
              <Quote className="w-10 h-10 text-hassvn-electric-blue/30 mb-6" />

              <p className="text-xl md:text-2xl text-hassvn-soft-white leading-relaxed mb-8 font-light">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hassvn-electric-blue to-hassvn-neon-purple 
                    flex items-center justify-center text-hassvn-black font-bold text-sm">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-hassvn-soft-white">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-hassvn-muted-white">
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-hassvn-electric-blue text-hassvn-electric-blue" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center 
                hover:bg-white/10 transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-hassvn-soft-white" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300
                    ${index === current ? "w-8 bg-hassvn-electric-blue" : "bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center 
                hover:bg-white/10 transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5 text-hassvn-soft-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
