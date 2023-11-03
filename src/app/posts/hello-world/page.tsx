import Image from 'next/image'
import Content from './content.mdx'

export default function Page() {
  return <article className='p-5 flex flex-col items-center'>
    

    {/* Content */}
    <div className='max-w-[820px]'> 

      {/* Header */}
      <header className="flex flex-col items-start mt-16">

        <time dateTime='2023-10-23' className='text-base'>27 October, 2023</time>
        <h1 className="font-display font-bold text-6xl leading-tight tracking-">Hello World</h1>
        
        <Image src="/images/wave.svg" alt="Hello" width={70} height={10} className="my-14 mx-2" />

      </header>
      {/* .Header */}
      
      <Content />

    </div>
    {/* .Content */}

  </article>
}