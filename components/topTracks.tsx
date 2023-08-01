import fetcher from "@/lib/fetcher";
import { TopTracksResponse } from "@/lib/types";
import Link from "next/link";
import useSWR from "swr";

export const TopTracks = () => {
    const { data } = useSWR<TopTracksResponse[]>(
        "/api/spotify/topTracks",
        fetcher,
    );
    return !data ? (
        ""
    ) : (
        <div className="my-3  flex flex-col gap-y-2  rounded-md border-2 border-secondary/10 p-3">
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
