import React from "react";
import { motion } from "framer-motion";
import { about, personalInfo } from "@/data/portfolioData";
import { MapPin, Briefcase, Code, Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-px bg-border flex-grow max-w-xs"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>{about.summary}</p>
            <ul className="space-y-4">
              {about.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Terminal className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 pt-4 text-foreground font-medium">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Based in {personalInfo.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-muted/30 border border-border flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Code className="h-32 w-32 text-primary/20" />
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-background/50 border border-border/50 rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4 mb-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-lg text-foreground">Engineering Philosophy</h3>
                </div>
                <p className="text-sm text-foreground/80">
                  Code is read far more often than it is written. I believe in clean architecture, strong typing, and interfaces that feel effortless to the end user.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
