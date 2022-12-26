import React from 'react';

const VideoItem = ({nextCurrent, video}) => {
    return (
        <div className='bg-[#D9D9D9] flex flex-col gap-[20px] items-end justify-center  bg-opacity-[0.1] w-[70%] px-[15px] py-[10px] youtube'>
            {/* <iframe width="966" height="543" src="https://www.youtube.com/embed/VpRNtyuGwnI" title="CS |  Вступ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            {video}
            <button onClick={() => nextCurrent()} className='bg-gradient-to-r from-[#3588D2] to-[#91C5F2] px-[50px] py-[15px] text-white rounded-[10px] w-[30%]'>Наступий</button>
        </div>
    );
};

export default VideoItem;