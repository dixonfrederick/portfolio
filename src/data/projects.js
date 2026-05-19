import sanka from "../Assets/Projects/sanka.png";
import hpcc from "../Assets/Projects/hpcc.png";
import peers from "../Assets/Projects/peers.png";
import brews from "../Assets/Projects/brews.png";
import bike from "../Assets/Projects/bike.png";
import discordbot from "../Assets/Projects/discord.png";
import warehouse from "../Assets/Projects/warehouse.png";
import medium from "../Assets/Projects/medium.png";
import github from "../Assets/Projects/github.jpg";

const projects = [
  {
    title: "Sanka",
    category: "Back-Office Automation",
    description:
      "A live back-office and automation platform where I build product features and integrations across e-commerce, POS, CRM, and operational workflows.",
    image: sanka,
    demoLink: "https://sanka.com/",
    demoLabel: "Live site",
    stack: ["API Integrations", "ERP", "Full-Stack Development", "Automation"],
    featured: true,
  },
  {
    title: "HPCC",
    category: "Systems Research",
    description:
      "An NS-3 simulation project exploring HPCC alongside PINT, LINT, and DINT-style telemetry variants to study high-precision congestion control behavior in more depth.",
    image: hpcc,
    ghLink: "https://github.com/TA-HPCC/hpcc",
    stack: ["NS-3", "C++", "Python"],
    featured: true,
  },
  {
    title: "Brewscovery",
    category: "Cloud Application",
    description:
      "A REST-based backend hub for a cafe recommendation app, connecting user, favorites, cafe, and machine learning services with Firebase integration and Google Cloud deployment.",
    image: brews,
    ghLink: "https://github.com/C23-PS051/api",
    stack: ["GCP", "Firebase", "REST APIs"],
    featured: true,
  },
  {
    title: "Peers",
    category: "Product Engineering",
    description:
      "A tutoring platform frontend built to help students discover tutors, compare profiles, and navigate online lesson options through a clean React-based experience.",
    image: peers,
    ghLink: "https://github.com/dixonfrederick/peers-frontend",
    stack: ["React", "Django", "UI/UX"],
  },
  {
    title: "Bike Rental Analysis",
    category: "Data Product",
    description:
      "A pandas-driven analysis project packaged as a lightweight Streamlit dashboard to surface bike-sharing usage patterns in a more interactive and readable format.",
    image: bike,
    ghLink: "https://github.com/dixonfrederick/bike-sharing",
    demoLink: "https://bike-sharing-rental.streamlit.app/",
    stack: ["Python", "Pandas", "Streamlit"],
  },
  {
    title: "Discord Multi-Function Bot",
    category: "Bot",
    description:
      "A DiscordJS bot that combines AI chat, image generation, text utilities, and server-side helper features into a single multi-purpose assistant.",
    image: discordbot,
    ghLink: "https://github.com/dixonfrederick/sisters-discord-service",
    stack: ["Node", "DiscordJS", "Automation"],
  },
  {
    title: "Warehouse API",
    category: "Backend Service",
    description:
      "A Spring Boot warehouse API structured as a straightforward backend service, with Swagger documentation for testing and endpoint exploration.",
    image: warehouse,
    ghLink: "https://github.com/dixonfrederick/warehouse",
    stack: ["Spring Boot", "Swagger", "Java"],
  },
  {
    title: "Medium",
    category: "Writing",
    description:
      "A collection of engineering articles covering testing, Scrum, software quality, monitoring, and practical lessons drawn from hands-on development work.",
    image: medium,
    ghLink: "https://medium.com/@dixon.frederick",
    isBlog: true,
    stack: ["Technical Writing", "QA", "Testing"],
  },
  {
    title: "More on GitHub",
    category: "Archive",
    description:
      "A broader archive of experiments, coursework, and smaller builds that shows range across application development, backend work, and technical exploration.",
    image: github,
    ghLink: "https://github.com/dixonfrederick",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export default projects;
