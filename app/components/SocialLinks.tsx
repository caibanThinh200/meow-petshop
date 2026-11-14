const LINKS = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@meowpetshop193",
    bg: "bg-ink",
    path: "M19.6 6.8a4.8 4.8 0 0 1-3.8-4.3h-3.3v13.3a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.8a6 6 0 1 0 5.2 5.9V9.4a8 8 0 0 0 4.700 1.500V7.600c-.3 0-.6-.1-.9-.8z",
  },
  /* Temporarily hidden — restore when Instagram/Facebook are ready
  {
    name: "Instagram",
    href: "https://www.instagram.com/meowpetshop",
    bg: "bg-candy",
    path: "M7.800 2h8.400A5.800 5.800 0 0 1 22 7.800v8.400a5.800 5.800 0 0 1-5.800 5.800H7.800A5.800 5.800 0 0 1 2 16.200V7.800A5.800 5.800 0 0 1 7.800 2zm-.2 2A3.600 3.600 0 0 0 4 7.600v8.800A3.600 3.600 0 0 0 7.600 20h8.800a3.600 3.600 0 0 0 3.600-3.600V7.600A3.600 3.600 0 0 0 16.400 4H7.600zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.200-3.200a1.200 1.200 0 1 1 0 2.400 1.200 1.200 0 0 1 0-2.400z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/meowpetshop",
    bg: "bg-[#1877f2]",
    path: "M13.500 22v-8.200h2.800l.4-3.300h-3.200V8.400c0-.9.300-1.600 1.600-1.600h1.700V3.900c-.3 0-1.300-.1-2.500-.1-2.500 0-4.200 1.500-4.200 4.300v2.400H7.300v3.300h2.800V22h3.400z",
  },
  */
];

export default function SocialLinks() {
  const base =
    "sticker flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:-translate-y-1 hover:scale-110";
  return (
    <ul className="flex items-center gap-3" aria-label="Mạng xã hội">
      {LINKS.map((l) => (
        <li key={l.name}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.name}
            title={l.name}
            className={`${base} ${l.bg}`}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
              <path d={l.path} />
            </svg>
          </a>
        </li>
      ))}
      <li>
        <a
          href="https://zalo.me/0906765705"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zalo"
          title="Zalo"
          className={`${base} bg-[#0068ff] text-sm font-bold`}
        >
          Zalo
        </a>
      </li>
    </ul>
  );
}
