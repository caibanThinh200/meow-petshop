"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Ruler, X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const SizeGuideContext = createContext<{ open: () => void }>({ open: () => {} });

export const useSizeGuide = () => useContext(SizeGuideContext);

const rows = [
  { size: "S", weight: "1 – 2.5 kg", chest: "30 – 36", neck: "20 – 24", back: "20 – 25" },
  { size: "M", weight: "2.5 – 4 kg", chest: "36 – 42", neck: "24 – 28", back: "25 – 30" },
  { size: "L", weight: "4 – 6 kg", chest: "42 – 50", neck: "28 – 33", back: "30 – 36" },
  { size: "XL", weight: "6 – 8 kg", chest: "50 – 58", neck: "33 – 38", back: "36 – 42" },
];

export function SizeGuideProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <SizeGuideContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="size-guide-title"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="sticker relative w-full max-w-xl rounded-3xl bg-white p-6"
            >
              <button
                autoFocus
                onClick={() => setIsOpen(false)}
                aria-label="Đóng bảng size"
                className="absolute right-4 top-4 rounded-full bg-bubble p-2 transition hover:brightness-95"
              >
                <X size={18} aria-hidden />
              </button>
              <h2 id="size-guide-title" className="flex items-center gap-2 text-2xl font-bold">
                <Ruler aria-hidden /> Bảng Size Tham Khảo
              </h2>
              <p className="mt-1 text-sm text-ink/70">Số đo tính bằng cm. Chọn size theo số đo ngực lớn nhất của bé.</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[420px] text-center text-sm">
                  <thead>
                    <tr className="bg-honey/20">
                      <th className="rounded-tl-xl p-2">Size</th>
                      <th className="p-2">Cân nặng</th>
                      <th className="p-2">Vòng ngực</th>
                      <th className="p-2">Vòng cổ</th>
                      <th className="rounded-tr-xl p-2">Dài lưng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.size} className="border-t border-solid border-ink/30">
                        <td className="p-2 font-bold text-candy">{r.size}</td>
                        <td className="p-2">{r.weight}</td>
                        <td className="p-2">{r.chest}</td>
                        <td className="p-2">{r.neck}</td>
                        <td className="p-2">{r.back}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SizeGuideContext.Provider>
  );
}
