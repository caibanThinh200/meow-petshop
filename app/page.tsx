import Header from "./components/Header";
import Hero from "./components/Hero";
import { FlashDeals } from "./components/Sections";
import { SizeGuideProvider } from "./components/SizeGuide";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SizeGuideProvider>
      <Header />
      <main>
        <Hero />
        <FlashDeals />
      </main>
      <Footer />
    </SizeGuideProvider>
  );
}
