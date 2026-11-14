"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { startLoader } from "./LoadingScreen";

const COVER_DELAY_MS = 350; // matches the overlay fade-in (0.3s)

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/** Link that fades the loading overlay in over the current page before navigating. */
export default function TransitionLink({ href, onNavigate, ...rest }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Link
      href={href}
      {...rest}
      onNavigate={(e) => {
        onNavigate?.(e);
        const target = new URL(href, window.location.href);
        // Same-page links (e.g. "/#deals" while on "/") just scroll — no loader.
        if (target.pathname === pathname) return;
        e.preventDefault();
        router.prefetch(href);
        startLoader();
        window.setTimeout(() => router.push(href), COVER_DELAY_MS);
      }}
    />
  );
}
