import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  useEffect(() => {
    // Load Calendly widget script if it's not already there
    const scriptId = 'calendly-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-6">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm">{personalInfo.email}</div>
                  </div>
                </a>
                
                <a 
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-sm">{personalInfo.phone}</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border rounded-2xl overflow-hidden shadow-sm h-[600px] flex flex-col"
          >
            <div className="p-6 border-b bg-muted/30">
              <h3 className="text-xl font-bold">Book a Meeting</h3>
              <p className="text-sm text-muted-foreground mt-1">Schedule some time directly on my calendar.</p>
            </div>
            <div className="flex-grow bg-background relative w-full h-full">
               <div 
                  className="calendly-inline-widget absolute inset-0 w-full h-full" 
                  data-url={personalInfo.calendlyUrl} 
                  style={{ minWidth: '320px', height: '100%' }} 
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
