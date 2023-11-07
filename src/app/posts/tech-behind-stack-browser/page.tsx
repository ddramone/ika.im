import Image from 'next/image'
import Content from './content.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ika.im'),
  title: `The Dumbest Idea - Technology Behind Stack Browser | Ika's Personal Space`,
  icons: ['/favicon.svg'],
  openGraph: {
    images: [
      '/images/invader-in-sand-2.svg'
    ]
  }
}

export default function Page() {
  return <article className='p-5 flex flex-col items-center'>
    
    {/* Header */}
    <header className="flex flex-col items-center text-center my-16 w-full">
      <time dateTime='2023-09-23' className='text-base'>23 September, 2023</time>
      <h1 className="font-display font-bold text-3xl xl:text-5xl leading-10">The Dumbest Idea: <br />Technology Behind Stack Browser</h1>

      <div className='w-full h-60 mt-10 xl:h-[500px] relative'>
        <Image src="/images/invader-in-sand-2.svg" alt="Space Invader in a sand" fill objectFit='contain' objectPosition='' />
      </div>

    </header>
    {/* .Header */}

    {/* Content */}
    <div className='max-w-md xl:max-w-2xl'> 
      <Content />
    </div>
    {/* .Content */}

  </article>
}