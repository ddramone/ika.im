import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h2: ({ children }) => <h1 className="font-display text-4xl mb-5">{children}</h1>,
    p: ({ children }) => <p className="font-body text-lg leading-7 mb-5">{children}</p>,
    ...components,
  };
}