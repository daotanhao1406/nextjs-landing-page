"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ctaConfig } from "@/lib/config";

export function CTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-primary p-6 md:p-8 lg:p-16 text-center text-primary-foreground"
        >
          <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            {ctaConfig.title}
          </h2>
          <p className="mb-6 md:mb-8 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
            {ctaConfig.subTitle}
          </p>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            {ctaConfig.primaryCTA}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}