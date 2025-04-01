// app/order/page.tsx
'use client';

import OrderForm from '@/app/(shop)/orders2/order-form';
import { useCartStore } from '@/store/ui/cart-store';

export default function OrderPage() {
  const { items } = useCartStore();

  return (
    <div className='bg-white'>
      {/* Sección del formulario */}
      <section>
        <OrderForm />
      </section>
    </div>
  );
}
