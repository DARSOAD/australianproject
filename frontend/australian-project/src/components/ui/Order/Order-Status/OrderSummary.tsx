'use client';

export default function OrderSummary() {
  return (
    <div className="w-full mt-6 space-y-3 text-sm text-gray-500">
      {/* Subtotal */}
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span className="text-blue-600 font-medium">$30.28</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between">
        <span>Shipping:</span>
        <span className="text-blue-600 font-medium">$5.90</span>
      </div>

      {/* Separador */}
      <hr className="my-2 border-gray-200" />

      {/* Total */}
      <div className="flex justify-between items-start">
        <div>
          <span className="font-bold text-gray-600">TOTAL:</span>
          <p className="text-xs text-gray-400">GTS included:</p>
        </div>
        <div className="text-right">
          <span className="text-blue-600 font-bold">$30.28</span>
          <p className="text-xs text-gray-400">$13.90</p>
        </div>
      </div>
    </div>
  );
}
