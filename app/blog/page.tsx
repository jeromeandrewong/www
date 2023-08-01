import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Blog = () => {
    return (
        <div>
            <div className="mt-10 p-3">
                <span className="font-bold">Blog Page in progress...</span>
                <div>
                    For now, check out my {` `}
                    <Link
                        href={`https://eatandeat.jeromeandre.dev`}
                        target="_blank"
                        className=" text-secondary underline decoration-wavy underline-offset-8 "
                    >
                        Food blog
                    </Link>
                    {` `}as well as my{" "}
                    <Link
                        href={`https://builds.jeromeandre.dev`}
                        target="_blank"
                        className="text-secondary underline decoration-wavy underline-offset-8"
                    >
                        Devlogs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
