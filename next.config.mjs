/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import imageSize from "rehype-img-size";

const nextConfig = {

    // Configure `pageExtensions`` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below

}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[imageSize, { dir: 'public' }]],
    }
})

export default withMDX(nextConfig)
