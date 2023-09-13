import React from 'react';
import Link from '../../../node_modules/next/link';

const Navbar = () => {
  return (
    <nav className='p-2 flex justify-between bg-black'>
      <Link href='/' className='font-bold  text-2xl text-green-400'>
        ApparelX
      </Link>
      <div>
        <div className='flex'>
          <button className='bg-green-400 text-white border p-1 px-4 rounded mr-3'>
            Sign in
          </button>
          <button className='border p-1 px-4 rounded text-green-400'>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
