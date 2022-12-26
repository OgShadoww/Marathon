import React, { useEffect, useState } from 'react';
import LineSuccess from '../component/LineSuccess';
import VideoItem from '../component/VideoItem';
import Arrow from '../img/arrow.png'
import { videoArray } from '../videos';

const Content = () => {
    const [current, setCurrent] = useState(1)

    const changeCurrent = (i) => {
        setCurrent(i)
    }
    const nextCurrent = () => {
        if(current === 10) {
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
            <div className='flex md:flex-col lg:flex-row md:justify-center items-center lg:justify-between gap-[50px] w-full px-[100px]'>
                <div className='line-success lg:rotate-0 md:rotate-90'>
                    {/* <LineSuccess num={1} current={current} text="Вступний урок" changeCurrent={changeCurrent}/>
                    <LineSuccess num={2} current={current} text="Робота в TradingView" changeCurrent={changeCurrent}/>
                    <LineSuccess num={3} current={current} text="Структура ринку, BOS" changeCurrent={changeCurrent}/>
                    <LineSuccess num={4} current={current} text="Поняття ліквідності" changeCurrent={changeCurrent}/>
                    <LineSuccess num={5} current={current} text="Торгові інстурменти 1" changeCurrent={changeCurrent}/>
                    <LineSuccess num={6} current={current} text="Торгові інстурменти 2" changeCurrent={changeCurrent}/>
                    <LineSuccess num={7} current={current} text="Боковий рух" changeCurrent={changeCurrent}/>
                    <LineSuccess num={8} current={current} text="Боковий рух" changeCurrent={changeCurrent}/>
                    <LineSuccess num={9} current={current} text="Робота з TradingView" changeCurrent={changeCurrent}/>
                    <LineSuccess num={10} current={current} text="Комплексна робота " changeCurrent={changeCurrent}/> */}
                    {videoArray.map(video => 
                        <LineSuccess num={video.number} current={current} text={video.title} changeCurrent={changeCurrent}/>    
                    )}
                </div>
                <VideoItem video={videoArray[current - 1].video} nextCurrent={nextCurrent}/>
            </div>
        </div>
    );
};

export default Content;