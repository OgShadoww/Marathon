import React from 'react';

const LineSuccess = ({num, position}) => {
    const baseStyle = ['flex flex-col justify-center items-center text-[26px] font-bold rounded-[50%] w-[45px] h-[45px] ml-[-6%]', 'bg-[#D9D0FF] text-[#8880A8]']
    const thisPosition = num

    if(position === num) {
        baseStyle.pop()
        baseStyle.push('bg-[#00F17D] border-[#fff] border-[2px] text-[#fff] shadow-lg')
    }

    return (
        <div className='flex items-center gap-[10px]'>
            <div className={baseStyle.join(' ')}>
                {num}
            </div>
            <div className='flex flex-col items-start '>
                <div className='font-bold'>
                    Урок {num}
                </div>
                <div className=''>
                    Вступний урок   
                </div>
            </div>
        </div>
    );
};

export default LineSuccess;