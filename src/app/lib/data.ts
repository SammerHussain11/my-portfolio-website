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
  title: "AI Automation Engineer",
  location: "Karachi, Pakistan",
  email: "sammer.hussain1121@gmail.com",
  linkedin: "https://www.linkedin.com/in/sammer-hussain/",
  github: "https://github.com/SammerHussain11",
  summary:
    "AI Automation Engineer with hands-on experience building production-ready Generative AI and automation systems. Skilled in developing RAG-based applications, AI-powered products, and end-to-end automation workflows using n8n. Experienced in integrating LLMs, vector databases, and cloud tools to automate document processing, lead enrichment, and intelligent data pipelines. Focused on turning unstructured data and manual processes into scalable, reliable AI-driven solutions.",
  topSkills: ["Python", "LangChain", "RAG", "ChromaDB", "Node JS"],
};

export const projects = [
  {
    id: "fredcoach",
    title: "FredCoach: AI Coaching Platform",
    summary:
      "Full-stack SaaS delivering 24/7 AI mental coaching via GPT-4o chatbot, leveraging RAG with ChromaDB as the vector database. Built with Node.js, Express, MongoDB, React, and Tailwind CSS. Integrated Stripe for secure subscription management and developed a comprehensive admin panel for user management, analytics, and platform customization.",
    tags: [
      "Node.js",
      "React",
      "MongoDB",
      "Stripe",
      "RAG",
      "GPT-4o",
      "ChromaDB",
      "LangChain",
      "Prompt Engineering",
    ],
    imageUrl: "project-fredcoach",
    githubUrl: "https://github.com/SammerHussain11/fredcoach.git",
    demoVideoUrl: "/assets/videos/fredcoach-project-demo.mp4",
  },
  {
    id: "plagiarism-detection",
    title: "Content Examiner: AI-Powered Plagiarism Detection",
    summary:
      "A modular application to detect semantic and lexical plagiarism, built using Flask and React. It incorporates TF-IDF, cosine similarity, and RoBERTa for sentence-level semantic analysis, and enables document uploads, AI-generated text detection, and detailed PDF reporting.",
    tags: [
      "Python",
      "Flask",
      "React",
      "NLP",
      "TF-IDF",
      "RoBERTa",
      "Transformers",
      "Hugging Face",
    ],
    imageUrl: "project-plagiarism",
    githubUrl: "https://github.com/SammerHussain11/final-year-project.git",
    demoVideoUrl: "/assets/videos/content-examiner-demo.mp4",
  },
  {
    id: "object-detection",
    title: "Live Object Detection with YOLOv8",
    summary:
      "A real-time object detection system using a webcam feed with live predictions and bounding boxes. Crafted with Flask, OpenCV, and YOLOv8, it integrates multi-class detection and confidence scoring, with a web-based interface for monitoring.",
    tags: ["Python", "Flask", "OpenCV", "YOLOv8", "TensorFlow"],
    imageUrl: "project-object-detection",
    githubUrl:
      "https://github.com/SammerHussain11/live-object-detection-with-yolov8.git",
    demoVideoUrl: "/assets/videos/lod-project-demo.mp4",
  },
  {
    id: "doc-ingestion-vectorization",
    title: "Document Ingestion and Vectorization Pipeline",
    summary:
      "Document ingestion and vectorization pipeline using n8n, Google Gemini, and Pinecone. End-to-end n8n workflow fetching files from Google Drive, embedding with Google Gemini, and indexing in Pinecone for semantic search and RAG applications. Scalable automation integrating LLMs, vector stores, and cloud storage.",
    tags: ["n8n", "Google Gemini", "Pinecone", "RAG", "ChromaDB", "Automation"],
    imageUrl: "project-doc-ingestion",
    githubUrl:
      "https://github.com/SammerHussain11/ai-automation-n8n/tree/f22af745d89fad3f2df5d0cf473722b8ed8c9fdb/workflows/%20document-ingestion-%26-vectorization-pipeline-(google-drive-pinecone)",
  },
  {
    id: "linkedin-lead-outreach",
    title: "LinkedIn Lead Outreach Automation",
    summary:
      "LinkedIn lead outreach automation using n8n, LangChain, Google Gemini, and Google Sheets. AI-driven workflow generating personalized outreach messages from Google Sheets data. Integrated LangChain with Gemini for intelligent message generation based on lead profiles and business context.",
    tags: ["n8n", "LangChain", "Google Gemini", "Google Sheets", "Automation"],
    imageUrl: "project-linkedin-outreach",
    githubUrl:
      "https://github.com/SammerHussain11/ai-automation-n8n/tree/f22af745d89fad3f2df5d0cf473722b8ed8c9fdb/workflows/ai-powered-linkedIn-lead-outreach-automation",
  },
  {
    id: "google-maps-lead-extraction",
    title: "Google Maps Business Lead Extraction & Enrichment (n8n)",
    summary:
      "Google Maps lead extraction automation using n8n and Google Sheets. Scalable workflow to extract business listings, scrape contact emails, deduplicate leads, and sync enriched data to Google Sheets via secure OAuth2 integration.",
    tags: [
      "n8n",
      "Google Maps",
      "Google Sheets",
      "Data Enrichment",
      "Automation",
    ],
    imageUrl: "project-maps-leads",
    githubUrl:
      "https://github.com/SammerHussain11/ai-automation-n8n/tree/f22af745d89fad3f2df5d0cf473722b8ed8c9fdb/workflows/google-maps-business-lead-extraction-%26-enrichment-automation",
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
  { name: "SQL", proficiency: 80, icon: "sql", logo: "/logos/sql.svg" },
  {
    name: "SQLite",
    proficiency: 80,
    icon: "sqlite",
    logo: "/logos/sqlite.svg",
  },
  {
    name: "PostgreSQL",
    proficiency: 80,
    icon: "postgresql",
    logo: "/logos/postgresql.svg",
  },
  {
    name: "MongoDB",
    proficiency: 82,
    icon: "mongodb",
    logo: "/logos/mongodb.svg",
  },
  { name: "N8N", proficiency: 75, icon: "n8n", logo: "/logos/n8n.svg" },
  {
    name: "LangChain",
    proficiency: 85,
    icon: "langchain",
    logo: "/logos/langchain.svg",
  },
  { name: "RAG", proficiency: 88, icon: "rag", logo: "/logos/rag.svg" },
  {
    name: "Prompt Engineering",
    proficiency: 90,
    icon: "prompt-engineering",
    logo: "/logos/prompt-engineering.png",
  },
  {
    name: "ChromaDB",
    proficiency: 84,
    icon: "chromadb",
    logo: "/logos/chromadb.svg",
  },
  {
    name: "Pinecone",
    proficiency: 80,
    icon: "pinecone",
    logo: "/logos/pinecone.svg",
  },
  {
    name: "Hugging Face",
    proficiency: 82,
    icon: "huggingface",
    logo: "/logos/hugging-face.svg",
  },
  { name: "LLaMA", proficiency: 75, icon: "llama", logo: "/logos/llama.svg" },
  {
    name: "OpenAI",
    proficiency: 90,
    icon: "openai",
    logo: "/logos/openai.svg",
  },
  {
    name: "Google Gemini",
    proficiency: 70,
    icon: "google-gemini",
    logo: "/logos/google-gemini.svg",
  },
  {
    name: "Transformers",
    proficiency: 88,
    icon: "transformers",
    logo: "/logos/transformers.svg",
  },
  { name: "NLTK", proficiency: 78, icon: "nltk", logo: "/logos/nltk.png" },
  {
    name: "Streamlit",
    proficiency: 77,
    icon: "streamlit",
    logo: "/logos/streamlit.svg",
  },
  { name: "Git", proficiency: 90, icon: "git", logo: "/logos/git.svg" },
  {
    name: "GitHub",
    proficiency: 90,
    icon: "github",
    logo: "/logos/github.svg",
  },
  {
    name: "Visual Studio Code",
    proficiency: 90,
    icon: "vscode",
    logo: "/logos/vs-code.svg",
  },
  {
    name: "Anaconda",
    proficiency: 75,
    icon: "anaconda",
    logo: "/logos/anaconda.svg",
  },
  {
    name: "Jupyter Notebook",
    proficiency: 88,
    icon: "jupyter",
    logo: "/logos/jupyter-notebook.svg",
  },
  {
    name: "Google Colab",
    proficiency: 80,
    icon: "colab",
    logo: "/logos/google-colab.svg",
  },
  {
    name: "Docker",
    proficiency: 82,
    icon: "docker",
    logo: "/logos/docker.svg",
  },
  { name: "AWS", proficiency: 65, icon: "aws", logo: "/logos/aws.svg" },
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
