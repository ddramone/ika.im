import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  headline: string | ReactNode;
  published: string;
  link: string;
  summary: string;
  imageSrc: string;
}>;

export default function Article({
  headline,
  published,
  link,
  summary,
  imageSrc,
}: Props) {
  return (
    <article className="flex flex-col md:flex-row md:max-w-3xl md:justify-stretch gap-8">

      <div className="w-full md:order-2 md:w-4/12 relative">
        <Image
          src={imageSrc}
          alt="Semi crafted space invader in sand"
          width={400}
          height={400}
          className="w-full h-full md:absolute left-0 bottom-0 object-contain object-left-bottom"
        />
      </div>

      <div className="group flex-1 relative">
        <header className="mb-3">
          <h2 className="font-display text-3xl">
            <a rel="bookmark" href={link}>
              <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-150 ease-out">
                {headline}
              </span>
              <span className="absolute z-10 inset-0"></span>
            </a>
          </h2>
          <small>
            <time dateTime="2023-10-23" className="text-base opacity-40">
              {published}
            </time>
          </small>
        </header>
        <p>{summary}</p>
      </div>
    </article>
  );
}
