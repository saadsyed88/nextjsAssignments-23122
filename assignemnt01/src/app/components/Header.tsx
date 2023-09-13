import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className='h-64 bg-gradient-to-r from-[#0f4712] to-[#0fea96] p-2'>
      <div className='text-center mt-10'>
        <h1 className='text-white text-5xl font-bold mb-2'>
          Find The Top Notch Products Here
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
