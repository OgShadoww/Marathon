import React from 'react';
import LineSuccess from '../component/LineSuccess';
import Arrow from '../img/arrow.png'

const Content = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='uppercase text-[#DAD0FF] text-[44px] mb-[100px]'>контент марафону</h1>
            <img className='w-[7%] mb-[20px]' src={Arrow}/>
            <div className='w-full youtube px-[20px]'>
                {/* <iframe width="966" height="543" src="https://www.youtube.com/embed/VpRNtyuGwnI" title="CS |  Вступ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </div>
            <div className='line-success '>
                <LineSuccess num={1} position={1}/>
                <LineSuccess num={2}/>
                <LineSuccess num={3}/>
                <LineSuccess num={4}/>
                <LineSuccess num={5}/>
                <LineSuccess num={6}/>
                <LineSuccess num={7}/>
                <LineSuccess num={8}/>
                <LineSuccess num={9}/>
            </div>
        </div>
    );
};

export default Content;