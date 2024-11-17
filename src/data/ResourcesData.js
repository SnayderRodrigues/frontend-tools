import AdobePhotoshop from "../assets/adobe-photoshop.svg";
import CodePen from "../assets/codepen.svg";
import DailyDev from "../assets/dailydev.svg";
import Dribbble from "../assets/dribbble.svg";
import Figma from "../assets/figma.svg";
import GithubCopilot from "../assets/github-copilot.svg";
import Gsap from "../assets/greensock.svg";
import Jest from "../assets/jest.svg";
import Lighthouse from "../assets/lighthouse.svg";
import Mdn from "../assets/mdn.svg";
import Next from "../assets/nextjs.svg";
import Prettier from "../assets/prettier.svg";
import React from "../assets/react.svg";
import Sass from "../assets/sass.svg";
import StackOverflow from "../assets/stackoverflow.svg";
import Storybook from "../assets/storybook.svg";
import Tailwind from "../assets/tailwind.svg";
import ThreeJs from "../assets/threejs.svg";
import Vite from "../assets/vitejs.svg";

const ResourcesData = [
  {
    id: 1,
    title: "Adobe Photoshop",
    image: AdobePhotoshop,
    category: "Tools",
    tags: ["Image Editing", "Graphics"],
    slug: "adobe-photoshop",
    description:
      "A powerful graphics editor for creating, editing, and enhancing digital images and designs.",
    source: "https://www.adobe.com/products/photoshop.html",
  },
  {
    id: 2,
    title: "CodePen",
    image: CodePen,
    category: "Development",
    tags: ["Community", "Prototyping"],
    slug: "codepen",
    description:
      "An online code editor and community for testing and sharing HTML, CSS, and JavaScript snippets.",
    source: "https://codepen.io/",
  },
  {
    id: 3,
    title: "Daily.dev",
    image: DailyDev,
    category: "Knowledge & Learning",
    tags: ["News", "Community"],
    slug: "daily-dev",
    description:
      "A personalized feed for developers that aggregates programming news and updates from across the web.",
    source: "https://daily.dev/",
  },
  {
    id: 4,
    title: "Dribbble",
    image: Dribbble,
    category: "Design",
    tags: ["UI/UX", "Inspiration"],
    slug: "dribbble",
    description:
      "A platform for showcasing, discovering, and connecting with designers and their work.",
    source: "https://dribbble.com/",
  },
  {
    id: 5,
    title: "Figma",
    image: Figma,
    category: "Design",
    tags: ["UI/UX", "Collaboration"],
    slug: "figma",
    description:
      "A collaborative interface design tool that allows teams to design, prototype, and gather feedback in real time.",
    source: "https://www.figma.com/",
  },
  {
    id: 6,
    title: "GitHub Copilot",
    image: GithubCopilot,
    category: "Development",
    tags: ["AI", "Coding Assistant"],
    slug: "github-copilot",
    description:
      "An AI-powered code completion tool that suggests entire lines or functions as you type.",
    source: "https://github.com/features/copilot",
  },
  {
    id: 7,
    title: "GSAP",
    image: Gsap,
    category: "Development",
    tags: ["Animations", "Web"],
    slug: "gsap",
    description:
      "A JavaScript library for creating high-performance animations and transitions for web applications.",
    source: "https://gsap.com/",
  },
  {
    id: 8,
    title: "Jest",
    image: Jest,
    category: "Development",
    tags: ["Testing", "JavaScript"],
    slug: "jest",
    description:
      "A delightful JavaScript testing framework with a focus on simplicity and performance.",
    source: "https://jestjs.io/",
  },
  {
    id: 9,
    title: "Lighthouse",
    image: Lighthouse,
    category: "Tools",
    tags: ["Performance", "SEO"],
    slug: "lighthouse",
    description:
      "An open-source tool for auditing website performance, accessibility, and SEO.",
    source: "https://developer.chrome.com/docs/lighthouse/overview",
  },
  {
    id: 10,
    title: "MDN",
    image: Mdn,
    category: "Knowledge & Learning",
    tags: ["Documentation", "Reference"],
    slug: "mdn",
    description:
      "Mozilla Developer Network provides comprehensive web development documentation, tutorials, and guides.",
    source: "https://developer.mozilla.org/en-US/",
  },
  {
    id: 11,
    title: "Next.JS",
    image: Next,
    category: "Development",
    tags: ["Framework", "React"],
    slug: "nextjs",
    description:
      "A React-based framework for building server-rendered and static web applications with ease.",
    source: "https://nextjs.org/",
  },
  {
    id: 12,
    title: "Prettier",
    image: Prettier,
    category: "Development",
    tags: ["Code Formatting", "JavaScript"],
    slug: "prettier",
    description:
      "An opinionated code formatter that enforces a consistent style across your codebase.",
    source: "https://prettier.io/",
  },
  {
    id: 13,
    title: "React",
    image: React,
    category: "Development",
    tags: ["Library", "UI"],
    slug: "react",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture.",
    source: "https://react.dev/",
  },
  {
    id: 14,
    title: "Sass",
    image: Sass,
    category: "Development",
    tags: ["CSS Preprocessor", "Styles"],
    slug: "sass",
    description:
      "A preprocessor scripting language that is interpreted into CSS, adding features like variables and nesting.",
    source: "https://sass-lang.com/",
  },
  {
    id: 15,
    title: "Stack Overflow",
    image: StackOverflow,
    category: "Knowledge & Learning",
    tags: ["Community", "Q&A"],
    slug: "stack-overflow",
    description:
      "A community-driven platform where developers ask questions and share knowledge.",
    source: "https://stackoverflow.com/",
  },
  {
    id: 16,
    title: "Storybook",
    image: Storybook,
    category: "Development",
    tags: ["UI Components", "Documentation"],
    slug: "storybook",
    description:
      "An open-source tool for building and documenting isolated UI components.",
    source: "https://storybook.js.org/",
  },
  {
    id: 17,
    title: "Tailwind CSS",
    image: Tailwind,
    category: "Development",
    tags: ["CSS Framework", "Utility-first"],
    slug: "tailwindcss",
    description:
      "A utility-first CSS framework for creating custom designs directly in your HTML.",
    source: "https://tailwindcss.com/",
  },
  {
    id: 18,
    title: "Three.JS",
    image: ThreeJs,
    category: "Development",
    tags: ["3D Graphics", "WebGL"],
    slug: "threejs",
    description:
      "A JavaScript library for creating 3D content in web applications using WebGL.",
    source: "https://threejs.org/",
  },
  {
    id: 19,
    title: "Vite",
    image: Vite,
    category: "Development",
    tags: ["Build Tool", "Frontend"],
    slug: "vite",
    description:
      "A fast and modern frontend build tool that leverages native ES modules and offers lightning-fast hot module replacement.",
    source: "https://vite.dev/",
  },
];

export default ResourcesData;
