import React, { useEffect, useState } from 'react';
import LineSuccess from '../component/LineSuccessVertical';
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
    const prevCurrent = () => {
        if(current === 1) {
            setCurrent(10)
        }
        else {
            setCurrent(current-1)
        }
    }
    return (
        <div className='flex flex-col justify-center items-center mb-[100px]'>
            <h1 className='uppercase text-[#DAD0FF] text-[44px] mb-[100px]'>контент марафону</h1>
            <div className='flex md:flex-col lg:flex-row md:justify-center items-center lg:justify-between gap-[50px] w-full px-[100px]'>
                <div className='line-success lg:rotate-0 md:rotate-90'>
                    {videoArray.map(video => 
                        <LineSuccess num={video.number} current={current} text={video.title} changeCurrent={changeCurrent}/>    
                    )}
                </div>
                <VideoItem video={videoArray[current - 1].video} nextCurrent={nextCurrent} prevCurrent={prevCurrent} title={videoArray[current - 1].title} question={videoArray[current - 1].question}/>
            </div>
        </div>
    );
};

export default Content;