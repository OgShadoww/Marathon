import React, { useState } from 'react';
import LineSuccess from '../component/LineSuccess';
import Arrow from '../img/arrow.png'

const Content = () => {
    const [current, setCurrent] = useState(1)

    const changeCurrent = (i) => {
        setCurrent(i)
    }
    const nextCurrent = () => {
        if(current === 9) {
            setCurrent(1)
        }
        else {
            setCurrent(current+1)
        }
    }
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='uppercase text-[#DAD0FF] text-[44px] mb-[100px]'>контент марафону</h1>
            <img className='w-[7%] mb-[50px]' src={Arrow}/>
            <div className='flex justify-between gap-[50px] w-full px-[100px]'>
                <div className='line-success'>
                    <LineSuccess num={1} current={current} changeCurrent={changeCurrent}/>
                    <LineSuccess num={2} current={current} changeCurrent={changeCurrent}/>
                    <LineSuccess num={3} current={current} changeCurrent={changeCurrent}/>
                    <LineSuccess num={4} current={current} changeCurrent={changeCurrent}/>
                    <LineSuccess num={5} current={current} changeCurrent={changeCurrent}/>
                    <LineSuccess num={6} current={current} changeCurrent={changeCurrent}/>
                    <LineSuccess num={7} current={current} changeCurrent={changeCurrent}/>
                    <LineSuccess num={8} current={current} changeCurrent={changeCurrent}/>
                    <LineSuccess num={9} current={current} changeCurrent={changeCurrent}/>
                </div>
                <div className='bg-[#D9D9D9] flex flex-col gap-[20px] items-end bg-opacity-[0.1] w-[80%] px-[15px] py-[10px]'>
                    <iframe width="966" height="543" src="https://www.youtube.com/embed/VpRNtyuGwnI" title="CS |  Вступ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <button onClick={() => setCurrent(current+1)} className='bg-gradient-to-r from-[#3588D2] to-[#91C5F2] px-[50px] py-[15px] text-white rounded-[10px] w-[30%]'>Наступий</button>
                </div>
            </div>
        </div>
    );
};

export default Content;