import * as dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotenv.config();

const token = process.env.TOKEN;
const prisma = require('@prisma/client').PrismaClient;

const bot = new TelegramBot(token!, { polling: true }); 

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match![1]; 

    bot.sendMessage(chatId, resp);
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 9 && hour < 18) {
        bot.sendMessage(chatId, 'Horário comercial! Visite nosso site: https://faesa.br');
    } else {
        bot.sendMessage(chatId, 'Nosso horário de funcionamento é das 09:00 às 18:00. Por favor, deixe seu e-mail para que possamos entrar em contato.');
        
        bot.on('message', async (msg) => {
            const email = msg.text; // Assume que o usuário enviou apenas o email como mensagem
            await prisma.user.create({
                data: {
                    email,
                },
            });

            bot.sendMessage(chatId, 'Seu email foi registrado. Entraremos em contato em breve.');
        });
    }
});
