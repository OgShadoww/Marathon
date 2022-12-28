import React from 'react';

const VideoItem = ({nextCurrent, prevCurrent, video, title, question, live, stream}) => {
    return (
        <div className='bg-[#D9D9D9] flex flex-col gap-[20px] items-start justify-center  bg-opacity-[0.1] w-[100%] lg:w-[70%] md:w-[90%] sm:w-[90%] px-[15px] py-[10px] youtube'>
            <h1 className='text-[34px] font-bold text-left'>
                {title}
            </h1>
            {video}
            <div className='flex justify-between items-center w-full mb-[20px]'>
                <button onClick={() => prevCurrent()} className='bg-gradient-to-r z-10 from-[#3588D2] to-[#91C5F2] hover:from-[#307cbe] hover:to-[#84b4df] px-[50px] py-[15px] text-white rounded-[10px] w-[30%] text-[16px] lg:text-[24px] md:text-[22px] sm:text-[20px] flex items-center justify-center'>Попередній</button>
                <button onClick={() => nextCurrent()} className='bg-gradient-to-r z-10 from-[#3588D2] to-[#91C5F2] hover:from-[#307cbe] hover:to-[#84b4df] px-[50px] py-[15px] text-white rounded-[10px] w-[30%] text-[16px] lg:text-[24px] md:text-[22px] sm:text-[20px] flex items-center justify-center'>Наступий</button>
            </div>
            <div className='text-left'>
                <h3 className='text-[22px] text-[#bdbac5] font-bold mb-[10px]'>Завдання</h3>
                {question !== undefined ? 
                    question.map((quest, index) => 
                        <p key={index} className='mb-[10px]'>
                            {quest}
                        </p>    
                    )
                :
                    'Скоро'
                }
            </div>
            {live == true ?
                <div className='text-left w-full'>
                    <h3 className='text-[34px] font-bold'> 
                        Стрім
                    </h3>
                    {stream}
                </div>
            : ''
            }
            <div className='text-left'>
                <h3 className='text-[22px] text-[#bdbac5] font-bold mb-[10px]'>
                    Домашнє завдання скидайте <a className="text-[#5184c6] underline" href='https://t.me/CS_Admiin' target="_blank">СЮДИ</a>
                </h3>
            </div>
        </div>
    );
};

export default VideoItem;