"use client";

import { aboutUsConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Award, Users, Code2, Globe } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "50K+",
    label: "Developers",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    value: "1M+",
    label: "Projects Built",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    value: "100+",
    label: "Countries",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "20+",
    label: "Awards",
  },
];

export function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {aboutUsConfig.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
             {aboutUsConfig.description1}
            </p>
            <p className="text-lg text-muted-foreground">
              {aboutUsConfig.description2}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-lg border"
              >
                <div className="mx-auto mb-3 text-primary">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}