import Image from 'next/image'
import Content from './content.mdx'

export default function Page() {
  return <article className='p-5 flex flex-col items-center'>
    
    {/* Header */}
    <header className="flex flex-col items-center max-w-5xl text-center m-16">
      <time dateTime='2023-10-23' className='text-base'>27 October, 2023</time>
      <h1 className="font-display text-6xl leading-tight tracking-">The Dumbest Idea: <br />Technology Behind Stack Browser</h1>

      <Image src="/main-illustration.svg" alt="Main Illustration" width={2301} height={801} className="my-28" />

    </header>
    {/* .Header */}

    {/* Content */}
    <div className='max-w-[820px]'> 
      <Content />
    </div>
    {/* .Content */}

  </article>
}