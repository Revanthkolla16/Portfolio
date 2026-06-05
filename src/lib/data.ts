// ── Portfolio data ─────────────────────────────────────────

export const personal = {
  name: "Revanth Kolla",
  github: "https://github.com/Revanthkolla16",
  linkedin: "https://linkedin.com/in/revanth-kolla",
  leetcode: "https://leetcode.com/u/Revanth2006",
  leetcodeUser: "Revanth2006",
  avatar: "https://avatars.githubusercontent.com/u/169203664?v=4",
  bio: [
    `I'm a second-year Computer Science student at <strong>IIITDM Kancheepuram</strong>, driven by a deep passion for the intersection of software engineering and artificial intelligence.`,
    `My work spans from building <strong>scalable REST APIs with FastAPI</strong> to designing <strong>multi-agent AI systems</strong> using LangGraph, RAG pipelines, and fine-tuned LLMs. I actively solve algorithmic problems on LeetCode and enjoy the elegance of well-structured code.`,
    `Currently engaged in a <strong>research internship</strong> at IIITDM Kancheepuram, working with the EMBER 2024 malware dataset — applying ML techniques to advance cybersecurity research.`,
  ],
};

export const skills = [
  {
    icon: "🧠",
    title: "AI / ML / GenAI",
    tags: ["LangChain", "LangGraph", "RAG", "LoRA / PEFT", "Groq", "Ollama", "ChromaDB", "LLaVA", "HuggingFace"],
  },
  {
    icon: "⚙️",
    title: "Backend & APIs",
    tags: ["FastAPI", "Python", "REST APIs", "Node.js", "WebSockets", "Pydantic"],
  },
  {
    icon: "🖥️",
    title: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind CSS"],
  },
  {
    icon: "🔬",
    title: "Deep Learning",
    tags: ["PyTorch", "TensorFlow", "CNNs / RNNs", "Transformers", "Jupyter", "scikit-learn"],
  },
  {
    icon: "💾",
    title: "Data & Databases",
    tags: ["PostgreSQL", "MongoDB", "ChromaDB", "SQLite", "Pandas", "NumPy"],
  },
  {
    icon: "🛠️",
    title: "Tools & Languages",
    tags: ["Python", "C++", "JavaScript", "Git", "Docker", "Linux", "Vercel"],
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
    name: "GenAI Engineering",
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
    org: "IIITDM Kancheepuram · Kancheepuram, Tamil Nadu",
    desc: "Pursuing a rigorous CS curriculum with strong focus on algorithms, data structures, machine learning, and software engineering. Actively engaged in research and project work alongside coursework.",
    badges: ["DSA", "Machine Learning", "Computer Vision", "Software Engineering", "Digital Image Processing"],
  },
];

export const experience = [
  {
    icon: "🔬",
    role: "Research Intern",
    org: "IIITDM Kancheepuram — Prof. Research Lab",
    period: "2025 — Present · On-Campus",
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
