import type { NextRequest } from "next/server";
import { getTopTracks } from "../../../../lib/spotify";

export async function GET(req: NextRequest) {
    const resp = await getTopTracks();

    if (resp.status !== 200) {
        return new Response(JSON.stringify(await resp.json()), {
            status: resp.status,
        });
    }

    const response = await resp.json();
    const tracks = response.toptracks.track;

    const topTracks = tracks.map(
        (track: {
            name: string;
            playcount: string;
            url: string;
            artist: { name: string };
        }) => {
            return {
                name: track.name,
                playcount: track.playcount,
                url: track.url,
                artist: track.artist.name,
            };
        },
    );

    return new Response(JSON.stringify(topTracks), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
