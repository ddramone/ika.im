import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/posts/utils'
import Image from 'next/image'

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
                <h2 className="text-xl font-semibold  transition-colors text-balance group-hover:underline" >
                  {post.metadata.title}
                </h2>

                <time className="text-sm text-gray-500 block mt-1">
                  {formatDate(post.metadata.publishedAt)}
                </time>
                <p className="mt-3 text-gray-600">
                  {post.metadata.summary}
                </p>
              </div>
              <div className="relative h-52 max-w-md order-0 md:order-2 w-full md:h-full">
                {post.metadata.image && (
                  <Image
                    src={post.metadata.image}
                    alt={`Cover image for ${post.metadata.title}`}
                    fill
                    className="object-contain object-left-bottom"
                  />
                )}
              </div>
            </article>
          </Link>
        ))}
    </div>
  )
}
