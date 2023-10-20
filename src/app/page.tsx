import Headline from './components/side'
import Content from './content.mdx'

export default function Page() {
  return <article className='p-5 flex flex-col items-center'>
    
    {/* Header */}
    <header className="flex flex-col gap-6 items-center max-w-lg text-center m-16">
      <time dateTime='2023-10-23' className='text-sm'>27 October, 2023</time>
      <h1 className="font-display text-3xl">Dumbest Idea - Technology Behind Stack Browser</h1>
    </header>
    {/* End Header */}

    <div className='max-w-[820px] '>
      <Content />
    </div>

  </article>
}