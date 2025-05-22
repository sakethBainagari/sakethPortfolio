import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  firebase,
  c,
  python,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Artificial Intelligence",
    icon: web,
  },
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "LLM's & AI Agents",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: typescript,
  },
  {
    name: "Java",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const languages = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Blockchain Researcher & Developer Intern",
    company_name: "Diigoo LLP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Conducting research on blockchain protocols, smart contracts, and decentralized technologies for innovative projects.",
      "Assisting in the development and optimization of blockchain-based solutions and applications for Diigoo.",
      "Collaborating with the development team to implement blockchain features and Web3 technologies.",
      "Staying updated with the latest advancements in blockchain technology and applying them to ongoing projects.",
    ],
  },
  /* 
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  */
];

const education = [
  {
    degree: "Bachelor of Technology in CSE (AI & ML)",
    institution: "MLR Institute of Technology, Hyderabad",
    icon: meta, // Reusing existing icons - replace with actual university icons
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "CGPA: 8.59",
      "Specialized in Artificial Intelligence and Machine Learning",
      "Developed various AI/ML projects including News Research Tool and AgriPredict",
      "Gained proficiency in Python, Java, SQL, JavaScript, and various frameworks"
    ],
  },
  {
    degree: "Intermediate - MPC",
    institution: "Shree Akshaya Junior College, Sangareddy",
    icon: tesla, // Reusing existing icons - replace with actual university icons
    iconBg: "#383E56",
    date: "2020 - 2022",
    points: [
      "Percentage: 96.3%",
      "Specialized in Mathematics, Physics, and Chemistry",
      "Built strong analytical and problem-solving skills",
      "Established foundation for future technical education"
    ],
  },
 
];

// Create an empty testimonials array
const testimonials = [];

const projects = [
  {
    name: "News Research Tool",
    description:
      "AI-powered research tool that processes news from URLs, PDFs, or raw text using semantic search, summarization, and Q&A. Integrated Ollama models (phi3:mini, gemma:2b, mistral:latest) with FAISS-based retrieval and fallback strategies.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "ollama",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Reusing existing image
    source_code_link: "https://github.com/sakethBainagari/news-research-tool",
    live_demo_link: "https://sakethbainagari.github.io/news-research-tool/",
  },
  {
    name: "AgriPredict",
    description:
      "Crop yield prediction tool using supervised ML (Scikit-learn) trained on environmental and agricultural data. Interactive web prototype with Flask and Bootstrap 5, featuring multilingual support, personalized recommendations, and yield visualizations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Reusing existing image
    source_code_link: "https://github.com/sakethBainagari/AgriPredict-ML-Model",
    live_demo_link: "https://agripredict-ml-model.onrender.com/",
  },
  {
    name: "Laundry Service App",
    description:
      "Mobile app using React Native with real-time Firebase integration for laundry scheduling and cart management. Implemented responsive design and intuitive UX, enhancing user engagement and usability.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Reusing existing image
    source_code_link: "https://github.com/sakethBainagari/Laundry-App",
    live_demo_link: "",
  },




];

export { services, technologies, languages, experiences, education, testimonials, projects };
