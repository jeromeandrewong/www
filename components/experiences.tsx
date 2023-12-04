import { contactLinks, experiences } from "@/lib/data";
import { fadeDownAnimation } from "@/lib/framerMotionVariants";
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Image from "next/image";
import { AnimateStagger } from "./ui/animateStagger";
import Link from "next/link";
export const ExperienceSection = () => {
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
                                                className="h-10 w-10 rounded-md"
                                                src={exp.logo}
                                                alt=""
                                                width="40"
                                                height="40"
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
                                            <div className="grid grid-cols-3 gap-1.5 ">
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
