"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { useSizeGuide } from "./SizeGuide";

const PHONE = "0906765705";

export default function Header() {
  const { open } = useSizeGuide();
  const link = "rounded-full px-3 py-1.5 font-semibold transition hover:bg-bubble/60";
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 pt-6">
      <Link href="/" aria-label="Meow Petshop">
        <Image
          src="/logo.png"
          alt="Meow Petshop – For your precious friends"
          width={96}
          height={96}
          priority
          className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
        />
      </Link>
      <nav aria-label="Menu chính" className="order-3 flex w-full justify-center gap-1 sm:order-none sm:w-auto">
        <a href="#deals" className={link}>Sản phẩm</a>
        <a href="#deals" className={link}>Danh mục</a>
        <button type="button" onClick={open} className={link}>Kích cỡ</button>
        <a href="#contact" className={link}>Liên hệ</a>
      </nav>
      <a
        href={`tel:${PHONE}`}
        className="sticker inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 font-bold text-white"
      >
        <Phone size={18} aria-hidden /> {PHONE}
      </a>
    </header>
  );
}
