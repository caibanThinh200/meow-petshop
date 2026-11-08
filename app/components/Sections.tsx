"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ruler, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import { useSizeGuide } from "./SizeGuide";

const SIZES = ["S", "M", "L", "XL"] as const;
const deals = [
  { src: "/images/hero-cat.jpg", name: "Hoodie Khủng Long", price: "159.000đ", old: "249.000đ", off: "-36%" },
  { src: "/images/hero-bichon.jpg", name: "Váy Công Chúa Nơ", price: "129.000đ", old: "199.000đ", off: "-35%" },
  { src: "/images/hero-puppy.jpg", name: "Mũ Sư Tử Cosplay", price: "89.000đ", old: "149.000đ", off: "-40%" },
];

function SizeGuideLink() {
  const { open } = useSizeGuide();
  return (
    <button
      type="button"
      onClick={open}
      className="inline-flex items-center gap-1 font-semibold text-candy underline decoration-solid underline-offset-4 hover:text-honey"
    >
      <Ruler size={16} aria-hidden /> Hướng dẫn chọn size
    </button>
  );
}

function DealCard({ d }: { d: (typeof deals)[number] }) {
  const [size, setSize] = useState<(typeof SIZES)[number]>("M");
  const [added, setAdded] = useState(false);
  return (
    <motion.article whileHover={{ y: -6 }} className="sticker relative rounded-3xl bg-white p-5">
      <span className="sticker absolute -right-3 -top-3 rotate-12 rounded-full bg-bubble px-3 py-1 text-sm font-bold">
        {d.off}
      </span>
      <div className="relative h-48 overflow-hidden rounded-2xl bg-honey/20">
        <Image src={d.src} alt={d.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      </div>
      <h3 className="mt-4 text-lg font-bold">{d.name}</h3>
      <p className="mt-1">
        <span className="text-xl font-bold text-candy">{d.price}</span>{" "}
        <span className="text-sm text-ink/50 line-through">{d.old}</span>
      </p>
      <div role="radiogroup" aria-label="Chọn size" className="mt-3 flex gap-2">
        {SIZES.map((s) => (
          <button
            key={s}
            role="radio"
            aria-checked={size === s}
            onClick={() => setSize(s)}
            className={`h-9 w-9 rounded-full border-2 border-solid border-ink text-sm font-bold transition ${
              size === s ? "bg-honey text-white" : "bg-cream hover:bg-bubble/50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setAdded(true)}
        aria-live="polite"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-mint py-3 font-bold text-white"
      >
        <ShoppingBag size={18} aria-hidden />
        {added ? `Đã thêm size ${size} ✓` : "Thêm vào giỏ"}
      </motion.button>
    </motion.article>
  );
}

export function FlashDeals() {
  return (
    <Reveal id="deals" className="mx-auto w-full max-w-6xl px-5 py-12 pb-24">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-3xl font-bold">⚡ Flash Fashion Deals</h2>
        <SizeGuideLink />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {deals.map((d) => (
          <DealCard key={d.name} d={d} />
        ))}
      </div>
    </Reveal>
  );
}
