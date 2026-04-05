import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolioData";
import { Calendar, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16 justify-center"
        >
          <div className="h-px bg-border w-12 md:w-24"></div>
          <h2 className="text-3xl md:text-4xl font-bold">Experience & Education</h2>
          <div className="h-px bg-border w-12 md:w-24"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Building2 className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="font-bold text-xl text-foreground">{exp.role}</h3>
                    <div className="text-primary font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-[10px]">▶</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
