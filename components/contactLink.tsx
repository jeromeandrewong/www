"use client";
import { fadeDownAnimation } from "@/lib/framerMotionVariants";
import { copy } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, ClipboardCopy } from "lucide-react";
import Link from "next/link";
import React from "react";

type ContactLinkProps = {
    poc: string;
    url: string;
    username: string;
};
const ContactLink = ({ poc, url, username }: ContactLinkProps) => {
    return (
        <motion.div className="text-sm" variants={fadeDownAnimation}>
            <h1>{poc}</h1>
            <div className="flex text-zinc-500 decoration-wavy hover:cursor-pointer hover:text-secondary hover:underline hover:underline-offset-8">
                {poc === "Email" ? (
                    <div
                        className="flex"
                        onClick={() => copy(username + "@gmail.com", "Email")}
                    >
                        {username}
                        <ClipboardCopy className="h-5" />
                    </div>
                ) : (
                    <Link
                        aria-label={poc}
                        className="flex "
                        target="_blank"
                        href={url}
                    >
                        {username}
                        <ArrowUpRight className="h-5" />
                    </Link>
                )}
            </div>
        </motion.div>
    );
};

export default ContactLink;
