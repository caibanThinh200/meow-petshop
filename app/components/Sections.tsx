"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Video } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const categories = [
  { emoji: "🧥", name: "Áo Hoodie & Sweater", bg: "bg-honey/30" },
  { emoji: "👗", name: "Váy Nơ Bánh Bèo", bg: "bg-candy/30" },
  { emoji: "😎", name: "Mũ & Kính Mát Cat-Eye", bg: "bg-mint/30" },
  { emoji: "🎀", name: "Phụ Kiện Cổ & Yếm", bg: "bg-bubble/50" },
  { emoji: "🦸", name: "Đồ Cosplay Hài Hước", bg: "bg-candy/20" },
];

export function CategoryRail() {
  return (
    <Reveal id="categories" className="mx-auto w-full max-w-6xl px-5 py-12">
      <h2 className="mb-6 text-3xl font-bold">Danh Mục Cưng Xỉu</h2>
      <ul className="flex snap-x gap-5 overflow-x-auto pb-4">
        {categories.map((c) => (
          <motion.li
            key={c.name}
            whileHover={{ y: -8, rotate: -2 }}
            className={`sticker flex w-44 shrink-0 snap-start flex-col items-center gap-3 rounded-3xl ${c.bg} bg-white p-5 text-center`}
          >
            <span className="text-6xl" aria-hidden>{c.emoji}</span>
            <span className="font-semibold">{c.name}</span>
          </motion.li>
        ))}
      </ul>
    </Reveal>
  );
}

const reels = [
  { emoji: "🐱", title: "Mèo mặc hoodie khủng long", views: "1.2M" },
  { emoji: "🐶", title: "Cún diện váy công chúa", views: "860K" },
  { emoji: "😺", title: "Cosplay siêu anh hùng", views: "2.1M" },
  { emoji: "🐾", title: "Runway nơ cổ mùa Tết", views: "540K" },
];

export function Reels() {
  return (
    <Reveal id="reels" className="mx-auto w-full max-w-6xl px-5 py-12">
      <h2 className="mb-6 text-3xl font-bold">TikTok Runway Reels</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {reels.map((r) => (
          <motion.article
            key={r.title}
            whileHover={{ y: -6 }}
            className="sticker flex flex-col overflow-hidden rounded-3xl bg-white"
          >
            <div className="relative flex aspect-[9/16] items-center justify-center bg-gradient-to-b from-candy/40 to-bubble/50">
              <span className="text-7xl" aria-hidden>{r.emoji}</span>
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-ink px-2 py-1 text-xs text-white">
                <Video size={12} aria-hidden /> {r.views}
              </span>
              <p className="absolute inset-x-0 bottom-0 bg-white/80 p-3 text-sm font-semibold">
                {r.title}
              </p>
            </div>
            <button className="bg-mint py-3 font-bold text-white transition hover:brightness-95">
              Mua Outfit Này
            </button>
          </motion.article>
        ))}
      </div>
    </Reveal>
  );
}

const SIZES = ["S", "M", "L", "XL"] as const;
const deals = [
  { emoji: "🧥", name: "Hoodie Khủng Long", price: "159.000đ", old: "249.000đ", off: "-36%" },
  { emoji: "👗", name: "Váy Công Chúa Nơ", price: "129.000đ", old: "199.000đ", off: "-35%" },
  { emoji: "🦁", name: "Mũ Sư Tử Cosplay", price: "89.000đ", old: "149.000đ", off: "-40%" },
];

function DealCard({ d }: { d: (typeof deals)[number] }) {
  const [size, setSize] = useState<(typeof SIZES)[number]>("M");
  const [added, setAdded] = useState(false);
  return (
    <motion.article whileHover={{ y: -6 }} className="sticker relative rounded-3xl bg-white p-5">
      <span className="sticker absolute -right-3 -top-3 rotate-12 rounded-full bg-bubble px-3 py-1 text-sm font-bold">
        {d.off}
      </span>
      <div className="flex h-40 items-center justify-center rounded-2xl bg-honey/20 text-7xl" aria-hidden>
        {d.emoji}
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
            className={`h-9 w-9 rounded-full border-2 border-dashed border-ink text-sm font-bold transition ${
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
      <h2 className="mb-6 text-3xl font-bold">⚡ Flash Fashion Deals</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {deals.map((d) => (
          <DealCard key={d.name} d={d} />
        ))}
      </div>
    </Reveal>
  );
}
