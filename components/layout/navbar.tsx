"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm"
    >
      <nav className="flex h-14 md:h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl md:text-2xl font-bold">
          WMT
        </Link>
        
        <div className="flex items-center gap-6">
        <Button className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </nav>
    </motion.header>
  );
}