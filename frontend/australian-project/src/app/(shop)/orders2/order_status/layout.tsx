// src/app/orders2/order_status/layout.tsx
export default function OrderStatusLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className=" bg-gray-50 min-h-screen ">
        <h1 className="text-xs text-neutral-400 font-bold lg:hidden px-10">Hi!</h1>
        <h2 className="text-xs  text-neutral-600 lg:hidden px-10" >Tonni !</h2>
        
        {children} {/* Aquí se renderiza page.tsx */}


        <div className="w-full h-[60px] bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full 
          flex justify-center items-center transition mt-4 lg:w-[80%] mx-auto">
          <h1>Check out</h1>
        </div>

      </div>
    );
  }
  