import React from 'react';
import Telegram from '../img/social/telegram.png'
import Instagram from '../img/social/instagram.png'
import Youtube from '../img/social/youtube.png'

const Footer = () => {
    return (
        <footer 
            className='sm:px-16 px-6 py-8 relative'>
            <div className='footer-gradient'></div>
            <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <h4 class="font-eudoxus font-bold md:text-[64px] text-[44px] text-white text-left">Enter the Crypto</h4>
                    <a href="https://t.me/crypto_of_secret">
                        <button className='flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]'>
                            <img src={Telegram} className='w-[24px] h-[24px] object-contain' alt="" />
                            <span class="font-eudoxus font-normal text-[16px] text-white">ENTER CRYPTO</span>
                        </button>
                    </a>
                </div>
                <div className='flex flex-col'>
                    <div className='mb-[50px] h-[2px] bg-[#fff] opacity-10'></div>
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <h4 class="font-eudoxus font-extrabold text-[24px] text-white">COSMOS</h4>
                        <p class="font-eudoxus font-normal text-[14px] text-[#fff] opacity-50">Copyright © 2021 - 2022 KOSMOS. All rights reserved.</p>
                        <div className='flex gap-4'>
                            <a href="https://t.me/crypto_of_secret">
                                <img src={Telegram} className='w-[24px] h-[24px] object-contain' alt="" />
                            </a>
                            <a href="https://instagram.com/tothemoon.inst?igshid=YmMyMTA2M2Y=">
                                <img src={Instagram} className='w-[24px] h-[24px] object-contain' alt="" />
                            </a>
                            <a href="https://youtube.com/@cryptosecrets_UA">
                                <img src={Youtube} className='w-[24px] h-[24px] object-contain' alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;