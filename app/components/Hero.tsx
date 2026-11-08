"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  { src: "/images/hero-cat.jpg", label: "Hoodie Khủng Long", bg: "bg-mint/30", rot: -8 },
  { src: "/images/hero-puppy.jpg", label: "Mũ Sư Tử", bg: "bg-bubble/60", rot: 4 },
  { src: "/images/hero-bichon.jpg", label: "Knitwear Trendy", bg: "bg-candy/30", rot: -3 },
];

const stickers = [
  { text: "100% Cotton Mát Lưng", pos: "top-0 -left-2 md:-left-10", bg: "bg-bubble", r: "-6deg" },
  { text: "Chống Rụng Lông", pos: "top-1/2 -right-2 md:-right-10", bg: "bg-candy text-white", r: "5deg" },
  { text: "Size Chuẩn Cho Mèo 2-8kg", pos: "bottom-0 left-4", bg: "bg-mint text-white", r: "-3deg" },
];

export default function Hero() {
  return (
    <Reveal className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
      <div>
        <span className="sticker inline-block rounded-full bg-bubble px-4 py-2 text-sm font-semibold">
          🔥 BST Thu Đông Hoàng Thượng 2026 - TikTok Viral
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
          Biến <span className="text-honey">&apos;Hoàng Thượng&apos;</span> Thành{" "}
          <span className="text-candy">Fashionista Nhí!</span>
        </h1>
        <p className="mt-5 max-w-lg text-lg text-ink/80">
          Bộ sưu tập hoodie, váy công chúa, nơ cổ và cosplay cưng xỉu độc quyền tại Meow Petshop.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <motion.a
            href="#deals"
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="sticker rounded-full bg-mint px-6 py-3 font-bold text-white"
          >
            Săn Deal Đồ Tết &amp; Cosplay
          </motion.a>
          <motion.a
            href="#deals"
            whileHover={{ y: -4 }}
            className="sticker inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold"
          >
            <Play size={18} aria-hidden /> Xem Review Mặc Thử Trên TikTok
          </motion.a>
        </div>
      </div>

      <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center">
        {cards.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: c.rot }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
            className={`sticker absolute h-56 w-40 overflow-hidden rounded-3xl ${c.bg} bg-white`}
            style={{ left: `${i * 28}%`, top: `${i * 12}%` }}
          >
            <Image src={c.src} alt={c.label} fill sizes="160px" className="object-cover" />
            <span className="absolute inset-x-0 bottom-0 bg-white/85 px-2 py-1 text-center text-sm font-bold">
              {c.label}
            </span>
          </motion.div>
        ))}
        {stickers.map((s) => (
          <span
            key={s.text}
            style={{ "--r": s.r } as React.CSSProperties}
            className={`sticker float absolute z-10 rounded-full px-3 py-1 text-xs font-bold ${s.bg} ${s.pos}`}
          >
            {s.text}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
