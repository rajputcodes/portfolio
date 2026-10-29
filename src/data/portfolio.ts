export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problemStatement: string;
  approach: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  accent: "violet" | "cyan" | "indigo";
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  organization?: string;
  platform?: string;
  achievement?: string;
  credentialId?: string;
  date?: string;
  score?: string;
  highlights?: string[];
  accentColor: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  location?: string;
  duration?: string;
  score?: string;
  isCurrent?: boolean;
}

export interface SimulationExperience {
  company: string;
  simulationTitle: string;
  platform: string;
  description: string;
  highlights: string[];
  date?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ganesh Singh",
    role: "Aspiring AI/ML Engineer",
    studentStatus: "M.Sc. Artificial Intelligence Student",
    statusBadge: "Learning • Building • Innovating",
    location: "Vadodara, Gujarat, India",
    email: "gs2876756@gmail.com",
    github: "https://github.com/rajout-codes",
    linkedin: "https://linkedin.com/in/ganesh-singh-68a71837a/",
    headline: "Building Intelligent Systems for Real-World Problems.",
    gradientHighlight: "Intelligent Systems",
    summary:
      "I'm Ganesh Singh, an aspiring AI/ML Engineer passionate about Generative AI, intelligent agents, machine learning, and building practical software solutions.",
    technicalLine: "Exploring Machine Learning · Generative AI · Agentic Systems",
  },

  about: {
    heading: "Curious Mind. Engineering Mindset.",
    subtitle: "Learning the foundations. Building practical solutions. Exploring what's next.",
    paragraphs: [
      "I'm an M.Sc. Artificial Intelligence student at Parul University with a background in commerce and a growing technical focus on machine learning, Generative AI, and software development.",
      "Through academic projects, hands-on development, certifications, and industry job simulations, I've been developing practical skills in exploratory data analysis, predictive modelling, AI-powered applications, and agentic AI frameworks.",
      "I'm particularly interested in building intelligent applications that solve real-world problems and combining AI capabilities with reliable software engineering.",
    ],
    cards: [
      {
        title: "Education",
        primary: "M.Sc. Artificial Intelligence",
        secondary: "Parul University, Vadodara",
        icon: "GraduationCap",
      },
      {
        title: "Focus Areas",
        primary: "AI / ML · Generative AI",
        secondary: "Agentic Systems & Frameworks",
        icon: "Brain",
      },
      {
        title: "Development",
        primary: "Python · APIs",
        secondary: "Web & Backend Systems",
        icon: "Code2",
      },
      {
        title: "Current Direction",
        primary: "Building & Improving",
        secondary: "AI-Powered Real-World Projects",
        icon: "Compass",
      },
    ],
  },

  skillCategories: [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Core algorithms, data analysis, and predictive models",
      iconName: "Brain",
      skills: [
        "Machine Learning Fundamentals",
        "Predictive Modelling",
        "Exploratory Data Analysis (EDA)",
        "Risk Profiling",
        "Data Storytelling",
        "TF-IDF",
        "Cosine Similarity",
        "Content-Based Filtering",
        "Collaborative Filtering",
      ],
    },
    {
      title: "Generative AI & Agentic Systems",
      description: "Modern LLM agent architectures and workflows",
      iconName: "Sparkles",
      skills: [
        "Generative AI",
        "LangGraph",
        "CrewAI",
        "AutoGen",
        "BeeAI",
        "Model Context Protocol (MCP)",
        "AI Chatbot Development",
        "Agentic AI Concepts",
      ],
    },
    {
      title: "Programming Languages",
      description: "Languages used for algorithmic problem solving and development",
      iconName: "Terminal",
      skills: ["Python", "Java", "C"],
    },
    {
      title: "Web & Backend Development",
      description: "Robust frameworks for APIs and application infrastructure",
      iconName: "Server",
      skills: ["Flask", "Django", "FastAPI", "Node.js", "REST APIs"],
    },
    {
      title: "Data & ML Libraries",
      description: "Numerical computation and statistical analysis toolkits",
      iconName: "Database",
      skills: ["Pandas", "NumPy", "Scikit-learn"],
    },
    {
      title: "Cloud & Developer Tools",
      description: "Version control, workflow tooling, and cloud learning",
      iconName: "Cpu",
      skills: ["AWS Machine Learning", "LaTeX", "Git", "GitHub"],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "cinematch-ai",
      title: "CineMatch AI",
      subtitle: "Hybrid Movie Recommendation System",
      category: "Machine Learning · Recommendation Systems",
      description:
        "A personalized movie recommendation application combining content-based filtering and item-based collaborative filtering to generate relevant movie suggestions.",
      problemStatement:
        "Standard recommendation engines either suffer from cold-start limitations or recommend overly homogeneous items by looking solely at ratings without contextual content metadata.",
      approach:
        "Designed and implemented a weighted hybrid recommendation architecture. Uses TF-IDF and Cosine Similarity to analyze plot, metadata, and genres, paired with item-based collaborative filtering to balance accuracy and novelty.",
      technologies: [
        "Python",
        "Flask",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TF-IDF",
        "Cosine Similarity",
      ],
      keyFeatures: [
        "Hybrid recommendation strategy",
        "Genre-based content similarity",
        "Item-based collaborative filtering",
        "Weighted recommendation scoring",
        "Movie search and ratings",
        "REST API integration",
        "Automated API and recommendation tests",
      ],
      githubUrl: "https://github.com/rajout-codes/CineMatch-AI",
      accent: "violet",
    },
    {
      id: "smartbank-ai",
      title: "SmartBank AI",
      subtitle: "AI-Powered Banking Assistant",
      category: "Artificial Intelligence · Application Development",
      description:
        "An AI-powered banking application designed to support common banking-related interactions through an interactive assistant experience.",
      problemStatement:
        "Modern digital banking platforms often overwhelm users with complex multi-level menus for simple inquiries, routine transactions, or account-related guidance.",
      approach:
        "Engineered an interactive conversational assistant that parses user intents and queries, interfacing seamlessly with backend services in a structured, modular architecture.",
      technologies: ["Python", "AI / ML", "NLP", "Backend Development"],
      keyFeatures: [
        "AI-assisted banking interactions",
        "Interactive assistant experience",
        "Modular application architecture",
        "Integration between AI functionality and backend services",
      ],
      githubUrl: "https://github.com/rajout-codes/SmartBank-AI",
      accent: "cyan",
    },
    {
      id: "lms",
      title: "Learning Management System",
      subtitle: "Structured Digital Learning Platform",
      category: "Web Development · Backend Systems",
      description:
        "A web-based Learning Management System focused on organizing learning resources, supporting user activities, and providing a structured learning experience.",
      problemStatement:
        "Educational environments need a dependable, lightweight digital repository to catalog educational materials, track student engagement, and coordinate learning workflows.",
      approach:
        "Constructed a clean, modular backend and web interface with organized database schemas to maintain course structures, user learning tracks, and course activity tracking.",
      technologies: ["Web Development", "Backend Development", "Database Systems"],
      keyFeatures: [
        "Learning resource organization",
        "Course management functionality",
        "User activity support",
        "Modular application structure",
        "Maintainable backend functionality",
      ],
      githubUrl: "https://github.com/rajout-codes/lms",
      accent: "indigo",
    },
  ] as Project[],

  certifications: [
    {
      id: "aws-ml",
      title: "AWS Machine Learning",
      provider: "FutureSkills Prime / NASSCOM IT-ITeS SSC",
      organization: "Ministry of Electronics & Information Technology, Government of India",
      achievement: "Gold Category · Score: 97/100",
      credentialId: "FSP/2026/7/10343395",
      date: "July 2026",
      accentColor: "#F59E0B", // Subtle amber/AWS accent
    },
    {
      id: "tata-genai",
      title: "GenAI Powered Data Analytics Job Simulation",
      provider: "Tata",
      platform: "Forage",
      date: "July 2026",
      highlights: [
        "Exploratory data analysis and risk profiling",
        "Predictive modelling for delinquency",
        "Business reporting and data storytelling",
        "AI-driven collections strategy",
      ],
      accentColor: "#38BDF8", // Cyan
    },
    {
      id: "bcgx-genai",
      title: "GenAI Job Simulation",
      provider: "BCGX",
      platform: "Forage",
      date: "July 2026",
      highlights: [
        "Data extraction and initial analysis",
        "Development of an AI-powered financial chatbot",
      ],
      accentColor: "#8B5CF6", // Violet
    },
    {
      id: "ibm-agentic",
      title: "IBM Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI",
      provider: "Coursera",
      accentColor: "#6366F1", // Indigo
    },
    {
      id: "mcp",
      title: "Model Context Protocol",
      provider: "Coursera",
      accentColor: "#A855F7", // Purple
    },
    {
      id: "latex",
      title: "LaTeX Training",
      provider: "Edu Pyramids · SINE · IIT Bombay",
      score: "83.89/100",
      accentColor: "#14B8A6", // Teal
    },
  ] as Certification[],

  education: [
    {
      institution: "Parul University",
      degree: "M.Sc. Artificial Intelligence — PICA",
      location: "Vadodara, Gujarat, India",
      duration: "2025 – Present",
      score: "CGPA: 7.45 / 10",
      isCurrent: true,
    },
    {
      institution: "S.B. College",
      degree: "B.Com. Accounting",
      location: "Ara, Bihar, India",
      duration: "Full Time",
      score: "65.20%",
      isCurrent: false,
    },
    {
      institution: "Maharaja College",
      degree: "12th Standard — BSEB",
      duration: "2022",
      score: "74%",
      isCurrent: false,
    },
    {
      institution: "H N K High School",
      degree: "10th Standard — BSEAP",
      duration: "2020",
      score: "62%",
      isCurrent: false,
    },
  ] as EducationItem[],

  practicalLearning: [
    {
      company: "Tata",
      simulationTitle: "GenAI Powered Data Analytics Job Simulation",
      platform: "Forage",
      description: "Applied data analytics and AI concepts to a simulated business problem.",
      highlights: [
        "Conducted exploratory data analysis.",
        "Performed risk profiling.",
        "Developed predictive modelling workflows.",
        "Prepared business reporting and data storytelling deliverables.",
        "Explored AI-assisted collections strategy.",
      ],
    },
    {
      company: "BCGX",
      simulationTitle: "GenAI Job Simulation",
      platform: "Forage",
      description:
        "Explored data analysis and AI-powered financial chatbot development through a job simulation.",
      highlights: [
        "Data extraction and initial analysis.",
        "AI-powered financial chatbot development.",
      ],
    },
  ] as SimulationExperience[],
};

