'use client';

import { IoIosArrowDown } from "react-icons/io";
import { TbPencilMinus } from "react-icons/tb";

interface Props {
  address: string;
  setAddress: (value: string) => void;
}

export default function AddressField({ address, setAddress }: Props) {
  return (
    <div className="w-full ml-8 lg:ml-0">
      <div className="relative flex items-center h-10 bg-gray-50 rounded-l-full lg:rounded-r-full lg:rounded-l-none shadow-md px- ">
      <label className="flex items-center text-gray-500 text-xs lg:ml-28 ml-10">
        <TbPencilMinus className="absolute left-3 text-gray-400 text-lg ml-56" />
        Address
        </label>
        {/* Input */}
        <div className="relative flex items-center h-6 ml-36 lg:ml-20">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Your address"
          className="w-full pl-10 pr-10 bg-transparent focus:outline-none text-sm text-gray-700"
        />
        <IoIosArrowDown className="absolute right-10 text-green-500 text-lg " />
      </div>
    </div>
    </div>
  );
}
