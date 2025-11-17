const { Telegraf, Markup, session, Scenes } = require("telegraf");
const mainScene = require("./main_scare");
const pizzaScene = require("./pizza_scare");
const drinkScene = require("./drink_scere");
const bot = new Telegraf("8428079855:AAEvmUMk1nMNZvmdW9jWfPmCRvHCR4LIs_o");
const stage = new Scenes.Stage([mainScene, pizzaScene, drinkScene]);
bot.use(session());
bot.use(stage.middleware());

bot.start((ctx) => ctx.scene.enter("main"));

bot.launch();
// bot.command("photo", (ctx) => {
//   ctx.replyWithPhoto({ source: "cate.jgeg"} , {caption: "TEST"});
// })

// bot.launch();
// bot.start((ctx) => {
//   ctx.reply(
//     'Salom! 👋 Kafe menyusiga xush kelibsiz!',
//     Markup.keyboard([
//       ['🍔 Menyu', 'ℹ️ Biz haqimizda']
//     ]).resize()
//   );
// });


// bot.hears('🍔 Menyu', (ctx) => {
//   ctx.reply(
//     'Quyidagi menyudan tanlang:',
//     Markup.inlineKeyboard([
//       [Markup.button.callback('🥪 Sendvich', 'sendvich')],
//       [Markup.button.callback('☕️ Kofe', 'kofe')],
//       [Markup.button.callback('🍰 Desert', 'desert')]
//     ])
//   );
// });


// bot.action('sendvich', (ctx) => ctx.reply('👉 Siz Sendvichni tanladingiz'));
// bot.action('kofe', (ctx) => ctx.reply('👉 Siz Kofeni tanladingiz'));
// bot.action('desert', (ctx) => ctx.reply('👉 Siz Desertni tanladingiz'));


// bot.hears('ℹ️ Biz haqimizda', (ctx) => {
//   ctx.reply('Biz mazali taomlar taklif qiluvchi qulay kafe-miz 😋');
// });


// bot.launch()
// console.log('bot is running...');