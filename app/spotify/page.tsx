"use client";
import AnimateEnter from "@/components/ui/animateEnter";
import fetcher from "@/lib/fetcher";
import {
    NowPlayingResponse,
    TopArtistsResponse,
    TopTracksResponse,
} from "@/lib/types";
import { Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const Spotify = () => {
    return (
        <AnimateEnter>
            <div>
                <NowPlaying />
                <TopArtists />
                <TopTracks />
            </div>
        </AnimateEnter>
    );
};

export default Spotify;

const TopTracks = () => {
    const { data } = useSWR<TopTracksResponse[]>(
        "/api/spotify/topTracks",
        fetcher,
    );
    return !data ? (
        ""
    ) : (
        <div className="m-3  flex flex-col gap-y-2  rounded-md border-2 border-secondary/10 p-3">
            <div className="pl-2">
                <div className="text-xl font-bold">Top Tracks</div>
                <p className="text-zinc-500">Over the last month</p>
            </div>
            {data.map((track, index) => (
                <Link key={index} href={track.url} target="_blank">
                    <div className="flex justify-between rounded-md px-2 py-3 duration-200 hover:scale-[102%] hover:bg-secondary/10">
                        <div className="max-w-[70%]">
                            <p>{track.name}</p>
                            <p className="text-sm text-zinc-500 ">
                                {track.artist}
                            </p>
                        </div>

                        <p className="flex items-center">
                            <div>
                                {track.playcount}
                                <span className="text-zinc-500">
                                    {` `}plays
                                </span>
                            </div>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
const TopArtists = () => {
    const { data } = useSWR<TopArtistsResponse[]>(
        "/api/spotify/topArtists",
        fetcher,
    );
    return !data ? (
        ""
    ) : (
        <div className="m-3 flex flex-col gap-y-2  rounded-md border-2 border-secondary/10 p-3">
            <div className="pl-2">
                <div className="text-xl font-bold">Top Artists</div>
                <p className="text-zinc-500">Over the last month</p>
            </div>
            {data.map((artist, index) => (
                <Link key={index} href={artist.url} target="_blank">
                    <div className="flex justify-between rounded-md px-2 py-3 duration-200 hover:scale-[102%] hover:bg-secondary/10">
                        <p className="">{artist.name}</p>

                        <p>
                            {artist.playcount}
                            <span className="text-zinc-500">{` `}plays</span>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
const NowPlaying = () => {
    const { data } = useSWR<NowPlayingResponse>(
        "/api/spotify/nowPlaying",
        fetcher,
    );

    return !data ? (
        ""
    ) : (
        <div className="mt-10 px-3 pt-3">
            <div className="flex w-full justify-between rounded-md bg-secondary/10 p-3">
                <div className="flex flex-col justify-between">
                    {/* now playing header*/}
                    <div className="flex gap-x-2">
                        {data.isPlaying ? (
                            <div className="relative h-10 w-10 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:scale-0 before:animate-[ping2_2s_linear_infinite] before:rounded-full before:bg-secondary after:absolute after:left-0 after:top-0 after:h-full after:w-full after:scale-0 after:animate-[ping2_2s_linear_-1s_infinite] after:rounded-full after:bg-secondary"></div>
                        ) : (
                            <Activity />
                        )}
                        <p className="flex items-center text-sm font-bold text-secondary sm:text-base">
                            {data.isPlaying ? "Listening Now" : "Last Played"}
                        </p>
                    </div>
                    {/* song info */}
                    <div className="flex flex-col justify-center pl-2">
                        <div className="font-bold">{data.songName}</div>
                        <div className="text-sm text-zinc-500">
                            {data.artistName}
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <Image
                        className="rounded-md"
                        src={data.imageURL}
                        alt={data.songName}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
};
