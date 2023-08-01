"use client";
import fetcher from "@/lib/fetcher";
import { NowPlayingResponse } from "@/lib/types";
import { Activity } from "lucide-react";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

const Spotify = () => {
    return (
        <div>
            <NowPlaying />
        </div>
    );
};

export default Spotify;

const NowPlaying = () => {
    const { data } = useSWR<NowPlayingResponse>("/api/spotify", fetcher);

    return !data ? (
        ""
    ) : (
        <div className="mt-10 p-3">
            <div className="flex flex-col gap-y-5 rounded-md bg-secondary/10 p-3">
                <div className="flex gap-x-3">
                    {data.isPlaying ? (
                        <div className="relative h-10 w-10 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:scale-0 before:animate-[ping2_2s_linear_infinite] before:rounded-full before:bg-secondary after:absolute after:left-0 after:top-0 after:h-full after:w-full after:scale-0 after:animate-[ping2_2s_linear_-1s_infinite] after:rounded-full after:bg-secondary"></div>
                    ) : (
                        <Activity />
                    )}
                    <p className="flex items-center tracking-wide text-secondary">
                        {data.isPlaying ? "Currently Playing" : "Last Played"}
                    </p>
                </div>
                <div className="flex gap-x-3 ">
                    <Image
                        className="rounded-md"
                        src={data.imageURL}
                        alt={data.songName}
                        width={50}
                        height={50}
                    />
                    <div>
                        <div className="font-bold">{data.songName}</div>
                        <div className="text-sm text-zinc-500">
                            {data.artistName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
