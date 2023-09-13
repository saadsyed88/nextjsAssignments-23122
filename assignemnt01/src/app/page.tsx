import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

export interface ProductCardType {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
export default async function Home() {
  const prisma = new PrismaClient();

  const fetchProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
  };
  const products = await fetchProducts();
  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </main>
  );
}
