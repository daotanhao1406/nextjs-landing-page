"use client";

import { motion } from "framer-motion";
import { Code, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Showcase() {
  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
            >
              Write Code That Matters
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground"
            >
              Focus on building features that matter to your users. Let our toolkit handle the complexity of modern web development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <Button variant="outline" className="w-full sm:w-auto">
                View Documentation
                <Code className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border bg-card p-3 md:p-4"
          >
            <div className="rounded-lg bg-muted p-3 md:p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-xs md:text-sm text-muted-foreground overflow-x-auto">
                <code>{`import { createApp } from '@framework/core'
import { features } from '@framework/features'

const app = createApp({
  features: [
    features.auth(),
    features.api(),
    features.database()
  ]
})

app.start()`}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}