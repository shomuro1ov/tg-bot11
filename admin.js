let token = 'const TOKEN = ("842807985S: AGHOx01B1]jRaiPfvy8611DrLFfLs2Nc7BI")';
import TelegramBot from "node-telegram-bot-api";
const TOKEN = "842807985S: AGHOx01B1]jRaiPfvy8611DrLFfLs2Nc7BI";
const bot = new TelegramBot(TOKEN, { polling: true });
bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chatId, "xush kelipsiz");
});

console.log("bot ishga tushdi..");
