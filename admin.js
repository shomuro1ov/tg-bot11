import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8428079855:AAGHQx0lBijRaiPfvyB61iDrLFfLszNc7BI";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  const firstName = msg.chat.first_name;

  console.log(msg);
  bot.sendMessage(chatId, `xush kelipsiz, ${firstName} `, {
    reply_markup: {
      keyboard: [
        [{ text: "boshlash" }],
        [{ text: "menu" }, { text: "sozlamalar" }],
      ],
      remove_keyboard: true 
    },
  });
});

console.log("bot ishga tushdi..");
