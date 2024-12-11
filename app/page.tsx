import { BlogPosts } from "app/components/posts";
import Logo from "./components/logo";

export default function Page() {
  return (
    <main className="flex flex-col flex-auto px-2 mt-20 min-w-0 md:px-0">
      <BlogPosts />
    </main>
  );
}
