Act as a Creative Frontend Developer and UI/UX Designer specializing in Next.js (App Router, Tailwind CSS, Framer Motion, Lucide Icons).
Create an animated, vibrant, and playful pet fashion e-commerce storefront for "Meow Petshop" (focused on cat & dog apparel, hoodies, bandanas, and cosplay outfits).

### 1. CORE THEME & VIBE
- Style: Cartoonish, bubbly, playful, TikTok-fashion aesthetic. 
- Palette:
  * Background: Warm Cream (#FDFBF7)
  * Brand Color: Honey Orange (#FF9234) & Candy Pink (#FF6B8B)
  * Action/CTA: Mint Teal (#2EC4B6)
  * Accents: Bubblegum Yellow (#FFD166) for sale tags and stickers.
- Typography: Cartoon-friendly font (Fredoka / Sniglet / Quicksand) with rounded badges, sticker outlines (`border-2 border-dashed`), and soft drop shadows.

### 2. ANIMATION & INTERACTION SPECIFICATIONS
1. **Initial Page Loading Screen:**
   - Fullscreen overlay on first render.
   - Bouncing cartoon cat icon dressed in a hoodie + animated sparkles.
   - Text: "MEOW ĐANG LÊN ĐỒ..." with a pulsing/bounce effect, auto-fading out after 1.2s.
2. **Scroll Animation (Every Section):**
   - Wrap each section with a Framer Motion Fade-In effect: `translate-y` moves from 35px to 0px, and `opacity` transitions from 0 to 1 with smooth easing when scrolled into viewport.

### 3. HERO SECTION SPECIFICATION (Pet Runway Fashion Focus)
- **Top Badge:** Sticker pill "🔥 BST Thu Đông Hoàng Thượng 2026 - TikTok Viral"
- **Headline:** "Biến 'Hoàng Thượng' Thành Fashionista Nhí!"
- **Subheadline:** "Bộ sưu tập hoodie, váy công chúa, nơ cổ và cosplay cưng xỉu độc quyền tại Meow Petshop."
- **Interactive CTAs:**
  - Button 1: "Săn Deal Đồ Tết & Cosplay" (Mint Teal button with subtle bounce on hover).
  - Button 2: "Xem Review Mặc Thử Trên TikTok" (Outlined button with TikTok icon).
- **Hero Visual:**
  - Interactive fashion card collage: Animated cards featuring cats wearing funny hoodies (dinosaur hoodie, lion mane, trendy knitwear).
  - Floating stickers around the hero visual: "100% Cotton Mát Lưng", "Chống Rụng Lông", "Size Chuẩn Cho Mèo 2-8kg".

### 4. OTHER HOMEPAGE SECTIONS
1. **Category Rail (Cartoon cards):**
   - Áo Hoodie & Sweater, Váy Nơ Bánh Bèo, Mũ & Kính Mát Cat-Eye, Phụ Kiện Cổ & Yếm, Đồ Cosplay Hài Hước.
2. **TikTok Runway Reels (9:16 video card format):**
   - Showcase viral videos of pets trying on outfits with quick "Mua Outfit Này" CTA button.
3. **Flash Fashion Deals:**
   - Cards with discount stickers, size picker (S, M, L, XL), and instant "Thêm vào giỏ".

### 5. PRODUCT DETAIL PAGE (/products/[slug])
- **Entry:** Clicking a Flash Fashion Deals card (image or name) navigates to `/products/[slug]`. Size picker and "Thêm vào giỏ" on the card keep working without navigating.
- **Layout (same style as homepage: cream bg, `.sticker` borders, pop shadows, rounded-3xl, Baloo font):** Header on top, breadcrumb "Trang chủ / Flash Deals / {name}".
  * Left: large main image + row of clickable thumbnails (active thumb highlighted with honey border).
  * Right: name, rating "★ 4.9 (128 đánh giá)", price in candy + old price strikethrough + bubble discount sticker, size picker (S, M, L, XL), quantity stepper (− 1 +), Mint "Thêm vào giỏ" CTA, perk stickers ("100% Cotton Mát Lưng", "Đổi size 7 ngày", "Giao nhanh 2h").
  * Mobile: stacks vertically (gallery above info).
- **Tabs underneath:** "Chi tiết sản phẩm" (mock content: description, highlights, material, care instructions) and "Bảng size" (S–XL table: cân nặng, vòng ngực, vòng cổ, dài lưng — same data as the Size Guide modal).
- **Data:** shared `app/data/products.ts` (slug, name, price, old, off, src, images[], rating, reviews, description, highlights[], material, care[]).
- **Animation:** fade-in on mount (not gated on loading screen).
- Footer shared with homepage.

Ensure clean TypeScript code, responsive layouts for mobile and desktop, and production-ready components.