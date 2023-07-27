"use client";
import { fadeDownAnimation } from "@/lib/framerMotionVariants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type ContactLinkProps = {
    poc: string;
    url: string;
    username: string;
};
const ContactLink = ({ poc, url, username }: ContactLinkProps) => {
    return (
        <motion.div variants={fadeDownAnimation}>
            <h1>{poc}</h1>
            <div className="flex text-zinc-500 decoration-wavy hover:cursor-alias hover:text-secondary hover:underline hover:underline-offset-8">
                <Link
                    className="flex text-sm sm:text-base "
                    target="_blank"
                    href={url}
                >
                    {username} <ArrowUpRight />
                </Link>
            </div>
        </motion.div>
    );
};

export default ContactLink;
