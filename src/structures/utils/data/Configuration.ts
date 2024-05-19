import type { StelleConfiguration } from "#stelle/types";

export const Configuration: StelleConfiguration = {
    defaultPrefix: "stelle",
    prefixes: ["st!", "s!"],
    developerIds: [
        "391283181665517568", // <-- JustEvil
    ],
    guildIds: [
        "1075885077529120798", // <-- Return Emojis
    ],
    nodes: [
        {
            name: "SN #1", //<--- AKA Stelle Node
            url: "144.22.50.176:2333",
            auth: "ganyuontopuwu",
            secure: false,
        },
    ],
    spotify: {
        clientId: process.env.SPOTIFY_ID,
        clientSecret: process.env.SPOTIFY_SECRET,
        searchMarket: "US",
        albumPageLimit: 50,
        playlistPageLimit: 100,
        searchLimit: 5,
    },
};
