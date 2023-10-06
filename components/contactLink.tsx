"use client";
import { fadeDownAnimation } from "@/lib/framerMotionVariants";
import { copy } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, ClipboardCopy } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

type ContactLinkProps = {
    poc: string;
    url: string;
    username: string;
    icon: string;
};

const ContactLink = ({ poc, url, username, icon }: ContactLinkProps) => {
    return (
        <motion.div className="text-sm" variants={fadeDownAnimation}>
            <div className="flex text-zinc-500 decoration-wavy hover:cursor-pointer hover:text-secondary hover:underline hover:underline-offset-8">
                <Link
                    aria-label={poc}
                    className="flex "
                    target="_blank"
                    href={url}
                >
                    <div className="flex space-x-1">
                        <Icon
                            icon={icon}
                            width={20}
                            height={20}
                            className="text-zinc-500"
                        />
                        <h1>{poc}</h1>
                    </div>

                    {/* {username} */}
                    <ArrowUpRight className="h-5" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ContactLink;
