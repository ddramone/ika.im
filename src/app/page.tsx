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
      '/images/invader.svg'
    ]
  }
}

export default function Page() {
  return (
    <div className="w-full max-w-4xl px-8 flex flex-col m-auto pb-20">
      <header className="flex flex-row-reverse items-start gap-4 my-20 ">
        <div className="flex-grow font-sans text-lg">
          <h1>
            Blog by{" "}
            <a
              className="underline text-orange-600"
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
          height={60}
          alt="Space Invader"
        />
      </header>

      <section className="flex flex-col mt-14 gap-24 ">
        <Article
          headline="The Dumbest Idea. Implementation"
          summary="Technical details of the using BrowserViews, code-snippets, associated challenges and our solutions."
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
