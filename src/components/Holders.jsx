import React from 'react';
import { Cards } from '../Constants/Multiple';

const Holders = () => {
  return (
    <div className='flex flex-wrap gap-8 p-6 justify-center'>
      {Cards.map((card, index) => (
        <div
          key={index}
          className='w-52 h-56 bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold p-4 hover:scale-105 transition-transform duration-200 ease-in-out'
        >
          {card.hedding}
        </div>
      ))}
    </div>
  );
};

export default Holders;
