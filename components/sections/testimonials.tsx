"use client";

import { testimonialsConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "This platform has completely transformed our development process. The efficiency gains are remarkable.",
    author: "Alex Thompson",
    role: "Senior Developer at TechCorp",
    rating: 5,
  },
  {
    text: "The best development toolkit we've ever used. It's intuitive, powerful, and saves us countless hours.",
    author: "Maria Garcia",
    role: "Tech Lead at InnovateHub",
    rating: 5,
  },
  {
    text: "Outstanding support and documentation. Every developer on our team picked it up quickly.",
    author: "James Wilson",
    role: "CTO at DevForce",
    rating: 5,
  },
];

export function Testimonials() {
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
            {testimonialsConfig.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {testimonialsConfig.subTitle}
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col p-6 bg-card rounded-lg border"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="flex-1 text-base mb-4">{review.text}</p>
              <div>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}