import Head from "next/head";
import Image from "next/image";
import Article from "./article";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ika.im'),
  title: `Ika's Personal Space`,
  description: 'Javascript, Technology, Personal Reflections',
  icons: ['/favicon.svg'],

  openGraph: {
    images: [
      '/images/og-hello-world.png'
    ]
  }
}

export default function Page() {
  return (
    <div className="flex flex-col w-full max-w-4xl px-8 pb-20 m-auto">
      <header className="flex flex-row-reverse items-start gap-4 my-20 ">
        <div className="flex-grow font-sans text-lg">
          <h1>
            Blog by{" "}
            <a
              className="text-orange-600 underline"
              href="https://twitter.com/itsikap"
            >
              Ika Pkhakadze
            </a>
          </h1>
          <p>Javascript, Technology, Personal Reflections</p>
        </div>

        <Image
          src="./images/invader.svg"
          width={55}
          height={49}
          alt="Space Invader"
        />
      </header>

      <section className="flex flex-col gap-24 mt-14 ">

      <Article
          headline={<>Never let your friends <br /> forget who is the winner</>}
          imageSrc="/images/shmelo/podium.svg"
          imageAlt="Enjoying the victory on the podium"
          summary="Shmelo is a playful leaderboard app that tracks scores for any competitive game using the “elo” ranking system."
          published="9 December, 2024"
          link="posts/introducing-shmelo"
        />

      
        <Article
          headline={
            <>
              The Dumbest Idea. <br /> Tech behind Stack Browser
            </>
          }
          imageSrc="/images/invader-in-sand.svg"
          imageAlt="Forming Space Invader in a sand"
          summary="Unconventional journey, technological challenges, and the unexpected success of a seemingly 'dumb' idea"
          published="23 September, 2023"
          link="posts/tech-behind-stack-browser"
        />

        <Article
          headline="Hello World"
          imageSrc="/images/spaceman-waving.svg"
          imageAlt="Spaceman waving"
          summary="Hey there! I've decided to create my personal space in the internet. I share a little bit about me, my interests, and what to expect."
          published="8 August, 2022"
          link="posts/hello-world"
        />
      </section>
    </div>
  );
}
