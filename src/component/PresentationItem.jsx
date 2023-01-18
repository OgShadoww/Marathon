import React from 'react';

const PresentationItem = ({title, firstText, secondText}) => {
    return (
        <div className='w-[280px] flex flex-col gap-[15px] items-center justify-center '>
            <h1 className={title === 'FIRST START' ? 'text-[18px] lg:text-[26px] md:text-[24px] sm:text-[22px] font-[600] text-[#6351D5]' : title === 'PRO' ? 'text-[18px] lg:text-[26px] md:text-[24px] sm:text-[22px] font-[600] text-[#E37526]' : title === 'INDIVIDUAL' ? 'text-[18px] lg:text-[26px] md:text-[24px] sm:text-[22px] font-[600] text-[#44FF02]' : ''}>{title}</h1>
            <div className='w-full text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-center text-[#8E88A6]'>
                {firstText}
            </div>
            <div className='w-full text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-center text-[#8E88A6]'>
                {secondText}
            </div>
        </div>
    );
};

export default PresentationItem;