import Image from "next/image";
import Article from "./article";

export default function Page() {
  return (
    <div className="w-full max-w-5xl px-20 flex flex-col m-auto">

      <header className="flex flex-row-reverse items-start gap-4 my-20 ">
        <div className="flex-grow font-sans text-lg">
          <h1>
            Blog by{" "}
            <a
              className="underline text-orange-500"
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
          headline="The Dumbest Idea. Part 2"
          imageSrc="/images/temp.svg"
          summary="I share snippets from the codebase and explain how we utilize BrowserViews in electron app" 
          published="27 October, 2023"
          link="test"
        />
      
        <Article
          headline={<>The Dumbest Idea. <br /> Tech behind Stack Browser</>}
          imageSrc="/images/invader-in-sand.svg"
          summary="Unconventional journey, technological challenges, and the unexpected success of a seemingly 'dumb' idea" 
          published="27 October, 2023"
          link="test"
        />

        <Article
          headline="Hello World"
          imageSrc="/images/spaceman-waving.svg"
          summary="Unconventional journey, technological challenges, and the unexpected success of a seemingly 'dumb' idea" 
          published="27 October, 2023"
          link="test"
        />
      </section>

    </div>
  );
}
