"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Box,
  Cloud,
  GitBranch,
  Server,
  Zap,
  Layers,
  Component,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { portfolioData } from "@/data/portfolio";
import type { Skill } from "@/types";

// Map icon names to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  database: Database,
  box: Box,
  cloud: Cloud,
  "git-branch": GitBranch,
  server: Server,
  zap: Zap,
  layers: Layers,
  component: Component,
  settings: Settings,
};

// Category color configurations
const categoryColorMap: Record<string, { gradient: string; icon: string; badgeColor: string }> = {
  Languages: { gradient: "from-blue-500/10 to-cyan-500/10", icon: "Code", badgeColor: "bg-blue-500/10 text-blue-700 dark:text-blue-400" },
  Frameworks: { gradient: "from-purple-500/10 to-pink-500/10", icon: "Layers", badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400" },
  Databases: { gradient: "from-green-500/10 to-emerald-500/10", icon: "Database", badgeColor: "bg-green-500/10 text-green-700 dark:text-green-400" },
  Tools: { gradient: "from-orange-500/10 to-red-500/10", icon: "Settings", badgeColor: "bg-orange-500/10 text-orange-700 dark:text-orange-400" },
};

// Skill level to visual representation
const levelConfig: Record<Skill["level"], { label: string; color: string; width: string; bgColor: string }> = {
  beginner: { label: "Beginner", color: "from-slate-400 to-slate-600", width: "w-1/4", bgColor: "bg-slate-500/20" },
  intermediate: { label: "Intermediate", color: "from-blue-400 to-blue-600", width: "w-1/2", bgColor: "bg-blue-500/20" },
  advanced: { label: "Advanced", color: "from-purple-400 to-purple-600", width: "w-3/4", bgColor: "bg-purple-500/20" },
  expert: { label: "Expert", color: "from-green-400 to-green-600", width: "w-full", bgColor: "bg-green-500/20" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I use to bring ideas to life"
      className="bg-gradient-to-b from-background via-muted/20 to-background"
      animation="slideRight"
    >
      <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 md:columns-2 gap-6"
      >
        {portfolioData.skillCategories.map((category, categoryIndex) => {
          const categoryColor = categoryColorMap[category.category] || categoryColorMap["Languages"];
          
          return (
            <motion.div
                key={category.category}
                variants={cardVariants}
                style={{ breakInside: "avoid" }}
                className="mb-6"
            >
              <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${categoryColor.gradient} border border-primary/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group w-full`}>
                {/* Animated background decoration */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-40 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 animate-pulse" />
                </div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <CardHeader className="pb-4 border-b border-primary/10">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        {category.category === "Languages" && (
                          <Code className="h-5 w-5 text-primary" />
                        )}
                        {category.category === "Frameworks" && (
                          <Layers className="h-5 w-5 text-primary" />
                        )}
                        {category.category === "Databases" && (
                          <Database className="h-5 w-5 text-primary" />
                        )}
                        {category.category === "Tools" && (
                          <Settings className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="text-lg font-bold">{category.category}</p>
                        <p className="text-xs text-muted-foreground font-normal">
                          {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  {/* Skills List */}
                  <CardContent className="pt-4">
                    <motion.div 
                      className="space-y-4"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.08,
                            delayChildren: 0.1,
                          },
                        },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {category.skills.map((skill) => {
                        const Icon = iconMap[skill.icon] || Code;
                        const config = levelConfig[skill.level];
                        const progressPercent = 
                          skill.level === "beginner" ? 25 :
                          skill.level === "intermediate" ? 50 :
                          skill.level === "advanced" ? 75 : 100;

                        return (
                          <motion.div
                            key={skill.name}
                            className="group/item space-y-2"
                            variants={skillItemVariants}
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* Skill name and level */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 flex-1 min-w-0">
                                <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="font-medium text-sm truncate group-hover/item:text-primary transition-colors">
                                  {skill.name}
                                </span>
                              </div>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs font-semibold flex-shrink-0 ml-2 ${config.bgColor}`}
                              >
                                {config.label}
                              </Badge>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full bg-muted/30 rounded-full overflow-hidden h-2 shadow-inner">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${config.color} rounded-full shadow-md`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${progressPercent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </CardContent>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
