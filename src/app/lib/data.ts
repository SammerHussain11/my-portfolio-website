import {
  Award,
  Briefcase,
  Code,
  Cpu,
  Database,
  GanttChartSquare,
  Layers,
  Linkedin,
  Mail,
  Search,
  Bot,
  GitBranch,
} from "lucide-react";

export const portfolioData = {
  name: "Sammer Hussain",
  title: "AI/ML Engineer | Python Developer",
  location: "Karachi, Pakistan",
  email: "sammer.hussain1121@gmail.com",
  linkedin: "https://www.linkedin.com/in/sammer-hussain/",
  github: "https://github.com/SammerHussain11",
  summary:
    "I am a recent IT graduate with a strong foundation in Python and Artificial Intelligence. I am passionate about building innovative, data-driven solutions that address real world challenges. Skilled in Flask and Node js for backend development, I have experience in designing, training, and deploying intelligent applications using modern AI/ML frameworks. I am proficient in multiple programming languages and tools, with a proven ability to transform complex data into actionable insights and deliver scalable, production-ready solutions.",
  topSkills: ["Python", "Flask", "Node JS", "TensorFlow"],
};

export const projects = [
  {
    id: "fredcoach",
    title: "FredCoach: AI Coaching Platform",
    summary:
      "A full-stack, subscription-based SaaS platform delivering 24/7 AI-powered mental coaching via an intelligent chatbot. Engineered the backend with Node.js, Express, and MongoDB; built a responsive React frontend with Tailwind CSS. Integrated Stripe for secure payment processing and implemented a custom RAG system with OpenAI's GPT-4o.",
    tags: ["Node.js", "React", "MongoDB", "Stripe", "RAG", "GPT-4o"],
    imageUrl: "project-fredcoach",
    githubUrl: "https://github.com/SammerHussain11/fredcoach.git",
    liveUrl: "#",
  },
  {
    id: "plagiarism-detection",
    title: "Content Examiner: AI-Powered Plagiarism Detection",
    summary:
      "A modular application to detect semantic and lexical plagiarism, built using Flask and React. It incorporates TF-IDF, cosine similarity, and RoBERTa for sentence-level semantic analysis, and enables document uploads, AI-generated text detection, and detailed PDF reporting.",
    tags: ["Python", "Flask", "React", "NLP", "TF-IDF", "RoBERTa"],
    imageUrl: "project-plagiarism",
    githubUrl: "https://github.com/SammerHussain11/final-year-project.git",
    liveUrl: "#",
  },
  {
    id: "object-detection",
    title: "Live Object Detection with YOLOv8",
    summary:
      "A real-time object detection system using a webcam feed with live predictions and bounding boxes. Crafted with Flask, OpenCV, and YOLOv8, it integrates multi-class detection and confidence scoring, with a web-based interface for monitoring.",
    tags: ["Python", "Flask", "OpenCV", "YOLOv8"],
    imageUrl: "project-object-detection",
    githubUrl:
      "https://github.com/SammerHussain11/live-object-detection-with-yolov8.git",
    liveUrl: "#",
  },
];

export const skills = [
  {
    name: "Python",
    proficiency: 95,
    icon: "python",
    logo: "/logos/python.svg",
  },
  {
    name: "JavaScript",
    proficiency: 85,
    icon: "javascript",
    logo: "/logos/javascript.svg",
  },
  {
    name: "Flask",
    proficiency: 90,
    icon: "flask",
    logo: "/logos/flask.svg",
  },
  {
    name: "Node JS",
    proficiency: 85,
    icon: "nodejs",
    logo: "/logos/nodejs.svg",
  },
  { name: "React", proficiency: 80, icon: "react", logo: "/logos/react.svg" },
  {
    name: "TensorFlow",
    proficiency: 85,
    icon: "tensorflow",
    logo: "/logos/tensorflow.svg",
  },
  {
    name: "Scikit-learn",
    proficiency: 88,
    icon: "scikitlearn",
    logo: "/logos/scikit-learn.svg",
  },
  {
    name: "OpenCV",
    proficiency: 80,
    icon: "opencv",
    logo: "/logos/opencv.svg",
  },
  {
    name: "Pandas",
    proficiency: 87,
    icon: "pandas",
    logo: "/logos/pandas.svg",
  },
  { name: "Keras", proficiency: 82, icon: "keras", logo: "/logos/keras.svg" },
];

export const experiences = [
  {
    company: "CoreTech Innovations",
    role: "AI Engineer Intern",
    duration: "Aug 2025 - Sep 2025",
    location: "Remote",
    icon: Briefcase,
    responsibilities: [
      "Engineered machine learning models (sentiment analysis, student marks predictor) using Python, Scikit-learn, and TensorFlow.",
      "Architected and implemented a smart service platform to enhance internal workflows and productivity.",
      "Executed data preprocessing, feature engineering, and model evaluation to ensure high accuracy.",
      "Partnered with cross-functional teams in an Agile environment to ensure timely project delivery.",
      "Optimized, validated, and deployed models with production-ready techniques.",
      "Delivered data-driven insights and project outcomes to stakeholders, influencing business decisions.",
    ],
  },
];
export const education = {
  institution: "Quaid-e-Awam University of Engineering, Science & Technology",
  degree: "B.Sc. in Information Technology",
  duration: "Dec 2021 - Aug 2025",
};

export const certifications = [
  {
    name: "Google Prompting Essentials",
    issuer: "Google",
    id: "GPE-123",
    icon: Award,
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google",
    id: "GAI-456",
    icon: Award,
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    id: "GAE-789",
    icon: Award,
  },
];

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: portfolioData.linkedin,
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: portfolioData.github,
    icon: GitBranch,
  },
  {
    name: "Email",
    url: `mailto:${portfolioData.email}`,
    icon: Mail,
  },
];
