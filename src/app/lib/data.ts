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
  title: "Junior AI Software Engineer",
  location: "Karachi, Pakistan",
  phone: "+92 307 3461499",
  email: "sammer.hussain1121@gmail.com",
  linkedin: "https://www.linkedin.com/in/sammer-hussain/",
  github: "https://github.com/SammerHussain11",
  portfolio: "https://sammer-hussain-portfolio.vercel.app",
  summary:
    "Junior AI Software Engineer with hands-on experience building LLM-powered chatbots, RAG pipelines, and full-stack AI applications, currently at Decotechs. Comfortable working across the full stack, from embeddings and vector databases to APIs and user-facing interfaces, with a focus on turning AI prototypes into systems people can actually use.",
  topSkills: ["LangChain", "LangGraph", "RAG", "FastAPI", "React.js"],
};

export const projects = [
  {
    id: "resume-job-matching",
    title: "AI Resume-Based Job Matching Portal",
    summary:
      "Built a three-service platform (React frontend, Node/Express API, FastAPI AI microservice) that parses uploaded resumes and matches them to jobs. Designed a weighted relevance-scoring model combining experience match (50%), skill overlap (30%), and semantic similarity from sentence embeddings (20%), normalized to a 0–100 score. Used Sentence Transformers with Pinecone for vector storage/search, and JWT authentication across user and admin roles.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "FastAPI",
      "Sentence Transformers",
      "Pinecone",
      "JWT",
    ],
    imageUrl: "project-resume-matching",
    githubUrl:
      "https://github.com/SammerHussain11/ai-powered-resume-based-job-matching-portal.git",
    demoVideoUrl:
      "https://drive.google.com/file/d/1JA6gfPKB9FnwsRRrE_sdcevRA9oHY1ss/view?usp=sharing",
  },
  {
    id: "fredcoach",
    title: "FredCoach: AI Coaching Platform",
    summary:
      "Built a subscription-based AI coaching platform offering 24/7 chatbot coaching, powered by GPT-4o with RAG and ChromaDB. Implemented Stripe subscription billing, JWT authentication, and an admin dashboard for customizing branding, prompts, and assistant behavior. Added multi-chat support so users can manage multiple ongoing conversations.",
    tags: [
      "Node.js",
      "React.js",
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
    title: "Content Examiner: AI Plagiarism Detection (FYP)",
    summary:
      "Built a plagiarism-detection web app combining RoBERTa and TF-IDF, supporting PDF/DOCX/TXT uploads and direct document/text comparison. Added web-search integration to automatically surface related online sources, with reports exported to PDF and plagiarism visualized via pie charts.",
    tags: [
      "Python",
      "Flask",
      "React.js",
      "RoBERTa",
      "TF-IDF",
      "Transformers",
      "Hugging Face",
    ],
    imageUrl: "project-plagiarism",
    githubUrl: "https://github.com/SammerHussain11/final-year-project.git",
    demoVideoUrl: "/assets/videos/content-examiner-demo.mp4",
  },
  {
    id: "voice-agent",
    title: "Voice AI Agent: Patient Registration",
    summary:
      "Built an end-to-end voice agent connecting a real phone number via Twilio ConversationRelay (Deepgram STT, ElevenLabs TTS) to a LangGraph conversational agent for patient registration, plus a REST API and dashboard. Implemented mandatory read-back confirmation before saving, duplicate-caller detection with DOB verification, and shared field validation between the voice agent and the API. Covered with 24 automated tests across validation rules, REST endpoints, the agent, and an end-to-end WebSocket call flow.",
    tags: [
      "LangGraph",
      "FastAPI",
      "Twilio",
      "React.js",
      "Deepgram",
      "ElevenLabs",
      "AI Agents",
    ],
    imageUrl: "project-voice-agent",
    githubUrl:
      "https://github.com/SammerHussain11/voice-patient-registration-agent.git",
    demoVideoUrl: "/assets/videos/healthcare-ai-voice-agent-demo.mp4",
  },
  {
    id: "linkedin-lead-outreach",
    title: "AI-Powered LinkedIn Lead Outreach Automation",
    summary:
      "A reusable n8n workflow that reads leads from Google Sheets, processes them in batches, and uses a LangChain AI agent with Google Gemini to draft and send personalized outreach emails through Gmail. The workflow updates each lead's status in the sheet after processing.",
    tags: [
      "n8n",
      "LangChain",
      "Google Gemini",
      "Google Sheets",
      "Gmail",
      "Automation",
    ],
    imageUrl: "project-linkedin-outreach",
    githubUrl:
      "https://github.com/SammerHussain11/ai-automation-n8n/tree/main/workflows/ai-powered-linkedIn-lead-outreach-automation",
  },
  {
    id: "object-detection",
    title: "Live Object Detection with YOLOv8",
    summary:
      "Built a real-time object detection app on YOLOv8x, supporting both live webcam (MJPEG stream) and image-upload detection across 80+ COCO classes. Added monocular distance estimation, adjustable confidence thresholds, class filtering, and live FPS/processing-time metrics.",
    tags: ["Python", "Flask", "React.js", "OpenCV", "YOLOv8", "TensorFlow"],
    imageUrl: "project-object-detection",
    githubUrl:
      "https://github.com/SammerHussain11/live-object-detection-with-yolov8.git",
    demoVideoUrl: "/assets/videos/lod-project-demo.mp4",
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
    name: "FastAPI",
    proficiency: 90,
    icon: "fastapi",
    logo: "/logos/fastapi.svg",
  },
  {
    name: "Node.js",
    proficiency: 88,
    icon: "nodejs",
    logo: "/logos/nodejs.svg",
  },
  {
    name: "Express.js",
    proficiency: 85,
    icon: "express",
    logo: "/logos/express.svg",
  },
  {
    name: "React.js",
    proficiency: 86,
    icon: "react",
    logo: "/logos/react.svg",
  },
  {
    name: "Streamlit",
    proficiency: 80,
    icon: "streamlit",
    logo: "/logos/streamlit.svg",
  },
  {
    name: "LangChain",
    proficiency: 90,
    icon: "langchain",
    logo: "/logos/langchain.svg",
  },
  {
    name: "LangGraph",
    proficiency: 88,
    icon: "langgraph",
    logo: "/logos/langchain.svg",
  },
  {
    name: "AI Agents",
    proficiency: 88,
    icon: "ai-agents",
    logo: "/logos/openai.svg",
  },
  {
    name: "MCP",
    proficiency: 78,
    icon: "mcp",
    logo: "/logos/github.svg",
  },
  {
    name: "RAG",
    proficiency: 92,
    icon: "rag",
    logo: "/logos/rag.svg",
  },
  {
    name: "Prompt Engineering",
    proficiency: 90,
    icon: "prompt-engineering",
    logo: "/logos/prompt-engineering.png",
  },
  {
    name: "HF Transformers",
    proficiency: 88,
    icon: "transformers",
    logo: "/logos/transformers.svg",
  },
  {
    name: "Fine-Tuning",
    proficiency: 78,
    icon: "fine-tuning",
    logo: "/logos/fine-tuning.png",
  },
  {
    name: "Scikit-learn",
    proficiency: 88,
    icon: "scikitlearn",
    logo: "/logos/scikit-learn.svg",
  },
  {
    name: "TensorFlow",
    proficiency: 84,
    icon: "tensorflow",
    logo: "/logos/tensorflow.svg",
  },
  {
    name: "NLTK",
    proficiency: 78,
    icon: "nltk",
    logo: "/logos/nltk.png",
  },
  {
    name: "OpenCV",
    proficiency: 80,
    icon: "opencv",
    logo: "/logos/opencv.svg",
  },
  {
    name: "Pinecone",
    proficiency: 82,
    icon: "pinecone",
    logo: "/logos/pinecone.svg",
  },
  {
    name: "ChromaDB",
    proficiency: 84,
    icon: "chromadb",
    logo: "/logos/chromadb.svg",
  },
  {
    name: "Ollama",
    proficiency: 80,
    icon: "ollama",
    logo: "/logos/openai.svg",
  },
  {
    name: "GPT-4o",
    proficiency: 88,
    icon: "openai",
    logo: "/logos/openai.svg",
  },
  {
    name: "Gemini",
    proficiency: 72,
    icon: "google-gemini",
    logo: "/logos/google-gemini.svg",
  },
  {
    name: "Claude",
    proficiency: 70,
    icon: "claude",
    logo: "/logos/openai.svg",
  },
  {
    name: "MongoDB",
    proficiency: 82,
    icon: "mongodb",
    logo: "/logos/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    proficiency: 78,
    icon: "postgresql",
    logo: "/logos/postgresql.svg",
  },
  {
    name: "MySQL",
    proficiency: 76,
    icon: "mysql",
    logo: "/logos/sql.svg",
  },
  {
    name: "SQLite",
    proficiency: 78,
    icon: "sqlite",
    logo: "/logos/sqlite.svg",
  },
  { name: "n8n", proficiency: 80, icon: "n8n", logo: "/logos/n8n.svg" },
  {
    name: "Playwright",
    proficiency: 80,
    icon: "playwright",
    logo: "/logos/github.svg",
  },
  {
    name: "Docker",
    proficiency: 80,
    icon: "docker",
    logo: "/logos/docker.svg",
  },
  { name: "AWS", proficiency: 68, icon: "aws", logo: "/logos/aws.svg" },
  { name: "Git", proficiency: 90, icon: "git", logo: "/logos/git.svg" },
  {
    name: "GitHub",
    proficiency: 90,
    icon: "github",
    logo: "/logos/github.svg",
  },
];

