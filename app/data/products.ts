export const SIZES = ["S", "M", "L", "XL"] as const;
export type Size = (typeof SIZES)[number];

export interface SizeRow {
  size: string;
  weight: string;
  chest: string;
  neck: string;
  back: string;
}

export const sizeRows: SizeRow[] = [
  { size: "S", weight: "1 – 2.5 kg", chest: "30 – 36", neck: "20 – 24", back: "20 – 25" },
  { size: "M", weight: "2.5 – 4 kg", chest: "36 – 42", neck: "24 – 28", back: "25 – 30" },
  { size: "L", weight: "4 – 6 kg", chest: "42 – 50", neck: "28 – 33", back: "30 – 36" },
  { size: "XL", weight: "6 – 8 kg", chest: "50 – 58", neck: "33 – 38", back: "36 – 42" },
];

export interface Product {
  slug: string;
  name: string;
  price: string;
  old: string;
  off: string;
  src: string;
  images: string[];
  rating: number;
  reviews: number;
  description: string;
  highlights: string[];
  material: string;
  care: string[];
}

export const products: Product[] = [
  {
    slug: "ao-luoi-co-gian",
    src: "/images/hero-cat.jpg",
    name: "Áo lưới co giãn",
    price: "159.000đ",
    old: "249.000đ",
    off: "-36%",
    images: ["/images/hero-cat.jpg", "/images/hero-bichon.jpg", "/images/hero-puppy.jpg"],
    rating: 4.9,
    reviews: 128,
    description:
      "Thiết kế lưới thoáng khí siêu mềm mịn, giúp Boss luôn mát mẻ trong những ngày hè oi bức. Độ co giãn 4 chiều cực kỳ thoải mái, tha hồ chạy nhảy lăn lê mà không sợ cộm ngứa hay rụng lông khắp nhà.",
    highlights: [
      "Chất vải lưới tổ ong siêu thoáng khí, chống hầm bí",
      "Độ co giãn 4 chiều linh hoạt, vừa vặn mọi dáng Boss",
      "Đường may bọc viền êm ái, không gây cọ xát vào da",
      "Họa tiết hoạt hình đáng yêu, chuẩn phong cách TikTok viral",
    ],
    material: "95% Cotton tự nhiên kết hợp 5% Spandex siêu co giãn, thoáng khí tối đa.",
    care: [
      "Giặt tay hoặc giặt máy với túi giặt ở chế độ nhẹ nhàng",
      "Không sử dụng chất tẩy rửa mạnh hoặc thuốc tẩy clo",
      "Phơi trong bóng râm thoáng mát, tránh ánh nắng gắt trực tiếp",
      "Là/ủi ở nhiệt độ thấp nếu cần thiết (dưới 110°C)",
    ],
  },
  {
    slug: "ao-long-tai-tho",
    src: "/images/hero-bichon.jpg",
    name: "Áo lông tai thỏ",
    price: "129.000đ",
    old: "199.000đ",
    off: "-35%",
    images: ["/images/hero-bichon.jpg", "/images/hero-cat.jpg", "/images/hero-puppy.jpg"],
    rating: 4.8,
    reviews: 96,
    description:
      "Chiếc áo lông cừu nhân tạo kèm mũ tai thỏ cưng xỉu, biến Boss thành chú thỏ bông nghịch ngợm chỉ trong một nốt nhạc! Chất lông êm ái giữ ấm cực đỉnh cho những ngày se lạnh hoặc nằm phòng máy lạnh cả ngày.",
    highlights: [
      "Mũ trùm đầu đính đôi tai thỏ 3D bồng bềnh siêu đáng yêu",
      "Lớp lông cừu nhung dày dặn, ấm áp mà không nặng nề",
      "Khuy bấm bụng tiện lợi, mặc vào tháo ra trong 3 giây",
      "Cổ tay bo gấu co giãn nhẹ, giữ ấm cổ chân hoàn hảo",
    ],
    material: "Vải lông cừu nhung tuyết cao cấp (Faux Sherpa Fleece), lớp lót cotton mềm.",
    care: [
      "Khuyến khích giặt khô hoặc giặt tay với nước lạnh",
      "Dùng túi giặt chuyên dụng nếu giặt bằng máy giặt",
      "Vắt nhẹ nhàng, phơi phẳng ngang để giữ form dáng mũ tai thỏ",
      "Dùng bàn chải lông mềm chải nhẹ sau khi khô để lông luôn xù đẹp",
    ],
  },
  {
    slug: "ao-ni-thu-dong",
    src: "/images/hero-puppy.jpg",
    name: "Áo nỉ thu đông",
    price: "89.000đ",
    old: "149.000đ",
    off: "-40%",
    images: ["/images/hero-puppy.jpg", "/images/hero-cat.jpg", "/images/hero-bichon.jpg"],
    rating: 4.7,
    reviews: 214,
    description:
      "Mẫu áo nỉ kinh điển không thể thiếu trong tủ đồ thu đông của mọi thú cưng sành điệu. Lớp nỉ chân cua bông xốp vừa giữ ấm cơ thể vừa chống bụi bẩn bám dính lông khi Boss đi dạo công viên.",
    highlights: [
      "Vải nỉ chân cua dày dặn, bề mặt ngoài mịn màng chống xù lông",
      "Lưng áo in slogan thời thượng siêu nhí nhảnh",
      "Thiết kế khoét bụng thông minh, thoải mái đi vệ sinh",
      "Bo gấu dệt thun co giãn tốt, ôm nhẹ nhàng quanh eo Boss",
    ],
    material: "100% Nỉ nén Cotton chải kỹ (French Terry), không gây kích ứng da.",
    care: [
      "Giặt với nước ấm dưới 40°C để tránh co rút vải",
      "Lộn trái áo khi giặt và khi phơi để giữ hình in bền màu",
      "Không sấy khô ở nhiệt độ cao, nên để khô tự nhiên",
      "Ủi mặt trái áo ở nhiệt độ trung bình",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
