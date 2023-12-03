"use client";

import { useEffect } from "react";
import fetcher from "@/lib/fetcher";
import { fadeDownAnimation } from "@/lib/framerMotionVariants";
import { TopTracksResponse } from "@/lib/types";
import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";

export const TopTracks = () => {
    const [scope, animate] = useAnimate();

    const { data, isLoading } = useSWR<TopTracksResponse[]>(
        "/api/spotify/topTracks",
        fetcher,
    );

    useEffect(() => {
        !isLoading &&
            animate(
                "#transform-anim",
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.5, ease: "easeIn", delay: stagger(0.2) },
            );
    });

    return (
        !isLoading && (
            <div
                ref={scope}
                className="my-3  flex flex-col gap-y-2 rounded-md border border-secondary p-3"
            >
                {!data ? (
                    <div id="transform-anim"></div>
                ) : (
                    <>
                        <div className="pl-2">
                            <div className="text-xl font-bold">Top Tracks</div>
                            <p className="text-zinc-500">Over the last month</p>
                        </div>
                        {data.map((track, index) => (
                            <Link
                                id="transform-anim"
                                key={index}
                                href={track.url}
                                target="_blank"
                            >
                                <motion.div
                                    variants={fadeDownAnimation}
                                    className="flex justify-between rounded-md px-2 py-3 duration-200 hover:scale-[102%] hover:bg-secondary/10"
                                >
                                    <div className="max-w-[70%]">
                                        {track.name}
                                        {/* <p classNa<me="flex items-baseline text-sm text-zinc-500"> */}
                                        <span className="pl-2 text-zinc-500">
                                            {track.artist}
                                        </span>
                                        {/* </p> */}
                                    </div>

                                    <div className="flex items-center">
                                        <div>
                                            {track.playcount}
                                            <span className="text-zinc-500">
                                                {` `}plays
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </>
                )}
            </div>
        )
    );
};
