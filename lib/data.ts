import { Home, TerminalSquare, Headphones } from "lucide-react";

export const contactLinks = [
    {
        poc: "Linkedin",
        url: "https://www.linkedin.com/in/jeromeandrewong/",
        username: "jeromeandrewong",
        icon: "mdi:linkedin",
    },
    {
        poc: "Github",
        url: "https://www.github.com/jeromeandrewong",
        username: "jeromeandrewong",
        icon: "mdi:github",
    },
    {
        poc: "Devlogs",
        url: "https://docs.jeromeandre.dev",
        username: "jeromewongjh",
        icon: "mdi:pencil-box-outline",
    },
    {
        poc: "Twitter",
        url: "https://twitter.com/jeromeandrewong",
        username: "jeromeandrewong",
        icon: "mdi:twitter",
    },
    {
        poc: "Spotify",
        url: "https://open.spotify.com/user/75fom0a5lm50o92p9gen76bbs?si=045b0566a7cc4c4b",
        username: "jeromeandrewong",
        icon: "mdi:spotify",
    },
    {
        poc: "Food Blog",
        url: "https://eatandeat.jeromeandre.dev",
        username: "eatandeat",
        icon: "mdi:egg-fried",
    },
];
export const footerLinks = {
    url: "https://jeromeandre.dev",
    github: "https://www.github.com/jeromeandrewong",
};

export const navLinks = [
    {
        title: "Home",
        href: "/",
        icon: Home,
    },
    {
        title: "Work",
        href: "/work",
        icon: TerminalSquare,
    },
    {
        title: "Spotify",
        href: "/spotify",
        icon: Headphones,
    },
];

export const experiences = [
    // {
    //     location: "Nas io",
    //     logo: "/companies/nas.jpeg",
    //     link: "https://nas.io",
    //     role: "Software Engineer Intern",
    //     date: "Jan 2024 - May 2024",
    //     tech: [
    //         { link: "nextjs", title: "Nextjs" },
    //         { link: "typescript", title: "Typescript" },
    //         { link: "cypress", title: "Cypress" },
    //         { link: "nodejs", title: "Nodejs" },
    //         { link: "aws", title: "AWS" },
    //         { link: "mongodb", title: "MongoDB" },
    //     ],
    // },
    {
        location: "Pints AI",
        logo: "/companies/pints.jpeg",
        link: "https://www.pints.ai/",
        role: "Software Engineer Intern",
        date: "Aug 2023 - Nov 2023",
        tech: [
            { link: "nextjs", title: "Nextjs" },
            { link: "typescript", title: "Typescript" },
            { link: "tailwindcss", title: "Tailwindcss" },
            { link: "redis", title: "redis" },
            { link: "mongodb", title: "MongoDB" },
            { link: "nodejs", title: "Nodejs" },
        ],
    },
    {
        location: "Oceanus Group",
        logo: "/companies/oceanus.jpeg",
        link: "https://oceanus.com.sg/",
        role: "Software Engineer Intern",
        date: "Jan 2023 - Apr 2023",
        tech: [
            { link: "nextjs", title: "Nextjs" },
            { link: "typescript", title: "Typescript" },
            { link: "tailwindcss", title: "Tailwindcss" },
            { link: "prisma", title: "Prisma" },
            { link: "mysql", title: "Mysql" },
            { link: "trpc", title: "tRPC" },
        ],
    },
    {
        location: "Hire Digital",
        logo: "/companies/hiredigital.jpeg",
        link: "https://hiredigital.com/",
        role: "Software Engineer Intern",
        date: "May 2022 - Aug 2022",
        tech: [
            { link: "nextjs", title: "Nextjs" },
            { link: "typescript", title: "Typescript" },
            { link: "mysql", title: "Mysql" },
        ],
    },
    {
        location: "XSQUARE",
        logo: "/companies/xsquare.jpeg",
        link: "https://www.xsquareclass.co/",
        role: "Software Engineer Intern",
        date: "Nov 2021 - Jan 2022",
        tech: [
            { link: "nextjs", title: "Nextjs" },
            { link: "typescript", title: "Typescript" },
            { link: "tailwindcss", title: "Tailwindcss" },
            { link: "figma", title: "Figma" },
            { link: "vercel", title: "Vercel" },
        ],
    },
];
export const projects = [
    {
        description:
            "Part of an Open Source Software (OSS) core development team to build a performant information hub (12k MAU) for students to view bidding prices and review modules.",
        title: "AfterClass",
        date: "Sep 2023 - Present",
        url: "https://github.com/AfterClass-io/afterclass.io-v2",

        tech: [
            { link: "nextjs", title: "Nextjs" },
            { link: "typescript", title: "Typescript" },
            { link: "tailwindcss", title: "Tailwindcss" },
            { link: "supabase", title: "Supabase" },
            { link: "prisma", title: "Prisma" },
            { link: "trpc", title: "tRPC" },
        ],
    },
    {
        description:
            "A simple password generator that allows users to create customised passwords on the command line based on specific requirements such as length, uppercase/lowercase characters, numbers and special characters.",
        title: "Password Generator",
        date: "Dec 2023",
        url: "https://github.com/jeromeandrewong/password-generator",
        tech: [
            { link: "go", title: "Go" },
            { link: "terminal", title: "Terminal" },
        ],
    },
    {
        description:
            "Web application that allows users to visualise their holdings, manage a dedicated watchlist, analyze their portfolio performance and compare it with the market.",
        title: "Portfolio Analyzer",
        date: "Sep 2023 - Nov 2023",
        url: "https://github.com/is442oop/portfolio-analyzer-web-ui",
        tech: [
            { link: "java", title: "Java" },
            { link: "springboot", title: "Springboot" },
            { link: "typescript", title: "typescript" },
            { link: "nextjs", title: "Nextjs" },
            { link: "tailwindcss", title: "Tailwindcss" },
            { link: "supabase", title: "Supabase" },
        ],
    },
    {
        description:
            "Awarded the Most Touching Solution in Build For Good 2023 by Open Government Products (OGP). SafeSpace is an anonymized digital peer support system to help students cope with mental health challenges.",
        title: "SafeSpace",
        date: "Jun 2023 - Jul 2023",
        url: "https://github.com/jeromeandrewong/BFG-SafeSpace",
        tech: [
            { link: "python", title: "Python" },
            { link: "aws", title: "AWS" },
            { link: "mongodb", title: "MongoDB" },
            { link: "telegram", title: "Telegram" },
        ],
    },
    {
        description:
            "Adopted micro-service architecture to architect a class booking and reviewing application, awarded VMWare Tanzu Award Finalist (Top 3 in school cohort).",
        title: "GoBook",
        date: "Feb 2023 - Mar 2023",
        url: "https://github.com/jeromeandrewong/GoBook-Frontend",
        tech: [
            { link: "python", title: "Python" },
            { link: "docker", title: "Docker" },
            { link: "mongodb", title: "MongoDB" },
            { link: "rabbitmq", title: "RabbitMQ" },
            { link: "kafka", title: "Kafka" },
            { link: "react", title: "React" },
            { link: "tailwindcss", title: "Tailwindcss" },
        ],
    },
    {
        description:
            "All-in-one university focused web-based application for students where users can browse modules, check class timings, and add modules to their timetable through our application’s UI.",
        title: "PlanMyMods",
        date: "Oct 2022 - Nov 2022",
        url: "https://github.com/PlanMyMods/web-frontend",
        tech: [
            { link: "vue", title: "Vuejs" },
            { link: "tailwindcss", title: "Tailwindcss" },
            { link: "firebase", title: "Firebase" },
        ],
    },
];
