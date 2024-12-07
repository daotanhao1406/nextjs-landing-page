"use client";

import { valueProductConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import productImage from '@/assets/img/product.webp'
import product2Image from '@/assets/img/product2.jpg'
import Image from 'next/image'

export function ValueProduct() {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {valueProductConfig.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {valueProductConfig.subTitle}
            </p>
            <ul className="space-y-4">
              {valueProductConfig.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-6">
              <div className="w-full h-full rounded-lg bg-card border shadow-lg" >
              <Image src={productImage} alt="Demo" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}