"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, []);

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
            <div className="text-8xl" aria-hidden>
              🐱
            </div>

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
          <motion.p
            className="text-2xl font-bold tracking-wide text-honey"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            MEOW ĐANG LÊN ĐỒ...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
