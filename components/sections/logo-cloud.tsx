"use client";

import { motion } from "framer-motion";

const companies = [
  "TechCorp",
  "InnovateHub",
  "DevForce",
  "CodeMasters",
  "BuildScale",
  "CloudNine",
];

export function LogoCloud() {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-xl font-semibold text-muted-foreground">
            Trusted by Leading Companies
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-2xl font-bold text-muted-foreground/50">
                {company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}