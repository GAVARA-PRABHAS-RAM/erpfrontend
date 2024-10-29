import React from 'react';
import { Elements } from '../Constants/Multiple';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='w-full h-screen bg-yellow'>
            {
                Elements.map((element, index) => (
                    <Link 
                        key={index} 
                        to={element.route} 
                        className='w-full h-10 bg-[#333333] border[10px] border-x-[1px] border-white-400 text-white flex justify-center items-center rounded-sm'>
                        {element.name}
                    </Link>
                ))
            }
        </div>
    );
}

export default Sidebar;
