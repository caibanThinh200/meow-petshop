import Image from "next/image";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";
import { CategoryRail, FlashDeals, Reels } from "./components/Sections";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6">
        <a href="/" aria-label="Meow Petshop">
          <Image
            src="/logo.png"
            alt="Meow Petshop – For your precious friends"
            width={96}
            height={96}
            priority
            className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
          />
        </a>
      </header>
      <main>
        <Hero />
        <CategoryRail />
        <Reels />
        <FlashDeals />
      </main>
    </>
  );
}
