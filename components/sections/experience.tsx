"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Building2, CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { portfolioData } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="A timeline of the work, projects, and milestones that shaped my path"
      className="relative bg-gradient-to-b from-background via-muted/15 to-background"
      animation="slideLeft"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="relative mx-auto max-w-5xl"
      >
        <motion.div
          aria-hidden="true"
          className="absolute left-4 top-2 bottom-2 hidden w-px origin-top bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 md:block"
          variants={lineVariants}
        />

        <div className="space-y-5 md:pl-16">
          {portfolioData.experiences.map((experience, index) => {
            const logoValue = experience.companyLogo?.trim() ?? "";
            const isImageLogo = logoValue.startsWith("/");
            const fallbackText = logoValue || experience.company.slice(0, 2).toUpperCase();

            return (
            <motion.article
              key={experience.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="relative"
            >
              <div className="absolute left-0 top-8 hidden h-4 w-4 -translate-x-[7px] rounded-full border border-primary/40 bg-background shadow-md md:block" />

              <Card className="group overflow-hidden border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {index === 0 ? "Current" : `0${index + 1}`}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
                          {experience.role}
                        </h3>
                        <div className="mt-2 flex items-center gap-3 text-muted-foreground">
                          {isImageLogo ? (
                            <Image
                              src={logoValue}
                              alt={`${experience.company} logo`}
                              width={44}
                              height={44}
                              className="h-11 w-auto object-contain"
                            />
                          ) : (
                            <span className="text-base font-extrabold uppercase tracking-[0.24em] text-primary/90">
                              {fallbackText}
                            </span>
                          )}
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                              <Building2 className="h-4 w-4 shrink-0 text-primary" />
                              Company
                            </div>
                            <span className="mt-1 block truncate font-semibold text-foreground/90">
                              {experience.company}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="max-w-3xl text-muted-foreground leading-7">
                        {experience.summary}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 lg:min-w-72">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Focus Areas
                      </p>
                      <ul className="mt-4 space-y-3">
                        {experience.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 text-sm text-foreground/90">
                            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <Badge key={technology} variant="outline" className="bg-background/60">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}