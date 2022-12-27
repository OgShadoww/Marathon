import React, { createRef, useEffect, useState } from 'react';
import LineSuccessHorizontal from '../component/LineSuccessHorizontal';
import LineSuccess from '../component/LineSuccessVertical';
import VideoItem from '../component/VideoItem';
import { videoArray } from '../videos';

const Content = ({Elementref}) => {
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
        <div ref={Elementref} className='flex flex-col justify-center items-center mb-[100px]'>
            <h1 className='uppercase text-[#DAD0FF] text-[44px] mb-[100px]'>контент марафону</h1>
            <div className='flex flex-col md:flex-col sm:flex-col lg:flex-row md:justify-center items-center lg:justify-between gap-[50px] w-full px-[30px] lg:px-[100px] md:px-[50px]'>
                <div className='line-success_vertical hidden lg:flex md:hidden sm:hidden z-10'>
                    {videoArray.map(video => 
                        <LineSuccess key={video.number} num={video.number} current={current} text={video.title} changeCurrent={changeCurrent}/>    
                    )}
                </div>
                <div className='line-success_horizontal flex lg:hidden md:flex sm:flex z-10'>
                    {videoArray.map(video => 
                        <LineSuccessHorizontal key={video.number} num={video.number} current={current} text={video.title} changeCurrent={changeCurrent}/>    
                    )}
                </div>
                <VideoItem video={videoArray[current - 1].video} nextCurrent={nextCurrent} prevCurrent={prevCurrent} title={videoArray[current - 1].title} question={videoArray[current - 1].question}/>
            </div>
        </div>
    );
};

export default Content;