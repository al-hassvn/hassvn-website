"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return; // Spam protection

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Mail className="w-4 h-4 text-hassvn-electric-blue" />
                <span className="text-sm text-hassvn-soft-white">Get In Touch</span>
              </div>

              <TextReveal
                text="Let's Build"
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hassvn-soft-white mb-2"
              />
              <TextReveal
                text="The Future"
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-animate mb-6"
                delay={0.2}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-hassvn-muted-white leading-relaxed mb-12 max-w-md"
            >
              Have a project in mind? I'd love to hear about it. Let's discuss how 
              we can transform your vision into an extraordinary digital experience.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@hassvn.dev" },
                { icon: MapPin, label: "Location", value: "Remote / Worldwide" },
                { icon: Clock, label: "Response Time", value: "Within 24 hours" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-hassvn-electric-blue/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-hassvn-electric-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-hassvn-muted-white uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm text-hassvn-soft-white font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-8 border border-white/5"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-16 h-16 text-hassvn-electric-blue mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-hassvn-soft-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-hassvn-muted-white">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <div className="hidden">
                  <input
                    type="text"
                    name="honeypot"
                    value={formState.honeypot}
                    onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-hassvn-muted-white mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                        text-hassvn-soft-white placeholder-hassvn-muted-white/50 
                        focus:border-hassvn-electric-blue/50 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-hassvn-muted-white mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                        text-hassvn-soft-white placeholder-hassvn-muted-white/50 
                        focus:border-hassvn-electric-blue/50 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-hassvn-muted-white mb-2">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                      text-hassvn-soft-white placeholder-hassvn-muted-white/50 
                      focus:border-hassvn-electric-blue/50 focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm text-hassvn-muted-white mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                      text-hassvn-soft-white placeholder-hassvn-muted-white/50 
                      focus:border-hassvn-electric-blue/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-hassvn-electric-blue to-hassvn-neon-blue 
                    text-hassvn-black font-bold hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] 
                    transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-hassvn-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
