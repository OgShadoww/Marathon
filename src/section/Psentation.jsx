import React from 'react';
import PresentationItem from '../component/PresentationItem';

const Psentation = () => {
    return (
        <div className='mb-[50px] px-[50px] flex gap-[20px] flex-col items-center justify-center'>
            <div className='w-full px-[10px] py-[10px] relative flex flex-col items-center justify-center gap-[30px] lg:gap-[40px] md:gap-[35px] sm:gap-[30px]'>
                <div className='background rounded-[3px]'>

                </div>
                <h1 className='text-[#BEB8D2] text-[22px] lg:text-[32px] md:text-[30px] sm:text-[24pxs] font-bold'>
                    Друзі, ви всі взявши участь в нашому марафоні отримуєте черговий подарунок від нас!
                </h1>
                <p className='text-[#8E88A6] text-center w-[80%] text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]'>
                    Довгий час ми готували наш основний продукт - криптовалютний курс із цілими трьома тарифами під різні рівні знань. І ось сьогодні ми готові вам представити наш офіційний курс!!
                </p>
                <div className='w-full flex justify-center gap-[50px] items-center flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap'>
                    <PresentationItem title="FIRST START" firstText=" Розроблений для початкового старту в криптовалюті, містить в собі всю необхідну теорію щоб розібратись в крипті." secondText="Включає в себе уроки про роботу з біржою Binance, безпеку та гаманці, види бірж, фази ринку, психологію на ринку, спотову торгівлю, усередення угоди, міжбіржовий арбітраж і багато чого іншого в цьому напрямку"/>
                    <PresentationItem title="PRO" firstText="Підходить для вас, якщо ви торгуєте або починає торгувати на ф’ючерсах і ваші угоди не виводять вас в прибуток або ви ще не вмієте аналізувати графіки." secondText="Включає в себе уроки про технічну частину - як працюють бінанс ф’ючерси, широке вивчення концепції SmartMoney, ризик менеджменту, формування торгової стратегії, а також психології під час торгівлі"/>
                    <PresentationItem title="INDIVIDUAL" firstText="Ви вже непогано торгуєте на ф’ючерсах, але вам не вистачає професійного ментора який би займався з вами тет-а-тет?" secondText="Ви по правильному адресу, тут ми сформуємо вам особисту торгову стратегію під вас, кожного ранку ви будете присутні на онлайн бріфах - розбір ринку та ключові зони основноі криптовалюти. 4 години особистоі роботи з аналітиком та сигнали для входу протягом кожного дня"/>
                </div>
            </div>
            <a href="https://tothemoon.one/#Tariffs">
                <button className='bg-[#7464acdf] hover:bg-[#8876c9] hover:text-[#d5caf9] text-[#cebfff] w-[200px] text-[16px] px-[20px] py-[10px] rounded-[3px]'>
                    Обрати тариф
                </button>
            </a>
            <div className='w-full flex flex-col gap-[20px] justify-center items-center'>
                <h1 className='text-[20px] lg:text-[28px] md:text-[24px] sm:text-[22px]'>
                    Презентація нашого продукту та сайту    
                </h1>
                <div className='w-[100%] lg:w-[60%] md:w-[60%] sm:w-[100%] youtube'>
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/FE4SDHDbUr4" title="Презентація компанії ToTheMoon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Psentation;