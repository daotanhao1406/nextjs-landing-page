"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://github.com/shadcn.png",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://github.com/shadcn.png",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    image: "https://github.com/shadcn.png",
    initials: "ER",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://github.com/shadcn.png",
    initials: "DK",
  },
];

export function Team() {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented people behind our success
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
              <div className="flex space-x-3">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}