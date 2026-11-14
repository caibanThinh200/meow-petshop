"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { usePageReady } from "./LoadingScreen";

const cards = [
  { src: "/images/hero-cat.jpg", label: "Áo lưới co giãn", bg: "bg-mint/30", rot: -8 },
  { src: "/images/hero-puppy.jpg", label: "Áo nỉ thu đông", bg: "bg-bubble/60", rot: 4 },
  { src: "/images/hero-bichon.jpg", label: "Áo lông tai thỏ", bg: "bg-candy/30", rot: -3 },
];

const stickers = [
  { text: "100% Cotton Mát Lưng", pos: "top-0 -left-2 md:-left-10", bg: "bg-bubble", r: "-6deg" },
  { text: "Chống Rụng Lông", pos: "top-1/2 -right-2 md:-right-10", bg: "bg-candy text-white", r: "5deg" },
  { text: "Size Chuẩn Cho Mèo 2-8kg", pos: "bottom-0 left-4", bg: "bg-mint text-white", r: "-3deg" },
];

export default function Hero() {
  const isReady = usePageReady();
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
      <div>
        {/* <span className="sticker inline-block rounded-full bg-bubble px-4 py-2 text-sm font-semibold">
          Mặc xinh - Chụp ảnh - Đi chơi
        </span> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        >
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Biến <span className="text-honey">&apos;Hoàng Thượng&apos;</span> Thành{" "}
            <span className="relative inline-block text-candy">
              Fashionista Nhí!
              <svg
                aria-hidden
                viewBox="0 0 500 40"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -bottom-[0.45em] left-0 h-[0.5em] w-full overflow-visible"
                fill="none"
              >
                <motion.path
                  d="M5 22 C20 8, 45 6, 50 14 C55 22, 30 38, 28 36 C26 33, 70 10, 100 12 C120 13, 110 30, 100 28 C90 26, 105 8, 130 14 C170 24, 230 30, 290 22 C330 16, 360 8, 380 14 C395 19, 385 32, 372 28 C360 24, 380 10, 410 16 C440 22, 470 24, 495 12"
                  stroke="currentColor"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isReady ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{
                    pathLength: { duration: reduceMotion ? 0 : 1.4, ease: [0.45, 0, 0.25, 1], delay: reduceMotion ? 0 : 0.6 },
                    opacity: { duration: 0.1, delay: reduceMotion ? 0 : 0.6 },
                  }}
                />
              </svg>
            </span>
          </h1>
          <p className="mt-10 md:mt-12 max-w-lg text-lg text-ink/80">
            Bộ sưu tập hoodie, váy công chúa, nơ cổ và cosplay cưng xỉu độc quyền tại Meow Petshop.
          </p>
        </motion.div>
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <motion.a
            href="#deals"
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="sticker rounded-full bg-mint px-6 py-3 font-bold text-white"
          >
            Săn Deal Đồ Tết &amp; Cosplay
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@meowpetshop193"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="sticker inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold"
          >
            <Play size={18} aria-hidden /> Xem Review Mặc Thử Trên TikTok
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      >
        {cards.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: -20, rotate: 0 }}
            animate={isReady ? { opacity: 1, y: 0, rotate: c.rot } : { opacity: 0, y: -20, rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: 0, transition: { duration: 0.2, delay: 0 } }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 + i * 0.15 }}
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
      </motion.div>
    </section>
  );
}
