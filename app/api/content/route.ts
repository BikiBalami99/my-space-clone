const posts = [
    {
        title: "Top 5 Iron Man Suits",
        slug: "top-5-iron-man-suits",
        content:
            "From the iconic Mark III to the bleeding-edge tech of the Mark L, here are the suits that defined Tony Stark's legacy.",
    },
    {
        title: "The Evolution of Spider-Man",
        slug: "evolution-of-spider-man",
        content:
            "From Peter Parker's high school days to his multiversal adventures, Spider-Man's journey continues to inspire us all.",
    },
    {
        title: "Villains Who Almost Won",
        slug: "villains-who-almost-won",
        content:
            "Thanos isn't the only one who came close to victory. These Marvel villains nearly changed the universe forever.",
    },
    {
        title: "Wanda Maximoff's Most Powerful Moments",
        slug: "wanda-maximoff-powerful-moments",
        content:
            "Scarlet Witch has reshaped reality, battled gods, and proven time and again why she's one of the most powerful Marvel characters.",
    },
    {
        title: "Best Marvel Crossovers",
        slug: "best-marvel-crossovers",
        content:
            "From Secret Wars to Civil War, these epic crossover events brought the Marvel Universe together in unforgettable ways.",
    },
    {
        title: "Why We Love Loki",
        slug: "why-we-love-loki",
        content:
            "From villain to anti-hero, Loki's charm, wit, and mischief have made him one of Marvel's most beloved characters.",
    },
];

import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(posts);
}
