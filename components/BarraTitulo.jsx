import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/outline';

const BarraTitulo = ({ titulo = 'G1' }) => {
  return (
    <div className="bg-primary">
      <div className="flex items-center justify-between p-2 md:py-3">
        <div className="flex">
          <MenuIcon className="h-7 text-white" />
        </div>
        <div className="flex">
          <a href="/" className="text-white text-4xl md:text-5xl font-bold">
            {titulo}
          </a>
        </div>
        <div className="flex">
          <SearchIcon className="h-7 text-white" />
        </div>
      </div>
    </div>
  );
};

export default BarraTitulo;
