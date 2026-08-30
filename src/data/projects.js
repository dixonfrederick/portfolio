import sanka from "../Assets/Projects/sanka.png";
import hpcc from "../Assets/Projects/hpcc.png";
import peers from "../Assets/Projects/peers.png";
import brews from "../Assets/Projects/brews.png";
import bike from "../Assets/Projects/bike.png";
import discordbot from "../Assets/Projects/discord.png";
import warehouse from "../Assets/Projects/warehouse.png";
import medium from "../Assets/Projects/medium.png";
import github from "../Assets/Projects/github.jpg";
import chatbotPlatform from "../Assets/Projects/chatbot-platform.svg";

const projects = [
  {
    title: "Chatbot Platform",
    category: "Full-Stack AI Platform",
    description:
      "A multi-agent chatbot with authentication, per-agent prompts, Markdown rendering, file and image uploads, persistent state, stop controls, and OpenRouter retries.",
    image: chatbotPlatform,
    ghLink: "https://github.com/dixonfrederick/chatbot-yellowai-dixon",
    demoLink: "https://chatbot-yellowai-dixon.vercel.app/",
    stack: ["React", "Node/Express", "PostgreSQL", "OpenRouter"],
    featured: true,
  },
  {
    title: "Sanka",
    category: "Back-Office Automation",
    description:
      "Sanka is a back-office platform for CRM, e-commerce, POS, and ERP workflows. I built product features, integrations, automations, and React/API migrations.",
    image: sanka,
    demoLink: "https://sanka.com/",
    demoLabel: "Live site",
    stack: ["API Integrations", "React", "CRM/ERP", "Automation"],
    featured: true,
  },
  {
    title: "HPCC",
    category: "Systems Research",
    description:
      "An NS-3 implementation of HPCC with PINT, LINT, and DINT telemetry variants for congestion-control experiments.",
    image: hpcc,
    ghLink: "https://github.com/TA-HPCC/hpcc",
    stack: ["NS-3", "C++", "Python"],
    featured: true,
  },
  {
    title: "Brewscovery",
    category: "Cloud Application",
    description:
      "A REST backend for a cafe recommendation app, connecting user, favorite, cafe, and machine-learning services through Firebase and Google Cloud.",
    image: brews,
    ghLink: "https://github.com/C23-PS051/api",
    stack: ["GCP", "Firebase", "REST APIs"],
    featured: true,
  },
  {
    title: "Peers",
    category: "Product Engineering",
    description:
      "A React frontend for browsing tutors, comparing profiles, and selecting online lessons, backed by Django.",
    image: peers,
    ghLink: "https://github.com/dixonfrederick/peers-frontend",
    stack: ["React", "Django", "UI/UX"],
  },
  {
    title: "Bike Rental Analysis",
    category: "Data Product",
    description:
      "A Streamlit dashboard built with pandas to analyze daily, monthly, and seasonal bike-rental patterns.",
    image: bike,
    ghLink: "https://github.com/dixonfrederick/bike-sharing",
    demoLink: "https://bike-sharing-rental.streamlit.app/",
    stack: ["Python", "Pandas", "Streamlit"],
  },
  {
    title: "Discord Multi-Function Bot",
    category: "Bot",
    description:
      "A Discord.js bot with AI chat, image generation, text utilities, and server-management commands.",
    image: discordbot,
    ghLink: "https://github.com/dixonfrederick/sisters-discord-service",
    stack: ["Node", "DiscordJS", "Automation"],
  },
  {
    title: "Warehouse API",
    category: "Backend Service",
    description:
      "A Spring Boot warehouse API with Swagger documentation for testing its endpoints.",
    image: warehouse,
    ghLink: "https://github.com/dixonfrederick/warehouse",
    stack: ["Spring Boot", "Swagger", "Java"],
  },
  {
    title: "Medium",
    category: "Writing",
    description:
      "Articles about testing, Scrum, software quality, and monitoring.",
    image: medium,
    ghLink: "https://medium.com/@dixon.frederick",
    isBlog: true,
    stack: ["Technical Writing", "QA", "Testing"],
  },
  {
    title: "More on GitHub",
    category: "Archive",
    description:
      "Coursework, experiments, utilities, and smaller application projects.",
    image: github,
    ghLink: "https://github.com/dixonfrederick",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export default projects;
