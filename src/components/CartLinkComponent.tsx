'use client'
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

import {  useCartStore } from '@/store/cartStore';

const CartLinkComponent: React.FC = () => {
    const itemCount =useCartStore((state)=>state.getTotalItems());
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        setIsLoaded(true);

    },[]);
  return (
    <Link href="/cart">
      <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 relative">
        <FaShoppingCart size="24px" className="inline-block relative" />
        {isLoaded && itemCount > 0 && (
          <span
            className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs"
            style={{ left: "1.4rem" }}
          >
            {itemCount}
          </span>
        )}
      </a>
    </Link>
  );
};

export default CartLinkComponent;
