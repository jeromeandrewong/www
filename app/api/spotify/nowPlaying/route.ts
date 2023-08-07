import type { NextRequest } from "next/server";
import { getNpOrRpSong } from "../../../../lib/spotify";

export async function GET(req: NextRequest) {
    const resp = await getNpOrRpSong();
    if (resp.status !== 200) {
        return new Response(JSON.stringify(await resp.json()), {
            status: resp.status,
        });
    }

    const response = await resp.json();

    const song = response.recenttracks.track[0];
    const isPlaying: boolean = song["@attr"]?.nowplaying || false;
    const songName: string = song.name;
    const artistName: string = song.artist["#text"];
    const songURL: string = song.url;
    const imageURL: string = song.image[3]["#text"];

    return new Response(
        JSON.stringify({
            isPlaying,
            songName,
            artistName,
            songURL,
            imageURL,
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "cache-control":
                    "public, s-maxage=10, stale-while-revalidate=59",
            },
        },
    );
}
