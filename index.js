const TelegramApi = require('node-telegram-bot-api');
const token = '5887030733:AAFtJCYDFIxXRyDT7bVXw6EDG-hbpCJ-e04';
const bot = new TelegramApi(token, {polling: true});

let food = 0;
let delivery = 0;
let clothes = 0;
let taxi = 0;
let entertainment = 0;
let other = 0;

bot.setMyCommands([
    {command: '/start', description: 'поздороваться с ботом'},
    {command: '/help', description: 'справка о боте'},
    {command: '/food', description: 'добавить траты в категорию еда'},
    {command: '/delivery', description: 'добавить траты в категорию доставка'},
    {command: '/clothes', description: 'добавить траты в категорию одежда'},
    {command: '/taxi', description: 'добавить траты в категорию такси'},
    {command: '/entertainment', description: 'добавить траты в категорию развлечения'},
    {command: '/other', description: 'добавить траты в категорию другое'}
])
    // /start
    bot.onText(/start/, async (msg) => {
        const chatId = msg.chat.id;
        await bot.sendMessage(chatId, `Приветствую, ${msg.from.first_name}! Я ваш персональный бот для учёта финансов. Я готов помочь вам следить за своими расходами. Давайте начнем работу и будем держать ваши финансы под контролем!`); 
        await bot.sendMessage(chatId, 'Пожалуйста, выберите категорию и сумму которую вы потратили. Например: /food 3000\n\nПолный список категорий вы можете посмотреть с помощью команды /help'); 
    });
    
    // /help
    bot.onText(/help/, async (msg) => {
        const chatId = msg.chat.id;
        await bot.sendMessage(chatId, 'Привет! Я бот для учета финансов. Я помогу вам отслеживать ваши доходы и расходы.\n\nДоступные команды:\n/start - поздороваться с ботом\n/help - получить справку о боте и его командах\n/food - добавить трату в категорию еда\n/delivery - добавить трату в категорию доставка\n/clothes - добавить трату в категорию одежда\n/taxi - добавить трату в категорию такси\n/entertainment - добавить трату в категорию развлечения\n/other - добавить трату в категорию другое\n\nЧтобы начать использовать бота, просто введите одну из этих команд.'); 
        return;
    });

    // /food
    bot.onText(/food (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        let sum = match[1];
        if (!isNaN(sum)) {
            await bot.sendMessage(chatId, `Отлично! Я записал сумму ${sum} в базу данных. Спасибо за использование моих услуг по учету финансов. Если у вас есть другие траты, не стесняйтесь вводить их сюда.`);
            food += Number(sum);
            await bot.sendMessage(chatId, `В этом месяце вы потратили в категории еда: ${food}`);
        } else {
            await bot.sendMessage(chatId, `Извините, кажется, вы неправильно указали сумму траты. Пожалуйста, введите команду в формате /food [сумма], например: /food 3000.`);
        }
    });

    // /delivery
    bot.onText(/delivery (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        let sum = match[1];
        if (!isNaN(sum)) {
            await bot.sendMessage(chatId, `Отлично! Я записал сумму ${sum} в базу данных. Спасибо за использование моих услуг по учету финансов. Если у вас есть другие траты, не стесняйтесь вводить их сюда.`);
            delivery += Number(sum);
            await bot.sendMessage(chatId, `В этом месяце вы потратили в категории доставка: ${delivery}`);
        } else {
            await bot.sendMessage(chatId, `Извините, кажется, вы неправильно указали сумму траты. Пожалуйста, введите команду в формате /delivery [сумма], например: /delivery 3000.`);
        }
    });

    // /clothes
    bot.onText(/clothes (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        let sum = match[1];
        if (!isNaN(sum)) {
            await bot.sendMessage(chatId, `Отлично! Я записал сумму ${sum} в базу данных. Спасибо за использование моих услуг по учету финансов. Если у вас есть другие траты, не стесняйтесь вводить их сюда.`);
            clothes += Number(sum);
            await bot.sendMessage(chatId, `В этом месяце вы потратили в категории одежда: ${clothes}`);
        } else {
            await bot.sendMessage(chatId, `Извините, кажется, вы неправильно указали сумму траты. Пожалуйста, введите команду в формате /clothes [сумма], например: /clothes 3000.`);
        }
    });

    // /taxi
    bot.onText(/taxi (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        let sum = match[1];
        if (!isNaN(sum)) {
            await bot.sendMessage(chatId, `Отлично! Я записал сумму ${sum} в базу данных. Спасибо за использование моих услуг по учету финансов. Если у вас есть другие траты, не стесняйтесь вводить их сюда.`);
            taxi += Number(sum);
            await bot.sendMessage(chatId, `В этом месяце вы потратили в категории такси: ${taxi}`);
        } else {
            await bot.sendMessage(chatId, `Извините, кажется, вы неправильно указали сумму траты. Пожалуйста, введите команду в формате /taxi [сумма], например: /taxi 3000.`);
        }
    });

     // /entertainment
     bot.onText(/entertainment (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        let sum = match[1];
        if (!isNaN(sum)) {
            await bot.sendMessage(chatId, `Отлично! Я записал сумму ${sum} в базу данных. Спасибо за использование моих услуг по учету финансов. Если у вас есть другие траты, не стесняйтесь вводить их сюда.`);
            entertainment += Number(sum);
            await bot.sendMessage(chatId, `В этом месяце вы потратили в категории развлечения: ${entertainment}`);
        } else {
            await bot.sendMessage(chatId, `Извините, кажется, вы неправильно указали сумму траты. Пожалуйста, введите команду в формате /entertainment [сумма], например: /entertainment 3000.`);
        }
    });

    // /other
    bot.onText(/other (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        let sum = match[1];
        if (!isNaN(sum)) {
            await bot.sendMessage(chatId, `Отлично! Я записал сумму ${sum} в базу данных. Спасибо за использование моих услуг по учету финансов. Если у вас есть другие траты, не стесняйтесь вводить их сюда.`);
            other += Number(sum);
            await bot.sendMessage(chatId, `В этом месяце вы потратили в категории другое: ${other}`);
        } else {
            await bot.sendMessage(chatId, `Извините, кажется, вы неправильно указали сумму траты. Пожалуйста, введите команду в формате /other [сумма], например: /other 3000.`);
        }
    });