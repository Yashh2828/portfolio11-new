"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { portfolioData } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications and credentials that validate my expertise"
      animation="scale"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {portfolioData.certifications.map((cert) => (
          <motion.div key={cert.id} variants={cardVariants}>
            <Card className="group h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  {/* Certificate Icon/Image */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={56}
                        height={56}
                        className="object-contain p-2"
                      />
                    ) : (
                      <Award className="h-7 w-7 text-primary" />
                    )}
                  </div>
                  
                  {/* Title and Issuer */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1">
                      <BadgeCheck className="h-4 w-4 text-blue-500" />
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Dates */}
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expiryDate && (
                    <Badge variant="outline" className="text-xs">
                      Expires: {cert.expiryDate}
                    </Badge>
                  )}
                  {!cert.expiryDate && (
                    <Badge variant="secondary" className="text-xs">
                      No Expiry
                    </Badge>
                  )}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                    ID: {cert.credentialId}
                  </p>
                )}

                {/* Verify Button */}
                {cert.credentialUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2"
                    asChild
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify Credential
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
