import React from 'react';

const VideoItem = ({nextCurrent, prevCurrent, video, title, question}) => {
    return (
        <div className='bg-[#D9D9D9] flex flex-col gap-[20px] items-start justify-center  bg-opacity-[0.1] w-[70%] px-[15px] py-[10px] youtube'>
            <h1 className='text-[34px] font-bold text-left'>
                {title}
            </h1>
            {video}
            <div className='flex justify-between items-center w-full mb-[20px]'>
                <button onClick={() => prevCurrent()} className='bg-gradient-to-r from-[#3588D2] to-[#91C5F2] px-[50px] py-[15px] text-white rounded-[10px] w-[30%] text-[22px]'>Минулий</button>
                <button onClick={() => nextCurrent()} className='bg-gradient-to-r from-[#3588D2] to-[#91C5F2] px-[50px] py-[15px] text-white rounded-[10px] w-[30%] text-[22px]'>Наступий</button>
            </div>
            <div className='text-left'>
                <h3 className='text-[22px] text-[#bdbac5] font-bold mb-[10px]'>Завдання</h3>
                {question !== undefined ? 
                    question.map(quest => 
                        <p className='mb-[10px]'>
                            {quest}
                        </p>    
                    )
                :
                    'Скоро'
                }
            </div>
        </div>
    );
};

export default VideoItem;