"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "wave" | "dots" | "gradient" | "line" | "particles" | "morphing" | "aurora";
  className?: string;
}

export function SectionDivider({ variant = "gradient", className }: SectionDividerProps) {
  return (
    <div className={cn("relative py-6 sm:py-10 md:py-12 overflow-hidden", className)}>
      {variant === "wave" && <WaveDivider />}
      {variant === "dots" && <DotsDivider />}
      {variant === "gradient" && <GradientDivider />}
      {variant === "line" && <LineDivider />}
      {variant === "particles" && <ParticlesDivider />}
      {variant === "morphing" && <MorphingDivider />}
      {variant === "aurora" && <AuroraDivider />}
    </div>
  );
}

function WaveDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center relative"
    >
      <motion.div style={{ y: springY }} className="w-full max-w-4xl">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          {/* Multiple layered waves for depth */}
          <motion.path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,50 C200,100 400,20 600,50 C800,80 1000,30 1200,50"
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,70 C100,110 300,40 600,70 C900,100 1100,50 1200,70"
            fill="none"
            stroke="url(#waveGradient3)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      {/* Floating particles around wave */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
          style={{ left: `${15 + i * 14}%`, top: "50%" }}
          initial={{ scale: 0, y: 0 }}
          whileInView={{ scale: [0, 1, 0.8], y: [0, -15, 0] }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay: 0.8 + i * 0.15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
}

function DotsDivider() {
  return (
    <div className="flex justify-center items-center gap-4 relative">
      {/* Central animated dots */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            type: "spring",
            stiffness: 200,
          }}
          className="relative"
        >
          <motion.div
            className={cn(
              "rounded-full",
              i === 3 ? "w-4 h-4 bg-primary/50" : "w-2.5 h-2.5 bg-primary/30"
            )}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Glow effect for center dot */}
          {i === 3 && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 blur-md"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      ))}
      {/* Connecting lines between dots */}
      <motion.div
        className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-48"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
}

function GradientDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center relative"
    >
      {/* Main gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-lg h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      {/* Animated glow that travels along the line */}
      <motion.div
        className="absolute top-0 w-20 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
        initial={{ x: "-200%", opacity: 0 }}
        whileInView={{ x: "200%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      />
      {/* Side decorative elements */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-primary/30 bg-background"
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 180 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
      />
    </motion.div>
  );
}

function LineDivider() {
  return (
    <div className="flex justify-center items-center gap-6">
      {/* Left line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent to-primary/30 max-w-[120px]"
      />
      {/* Center diamond with rotation */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
        className="relative"
      >
        <div className="w-3 h-3 bg-primary/40 rotate-45" />
        <motion.div
          className="absolute inset-0 bg-primary/20 rotate-45"
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      {/* Right line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px bg-gradient-to-l from-transparent to-primary/30 max-w-[120px]"
      />
    </div>
  );
}

function ParticlesDivider() {
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="relative h-16 flex justify-center items-center">
      {/* Central glowing orb */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-primary/20 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Particles floating upward */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: [-20, -40],
            opacity: [0, 0.8, 0],
          }}
          viewport={{ once: true }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Horizontal connecting line */}
      <motion.div
        className="absolute w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
}

function MorphingDivider() {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="relative w-24 h-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Morphing shape */}
          <motion.path
            fill="none"
            stroke="url(#morphGradient)"
            strokeWidth="1"
            initial={{ d: "M50,10 L90,50 L50,90 L10,50 Z" }}
            animate={{
              d: [
                "M50,10 L90,50 L50,90 L10,50 Z",
                "M50,20 L80,50 L50,80 L20,50 Z",
                "M30,30 L70,30 L70,70 L30,70 Z",
                "M50,10 L90,50 L50,90 L10,50 Z",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="url(#morphGradient)"
            strokeWidth="1"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}

function AuroraDivider() {
  return (
    <div className="relative h-20 flex justify-center items-center overflow-hidden">
      {/* Aurora layers */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <motion.div
            className={cn(
              "absolute w-64 h-8 rounded-full blur-2xl",
              i === 0 && "bg-primary/20",
              i === 1 && "bg-blue-500/15",
              i === 2 && "bg-purple-500/15"
            )}
            style={{
              left: `${20 + i * 20}%`,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            animate={{
              x: [0, 30, -30, 0],
              scaleX: [1, 1.2, 0.8, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        </motion.div>
      ))}
      {/* Central line */}
      <motion.div
        className="relative z-10 w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}
