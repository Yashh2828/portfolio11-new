"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  animation?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate";
}

/**
 * Animation variants for section transitions
 * Each variant provides a unique entrance effect when scrolling
 */
const sectionVariants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
  rotate: {
    hidden: { opacity: 0, rotateX: 15, y: 50 },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3, ease: "easeOut" }
  },
};

export function Section({ 
  children, 
  className, 
  id, 
  title, 
  subtitle, 
  animation = "slideUp" 
}: SectionProps) {
  return (
    <motion.section 
      id={id} 
      className={cn("py-16 md:py-24 overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px", amount: 0.1 }}
      variants={sectionVariants[animation]}
    >
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <motion.h2 
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
                variants={subtitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </Container>
    </motion.section>
  );
}