export const experiences = [
  {
    company: "Decotechs",
    role: "Junior AI Software Engineer",
    duration: "Feb 2026 – Present",
    location: "Karachi, Pakistan",
    icon: Briefcase,
    responsibilities: [
      "Built and deployed LLM chatbots and RAG pipelines using LangChain, LangGraph, OpenAI APIs, and Ollama for context-aware knowledge retrieval.",
      "Built RESTful APIs with FastAPI, Node.js, and Express; built responsive frontends with React.js and Streamlit.",
      "Automated internal workflows using n8n and Playwright for browser-based process automation.",
      "Built the Medication Administration Record (MAR) module for a MERN-stack medical data entry system, displaying medicines on daily, weekly, and monthly schedules and logging status (taken, refused, unable to take).",
      "Leading development of an LLM-powered text-to-CAD 3D model generation feature, currently moving toward production deployment.",
    ],
  },
  {
    company: "CoreTech Innovations",
    role: "AI Engineer Intern",
    duration: "Aug – Sep 2025",
    location: "Hyderabad, Pakistan",
    icon: Briefcase,
    responsibilities: [
      "Built and evaluated classification models (Logistic Regression, Random Forest with GridSearchCV tuning) on a benchmark survival-prediction dataset, improving accuracy from 80% to 82%.",
      "Built an SMS spam-detection system comparing 10+ ML algorithms; a voting-classifier ensemble reached 98.2% accuracy and 99.2% precision.",
      "Built a multi-class service-inquiry classifier (5 categories, TF-IDF + Logistic Regression/Random Forest) for a smart service platform, achieving near-perfect accuracy on the evaluation set.",
      "Built and evaluated sentiment-analysis models using Python, Scikit-learn, and NLTK.",
    ],
  },
];

export const education = {
  institution:
    "Quaid-e-Awam University of Engineering, Sciences & Technology",
  degree: "B.S. Information Technology",
  duration: "Dec 2021 – Dec 2025",
  cgpa: "3.57/4.00",
  location: "Nawabshah, Pakistan",
};

export const certifications = [
  {
    name: "Google AI Essentials",
    issuer: "Google",
    id: "GAE-001",
    icon: Award,
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google",
    id: "GAI-002",
    icon: Award,
  },
  {
    name: "IBM Machine Learning",
    issuer: "IBM",
    id: "IML-003",
    icon: Award,
  },
  {
    name: "Full Stack MEAN Developer",
    issuer: "Google",
    id: "MEAN-004",
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
