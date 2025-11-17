const { Scenes, Markup } = require("telegraf");
const mainScene = new Scenes.BaseScene("mainScene");

mainScene.enter((ctx) => {
  ctx.reply("Menu", Markup.keyboard([["🍕 Пицца", "🥤 Напитки"]]).resize());
});

mainScene.hears("🍕 Пицца", (ctx) => {
  ctx.scene.enter("pizzaScene");
});

mainScene.hears("🥤 Напитки", (ctx) => {
  ctx.scene.enter("drinkScene");
});

module.exports = mainScene;