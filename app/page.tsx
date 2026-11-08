import { Phone } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import LoadingScreen from "./components/LoadingScreen";
import { FlashDeals } from "./components/Sections";
import { SizeGuideProvider } from "./components/SizeGuide";

export default function Home() {
  return (
    <SizeGuideProvider>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <FlashDeals />
      </main>
      <footer id="contact" className="mx-auto w-full max-w-6xl px-5 pb-16">
        <div className="sticker flex flex-col items-center justify-between gap-4 rounded-3xl bg-bubble/40 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold">Liên hệ Meow Petshop</h2>
            <p className="text-ink/70">Gọi hoặc nhắn Zalo để được tư vấn size cho bé nhé!</p>
            <div className="mt-4 flex justify-center sm:justify-start">
              <SocialLinks />
            </div>
          </div>
          <a
            href="tel:0906765705"
            className="sticker inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-lg font-bold text-white"
          >
            <Phone size={20} aria-hidden /> 0906765705
          </a>
        </div>
      </footer>
    </SizeGuideProvider>
  );
}
