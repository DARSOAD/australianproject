interface ProductCardProps {
    product: {
      id: string;
      name: string;
      price?: number; // ← Ahora opcional
      priceWithMembership?: number;
      image?: string;
    };
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const formattedPrice = product.price !== undefined ? `$${product.price.toFixed(2)}` : 'Precio no disponible';
    const formattedMembership = product.priceWithMembership !== undefined
      ? `$${product.priceWithMembership.toFixed(2)}`
      : null;
  
    return (
      <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between mb-4 transition hover:shadow-lg">
        <div className="flex items-center gap-4">
          <img
            src={product.image || '/placeholder.png'} // ← Imagen por defecto si falta
            alt={product.name}
            className="w-24 h-24 object-contain rounded-md"
          />
          <div>
            <h3 className="text-lg font-normal text-gray-800">{product.name}</h3>
  
            <p className="text-blue-500 text-sm ">
            {formattedPrice}
            </p>
  
            {formattedMembership && (
              <p className="text-green-600 font-normal text-sm">
                {formattedMembership} <span className="text-xs">PRECIO MEMBRESÍA</span>
              </p>
            )}
          </div>
        </div>
        <button
          className="text-2xl text-gray-600 hover:text-black transition"
          aria-label="Agregar"
        >
          +
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  