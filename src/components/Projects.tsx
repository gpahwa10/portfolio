import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { FolderGit2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
          <div className="h-px bg-border flex-grow max-w-xs"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-card border rounded-2xl p-6 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FolderGit2 className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.impact && (
                      <Badge variant="secondary" className="font-mono text-xs">
                        {project.impact}
                      </Badge>
                    )}
                    <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
