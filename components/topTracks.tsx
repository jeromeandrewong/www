"use client";

import { useEffect, useState } from "react";
import fetcher from "@/lib/fetcher";
import { ChartData, TopTracksResponse } from "@/lib/types";
import { stagger, useAnimate } from "framer-motion";
import useSWR from "swr";
import { BarList } from "@tremor/react";
import { Disc3 } from "lucide-react";

export const TopTracks = () => {
    const [scope, animate] = useAnimate();
    const [chartData, setChartData] = useState<ChartData[] | []>([]);

    const { data, isLoading } = useSWR<TopTracksResponse[]>(
        "/api/spotify/topTracks",
        fetcher,
    );

    useEffect(() => {
        if (data)
            setChartData(
                data.map((track) => {
                    return {
                        name: track.name + " - " + track.artist,
                        value: parseInt(track.playcount),
                        href: track.url,
                        icon: () => <Disc3 className="mr-2.5" />,
                    };
                }),
            );
    }, [data]);

    useEffect(() => {
        !isLoading &&
            animate(
                "#transform-anim",
                { opacity: [0, 1] },
                { duration: 0.5, ease: "easeOut", delay: stagger(0.2) },
            );
    });
    return (
        !isLoading && (
            <div
                ref={scope}
                className="my-3  flex flex-col gap-y-2 rounded-md border border-secondary p-3"
            >
                {!data ? (
                    <div id="transform-anim"></div>
                ) : (
                    <>
                        <div className="pl-2">
                            <div className="text-xl font-bold">Top Tracks</div>
                            <p className="text-zinc-500">Over the last month</p>
                        </div>
                        <div>
                            <BarList
                                id="transform-anim"
                                data={chartData}
                                className="mt-2"
                                showAnimation={true}
                            />
                        </div>
                    </>
                )}
            </div>
        )
    );
};
