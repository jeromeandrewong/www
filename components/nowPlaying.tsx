import fetcher from "@/lib/fetcher";
import { NowPlayingResponse } from "@/lib/types";
import { Activity } from "lucide-react";
import useSWR from "swr";
import Image from "next/image";
export const NowPlaying = () => {
    const { data } = useSWR<NowPlayingResponse>(
        "/api/spotify/nowPlaying",
        fetcher,
    );

    return !data ? (
        ""
    ) : (
        <div className="mt-10 pt-3">
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
                        <div className="text-lg">{data.songName}</div>
                        <div className="text-sm text-zinc-500">
                            {data.artistName}
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <Image
                        className="rounded-md duration-200 hover:scale-105"
                        src={data.imageURL}
                        alt={data.songName}
                        width={100}
                        height={100}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};
