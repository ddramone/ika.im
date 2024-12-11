import { formatDate, getBlogPosts } from 'app/posts/utils'
import Link from 'next/link'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col space-y-24">

      {allBlogs
        .sort((a, b) => 
          new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
        )
        .map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block group"
          >
            <article className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-6 items-start">
              <div className='order-1'>
                <h2 className="text-xl font-bold transition-colors text-balance group-hover:underline" >
                  {post.metadata.title}
                </h2>

                <time className="block mt-1 text-sm text-gray-500">
                  {formatDate(post.metadata.publishedAt)}
                </time>
                <p className="mt-3 text-gray-600 text-pretty">
                  {post.metadata.summary}
                </p>
              </div>
              <div className="relative w-full max-w-md h-52 order-0 md:order-2 md:h-full bg-contain bg-bottom bg-no-repeat"
                style={{
                  backgroundImage: `url(${post.metadata["home-image"]})`,
                  backgroundSize: 'contain',
                }}>
              </div>
            </article>
          </Link>
        ))}
    </div>
  )
}
