"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function Problem() {
  const problems = [
    "Complex deployment processes",
    "Lack of type safety",
    "Poor developer experience",
    "Inconsistent coding standards",
  ];

  const solutions = [
    "One-click deployments",
    "Full TypeScript support",
    "Intuitive developer tools",
    "Enforced best practices",
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Development Challenges
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the pain points in modern web development
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-destructive" />
              Current Challenges
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-muted-foreground"
                >
                  <AlertCircle className="mr-2 h-4 w-4 text-destructive" />
                  {problem}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
              Our Solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-muted-foreground"
                >
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  {solution}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}