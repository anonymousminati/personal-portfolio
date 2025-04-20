import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  syncsense,
  spiderweb,
  tesla,
  shopify,
  upgrad,
  carrent,
  threejs,
  legalwing,
  nextjs,
  materialui,
  docker,
  python,
  java,
  sql,
  dart,
  supabase,
  firebase,
  fastapi,
  comdata,


} from "../assets";

export const navLinks = [
  {
    id:"home",
    title:"Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Project",
  },
  {
    id: "contacts",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Flutter Android Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  { name: "React.js", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "JavaScript", icon: javascript },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: materialui },
  { name: "Fast APIs", icon: fastapi },
  { name: "Docker", icon: docker },
  { name: "Git (GitFlow)", icon: git },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "SQL", icon: sql },
  { name: "Dart", icon: dart },
  { name: "Supabase", icon: supabase },
  { name: "Firebase", icon: firebase },
  { name: "Figma", icon: figma },
  { name: "Three.js", icon: threejs },
];

const Social = [
  {
    handle:
      "anonymousminati",
    handle_link:"https://github.com/anonymousminati",
    name: "Github",
  
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",
  },
  {
    handle:
      "Prathamesh",
    handle_link:"https://www.linkedin.com/in/prathameshmalode",
    name: "LinkedIn",
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",  },
  // {
  //   handle:
  //     "_o_m_k_a_r_2711",
  //   handle_link:"https://www.instagram.com/_o_m_k_a_r_2711/",
  //   name: "Instagram",
  //   image: "https://avatars.githubusercontent.com/u/75433632?v=4",  },
];

const projects = [
  {
    name: "VolCo: Volunteer Coordination Platform",
    description:
      "Developed a Flutter-based mobile platform for real-time volunteer-NGO coordination, featuring disaster alert systems and mapping. Integrated a recommendation engine, improving volunteer-task matching efficiency by 35%. Optimized backend with Firebase/Supabase and REST APIs, ensuring scalability for 1,000+ concurrent users.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "REST APIs", color: "pink-text-gradient" },
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQHFLBGeSgBTeg/profile-treasury-image-shrink_8192_8192/B4DZWJLLjxHAAk-/0/1741763173331?e=1745740800&v=beta&t=UNWFa1nVAjG42GvchQvWl1eYGV5ZX_eELcImjTMZiUs", // Replace with actual image path
    source_code_link: "https://github.com/anonymousminati/VolCo",
  },
  {
    name: "Hottest Topics in Machine Learning (NIPS Papers Analysis)",
    description:
      "Analyzed 10,000+ NIPS papers using LDA topic modeling and WordClouds to identify trending ML research areas. Automated data preprocessing and visualization with Python, reducing analysis time by 50%.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "EDA", color: "green-text-gradient" },
      { name: "LDA", color: "pink-text-gradient" },
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQEo2gRkqdq5Kw/profile-treasury-image-shrink_8192_8192/B4DZY4RxlTHAAo-/0/1744700907121?e=1745740800&v=beta&t=CwB-wK5J-BXopAOULVEZ6TDe-2DzDEJfTME8t_dmI9o", // Replace with actual image path
    source_code_link: "/",
  },
  {
    name: "PDFGPT: AI-Powered PDF Q&A System",
    description:
      "Built a Generative AI app using Google Gemini and FAISS VectorDB for semantic PDF analysis and Q&A. Engineered text chunking with sentence transformers and persistent vector storage for low-latency responses.",
    tags: [
      { name: "VectorDB", color: "blue-text-gradient" },
      { name: "GenAI", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQGdfiA8QbYgpQ/profile-treasury-image-shrink_800_800/B4DZY.ywMyHIAc-/0/1744810215014?e=1745740800&v=beta&t=zjFfPCQBpD3JbfRkyRHzXbxspxVU2y8CwCFNBwmQp3c", // Replace with actual image path
    source_code_link: "/",
  },
  {
    name: "MockInterviewAI: AI-Driven Interview Simulator",
    description:
      "Created an interview prep platform with Gemini API-powered simulations and personalized feedback. Designed a Next.js/Tailwind CSS frontend and PostgreSQL backend with Drizzle ORM for scalability.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQF8pNuF_Yzr0Q/profile-treasury-image-shrink_800_800/B4DZWJHiUUHAAY-/0/1741762209679?e=1745740800&v=beta&t=2u47A2n35-3oDY7IMPIYOKoi83osnmojquaOHRQ1rGc", // Replace with actual image path
    source_code_link: "/",
  },
  {
    name: "Football Data Web Scraper & Analyzer",
    description:
      "Scraped and analyzed 5,000+ soccer records using Beautiful Soup, uncovering trends in player performance. Automated data cleaning and visualization pipelines with Pandas/NumPy.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Web Scraping", color: "green-text-gradient" },
      { name: "Data Analysis", color: "pink-text-gradient" },
    ],
    image: "src/assets/football project.jpg", // Replace with actual image path
    source_code_link: "https://github.com/anonymousminati/football-webscrap",
  },
  {
    name: "HR Analytics Dashboard (Tableau)",
    description:
      "Visualized 10,000+ synthetic employee records (generated via Python Faker + ChatGPT) to track attrition and diversity. Designed interactive Tableau dashboards adopted by HR teams for data-driven decision-making.",
    tags: [
      { name: "Tableau", color: "blue-text-gradient" },
      { name: "Data Visualization", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQGkzlLu9KYFIQ/profile-treasury-image-shrink_800_800/B4DZZSIg9aHIAY-/0/1745134688520?e=1745740800&v=beta&t=EXNwpVxip31qky5Szj1HqcXNR0xxZlkz3XsoubxuDGQ", // Replace with actual image path
    source_code_link: "/",
  },
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "Built a Next.js app with dynamic animations to demonstrate sorting algorithms (Merge Sort, QuickSort). Enhanced user engagement by 30% through adjustable array sizes and real-time visualizations.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Next.js", color: "green-text-gradient" },
      { name: "Algorithms", color: "pink-text-gradient" },
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQHYo82kQJ5DSA/profile-treasury-image-shrink_800_800/B4DZZSIy25GkAY-/0/1745134759986?e=1745740800&v=beta&t=7-aVrZfNoYsUauYhD0D2cdgJd4XSbYgHMNp7R4ocH8A", // Replace with actual image path
    source_code_link: "https://github.com/anonymousminati/Comparison-Sorting-Algorithms",
  },
  {
    name: "House Price Prediction Model",
    description:
      "Achieved 70% accuracy using linear regression, identifying key predictors (sqft_living, waterfront). Derived actionable insights: Waterfront properties increase value by $582,700.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "EDA", color: "pink-text-gradient" },
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQGXuQRRnP8pXA/profile-treasury-image-shrink_800_800/B4DZWJFpRVHIAY-/0/1741761713756?e=1745740800&v=beta&t=NWnUPFz8U1nUR9mtthtEfSQZPKbFPJFVjhQKY73C2mc", // Replace with actual image path
    source_code_link: "https://github.com/anonymousminati/House-Prices-Prediction-USA",
  },
  {
    name: "AI-Powered Police Stress Management System",
    description:
      "Reduced stress levels by 40% for law enforcement through TensorFlow emotion detection and Gemini AI chatbot support. Integrated personalized music recommendations and Firebase for real-time data sync.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQH1uCoS5h-OUg/profile-treasury-image-shrink_800_800/B4DZWJDWmAHAAY-/0/1741761113168?e=1745740800&v=beta&t=7yasvj2jDNgcGT2Syi4eK71Y6b-yGTmDF12ULeaLFoo", // Replace with actual image path
    source_code_link: "https://github.com/anonymousminati/stressShield",
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Comdata Innovation",
    icon: comdata, // Add the appropriate icon path if available
    iconBg: "#E6DEDD",
    date: "Jan 2025 – Present",
    points: [
      "MERN stack development for web/mobile apps.",
    ],
  },
  {
    title: "Created Legal Rental Platform",
    company_name: "LegalWing",
    icon: legalwing,
    iconBg: "#8E8E5A",
    date: "July 2024 - Aug 2024",
    points: [
      "Assisted senior instructors in teaching 80+ students across 4 batches in Full Stack Development.",
      "Created curriculum, incorporating industry insights and practical case studies to enhance learning.",
      "Led doubt-solving sessions and provided personal guidance to support learners in understanding key concepts.",
      "Designed capstone web development projects to give students hands-on experience with real-world applications.",
    ],
  },
  {
    title: "Full Stack MERN Developer",
    company_name: "Spiderweb Digitals",
    icon: spiderweb,
    iconBg: "#f8f8f8",
    date: "Oct 2023 - Jul 2024",
    points: [
      "Developed scalable frontends and backends using Reactjs, Next.js, and Node.js for 10+ businesses, leveraging strong Data Structures and Algorithms to achieve a 25% increase in overall application performance.",
      "Engineered and managed REST APIs integrating technologies like Node.js and MongoDB, which enhanced data processing speed by 40%. ",
      "Redesigned 5 live websites to meet modern requirements, boosting website performance by 50% and improving user retention rates by 20%.",
      "Showcased strong debugging code abilities and troubleshooting skills to enhance website functionality.",
    ],
  },

 
  {
    title: "MERN Developer Intern",
    company_name: "Mood Indigo",
    icon: "", // Add the appropriate icon path if available
    iconBg: "#E6DEDD",
    date: "May 2023 – Jul 2023",
    points: [
      "Built responsive frontends for 5+ projects, increasing engagement by 30%.",
    ],
  },
];

const linkedinProfile = {
  headline: "Data Analyst | Full Stack Web Developer | Flutter App Developer | AI/ML Enthusiast | Intern at Comdata Innovation",
  summary: "A motivated Computer Engineering student pursuing a BE degree (CGPA: 9.43) with expertise in Data Analysis, Full Stack Web Development (MERN), and Cross-Platform Mobile Apps (Flutter/Dart). Passionate about leveraging cutting-edge technologies like Generative AI, TensorFlow, and Cloud Platforms (AWS/GCP) to build scalable, user-centric solutions.",
  keyHighlights: [
    "🚀 Developed an AI-powered Police Stress Management System using TensorFlow, enhancing personalized mental health support for law enforcement.",
    "💻 Built a House Price Prediction Model (70% accuracy) with linear regression and OLS analysis.",
    "🌐 Delivered 10+ web solutions during internships, improving app performance by 25% and user retention by 20%.",
    "🛠️ Proficient in MERN stack, Flutter, Python, and tools like Power BI, Tableau, and Jenkins."
  ],
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Comdata Innovation",
      duration: "Jan 2025 – Present",
      description: "MERN stack development for web/mobile apps."
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "Spiderweb",
      duration: "Jan 2024 – Feb 2025",
      description: "Optimized client websites, boosting backend efficiency and user engagement."
    },
    {
      title: "MERN Developer Intern",
      company: "Mood Indigo",
      duration: "May 2023 – Jul 2023",
      description: "Built responsive frontends for 5+ projects, increasing engagement by 30%."
    }
  ],
  education: [
    {
      degree: "BE in Computer Engineering",
      institution: "MMIT Lohgaon",
      duration: "2022–2025",
      cgpa: "9.43"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Govt. Polytechnic Hingoli",
      duration: "2020–2022",
      percentage: "89%"
    }
  ],
  certifications: [
    "Data Science & Generative AI (upGrad)",
    "Full Stack Web Development (3RI Technologies)",
    "Flutter & Dart Bootcamp (Udemy)"
  ]
};

export { services, technologies,experiences, Social, projects, linkedinProfile };
