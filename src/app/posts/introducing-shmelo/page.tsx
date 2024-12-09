import Image from 'next/image'
import Content from './content.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ika.im'),
  title: `Never let your friends forget who is the winner`,
  description: `Shmelo is a playful leaderboard app that tracks scores for any competitive game using the “elo” ranking system`,
  keywords: "leaderboard, digital scoreboard, board games ranking,  tennis ranking, padel ranking, elo rating system, free game scoreboard, game statistics, player leaderboard",
  icons: ['/favicon.svg'],
  openGraph: {
    images: [
      '/images/shmelo/og-podium.png'
    ]
  }
}

export default function Page() {
  return <article className='p-5 flex flex-col items-center'>
    

    {/* Content */}
    <div className='max-w-[820px]'> 

      {/* Header */}
      <header className="flex flex-col items-start mt-16">

        <time dateTime='2024-12-09' className='text-base'>9 December, 2024</time>
        <h1 className="font-display font-bold text-6xl leading-tight tracking-">Never let your friends forget who is the winner</h1>

        <Image src="/images/shmelo/podium.svg" alt="Enjoying the victory on the podium" width={400} height={256} className="my-14 mx-2" />
        
      </header>
      {/* .Header */}
      
      <Content />

    </div>
    {/* .Content */}

  </article>
}