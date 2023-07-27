import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const contactLinks = [
    {
        poc: "Linkedin",
        url: "https://www.linkedin.com/in/jeromeandrewong/",
        username: "jeromeandrewong",
    },
    {
        poc: "Github",
        url: "https://www.github.com/@jeromeandrewong",
        username: "jeromeandrewong",
    },
    {
        poc: "Twitter",
        url: "https://twitter.com/jeromeandrewong",
        username: "jeromeandrewong",
    },
    {
        poc: "CV",
        url: "https://drive.google.com/file/d/1q545NHGGgZB-MFQVU6_QlT7ehiN8p8ii/view?usp=sharing",
        username: "jerome",
    },
    {
        poc: "Email",
        url: "mailto:jeromewongjh@gmail.com",
        username: "jeromewongjh",
    },
    {
        poc: "Food Blog",
        url: "eatandeat.jeromeandre.dev",
        username: "eatandeat",
    },
];
export default function Home() {
    return (
        <div className="mt-10 flex flex-col items-start gap-y-10">
            {/* profile section */}
            <div className="flex w-full justify-center gap-x-3 p-3">
                <div className="flex items-center justify-center">
                    <Avatar className="h-12 w-12">
                        <AvatarImage
                            className="grayscale hover:cursor-alias hover:filter-none"
                            src="/pp.png"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-lg text-primary_text dark:text-dark_primary_text">
                        Jerome Andre Wong
                    </div>
                    <div className="tracking-tighter text-zinc-500">
                        Aspiring Software Engineer
                    </div>
                </div>
            </div>
            {/* contact section */}
            <div className=" w-full p-3">
                <h1 className=" text-md  mb-4 text-secondary">Contact</h1>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {contactLinks.map((link) => {
                        return (
                            <div key={link.poc}>
                                <h1>{link.poc}</h1>
                                <div className="flex text-zinc-500 decoration-wavy hover:cursor-alias hover:text-secondary hover:underline hover:underline-offset-8">
                                    <Link
                                        className="flex text-sm sm:text-base "
                                        target="_blank"
                                        href={link.url}
                                    >
                                        {link.username} <ArrowUpRight />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
