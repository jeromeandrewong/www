"use client";
import { AnimateStagger } from "@/components/ui/animateStagger";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { contactLinks } from "@/lib/data";
import { fadeDownAnimation } from "@/lib/framerMotionVariants";
import { TooltipProvider, Tooltip } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { Briefcase, Code2, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const experiences = [
    {
        location: "Nas io",
        logo: "/companies/nas.jpeg",
        link: "https://nas.io",
        role: "Software Engineer Intern",
        date: "Jan 2024 - May 2024",
        tech: [
            { link: "nextjs", title: "Nextjs" },
            { link: "typescript", title: "Typescript" },
            { link: "cypress", title: "Cypress" },
            { link: "nodejs", title: "Nodejs" },
            { link: "aws", title: "AWS" },
            { link: "mongodb", title: "MongoDB" },
        ],
    },
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
        location: "XSQUARE Tuition Centre",
        logo: "/companies/xsquare.jpeg",
        link: "https://www.xsquareclass.co/",
        role: "Software Engineer Intern",
        date: "Nov 2021 - Jan 2022",
        tech: [
            { link: "nextjs", title: "Nextjs" },
            { link: "tailwindcss", title: "Tailwindcss" },
            { link: "typescript", title: "Typescript" },
            { link: "figma", title: "Figma" },
            { link: "vercel", title: "Vercel" },
        ],
    },
];
const projects = [
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

const Work = () => {
    return (
        <div className="mt-10">
            <ExperienceSection />
            <ProjectSection />
        </div>
    );
};

export default Work;

const ProjectSection = () => {
    return (
        <div className=" w-full p-3">
            <div className="mb-4 flex items-center gap-x-3 rounded-md border border-secondary bg-secondary/20 p-5 text-lg font-bold text-secondary">
                <Code2 />
                <div>
                    <div>Projects</div>
                    <div className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                        Full list of projects on{` `}
                        <Link
                            className="font-bold text-secondary underline decoration-wavy underline-offset-4"
                            href={
                                contactLinks.find(
                                    (link) => link.poc === "Github",
                                )?.url as string
                            }
                            target="_blank"
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </div>
            <AnimateStagger>
                <div className="grid grid-cols-2 gap-3 text-sm text-primary_text dark:text-dark_primary_text xl:grid-cols-2">
                    {projects.map((project, index) => {
                        return (
                            <Link
                                href={project.url}
                                key={index}
                                target="_blank"
                            >
                                <motion.div
                                    variants={fadeDownAnimation}
                                    className="h-full w-full rounded-md border border-secondary/20 px-2 py-2 hover:bg-secondary/10 sm:px-5"
                                >
                                    <div className="flex h-full items-center justify-between py-2">
                                        <div className="flex h-full w-full flex-col justify-between gap-y-5">
                                            <div className="space-y-3">
                                                <div className="flex flex-col items-center justify-between gap-x-3 text-xs sm:text-base">
                                                    <div className="font-bold">
                                                        {project.title}
                                                    </div>
                                                    <div className="text-xs text-zinc-500">
                                                        {project.date}
                                                    </div>
                                                </div>
                                                <div className="text-xs  sm:text-sm">
                                                    {project.description}
                                                </div>
                                            </div>

                                            <div className="flex justify-end gap-x-2">
                                                {project.tech.map(
                                                    (tech, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="flex items-center justify-center hover:cursor-pointer"
                                                            >
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger>
                                                                            <Image
                                                                                className="h-8 w-8 p-0.5 duration-200 hover:scale-105"
                                                                                src={`/tech/${tech.link}.svg`}
                                                                                alt=""
                                                                                width="20"
                                                                                height="20"
                                                                            />
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <p className="">
                                                                                {
                                                                                    tech.title
                                                                                }
                                                                            </p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            </div>
                                                        );
                                                    },
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </AnimateStagger>
        </div>
    );
};

const ExperienceSection = () => {
    return (
        <div className="w-full p-3">
            <div className="mb-4 flex items-center gap-x-3 rounded-md border border-secondary bg-secondary/20 p-5 text-lg  font-bold text-secondary">
                <Briefcase />
                <div>
                    <div>Experiences</div>
                    <div className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                        View my{" "}
                        <Link
                            className="font-bold text-secondary underline decoration-wavy underline-offset-4"
                            href={
                                contactLinks.find(
                                    (link) => link.poc === "Linkedin",
                                )?.url as string
                            }
                            target="_blank"
                        >
                            Linkedin
                        </Link>{" "}
                        profile for more details
                    </div>
                </div>
            </div>
            <AnimateStagger>
                <div className="flex flex-col gap-3 text-sm text-primary_text dark:text-dark_primary_text">
                    {experiences.map((exp, index) => {
                        return (
                            <Link key={index} href={exp.link} target="_blank">
                                <motion.div
                                    variants={fadeDownAnimation}
                                    className="rounded-md border border-secondary/20 px-2 py-2 hover:bg-secondary/10 sm:px-5"
                                >
                                    <div className="flex items-center justify-between py-2">
                                        <div className="flex items-center gap-x-3">
                                            <Image
                                                className="h-12 w-12 rounded-md"
                                                src={exp.logo}
                                                alt=""
                                                width="50"
                                                height="50"
                                            />
                                            <div>
                                                <div className="text-xs font-bold text-secondary sm:text-base">
                                                    {exp.location}
                                                </div>
                                                <div className="text-xs font-bold sm:text-base">
                                                    {exp.role}
                                                </div>
                                                <div className="text-xs text-zinc-500">
                                                    {exp.date}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="grid grid-cols-3 gap-3 ">
                                                {exp.tech.map((tech, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="flex items-center justify-center hover:cursor-pointer"
                                                        >
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger>
                                                                        <Image
                                                                            className="h-8 w-8 p-0.5 duration-200 hover:scale-105 hover:grayscale-0 "
                                                                            src={`/tech/${tech.link}.svg`}
                                                                            alt=""
                                                                            width={
                                                                                20
                                                                            }
                                                                            height={
                                                                                20
                                                                            }
                                                                        />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="">
                                                                            {
                                                                                tech.title
                                                                            }
                                                                        </p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </AnimateStagger>
        </div>
    );
};
