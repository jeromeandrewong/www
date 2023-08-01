import fetcher from "@/lib/fetcher";
import { TopArtistsResponse } from "@/lib/types";
import Link from "next/link";

import useSWR from "swr";

export const TopArtists = () => {
    const { data } = useSWR<TopArtistsResponse[]>(
        "/api/spotify/topArtists",
        fetcher,
    );
    return !data ? (
        ""
    ) : (
        <div className="my-3 flex flex-col gap-y-2  rounded-md border-2 border-secondary/10 p-3">
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
