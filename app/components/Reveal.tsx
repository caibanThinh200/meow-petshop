"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { usePageReady } from "./LoadingScreen";

export default function Reveal({
  children,
  className,
  id,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) {
  const isReady = usePageReady();

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: -20 }}
      whileInView={isReady ? { opacity: 1, y: 0 } : undefined}
      animate={!isReady ? { opacity: 0, y: -20 } : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
