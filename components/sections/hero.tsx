"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
            {heroConfig.title}
          </h1>
          <p className="mb-6 md:mb-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {heroConfig.subTitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              {heroConfig.primaryCTA}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}