"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Container } from "./container";
import { portfolioData } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {portfolioData.socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                const isExternalLink = /^https?:\/\//.test(link.url);

                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={isExternalLink ? "_blank" : undefined}
                    rel={isExternalLink ? "noopener noreferrer" : undefined}
                    className="p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px w-24 bg-border" />

            {/* Copyright */}
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by{" "}
                <span className="font-medium text-foreground">
                  {portfolioData.personal.name}
                </span>
              </p>
              <p>Copyright {currentYear}. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
