"use client";

import { featuresConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Shield, Zap, Clock, Trophy } from "lucide-react";

const reasons = [
  {
    icon: <Shield className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Enterprise Security",
    description: "Bank-grade security with regular audits and updates.",
  },
  {
    icon: <Zap className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Lightning Fast",
    description: "Optimized performance for rapid development and deployment.",
  },
  {
    icon: <Clock className="h-8 w-8 md:h-10 md:w-10" />,
    title: "24/7 Support",
    description: "Round-the-clock support from our expert team.",
  },
  {
    icon: <Trophy className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Industry Leading",
    description: "Trusted by thousands of developers worldwide.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {featuresConfig.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {featuresConfig.subTitle}          
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
            >
              <div className="mb-4 text-primary">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}