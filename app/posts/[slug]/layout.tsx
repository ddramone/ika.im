import Logo from "@/app/components/logo";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex items-center gap-4 my-10 h-20 ">
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <main>{ children }</main>
    </>
  );
}
