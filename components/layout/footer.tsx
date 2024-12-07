"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    {/* <footer className="border-t">
      <div className="px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              Building the future of web development with powerful, intuitive tools.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-center">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Guides
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer> */}









    
    <footer id="footer">
    <hr className="w-11/12 mx-auto" />

    <section className="py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
      <div className="col-span-full xl:col-span-2">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pl-6"
          >
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              Building the future of web development with powerful, intuitive tools.
            </p>
          </motion.div>
      </div>

      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Follow US</h3>
        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Github
          </a>
        </div>

        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Twitter
          </a>
        </div>

        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Dribbble
          </a>
        </div>
      </motion.div>

      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Platforms</h3>
        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Web
          </a>
        </div>

        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Mobile
          </a>
        </div>

        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Desktop
          </a>
        </div>
      </motion.div>

      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">About</h3>
        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Features
          </a>
        </div>

        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Pricing
          </a>
        </div>

        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            FAQ
          </a>
        </div>
      </motion.div>

      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
             className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Community</h3>
        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Youtube
          </a>
        </div>

        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Discord
          </a>
        </div>

        <div>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Twitch
          </a>
        </div>
      </motion.div>
    </section>

    <section className="pb-14 text-center">
      <h3>
        &copy; 2024 Landing page made by{" "}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.linkedin.com/in/leopoldo-miranda/"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          daotanhao
        </a>
      </h3>
    </section>
  </footer>
  </>
  );
}