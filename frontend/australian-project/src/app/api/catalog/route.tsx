import { NextResponse } from 'next/server';

const mockProducts = [
  {
    id: 1,
    slug: "orthopedic-neck-pillow",
    name: "Orthopedic Neck Pillow",
    description: "Butterfly-shaped cervical pillow designed to support natural neck curvature and relieve pressure while sleeping.",
    price: 89000,
    priceWithMembership: 85000,
    deliveryTime: 3,
    colors: [
      { name: "White", hex: "#FFFFFF", images: ["/images/pillow-white-1.png", "/images/pillow-white-2.png"] },
      { name: "Gray", hex: "#A9A9A9", images: ["/images/pillow-gray-1.png", "/images/pillow-gray-2.png"] },
      { name: "Blue", hex: "#87CEEB", images: ["/images/pillow-blue-1.png", "/images/pillow-blue-2.png"] },
    ],
    sizes: ["One Size"],
    tags: ["pillow", "neck", "cervical", "support"],
  },
  {
    id: 2,
    slug: "lumbar-support-cushion",
    name: "Lumbar Support Cushion",
    description: "Memory foam lumbar cushion that promotes healthy posture and reduces lower back pain when sitting.",
    price: 72000,
    priceWithMembership: 68000,
    deliveryTime: 4,
    colors: [
      { name: "Black", hex: "#000000", images: ["/images/lumbar-black-1.png"] },
      { name: "Navy Blue", hex: "#000080", images: ["/images/lumbar-navy-1.png"] },
      { name: "Beige", hex: "#F5F5DC", images: ["/images/lumbar-beige-1.png"] },
    ],
    sizes: ["One Size"],
    tags: ["lumbar", "back", "cushion", "posture"],
  },
  {
    id: 3,
    slug: "knee-support-brace",
    name: "Knee Support Brace",
    description: "Ergonomic knee brace for joint stability, pain relief, and injury prevention during movement.",
    price: 45000,
    priceWithMembership: 42000,
    deliveryTime: 2,
    colors: [
      { name: "Black", hex: "#000000", images: ["/images/knee-black-1.png"] },
      { name: "Gray", hex: "#BEBEBE", images: ["/images/knee-gray-1.png"] },
      { name: "Red", hex: "#FF0000", images: ["/images/knee-red-1.png"] },
    ],
    sizes: ["S", "M", "L", "XL"],
    tags: ["knee", "brace", "support", "joint"],
  },
  {
    id: 4,
    slug: "wrist-compression-sleeve",
    name: "Wrist Compression Sleeve",
    description: "Breathable wrist sleeve providing gentle compression for tendonitis, carpal tunnel, and joint pain.",
    price: 38000,
    priceWithMembership: 35000,
    deliveryTime: 3,
    colors: [
      { name: "Black", hex: "#000000", images: ["/images/wrist-black-1.png"] },
      { name: "Pink", hex: "#FFC0CB", images: ["/images/wrist-pink-1.png"] },
      { name: "Skin", hex: "#FFDAB9", images: ["/images/wrist-skin-1.png"] },
    ],
    sizes: ["S", "M", "L"],
    tags: ["wrist", "compression", "support", "therapy"],
  },
  {
    id: 5,
    slug: "orthopedic-seat-cushion",
    name: "Orthopedic Seat Cushion",
    description: "Coccyx seat cushion for tailbone relief and proper spinal alignment while sitting.",
    price: 95000,
    priceWithMembership: 90000,
    deliveryTime: 5,
    colors: [
      { name: "Gray", hex: "#808080", images: ["/images/seat-gray-1.png"] },
      { name: "Purple", hex: "#800080", images: ["/images/seat-purple-1.png"] },
      { name: "Dark Green", hex: "#006400", images: ["/images/seat-green-1.png"] },
    ],
    sizes: ["One Size"],
    tags: ["seat", "cushion", "spine", "posture"],
  },
  {
    id: 6,
    slug: "posture-corrector",
    name: "Posture Corrector",
    description: "Adjustable back posture corrector designed to align the spine and improve shoulder posture.",
    price: 67000,
    priceWithMembership: 63000,
    deliveryTime: 2,
    colors: [
      { name: "Black", hex: "#000000", images: ["/images/posture-black-1.png"] },
      { name: "White", hex: "#FFFFFF", images: ["/images/posture-white-1.png"] },
      { name: "Navy", hex: "#000080", images: ["/images/posture-navy-1.png"] },
    ],
    sizes: ["M", "L", "XL"],
    tags: ["posture", "back", "corrector", "alignment"],
  },
  {
    id: 7,
    slug: "ankle-support-wrap",
    name: "Ankle Support Wrap",
    description: "Flexible and lightweight ankle wrap to stabilize joints and prevent injuries.",
    price: 39000,
    priceWithMembership: 36000,
    deliveryTime: 3,
    colors: [
      { name: "Black", hex: "#000000", images: ["/images/ankle-black-1.png"] },
      { name: "Blue", hex: "#4682B4", images: ["/images/ankle-blue-1.png"] },
      { name: "Gray", hex: "#D3D3D3", images: ["/images/ankle-gray-1.png"] },
    ],
    sizes: ["S", "M", "L"],
    tags: ["ankle", "support", "wrap", "injury"],
  },
  {
    id: 8,
    slug: "orthopedic-slippers",
    name: "Orthopedic Slippers",
    description: "Comfortable orthopedic slippers with arch support and anti-slip soles.",
    price: 78000,
    priceWithMembership: 74000,
    deliveryTime: 4,
    colors: [
      { name: "Brown", hex: "#8B4513", images: ["/images/slippers-brown-1.png"] },
      { name: "Gray", hex: "#A9A9A9", images: ["/images/slippers-gray-1.png"] },
      { name: "Pink", hex: "#FFB6C1", images: ["/images/slippers-pink-1.png"] },
    ],
    sizes: ["36", "37", "38", "39", "40"],
    tags: ["slippers", "foot", "orthopedic", "comfort"],
  },
  {
    id: 9,
    slug: "cervical-traction-device",
    name: "Cervical Traction Device",
    description: "Inflatable traction collar for cervical decompression and neck tension relief.",
    price: 102000,
    priceWithMembership: 97000,
    deliveryTime: 5,
    colors: [
      { name: "Navy", hex: "#000080", images: ["/images/traction-navy-1.png"] },
      { name: "Gray", hex: "#D3D3D3", images: ["/images/traction-gray-1.png"] },
      { name: "Maroon", hex: "#800000", images: ["/images/traction-maroon-1.png"] },
    ],
    sizes: ["One Size"],
    tags: ["cervical", "neck", "traction", "device"],
  },
  {
    id: 10,
    slug: "orthopedic-mattress-pad",
    name: "Orthopedic Mattress Pad",
    description: "Pressure-relieving orthopedic mattress pad designed for spine support and comfort.",
    price: 185000,
    priceWithMembership: 175000,
    deliveryTime: 6,
    colors: [
      { name: "White", hex: "#FFFFFF", images: ["/images/mattress-white-1.png"] },
      { name: "Gray", hex: "#C0C0C0", images: ["/images/mattress-gray-1.png"] },
      { name: "Blue", hex: "#ADD8E6", images: ["/images/mattress-blue-1.png"] },
    ],
    sizes: ["Twin", "Full", "Queen", "King"],
    tags: ["mattress", "orthopedic", "pad", "bed"],
  },
];

