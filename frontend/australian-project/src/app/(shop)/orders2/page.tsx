// app/order/page.tsx
'use client';

import OrderForm from '@/components/ui/Order/order-form';
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
