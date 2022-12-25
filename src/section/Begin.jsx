import React from 'react';
import Text from '../img/begin/COSMOS.png'
import TopSchedule from '../img/begin/top-schedule.png'
import BottomSchedule from '../img/begin/bottom-schedule.png'
import Img from '../img/begin/begin.png'

const Begin = () => {
    return (
        <div className='relative flex justify-between items-center begin h-[100vh] w-full px-[50px]'>
            <div className='header-light'></div>
            <img src={TopSchedule} className='absolute top-0 right-0 w-[60%]' alt="" />
            <div>
                <img src={Img} className='w-[90%]' alt="" />
            </div>
            <div className='flex flex-col justify-start'>
                <img src={Text} className='w-[95%] mb-[20px]' alt="" />
                <p className='text-left max-w-[700px] mb-[30px]'>
                    Cosmos - криптовалютний марафон націлений на загальний розвиток українського ком’юніті в сфері криптовалют. В даному марафоні ми будемо вивчати основи торгівлі на ф’ючерсах. В основі аналізу ринку в нас лежить концепція Smart Money
                </p>
                <button className='uppercase text-[#B7DDFF] bg-gradient-to-b from-[#3387D0] to-[#62A4DE] w-[300px] px-[20px] py-[20px] rounded-[10px]'>
                    НАВЧАТИСЬ БЕЗКОШТОВНО
                </button>
            </div>
            <div className='begin-light'>

            </div>
            <img src={BottomSchedule} className='absolute bottom-[-40%] left-0 w-[50%]' alt="" />
        </div>
    );
};

export default Begin;