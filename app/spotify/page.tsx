"use client";
import fetcher from "@/lib/fetcher";
import { NowPlayingResponse } from "@/lib/types";
import { Activity, Music } from "lucide-react";
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
                    <Activity />
                    <p>
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
