import React from 'react';
import Arrow from '../img/arrow.png'

const Content = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='uppercase text-[#DAD0FF] text-[44px] mb-[100px]'>контент марафону</h1>
            <img className='w-[7%]' src={Arrow}/>
            <iframe width="966" height="543" src="https://www.youtube.com/embed/VpRNtyuGwnI" title="CS |  Вступ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default Content;