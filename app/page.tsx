import { Hero } from "@/components/sections/hero";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { SectionDivider } from "@/components/layout/section-divider";

export default function Home() {
  return (
    <>
      <ScrollyCanvas />
      <Hero />
      <Experience />
      <SectionDivider variant="aurora" />
      <Projects />
      <SectionDivider variant="particles" />
      <Skills />
      <SectionDivider variant="morphing" />
      <Certifications />
      <SectionDivider variant="wave" />
      <Contact />
    </>
  );
}
