const {Telegraf, Markup} =require('telegraf')

const TOKEN = "8428079855:AAEvmUMk1nMNZvmdW9jWfPmCRvHCR4LIs_o";

const bot = new Telegraf(TOKEN);

bot.start((ctx) => {
  ctx.reply(
    'Salom! 👋 Kafe menyusiga xush kelibsiz!',
    Markup.keyboard([
      ['🍔 Menyu', 'ℹ️ Biz haqimizda']
    ]).resize()
  );
});


bot.hears('🍔 Menyu', (ctx) => {
  ctx.reply(
    'Quyidagi menyudan tanlang:',
    Markup.inlineKeyboard([
      [Markup.button.callback('🥪 Sendvich', 'sendvich')],
      [Markup.button.callback('☕️ Kofe', 'kofe')],
      [Markup.button.callback('🍰 Desert', 'desert')]
    ])
  );
});


bot.action('sendvich', (ctx) => ctx.reply('👉 Siz Sendvichni tanladingiz'));
bot.action('kofe', (ctx) => ctx.reply('👉 Siz Kofeni tanladingiz'));
bot.action('desert', (ctx) => ctx.reply('👉 Siz Desertni tanladingiz'));


bot.hears('ℹ️ Biz haqimizda', (ctx) => {
  ctx.reply('Biz mazali taomlar taklif qiluvchi qulay kafe-miz 😋');
});


bot.launch()
console.log('bot is running...');