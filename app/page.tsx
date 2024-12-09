import { BlogPosts } from "app/components/posts";
import Logo from "./components/logo";

export default function Page() {
  return (
    <section>
      <div className="my-8">
        <header className="flex items-center gap-4 h-20 my-10">
          <Logo />

          <div className="flex-grow font-sans text-base">
            <h1>
              Blog by{" "}
              <a
                className="text-orange-600 underline"
                href="https://twitter.com/itsikap"
              >
                Ika Pkhakadze
              </a>
            </h1>
            <p className="text-sm">
              Javascript, Technology, Personal Reflections
            </p>
          </div>
        </header>

        <main className="flex-auto min-w-0 mt-20 flex flex-col px-2 md:px-0">
          <BlogPosts />
        </main>
      </div>
    </section>
  );
}
