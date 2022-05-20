import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN!);

bot.start((ctx) => {
    ctx.reply("Привет, хочешь оставить отзыв по работе сайта, тебе сюда 😻🐶👇")

});
bot.launch();

console.log("[bot-instance] Bot is launched");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
