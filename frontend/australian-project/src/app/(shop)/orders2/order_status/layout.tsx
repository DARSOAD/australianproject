// src/app/orders2/order_status/layout.tsx
export default function OrderStatusLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className=" bg-gray-50 min-h-screen pl-10">
        <h1 className="text-sm text-neutral-500 font-bold">Hi!
        
        </h1>
        <h2 className="text-xs  text-neutral-600" >Tonni</h2>
        {children} {/* Aquí se renderiza page.tsx */}
        
      </div>
    );
  }
  