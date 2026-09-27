import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Yash Sinha",
    title: "Software Engineer",
    tagline: "Building digital experiences that make a difference",
    bio: "Professional working on enterprise solutions across Generative AI, backend development, and automation. Experienced with Python, LLMs, RAG, REST APIs, and workflow automation, with a focus on building practical, scalable AI-driven applications.",
    email: "yashsinha2809@gmail.com",
    location: "Lucknow, India",
    avatar: "/images/profile/avatar.png",
    resumeUrl: "/resume.pdf",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
  experiences: [
    {
      id: "1",
      role: "Software Development Intern",
      company: "Calsoft",
      companyLogo: "/images/companies/calsoft.png",
      period: "Aug 2026 ",
      location: "Pune, India",
      summary:
        "Working on AI-driven solutions, automation, Python development, and backend technologies to support enterprise projects",
      highlights: [
        "Developed AI and backend solutions using Python, REST APIs, and modern software engineering practices for enterprise applications.",
        "Built and integrated Generative AI solutions using LLMs, prompt engineering, RAG pipelines, and API-based workflows.",
        "Designed automation workflows to streamline business processes and improve operational efficiency.",
      ],
      technologies: ["Python", "NumPy", "Pandas", "LLMs", "Prompt Engineering", "Gen AI", "RAG"],
    },
    {
      id: "2",
      role: "Gen AI Intern",
      company: "Hexaware Technologies",
      companyLogo: "/images/companies/Hexaware.svg",
      period: "Feb 2026 - Apr 2026",
      location: "Remote",
      summary:
        "Applied Python and object-oriented programming principles for data preprocessing, analysis, and generative AI workflows .",
      highlights: [
        "Built Generative AI solutions leveraging Large Language Models, prompt engineering, and Retrieval-Augmented Generation pipelines.",
        "Developed intelligent automation workflows using UiPath, including RE Framework, queues, Orchestrator, and web/data scraping.",
        "Engineered automation solutions integrating RAG, LLMs, and APIs workflows to enhance business processes and decision-making.",
      ],
      technologies: ["Python", "NumPy", "Pandas", "LLMs", "Prompt Engineering", "Gen AI", "RAG"],
    },
    {
      id: "3",
      role: "Software Development Intern",
      company: "Uttar Pradesh Metro Rail Corporation (UPMRC)",
      companyLogo: "/images/companies/UPMRC.svg",
      period: "May 2025 - Jun 2025",
      location: "Lucknow, India",
      summary:
        "Developed an internal ticketing system for equipment fault tracking and issue management using Python and MongoDB.",
      highlights: [
        "Built RESTful APIs and analytics dashboards, reducing manual reporting effort by 60%.",
        "Integrated MongoDB with optimized indexing strategies to improve data retrieval efficiency.",
        "Designed real-time dashboards for ticket monitoring, status tracking, and analytics.",
      ],
      technologies: ["Python", "Flask", "MongoDB", "REST APIs", "Analytics Dashboards", "Indexing", "RBAC"],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Internal Ticketing System",
      description:
        "Designed and implemented an internal ticketing system with real-time status tracking and role-based workflow management.",
      image: "/images/projects/project-1.webp",
      tags: ["Flask", "MongoDB", "HTML", "CSS", "Javascript"],
      // liveUrl removed
      codeUrl: "https://github.com/Yashh2828/Equipment-ticketing-dashboard",
      featured: true,
    },
    {
      id: "2",
      title: "Insurance Policy Explainer ",
      description:
        "An AI-powered RAG application that explains complex insurance policies through accurate, context-aware natural language responses.",
      image: "/images/projects/project-2.webp",
      tags: ["Flask", "Langchain", "RAG", "LLMs", "Frontend technologies"],
      // liveUrl removed
      codeUrl: "https://github.com/Yashh2828/insurance-policy-explainer",
      featured: true,
    },
    {
      id: "3",
      title: "AQI index prediction system for travel advisory",
      description:
        "A machine Learning predictive model helping travelors ",
      image: "/images/projects/project-3.webp",
      tags: ["Python", "FastAPI", "OpenAI", "React", "TailwindCSS"],
      // liveUrl removed
      codeUrl: "https://github.com/Yashh2828/aqi-for-indian-cities",
      featured: true,
    },
    {
      id: "4",
      title: " Gen-AI powered Podcast Script Generator",
      description:
        "A RAG-powered podcast generation platform that transforms documents into engaging AI-generated podcast scripts.",
      image: "/images/projects/project-4.webp",
      tags: ["FastAPI", "Langchain", "RAG", "Sentence-transformers", "Frontend technologies"],
      // liveUrl removed
      codeUrl: "https://github.com/Yashh2828/podcast_bot",
      featured: false,
    },
    {
      id: "5",
      title: "Wedding Planner Agent",
      description:
        "An AI-powered wedding planner agent that helps couples plan their wedding efficiently, managing tasks, budgets, and vendor communications.",
      image: "/images/projects/project-5.webp",
      tags: ["Python", "AI Agent", "Langchain"],
      // liveUrl removed
      codeUrl: "https://github.com/Yashh2828/wedding-planner-agent",
      featured: false,
    },
    {
      id: "6",
      title: "Email Agent",
      description:
        "A  LangChain-based email assistant that can authenticate a user, check an inbox, and send email responses.",
      image: "/images/projects/project-6.png",
      tags: ["Python", "Langchain", "langsmith", "LLMs"],
      // liveUrl removed
      codeUrl: "https://github.com/Yashh2828/email-agent-project ",
      featured: false,
    },
  ],
  skillCategories: [
    {
      category: "Languages",
      skills: [

        { name: "Python", icon: "code", level: "intermediate" },
        { name: "Java", icon: "code", level: "beginner" },
        { name: "SQL", icon: "database", level: "intermediate" }
      ],
    },

    {
      category: "Frameworks",
      skills: [
        { name: "Flask", icon: "component", level: "intermediate" },
        { name: "FastAPI", icon: "zap", level: "intermediate" },
        { name: "Pandas", icon: "component", level: "intermediate" },
        { name: "Numpy", icon: "component", level: "intermediate" },
        { name: "PyMongo", icon: "layers", level: "beginner" },
        { name: "TensorFlow", icon: "server", level: "beginner" },
        { name: "Keras", icon: "server", level: "beginner" }

      ],
    },
    {
      category: "AI Concepts",
      skills: [

        { name: "Machine learning", icon: "code", level: "intermediate" },
        { name: "MCP (Model Context Protocol)", icon: "code", level: "intermediate" },
        { name: "Deep Learning", icon: "code", level: "intermediate" },
        { name: "Neural Networks", icon: "code", level: "intermediate" },
        { name: "RAG", icon: "code", level: "intermediate" },
        { name: "Convolutional Neural Network", icon: "code", level: "beginner" },
        { name: "Lang Chain", icon: "code", level: "beginner" },
        { name: "Computer Vision", icon: "code", level: "beginner" }
      ],
    },

    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: "component", level: "intermediate" },
        { name: "MongoDB", icon: "database", level: "beginner" },
      ],
    },

    {
      category: "Tools",
      skills: [
        { name: "Virtual Box", icon: "server", level: "beginner" },
        { name: "Git & GitHub", icon: "git-branch", level: "intermediate" },
        { name: "VS Code", icon: "component", level: "intermediate" },
        { name: "Jupyter Notebook", icon: "component", level: "intermediate" },


      ],
    },

  ],
  certifications: [
    {
      id: "1",
      title: "GitHub Foundational Developer Certificate",
      issuer: "Microsoft",
      issueDate: "Oct 2025",
      expiryDate: "Oct 2027",
      credentialId: "60AB605D9A856F4C",
      credentialUrl: "https://learn.microsoft.com/en-in/users/yashsinha-9351/credentials/60ab605d9a856f4c",
      image: "/images/certifications/github.png",
    },
    {
      id: "2",
      title: "OCI AI Fundamentions Associate",
      issuer: "Oracle Cloud",
      issueDate: "OCT 2025",
      expiryDate: "OCT 2027",
      credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=43B33A2644CA9BF31CD8AD5AE7009ED9B0274426853592E2BDD1E6691AC783F1",
      image: "/images/certifications/oracle.png",
    },
    {
      id: "3",
      title: "Computer vision Fundamentals",
      issuer: "Google Cloud",
      issueDate: "Aug 2026",
      credentialUrl: "https://www.skills.google/public_profiles/4f0c8e88-850d-4ee8-ba1b-7d3a7ac85408/badges/26219027",
      image: "/images/certifications/google.jpeg",
    },
    {
      id: "4",
      title: "Langchain: Foundation",
      issuer: "Langchain Academy",
      issueDate: "jul 2026",
      expiryDate: "jul 2028",
      credentialId: "s2fweq7obj",
      credentialUrl: "https://www.linkedin.com/posts/yashh-sinha2828_certificate-ugcPost-7488950006079512576-nLJc/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeGu_UBqW1zLKVHffMSDs-5DUswvw4CBRM",
      image: "/images/certifications/lang.png",
    },
  ],
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Yashh2828", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yashh-sinha2828", icon: "linkedin" },
    { name: "Email", url: "mailto:yashsinha2809@gmail.com", icon: "mail" },
  ],
};