// Función GET para obtener los productos filtrados
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search')?.toLowerCase() || '';

  // Filtramos los productos que contengan el texto de búsqueda
  const filtered = mockProducts.filter(product =>
    product.name.toLowerCase().includes(search)
  );

  // Respondemos con la lista filtrada en formato JSON
  return NextResponse.json(filtered);
}












// import { NextResponse } from 'next/server';

// // Lista de productos falsa (de prueba)
// const mockProducts = [
//   { id: '1', name: 'Zapatos Rosados', price: 36.00, priceWithMembership: 23.10, image: '/zapatos.jpg' },
//   { id: '2', name: 'Cartera Fucsia', price: 50.00, priceWithMembership: 35.00, image: '/cartera.jpg' },
//   { id: '3', name: 'Vestido Rosa Pastel', price: 45.00, priceWithMembership: 30.00, image: '/vestido.jpg' },
//   { id: '4', name: 'Zapatos Negros', price: 40.00, priceWithMembership: 28.00, image: '/zapatos-negros.jpg' },
// ];

// // Función GET para obtener los productos filtrados
// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const search = searchParams.get('search')?.toLowerCase() || '';

//   // Filtramos los productos que contengan el texto de búsqueda
//   const filtered = mockProducts.filter(product =>
//     product.name.toLowerCase().includes(search)
//   );

//   // Respondemos con la lista filtrada en formato JSON
//   return NextResponse.json(filtered);
// }
