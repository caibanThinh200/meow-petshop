import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

const fredoka = Baloo_2({
  variable: "--font-fredoka",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Meow Petshop – Thời trang cho Hoàng Thượng",
  description:
    "Hoodie, váy công chúa, nơ cổ và cosplay cưng xỉu cho mèo & chó tại Meow Petshop.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${fredoka.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
