"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (tick >= 9) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setTick((n) => n + 1), 300);
    return () => clearTimeout(t);
  }, [tick]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative">
            <Image
              src="/images/loading-pets.png"
              alt=""
              width={240}
              height={180}
              priority
              aria-hidden
              className="h-auto w-60 sm:w-60"
            />

            {[
              "-top-4 -left-8",
              "-top-2 -right-10",
              "bottom-4 -right-12",
            ].map((pos, i) => (
              <motion.span
                key={pos}
                className={`absolute ${pos} text-bubble`}
                animate={{ scale: [0.6, 1.3, 0.6], rotate: [0, 90, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.25 }}
              >
                <Sparkles aria-hidden />
              </motion.span>
            ))}
          </div>
          <p className="translate-x-6 text-2xl font-bold tracking-wide text-honey">
            MEOW ĐANG LÊN ĐỒ
            {"  "}
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="ml-1 text-5xl"
                style={{ opacity: tick % 4 > d ? 1 : 0 }}
              >
                .
              </span>
            ))}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
