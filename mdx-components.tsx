import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    li: ({ children }) => <li className="pl-2 -mb-4">{children}</li>,
    ul: ({ children }) => <ul className="list-disc ml-10">{children}</ul>,
    blockquote: ({ children }) => <blockquote className="ml-8 pl-8 italic text-lg border-l border-opacity-20 border-black">{children}</blockquote>,
    a: (props: any) => <a className="underline" {...props} />,
    h2: ({ children }) => <h1 className="font-display font-bold text-4xl mt-24 mb-10">{children}</h1>,
    p: ({ children }) => <p className="font-body text-xl font-light leading-9 mb-10">{children}</p>,
    hr: () => <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-black opacity-20 " />,
    img: (props: any) => 
      <>
        <Image src={props.src} width={props.width} height={props.height} alt={props.alt} />
        {props.title && <span className="text-right text-sm mt-2 leading-tight inline-block">{props.title}</span>}
      </>
    ,
    ...components,
  };
}