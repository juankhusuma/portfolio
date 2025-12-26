/**
 * Portfolio Configuration
 * 
 * This is your extensible config file. Add new sections as needed.
 * All components pull from this single source of truth.
 */

// ============================================================================
// PERSONAL INFO
// ============================================================================
export const personal = {
    name: "Juan",
    nickname: "juandk",
    title: "Software Engineer",
    tagline: "Passionate full-stack engineer building scalable, high-performance systems with clean architecture.",
    email: "mailto:juan.d.khusuma@gmail.com",
    phone: "tel:+6285159885273",
    location: "Jakarta, Indonesia",
    website: "https://juandk.com",
    github: "https://github.com/juankhusuma",
    linkedin: "https://linkedin.com/in/juandk89",
};

// ============================================================================
// HERO SECTION
// ============================================================================
export const hero = {
    headline: {
        line1: "I build robust",
        line2: "scalable",
        highlight: "systems",
    },
    description: "Full-stack Software Engineer with expertise in backend systems, distributed architectures, and AI-powered applications.",
    cta: {
        text: "View My Work",
        link: "/#work",
        target: "_self",
    },
};

// ============================================================================
// STATS / METRICS
// ============================================================================
export const stats = [
    { name: "Projects Delivered", value: "100+" },
    { name: "5-Star Reviews", value: "75+" },
    { name: "Years Experience", value: "5+" },
];

// ============================================================================
// SKILLS / SERVICES
// ============================================================================
export const skills = [
    {
        name: "Backend Development",
        desc: "Building scalable APIs, microservices, and distributed systems with Go, Node.js, and Python.",
        icon: "backend",
    },
    {
        name: "Frontend Development",
        desc: "Creating responsive, performant UIs with React, Next.js, and modern TypeScript.",
        icon: "frontend",
    },
    {
        name: "Database & DevOps",
        desc: "PostgreSQL, MongoDB, Docker, Kubernetes, and cloud infrastructure on GCP.",
        icon: "database",
    },
    {
        name: "AI & ML Integration",
        desc: "Integrating LLMs, building RAG pipelines, and custom information retrieval systems.",
        icon: "ai",
    },
];

// ============================================================================
// EXPERIENCE
// ============================================================================
export const experience = [
    {
        role: "Software Engineer Intern",
        company: "Universitas Indonesia Center for Legal Informatics",
        companyUrl: "https://lexin.cs.ui.ac.id/",
        period: "Jan 2025 – June 2025",
        highlights: [
            "Designed and developed Lexin Chat, a legal generative-AI search web application",
            "Cataloged and processed 60,000+ documents to build a novel retrieval dataset",
            "Engineered a custom information-retrieval pipeline",
        ],
    },
    {
        role: "Software Engineer Intern",
        company: "BangSoal",
        companyUrl: "https://bangsoal.co.id/",
        period: "July 2024 – Sept 2024",
        highlights: [
            "Rebuilt tryout service from scratch, reducing client-side errors by 25%",
            "Maintained system stability during high-traffic event with 200+ concurrent users",
        ],
    },
    {
        role: "Software Engineer Intern",
        company: "PT IT Untuk Semua",
        companyUrl: null,
        period: "Jan 2024 – Mar 2024",
        highlights: [
            "Built full-stack POS system processing 300+ transactions daily",
        ],
    },
    {
        role: "Backend Engineer Intern",
        company: "Core Initiative Studio",
        companyUrl: "https://coreinitiative.id/",
        period: "July 2023 – Sept 2023",
        highlights: [
            'Led major backend refactor achieving "A" grade maintainability in SonarQube',
            "Delivered three new services with <150ms median response times",
        ],
    },
    {
        role: "Freelance Software Engineer",
        company: "Fiverr",
        companyUrl: "https://www.fiverr.com/jkhusuma",
        period: "2020 – 2023",
        highlights: [
            "Completed 100+ orders globally with 75 5-star reviews",
            "Developed 20+ full-stack applications",
        ],
    },
];

// ============================================================================
// FEATURED PROJECTS
// ============================================================================
export const projects = [
    {
        name: "Lexin Chat",
        desc: "Legal AI search engine for Indonesian documents • Next.js, Python, RAG",
        cover: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
        link: "https://chat.lexin.cs.ui.ac.id/",
    },
    {
        name: "FML Transpiler",
        desc: "Functional frontend framework compiled to vanilla JS • Haskell, TypeScript",
        cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        link: "https://github.com/funcml/fml_transpiler",
    },
    {
        name: "Navigo",
        desc: "AI-powered legal solution for MSMEs • 1st Place GEMASTIK XVII",
        cover: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
        link: "#",
    },
    {
        name: "EmpowerU&I",
        desc: "Mental health platform backend • Nest.js, GraphQL, PostgreSQL",
        cover: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
        link: "https://www.empoweruni.com/",
    },
];

// ============================================================================
// AWARDS & ACHIEVEMENTS
// ============================================================================
export const awards = [
    {
        title: "1st Winner - Software Development Competition",
        event: "GEMASTIK XVII",
        description: "Developed Navigo, an AI-powered integrated legal solution for MSMEs and independent creators.",
        certificateUrl: "https://drive.google.com/file/d/1CiPdnsT0oi5IaIZUOxhJH46RYIyFwg38/view",
        icon: "🏆",
    },
    {
        title: "3rd Winner - IoT and Smart Devices",
        event: "GEMASTIK XV",
        description: "Developed Sensa Makara, a communication tool for people with ALS using computer vision.",
        certificateUrl: "https://drive.google.com/file/d/18K_RPcWvSoqoS1yYzTbsIvwiqQuhr6_G/view",
        icon: "🥉",
    },
];

// ============================================================================
// TECHNOLOGIES (Scrolling Banner)
// ============================================================================
export const technologies = [
    // Languages
    "JavaScript", "TypeScript", "Go", "Python", "Rust", "Java", "SQL", "Haskell", "Dart",
    // Frameworks & Tools
    "React", "Next.js", "Nest.js", "Express", "Flutter", "SpringBoot",
    // Databases
    "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase",
    // DevOps & Cloud
    "Docker", "Kubernetes", "GCP", "Git",
    // Other
    "gRPC", "GraphQL", "Prisma", "Elasticsearch", "Pinecone",
];

// ============================================================================
// NAVIGATION
// ============================================================================
export const navigation = [
    { name: "Home", path: "/", target: "_self" },
    { name: "About", path: "/about/", target: "_self" },
    { name: "Blog", path: "/blog/", target: "_self" },
    { name: "Contact", path: "/#hire", target: "_self" },
];

// ============================================================================
// SOCIAL LINKS
// ============================================================================
export const socials = [
    { icon: "ri-github-fill", link: personal.github },
    { icon: "ri-linkedin-box-fill", link: personal.linkedin },
    { icon: "ri-mail-line", link: personal.email },
];

// ============================================================================
// CALL TO ACTION
// ============================================================================
export const cta = {
    title: "Let's build something amazing together",
    description: "Looking for a software engineer who can turn ideas into scalable systems? Let's connect.",
    button: {
        text: "View on GitHub",
        link: personal.github,
        target: "_blank",
    },
};

// ============================================================================
// EDUCATION (for potential future use)
// ============================================================================
export const education = {
    institution: "University of Indonesia",
    degree: "Bachelor of Computer Science",
    period: "Aug 2022 – Jan 2026",
    gpa: "3.9/4.0",
    thesis: "Development of a Web-Based Backend Application for Grammatical Error Correction Dataset Annotation Using Agile Methodology",
};
