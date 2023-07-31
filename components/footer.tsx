"use client";
import { Github, Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { footerLinks } from "@/lib/data";

const Footer = () => {
    return (
        <div className="mt-10 p-3">
            <div className="flex gap-x-2 text-zinc-500">
                <Link target="_blank" href={`${footerLinks.github}`}>
                    <Github className="hover:rotate-6 hover:scale-125 hover:cursor-pointer hover:text-secondary" />
                </Link>
                <div onClick={copy}>
                    <Share2 className="hover:rotate-6 hover:scale-125 hover:cursor-pointer hover:text-secondary" />
                </div>
            </div>
        </div>
    );
};

const copy = async () => {
    await navigator.clipboard.writeText(`${footerLinks.url}`);
    toast("Portfolio URL copied to clipboard!", {
        icon: "📋",
        style: { padding: "10px", background: "#10b981" },
        position: "bottom-center",
        duration: 1500,
    });
};

export default Footer;
