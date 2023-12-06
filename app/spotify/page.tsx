"use client";

import React from "react";
import { NowPlaying } from "@/components/nowPlaying";
import { TopArtists } from "@/components/topArtists";
import { TopTracks } from "@/components/topTracks";

const Spotify = () => {
    return (
        <div>
            <NowPlaying />
            <TopArtists />
            <TopTracks />
        </div>
    );
};

export default Spotify;
