"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Code2, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = portfolioData.personal.tagline;

  /**
   * Typing animation effect for the tagline
   * Iterates through each character with a delay to create typing effect
   */
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-16 sm:py-24 lg:py-0"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-72 sm:w-80 h-72 sm:h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-72 sm:w-80 h-72 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative z-10 px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-14 xl:gap-20">

          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-2xl w-full">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-full bg-muted/50 border border-border/50 mb-4 sm:mb-6 text-xs sm:text-sm"
            >
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
              <span className="text-muted-foreground">
                {portfolioData.personal.location}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-muted-foreground">Available for work</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{portfolioData.personal.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2.5 sm:mt-4 text-lg sm:text-2xl md:text-3xl font-medium text-muted-foreground"
            >
              {portfolioData.personal.title}
            </motion.h2>

            {/* Tagline with typing effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-3 sm:mt-6 text-sm sm:text-xl text-muted-foreground min-h-[2.5rem] flex items-center justify-center lg:justify-start"
            >
              <span>{displayText}</span>
              <span className="animate-pulse ml-0.5">|</span>
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-3 sm:mt-6 text-xs sm:text-base text-muted-foreground leading-relaxed max-w-xl"
            >
              {portfolioData.personal.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-6" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-11 sm:h-12 px-6" asChild>
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center flex-shrink-0 my-1 lg:my-0"
          >
            {/* Ambient subtle glowing gradient backdrop */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-primary/30 via-purple-500/20 to-blue-500/25 rounded-full blur-2xl sm:blur-3xl animate-pulse pointer-events-none" />

            {/* Gradient border ring */}
            <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-blue-400 shadow-2xl ring-1 ring-white/10">
              {/* Inner frame */}
              <div className="relative rounded-full p-1 bg-background/90 backdrop-blur-sm overflow-hidden">
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden"
                >
                  <Image
                    src={portfolioData.personal.avatar}
                    alt={portfolioData.personal.name}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Experience Badge 1 (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-4 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-2xl bg-background/95 backdrop-blur-md border border-border/80 shadow-xl"
            >
              <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] sm:text-xs font-semibold text-foreground">AI & Backend</span>
                <span className="text-[8px] sm:text-[10px] text-muted-foreground">GenAI • RAG • Python</span>
              </div>
            </motion.div>

            {/* Floating Experience Badge 2 (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-4 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-2xl bg-background/95 backdrop-blur-md border border-border/80 shadow-xl"
            >
              <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Code2 className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] sm:text-xs font-semibold text-foreground">Software Engineer</span>
                <span className="text-[8px] sm:text-[10px] text-muted-foreground">B.Tech Graduate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#experience"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
