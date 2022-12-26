import React from 'react';

const LineSuccess = ({num}) => {
    return (
        <div className='flex flex-col justify-center items-center text-[30px] font-bold rounded-[50%] w-[80px] h-[80px] text-[#8880A8] bg-[#D9D0FF]'>
            {num}
        </div>
    );
};

export default LineSuccess;