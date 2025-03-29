import { create } from 'zustand'

interface State {
    isSideMenuOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
}


export const useUiStore = create<State>()((set) => ({
    isSideMenuOpen: false,
    openSideMenu: () => set({isSideMenuOpen:true}),
    closeSideMenu: () => set({isSideMenuOpen:false}),
}))

// Revisión del carrito de compras


// 2. Creamos una interfaz para definir cómo luce un producto en el carrito
interface Product {
  id: string;        // Identificador único del producto
  name: string;      // Nombre del producto
  price: number;     // Precio por unidad
  quantity: number;  // Cuántas unidades se agregaron al carrito
}

// 3. Creamos la interfaz del "estado del carrito"
interface CartState {
  items: Product[];                            // Lista de productos en el carrito
  addToCart: (product: Product) => void;       // Función para agregar productos
  removeFromCart: (productId: string) => void; // Función para eliminar productos
  clearCart: () => void;                       // Función para vaciar todo el carrito
}

// 4. Creamos el store de Zustand
export const useCartStore = create<CartState>((set) => ({
  // Estado inicial: carrito vacío
  items: [],

  // Agregar producto al carrito
  addToCart: (product) =>
    set((state) => {
      const exists = state.items.find((item) => item.id === product.id);
      if (exists) {
        // Si ya existe, sumamos 1 a su cantidad
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      // Si no existe, lo agregamos con cantidad 1
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

  // Eliminar producto del carrito por su ID
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),

  // Vaciar el carrito completamente
  clearCart: () => set({ items: [] }),
}));
