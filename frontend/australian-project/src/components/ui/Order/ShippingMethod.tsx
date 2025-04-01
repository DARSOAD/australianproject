'use client';

interface Props {
  shipping: string;
  setShipping: (value: string) => void;
}

export default function ShippingMethod({ shipping, setShipping }: Props) {
  return (
    <div className="ml-10">
      <h3 className="text-md font-normal text-gray-700">Shipping Method</h3>
      <div className="space-y-3 mt-2">
        <label className="flex items-start space-x-3">
          <input
            type="radio"
            value="express"
            checked={shipping === 'express'}
            onChange={() => setShipping('express')}
            className="mt-1"
          />
          <div>
            <p className="font-normal">EXPRESS SHIPPING</p>
            <p className="text-xs text-gray-500">(Arrives between Saturday, Dec 21)</p>
          </div>
        </label>

        <label className="flex items-start space-x-3">
          <input
            type="radio"
            value="standard"
            checked={shipping === 'standard'}
            onChange={() => setShipping('standard')}
            className="mt-1"
          />
          <div>
            <p className="font-normal">STANDARD SHIPPING</p>
            <p className="text-xs text-gray-500">(Arrives between Dec 21–25)</p>
          </div>
        </label>
      </div>
    </div>
  );
}
