"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from 'next/image'
import bannerImage from '@/assets/img/banner.avif'

export function Demo() {
  return (
    <section className="pb-16 md:pb-24 bg-secondary/30">
      <div className="px-4 md:px-6">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our platform simplifies your development workflow
          </p>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-video bg-muted relative">
            <Image src={bannerImage} alt="Demo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}