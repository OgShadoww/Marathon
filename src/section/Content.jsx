import React from 'react';
import Arrow from '../img/arrow.png'

const Content = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='uppercase text-[#DAD0FF] text-[44px] mb-[100px]'>контент марафону</h1>
            <img className='w-[7%]' src={Arrow}/>
        </div>
    );
};

export default Content;