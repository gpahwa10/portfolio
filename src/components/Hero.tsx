import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center relative pt-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-primary block"></span>
              Hi, my name is
            </h2>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {personalInfo.name}.
          </motion.h1>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.title}.
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {personalInfo.tagline}
          </motion.p>
          
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#projects" data-testid="btn-view-work">View My Work</a>
            </Button>
            
            <div className="flex items-center gap-2 ml-4">
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" data-testid="link-github">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" data-testid="link-linkedin">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href={`mailto:${personalInfo.email}`} data-testid="link-email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
