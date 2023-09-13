'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');

  return (
    <div className='text-left text-lg py-3 m-auto flex justify-center'>
      <input
        className='rounded  mr-3 p-2 w-[450px]'
        type='text'
        placeholder='Type Here'
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button className='rounded bg-black px-9 py-2 text-green-400'>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
