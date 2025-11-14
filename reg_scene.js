const { Scenes } = require("telegraf");

const reg_scene = new Scenes.WizardScene(
    "reg",
    // step 1
    (ctx) => {
        ctx.reply("ismingizni kiriting");
        ctx.wizard.next();
    },
    // step 2
    (ctx) =>{
         ctx.session.name = ctx.message.text;
         ctx.reply("familayingizni kiriting");

    }
);

module.exports = reg_scene;