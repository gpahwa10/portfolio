import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
