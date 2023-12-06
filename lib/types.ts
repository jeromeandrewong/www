export type NowPlayingResponse = {
    isPlaying: boolean;
    songName: string;
    artistName: string;
    songURL: string;
    imageURL: string;
};

export type TopArtistsResponse = {
    name: string;
    playcount: string;
    url: string;
};

export type TopTracksResponse = {
    name: string;
    playcount: string;
    url: string;
    artist: string;
};

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        twitter: string;
    };
};

export type ChartData = {
    name: string;
    value: number;
    href: string;
    icon: () => JSX.Element;
};
