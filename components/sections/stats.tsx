"use client";

import { motion } from "framer-motion";
import { Download, Star, Users } from "lucide-react";

const stats = [
  {
    icon: <Download className="h-5 w-5 md:h-6 md:w-6" />,
    value: "1M+",
    label: "Downloads",
  },
  {
    icon: <Star className="h-5 w-5 md:h-6 md:w-6" />,
    value: "15K+",
    label: "GitHub Stars",
  },
  {
    icon: <Users className="h-5 w-5 md:h-6 md:w-6" />,
    value: "50K+",
    label: "Active Users",
  },
];

export function Stats() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-2 text-center p-4"
            >
              <div className="rounded-full bg-primary/10 p-3 md:p-4 text-primary">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}