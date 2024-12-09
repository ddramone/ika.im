import Image from 'next/image'
import Content from './content.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ika.im'),
  title: `Hello World - Ika's Personal Space`,
  icons: ['/favicon.svg'],
  openGraph: {
    images: [
      '/images/og-hello-world.png'
    ]
  }
}

export default function Page() {
  return <article className='p-5 flex flex-col items-center'>
    

    {/* Content */}
    <div className='max-w-[820px]'> 

      {/* Header */}
      <header className="flex flex-col items-start mt-16">

        <time dateTime='2023-08-08' className='text-base'>8 August, 2023</time>
        <h1 className="font-display font-bold text-6xl leading-tight tracking-">Hello World</h1>
        
        <Image src="/images/wave.svg" alt="Hello" width={57} height={189} className="my-14 mx-2" />

      </header>
      {/* .Header */}
      
      <Content />

    </div>
    {/* .Content */}

  </article>
}