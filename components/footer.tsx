"use client";
import { Github, Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { footerLinks } from "@/lib/data";
import { copy } from "@/lib/utils";

const Footer = () => {
    return (
        <div className="my-5 p-3">
            <div className="flex gap-x-2 text-zinc-500">
                <Link
                    aria-label={`Github`}
                    target="_blank"
                    href={`${footerLinks.github}`}
                >
                    <Github className="hover:rotate-6 hover:scale-125 hover:cursor-pointer hover:text-secondary" />
                </Link>
                <div onClick={() => copy(footerLinks.url, "Portfolio URL")}>
                    <Share2 className="hover:rotate-6 hover:scale-125 hover:cursor-pointer hover:text-secondary" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
