import { NextResponse } from 'next/server';

// Lista de productos falsa (de prueba)
const mockProducts = [
    { id: 1, name: 'Zapatos Rosados 1', price: 36.0, priceWithMembership: 23.1 },
    { id: 2, name: 'Cartera Fucsia 1' },
  { id: 3, name: 'Vestido Rosa Pastel 1' },
  { id: 4, name: 'Zapatos Negros 1 ' },
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
