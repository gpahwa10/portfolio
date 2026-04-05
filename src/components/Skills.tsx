import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolioData";
import * as SimpleIcons from "react-icons/si";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function SkillIcon({ name }: { name: string | null }) {
  if (!name) return <div className="h-8 w-8 rounded-md bg-muted/50 flex items-center justify-center text-xs font-mono text-muted-foreground border">{'</>'}</div>;
  const IconComponent = (SimpleIcons as any)[name];
  return IconComponent ? <IconComponent className="h-8 w-8 group-hover:text-primary transition-colors" /> : null;
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16 justify-end"
        >
          <div className="h-px bg-border flex-grow max-w-xs"></div>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 capitalize font-mono text-primary flex items-center gap-2">
                <span className="text-muted-foreground/50">{'//'}</span> {category}
              </h3>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors group cursor-default"
                  >
                    <SkillIcon name={skill.icon} />
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
