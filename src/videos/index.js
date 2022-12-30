export const videoArray = [
    {
        video:<iframe width="697" height="392" src="https://www.youtube.com/embed/rsW73J4YxoU" title="Вступ в марафон" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, 
        question:[
           'Коротко розкажу що на вас чекає в подальшому:',

           <p>Наступний ваш урок буде на тему роботи в TradingView, в якому ви вже отримаєте домашнє завдання, на цьому ж місці. Після того як ви його виконаєте, ви повинні скинути його нашому <a target="_blank" href="https://t.me/CS_Admiin" className="text-[#5184c6] underline">АДМІНУ</a> в телеграм.</p>,
           
            <p>Також до деяких уроків ми будемо проводити стрім, посилання буде відразу під відео-уроком і ви отримаєте сповіщення в наш з вами телеграм канал - якщо хтось загубив нажимайте <a target="_blank" className="text-[#5184c6] underline" href="https://t.me/+qAArs6CA1_s4MGEy">СЮДИ</a>. </p>,

           'Це все, успішного тобі навчання!'
        ],
        title:'Вступний урок', 
        number:1,
        finish:true,
        live:false
    },
    {
        video:<iframe width="697" height="392" src="https://www.youtube.com/embed/XrQ5O8DYxb0" title="Робота в TradingView" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, 
        question:[
            <p>- Зареєструвати обліковий запис на <a className="text-[#5184c6] underline" href="https://ru.tradingview.com/">TradingView</a></p>,
            <p>- Відкрити графік BTC/USDT та подивитися його на різних таймфреймах (4Н, 1Н, 15М, 5М), скинути скріншоти графіка з різних таймфреймів.</p>,
            <p>- Скористатися всіма інструментами, що розглядаються на уроці (довільно на робочому просторі TradingView розмістити інструменти), зробити скріншот (постаратися все вмістити компактно, щоб не було великої кількості скріншотів).</p>
        ],
        title:'Робота в TradingView', 
        number:2,
        finish:true,
        live:false
    },
    {
        video:<iframe width="697" height="392" src="https://www.youtube.com/embed/TL95jJrgXjU" title="Базова структура ринку" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        question:[
            <p>- Позначити висхідний тренд на 1Н, 15М таймфреймі.</p>,
            <p>- Показати моментум на висхідному та низхідному тренді.</p>,
            <p>- Позначити спадний тренд на 1Н, 15М таймфреймі.</p>,
        ],
        // streamQuestion: [
        //     <p>- Позначити HH та HL висхідної структури на 1Н, 15М таймфреймі.</p>,
        //     <p>- Позначити LH та LL низхідної структури на 1Н, 15М таймфреймі.</p>,
        //     <p>- Позначити bos і conf висхідної структури на 1Н, 15М таймфреймі.</p>,
        //     <p>- Позначити bos і conf низхідної структури на 1Н, 15М таймфреймі.</p>,
        // ],
        title:'Структура ринку, BOS', 
        number:3, 
        finish:true,
        live: true,
        // stream:
    },
    {
        // video:<iframe width="752" height="480" src="https://www.youtube.com/embed/EXXE1uAQ2yI" title="Поняття ліквідності" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>, 
        video:'Скоро',
        // question:[
        //     <p>- Показати 2 приклади EQL/EQH.</p>,
        //     <p>- Показати 2 приклади зовнішньої та внутрішньої ліквідності.</p>,
        // ], 
        title:'Поняття ліквідності', 
        number:4, 
        finish:false, 
        live:false
    },
    {
        // video:<iframe width="1440" height="651" src="https://www.youtube.com/embed/70reI-SRi9s" title="Торгові інструменти Advanced" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        video:"Скоро", 
        // question:[
        //     <p>- Показати 2 приклади бичачого order block.</p>,
        //     <p>- Показати 2 приклади ведмежого order block.</p>,
        //     <p>- Відзначити 2 POI зони.</p>,
        //     <p>- Відзначити 2 FTA зони.</p>,
        // ], 
        title:'Торгові інстурменти 1',
        number:5, 
        finish:false, 
        live:false
    },
    {video:"Скоро", description:'', title:'Торгові інстурменти 2', number:6, finish:false, live:false},
    {video:"Скоро", description:'', title:'Боковий рух', number:7, finish:false, live:true},
    {video:"Скоро", description:'', title:'Тейк Профіт - Стоп Лос', number:8, finish:false, live:false},
    {video:"Скоро", description:'', title:'Фази ринку', number:9, finish:false, live:false},
    {video:"Скоро", description:'', title:'Комплексна робота ', number:10, finish:false, live:true},
]