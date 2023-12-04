import { contactLinks, projects } from "@/lib/data";
import { fadeDownAnimation } from "@/lib/framerMotionVariants";
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { AnimateStagger } from "./ui/animateStagger";
import Image from "next/image";
import Link from "next/link";

export const ProjectSection = () => {
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
                <div className="grid grid-cols-1 gap-3 text-sm text-primary_text dark:text-dark_primary_text md:grid-cols-2">
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
