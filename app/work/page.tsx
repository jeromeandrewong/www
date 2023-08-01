"use client";
import { AnimateStagger } from "@/components/ui/animateStagger";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { fadeDownAnimation } from "@/lib/framerMotionVariants";
import { TooltipProvider, Tooltip } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { Briefcase, Code2, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const experiences = [
    {
        location: "Oceanus Group",
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
        role: "Software Engineer Intern",
        date: "Nov 2021 - Jan 2022",
        tech: [
            { link: "react", title: "React" },
            { link: "javascript", title: "Javascript" },
            { link: "figma", title: "Figma" },
        ],
    },
];
const projects = [
    {
        description:
            "Award the Most Touching Solution in Build For Good 2023 by Open Government Products (OGP). SafeSpace is an anonymized digital peer support system using zero knowledge proof to help student cope with  mental health challenges.",
        title: "SafeSpace",
        date: "Jun 2023 - Jul 2023",
        url: "https://github.com/jeromeandrewong/BFG-SafeSpace",
        tech: [
            { link: "python", title: "Python" },
            { link: "aws", title: "AWS" },
            { link: "mongodb", title: "MongoDB" },
        ],
    },
    {
        description:
            "Finalist for VMWare Tanzu Award (Top 3 in cohort). GoBook is a booking application that manages classes and users for a company where users can browse and book classes, get class recommendations for classes and write reviews using microservice architecture.",
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
            "All-in-one university focused web-based application for students where users can browse modules, check class timings, and add modules to their timetable through our application’s UI",
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
            {/* TODO: Tools section */}
            {/* <ToolSection /> */}
        </div>
    );
};

export default Work;

const ProjectSection = () => {
    return (
        <div className=" w-full p-3">
            <div className="mb-4 flex items-center gap-x-3 rounded-md bg-secondary/20 p-5 text-lg  font-bold text-secondary">
                <Code2 />
                <div>
                    <div>Projects</div>
                    <div className="text-sm font-normal text-zinc-500">
                        Full list of projects on Github
                    </div>
                </div>
            </div>
            <AnimateStagger>
                <div className="flex flex-col gap-3 text-sm text-primary_text dark:text-dark_primary_text">
                    {projects.map((project, index) => {
                        return (
                            <Link
                                href={project.url}
                                key={index}
                                target="_blank"
                            >
                                <motion.div
                                    variants={fadeDownAnimation}
                                    className="rounded-md border-2 border-secondary/20 px-2 py-2 hover:bg-secondary/10 sm:px-5"
                                >
                                    <div className="flex items-center justify-between py-2">
                                        <div className="flex flex-col gap-y-3">
                                            <div className="flex items-center justify-between gap-x-3 text-xs sm:text-base">
                                                <div className="font-bold">
                                                    {project.title}
                                                </div>
                                                <div className="text-xs text-zinc-500">
                                                    {project.date}
                                                </div>
                                            </div>
                                            <div className="text-xs sm:text-sm">
                                                {project.description}
                                            </div>
                                            <div className="mt-2">
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
                                                                                    className="duration-200 hover:scale-105"
                                                                                    src={`/tech/${tech.link}.svg`}
                                                                                    alt=""
                                                                                    width={
                                                                                        30
                                                                                    }
                                                                                    height={
                                                                                        30
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
                                                        },
                                                    )}
                                                </div>
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
        <div className=" w-full p-3">
            <div className="mb-4 flex items-center gap-x-3 rounded-md bg-secondary/20 p-5 text-lg  font-bold text-secondary">
                <Briefcase />
                <div>
                    <div>Experiences</div>
                    <div className="text-sm font-normal text-zinc-500">
                        View my CV for more details
                    </div>
                </div>
            </div>
            <AnimateStagger>
                <div className="flex flex-col gap-3 text-sm text-primary_text dark:text-dark_primary_text">
                    {experiences.map((exp, index) => {
                        return (
                            <motion.div
                                variants={fadeDownAnimation}
                                key={index}
                                className="rounded-md border-2 border-secondary/20 px-2 py-2 sm:px-5"
                            >
                                <div className="flex items-center justify-between py-2">
                                    <div>
                                        <div className="text-xs font-bold sm:text-lg">
                                            {exp.role}
                                        </div>
                                        <div className="text-xs text-secondary sm:text-base">
                                            {exp.location}
                                        </div>
                                        <div className="text-xs text-zinc-500">
                                            {exp.date}
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
                                                                        className=" duration-200 hover:scale-105 hover:grayscale-0 "
                                                                        src={`/tech/${tech.link}.svg`}
                                                                        alt=""
                                                                        width={
                                                                            30
                                                                        }
                                                                        height={
                                                                            30
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
                        );
                    })}
                </div>
            </AnimateStagger>
        </div>
    );
};
// const ToolSection = () => {
//     return (
//         <div className=" w-full p-3">
//             <div className="mb-4 flex items-center gap-x-3 rounded-md bg-secondary/20 p-5 text-lg  font-bold text-secondary">
//                 <Laptop />
//                 <div>
//                     {" "}
//                     <div>Tools</div>
//                     <div className="text-sm font-normal text-zinc-500">
//                         Devtools I use daily
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
