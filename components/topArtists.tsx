"use client";

import { useEffect, useState } from "react";
import fetcher from "@/lib/fetcher";
import { ChartData, TopArtistsResponse } from "@/lib/types";
import { stagger, useAnimate } from "framer-motion";
import useSWR from "swr";
import { BarList } from "@tremor/react";
import { Icons } from "./ui/icons";
import { Mic2 } from "lucide-react";
export const TopArtists = () => {
    const [scope, animate] = useAnimate();
    const [chartData, setChartData] = useState<ChartData[] | []>([]);
    const { data, isLoading } = useSWR<TopArtistsResponse[]>(
        "/api/spotify/topArtists",
        fetcher,
    );

    useEffect(() => {
        if (data)
            setChartData(
                data.map((artist) => {
                    return {
                        name: artist.name,
                        value: parseInt(artist.playcount),
                        href: artist.url,
                        icon: () => <Mic2 className="mr-2.5 h-5 w-5" />,
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

    return isLoading ? (
        <div className="flex h-[50dvh] items-center justify-center">
            <Icons.spinner className="h-10 w-10 animate-spin text-zinc-500" />
        </div>
    ) : (
        <div
            ref={scope}
            className="my-3 flex flex-col gap-y-2 rounded-md border border-secondary p-3"
        >
            {!data ? (
                <div id="transform-anim"></div>
            ) : (
                <>
                    <div className="pl-2">
                        <div className="text-xl font-bold">Top Artists</div>
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
    );
};
