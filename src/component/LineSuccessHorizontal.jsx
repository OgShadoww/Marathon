import React from 'react';

const LineSuccessHorizontal = ({current, changeCurrent, num}) => {
    const baseStyle = ['flex flex-col justify-center items-center text-[16px] md:text-[22px] font-bold rounded-[50%] w-[35px] h-[35px] md:w-[45px] md:h-[45px] sm:w-[35px] sm:h-[35px] mt-[50px] md:mt-[50px] sm:mt-[10px] md:ml-0 lg:ml-[-6%] z-10 cursor-pointer transition-[0.4s]', 'bg-[#D9D0FF] text-[#8880A8]']
    const numberLesson = ['font-bold transition-[0.4s] text-[14px] md:text-[16px] sm:text-[14px]', 'text-[#676081]']

    if(current === num) {
        baseStyle.pop()
        baseStyle.push('bg-[#00F17D] border-[#fff] border-[2px] text-[#fff] shadow-lg')
        numberLesson.pop()
        numberLesson.push('text-[#FFFFFF]')
    }

    return (
        <div onClick={() => changeCurrent(num)} className='flex flex-col items-center gap-[10px] cursor-pointer'>
            <div className={baseStyle.join(' ')}>
                {num}
            </div>
            <div className={numberLesson.join(' ')}>
                Урок {num}
            </div>
        </div>
    );
};

export default LineSuccessHorizontal;