import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductDetail from "@/app/components/ProductDetail";
import { SizeGuideProvider } from "@/app/components/SizeGuide";
import { getProductBySlug, products } from "@/app/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm | Meow Petshop",
    };
  }
  return {
    title: `${product.name} | Meow Petshop`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Meow Petshop`,
      description: product.description,
      images: [
        {
          url: product.src,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <SizeGuideProvider>
      <Header />
      <main className="bg-cream min-h-[calc(100vh-200px)]">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </SizeGuideProvider>
  );
}
