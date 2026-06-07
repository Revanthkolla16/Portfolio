// ── Portfolio data ─────────────────────────────────────────

export const personal = {
  name: "Revanth Kolla",
  github: "https://github.com/Revanthkolla16",
  linkedin: "https://linkedin.com/in/revanth-kolla",
  leetcode: "https://leetcode.com/u/Revanth2006",
  leetcodeUser: "Revanth2006",
  avatar: "https://avatars.githubusercontent.com/u/169203664?v=4",
  bio: [
    `I'm a Final-year Computer Science student at IIITDM Kancheepuram with a strong interest in software development, machine learning, deep learning, and modern AI.`,
    `I enjoy building practical applications, solving algorithmic problems, and exploring how intelligent systems can be applied to real-world challenges. My work spans software development, machine learning, deep learning, LLM-powered applications, and AI agents.`,
    `Alongside my projects, I've solved 450+ LeetCode problems, sharpening my problem-solving skills and algorithmic thinking. I'm also currently learning Java, object-oriented design, low-level design, system design, and technologies used in modern cloud-native applications, including Docker, AWS, Redis, and Kafka.`,
    `Currently, I'm working on a research internship using the EMBER 2024 dataset, where I'm experimenting with machine learning models for malware detection and comparative performance analysis, while continuing to deepen my understanding of modern AI and software engineering.`
  ],
};

export const skills = [
  {
    title: "Programming Languages",
    tags: ["C", "C++", "Python", "Java", "SQL"],
  },
  {
    title: "Development",
    tags: ["React", "Next.js", "Node.js", "Express", "FastAPI"],
  },
  {
    title: "Machine Learning & AI",
    tags: ["Scikit-learn", "PyTorch", "Transformers", "LangChain", "LangGraph", "RAG"],
  },
  {
    title: "Databases",
    tags: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Supabase", "ChromaDB"],
  },
  {
    title: "Tools & Platforms",
    tags: ["Git", "GitHub", "Docker", "Postman"],
  },
];

export const projects = [
  {
    icon: "🔍",
    name: "Pix-Query",
    desc: "Fine-tuned LLaVA-1.5-7B for electronics product Visual Question Answering using LoRA on Amazon Reviews 2023 dataset. FastAPI backend + React demo with attention visualization.",
    tech: ["Python", "LLaVA", "LoRA / PEFT", "FastAPI", "React", "HuggingFace"],
    github: "https://github.com/Revanthkolla16/Pix-Query",
    live: "",
  },
  {
    icon: "🤖",
    name: "GenAI Learning",
    desc: "Hands-on AI engineering — RAG pipelines, tool calling, LangGraph agents, multi-agent workflows, and evaluation pipelines. Built on a fully open/free stack.",
    tech: ["LangGraph", "RAG", "Groq", "Ollama", "ChromaDB", "FastAPI"],
    github: "https://github.com/Revanthkolla16/GenAI-Learning",
    live: "",
  },
  {
    icon: "🍕",
    name: "Campus Eats",
    desc: "Full-stack food ordering platform for campus canteens. Students browse menus, place orders, and track delivery in real-time. Live on Vercel.",
    tech: ["JavaScript", "React", "Node.js", "Vercel"],
    github: "https://github.com/Revanthkolla16/Campus-Eats",
    live: "https://campus-eats-flame.vercel.app",
  },
  {
    icon: "⚡",
    name: "Electricity Bill Prediction",
    desc: "ML regression model predicting monthly electricity bills from usage patterns and household parameters. Includes data analysis, feature engineering, and multi-model comparison.",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com/Revanthkolla16/Electricity-Bill-Prediction",
    live: "",
  },
  {
    icon: "🧾",
    name: "Bill Splitter",
    desc: "Smart group expense splitting tool that handles unequal shares, tracks debts, and generates clear settlement reports. Built with clean Python CLI.",
    tech: ["Python", "CLI", "Algorithms"],
    github: "https://github.com/Revanthkolla16/Bill-Splitter",
    live: "",
  },
  {
    icon: "🖼️",
    name: "DIP Project",
    desc: "Digital Image Processing project implementing classical and modern techniques — filtering, edge detection, morphological operations using browser Canvas API.",
    tech: ["JavaScript", "Canvas API", "Image Processing"],
    github: "https://github.com/Revanthkolla16/DIP-Project",
    live: "",
  },
];

export const education = [
  {
    period: "Aug 2023 — May 2027 (Expected)",
    degree: "B.Tech in Computer Science & Engineering",
    org: "IIITDM Kancheepuram",
    desc: "Rigorous CS program with a focus on core systems, AI, and software engineering. Actively involved in research and hands-on project work.",
    badges: ["DSA", "OOP", "DBMS", "Computer Networks", "OS", "AI", "Machine Learning", "Image Processing"],
  },
];

export const experience = [
  {
    icon: "🔬",
    role: "Research Intern",
    org: "IIITDM Kancheepuram",
    period: "May 2026 — Present",
    bullets: [
      "Working on the <strong>EMBER 2024 dataset</strong> — a large-scale malware dataset for cybersecurity research.",
      "Applying machine learning and deep learning techniques to classify and analyze malware samples.",
      "Conducting feature extraction and model benchmarking for malware detection pipelines.",
      "Collaborating directly with a faculty advisor on research documentation and experimentation.",
    ],
    badges: ["Python", "ML / DL", "EMBER 2024", "Cybersecurity", "Research"],
  },
];

export const lcFocusAreas = [
  "Arrays & Hashing", "Two Pointers", "Sliding Window", "Binary Search",
  "Dynamic Programming", "Graphs & BFS/DFS", "Trees", "Greedy",
  "Backtracking", "Heaps", "Stack & Queues", "Linked Lists",
];
