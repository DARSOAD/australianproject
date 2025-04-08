import { NextResponse } from 'next/server';

// Lista de productos falsa (de prueba)
const mockProducts = [
    { id: 1, name: 'Zapatos Rosados', price: 36.0, priceWithMembership: 23.1 },
    { id: 2, name: 'Cartera Fucsia' },
  { id: 3, name: 'Vestido Rosa Pastel' },
  { id: 4, name: 'Zapatos Negros' },
];

export async function GET(req: Request) {
  // Tomamos el texto que el usuario escribió
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search')?.toLowerCase() || '';

  // Filtramos productos que contengan ese texto
  const filtered = mockProducts.filter(product =>
    product.name.toLowerCase().includes(search)
  );

  // Respondemos con la lista filtrada en formato JSON
  return NextResponse.json(filtered);
}
