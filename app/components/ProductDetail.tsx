"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import TransitionLink from "./TransitionLink";
import {
  Check,
  ChevronRight,
  Minus,
  Plus,
  RefreshCw,
  Ruler,
  Shirt,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { useRef, useState } from "react";
import {
  type Product,
  type Size,
  SIZES,
  sizeRows,
} from "@/app/data/products";

export default function ProductDetail({ product }: { product: Product }) {
  const shouldReduceMotion = useReducedMotion();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<Size>("M");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<"detail" | "size">("detail");

  const tabsRef = useRef<HTMLDivElement>(null);
  const detailTabRef = useRef<HTMLButtonElement>(null);
  const sizeTabRef = useRef<HTMLButtonElement>(null);

  const images = product.images.length > 0 ? product.images : [product.src];
  const activeImage = images[selectedImageIndex] || product.src;

  const handleOpenSizeGuideTab = () => {
    setActiveTab("size");
    tabsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, currentTab: "detail" | "size") => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const nextTab = currentTab === "detail" ? "size" : "detail";
      setActiveTab(nextTab);
      if (nextTab === "detail") {
        detailTabRef.current?.focus();
      } else {
        sizeTabRef.current?.focus();
      }
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-4 py-8 md:py-12"
    >
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink/60">
          <li>
            <TransitionLink href="/" className="transition hover:text-candy">
              Trang chủ
            </TransitionLink>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li>
            <TransitionLink href="/#deals" className="transition hover:text-candy">
              Flash Deals
            </TransitionLink>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li className="font-semibold text-ink" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Main Grid: Gallery + Info */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left Column: Gallery */}
        <div>
          <div className="sticker relative aspect-square overflow-hidden rounded-3xl bg-honey/20">
            <span className="sticker pointer-events-none absolute right-4 top-4 z-10 rotate-12 rounded-full bg-bubble px-3 py-1 font-bold">
              {product.off}
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                className="relative h-full w-full"
              >
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {images.map((img, i) => {
                const isActive = selectedImageIndex === i;
                return (
                  <button
                    key={img + i}
                    type="button"
                    onClick={() => setSelectedImageIndex(i)}
                    aria-label={`Xem ảnh ${i + 1}`}
                    aria-pressed={isActive}
                    className={`relative h-20 w-20 overflow-hidden rounded-2xl border-2 transition ${
                      isActive
                        ? "border-honey ring-2 ring-honey/40"
                        : "border-ink/20 hover:border-ink"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - ảnh ${i + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Info */}
        <div className="sticker rounded-3xl bg-white p-6 md:p-8">
          <span className="sticker inline-block -rotate-2 rounded-full bg-candy px-3 py-1 text-sm font-bold text-white">
            🔥 Flash Deal
          </span>

          <h1 className="mt-3 text-3xl font-bold md:text-4xl">{product.name}</h1>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-ink/80">
            <Star className="h-5 w-5 fill-bubble text-bubble" aria-hidden />
            <span>★ {product.rating}</span>
            <span className="text-ink/50">({product.reviews} đánh giá)</span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-3xl font-bold text-candy">{product.price}</span>
            <span className="text-lg text-ink/50 line-through">{product.old}</span>
            <span className="sticker rounded-full bg-bubble px-2.5 py-0.5 text-sm font-bold">
              {product.off}
            </span>
          </div>

          {/* Short Description */}
          <p className="mt-4 text-ink/80 leading-relaxed">{product.description}</p>

          {/* Size Picker */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold">Chọn size</span>
              <button
                type="button"
                onClick={handleOpenSizeGuideTab}
                className="inline-flex items-center gap-1 text-sm font-semibold text-candy underline decoration-solid underline-offset-4 hover:text-honey"
              >
                <Ruler size={14} aria-hidden /> Bảng size
              </button>
            </div>
            <div role="radiogroup" aria-label="Chọn size" className="mt-2.5 flex gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  role="radio"
                  aria-checked={selectedSize === s}
                  onClick={() => setSelectedSize(s)}
                  className={`h-11 w-11 rounded-full border-2 border-solid border-ink text-sm font-bold transition ${
                    selectedSize === s ? "bg-honey text-white" : "bg-cream hover:bg-bubble/50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Stepper */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-bold">Số lượng:</span>
            <div className="sticker inline-flex items-center rounded-full bg-cream">
              <button
                type="button"
                aria-label="Giảm số lượng"
                disabled={qty <= 1}
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full font-bold transition hover:bg-bubble/40 disabled:opacity-40"
              >
                <Minus size={16} aria-hidden />
              </button>
              <span className="w-10 text-center text-lg font-bold select-none">{qty}</span>
              <button
                type="button"
                aria-label="Tăng số lượng"
                disabled={qty >= 10}
                onClick={() => setQty((q) => Math.min(10, q + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full font-bold transition hover:bg-bubble/40 disabled:opacity-40"
              >
                <Plus size={16} aria-hidden />
              </button>
            </div>
          </div>

          {/* CTA Add to Cart */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setAdded(true)}
            aria-live="polite"
            className="sticker mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-mint py-4 text-lg font-bold text-white transition hover:brightness-105"
          >
            <ShoppingBag size={20} aria-hidden />
            {added ? `Đã thêm ${qty} × size ${selectedSize} ✓` : "Thêm vào giỏ"}
          </motion.button>

          {/* Perks Row */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-ink/40 bg-cream px-3 py-1 text-sm font-bold">
              <Shirt size={16} className="text-honey" aria-hidden /> 100% Cotton Mát Lưng
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-ink/40 bg-cream px-3 py-1 text-sm font-bold">
              <RefreshCw size={16} className="text-candy" aria-hidden /> Đổi size 7 ngày
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-ink/40 bg-cream px-3 py-1 text-sm font-bold">
              <Truck size={16} className="text-mint" aria-hidden /> Giao nhanh 2h
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div ref={tabsRef} className="mt-12">
        <div role="tablist" aria-label="Thông tin sản phẩm" className="flex gap-2">
          <button
            ref={detailTabRef}
            id="tab-detail"
            role="tab"
            type="button"
            aria-selected={activeTab === "detail"}
            aria-controls="panel-detail"
            tabIndex={activeTab === "detail" ? 0 : -1}
            onKeyDown={(e) => handleTabKeyDown(e, "detail")}
            onClick={() => setActiveTab("detail")}
            className={`sticker rounded-full px-5 py-2 font-bold transition ${
              activeTab === "detail" ? "bg-honey text-white" : "bg-white hover:bg-bubble/40"
            }`}
          >
            Chi tiết sản phẩm
          </button>
          <button
            ref={sizeTabRef}
            id="tab-size"
            role="tab"
            type="button"
            aria-selected={activeTab === "size"}
            aria-controls="panel-size"
            tabIndex={activeTab === "size" ? 0 : -1}
            onKeyDown={(e) => handleTabKeyDown(e, "size")}
            onClick={() => setActiveTab("size")}
            className={`sticker rounded-full px-5 py-2 font-bold transition ${
              activeTab === "size" ? "bg-honey text-white" : "bg-white hover:bg-bubble/40"
            }`}
          >
            Bảng size
          </button>
        </div>

        <div className="sticker mt-4 rounded-3xl bg-white p-6 md:p-8">
          <AnimatePresence mode="wait">
            {activeTab === "detail" ? (
              <motion.div
                key="detail"
                id="panel-detail"
                role="tabpanel"
                aria-labelledby="tab-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold">Mô tả sản phẩm</h2>
                  <p className="mt-2 text-ink/80 leading-relaxed">{product.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Điểm nổi bật</h3>
                  <ul className="mt-3 space-y-2">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/20 text-mint">
                          <Check size={14} className="stroke-[3]" aria-hidden />
                        </span>
                        <span className="text-ink/90">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-4 pt-2 md:grid-cols-2">
                  <div className="rounded-2xl border-2 border-dashed border-ink/20 bg-cream p-4">
                    <h4 className="flex items-center gap-1.5 font-bold text-honey">
                      <Shirt size={18} aria-hidden /> Chất liệu
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">{product.material}</p>
                  </div>
                  <div className="rounded-2xl border-2 border-dashed border-ink/20 bg-cream p-4">
                    <h4 className="flex items-center gap-1.5 font-bold text-candy">
                      <RefreshCw size={18} aria-hidden /> Hướng dẫn giặt
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-ink/80">
                      {product.care.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-bold text-candy">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="size"
                id="panel-size"
                role="tabpanel"
                aria-labelledby="tab-size"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              >
                <h2 className="text-2xl font-bold">Bảng kích thước tiêu chuẩn</h2>
                <p className="mt-1 text-sm text-ink/70">
                  Bảng đo kích thước chuẩn cho thú cưng (cm). Vui lòng đo bé trước khi chọn size.
                </p>
                <div className="mt-4 overflow-x-auto rounded-2xl border-2 border-ink">
                  <table className="w-full min-w-[500px] text-center text-sm">
                    <thead>
                      <tr className="bg-honey text-white">
                        <th className="p-3 font-bold">Size</th>
                        <th className="p-3 font-bold">Cân nặng</th>
                        <th className="p-3 font-bold">Vòng ngực (cm)</th>
                        <th className="p-3 font-bold">Vòng cổ (cm)</th>
                        <th className="p-3 font-bold">Dài lưng (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeRows.map((r, i) => {
                        const isSelected = r.size === selectedSize;
                        return (
                          <tr
                            key={r.size}
                            className={`border-t border-ink/20 transition-colors ${
                              isSelected
                                ? "bg-bubble/40 font-bold"
                                : i % 2 === 1
                                ? "bg-cream"
                                : "bg-white"
                            }`}
                          >
                            <td className="p-3 font-bold text-candy">{r.size}</td>
                            <td className="p-3">{r.weight}</td>
                            <td className="p-3">{r.chest}</td>
                            <td className="p-3">{r.neck}</td>
                            <td className="p-3">{r.back}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 rounded-xl border border-dashed border-honey bg-honey/10 p-3 text-sm text-ink/80">
                  💡 <strong>Mẹo:</strong> Đo vòng ngực sát nách rồi cộng thêm 2–3cm để Boss mặc thoải mái nhé!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
