import Link from 'next/link';
import React from 'react';
import { ProductCardType } from '../page';

interface ProductCardProps {
  product: ProductCardType;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <Link href={`/`}>
        <img src={product.image} alt='' className='w-full h-36' />
        <div className='p-1'>
          <h3 className='font-bold text-md mb-2 text-black'>{product.title}</h3>

          <div className='flex text-reg font-light capitalize text-gray-500'>
            <p className=' mr-3'>{product.category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
