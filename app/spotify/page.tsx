"use client";

import AnimateEnter from "@/components/ui/animateEnter";
import React from "react";
import { NowPlaying } from "@/components/nowPlaying";
import { TopArtists } from "@/components/topArtists";
import { TopTracks } from "@/components/topTracks";

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
