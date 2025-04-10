import { NextResponse } from 'next/server';

const mockProducts = [
  { id: 1, slug: 'zapatos-rojo-1', name: 'Zapatos Rosados 1', description:
      "This neck support pillow features a unique butterfly shape and hollow design. This pillow follows your body's natural curve more closely than ordinary bed pillows. The Butterfly Memory Foam Pillow features a hollow center and neck massage points that perfectly conform to the curves of the neck and shoulders for more effective cervical spine support, stretch, and relaxation for side, back, and back sleepers, helping you and your family fall into a deep sleep quickly.If you are still having trouble finding the right height for your pillow, our cervical pillow has 2 different heights for you to choose from on both sides, so you can choose a pillow that better suits your sleeping position.",
    price: 89000,
    images: [
      "/images/almohada1.png",
      "/images/almohada2.png",
      "/images/almohada3.png",
    ],
    sizes: ["One Size"], 
  },
  { id: 2, slug: 'cartera-fucsia-1', name: 'Cartera Fucsia 1' },
  { id: 3, slug: 'vestido-rosa-pastel-1', name: 'Vestido Rosa Pastel 1' },
  { id: 4, slug: 'zapatos-negros-1', name: 'Zapatos Negros 1' },
  {
    id: 5,
    slug: "almohada-ortopedica",
    name: "Orthopedic neck pillow",
    description:
      "This neck support pillow features a unique butterfly shape and hollow design. This pillow follows your body's natural curve more closely than ordinary bed pillows. The Butterfly Memory Foam Pillow features a hollow center and neck massage points that perfectly conform to the curves of the neck and shoulders for more effective cervical spine support, stretch, and relaxation for side, back, and back sleepers, helping you and your family fall into a deep sleep quickly.If you are still having trouble finding the right height for your pillow, our cervical pillow has 2 different heights for you to choose from on both sides, so you can choose a pillow that better suits your sleeping position.",
    price: 89000,
    images: [
      "/images/almohada1.png",
      "/images/almohada2.png",
      "/images/almohada3.png",
    ],
    sizes: ["One Size"],
  },
];

type ContextType = {
  params: {
    slug: string;
  };
};

export async function GET(req: Request, context: ContextType) {
  const { slug } = context.params;
  

  const product = mockProducts.find((p) => p.slug === slug);

  if (!product) {
    return NextResponse.json({ message: 'Producto no encontrado' }, { status: 404 });
  }

  return NextResponse.json(product);
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

