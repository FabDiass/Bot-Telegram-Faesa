import * as dotenv from 'dotenv';
import TelegramBot, { Message } from 'node-telegram-bot-api'; // Importe Message
import { PrismaClient } from '@prisma/client';

dotenv.config();

const token = process.env.TOKEN;
const prisma = new PrismaClient();

const bot = new TelegramBot(token!, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match![1];

    bot.sendMessage(chatId, resp);
});

bot.on('message', async (msg: Message) => { // Adicione o tipo Message
    const chatId = msg.chat.id;
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 9 && hour < 18) {
        bot.sendMessage(chatId, 'Horário comercial! Visite nosso site: https://faesa.br');
    } else {
        bot.sendMessage(chatId, 'Nosso horário de funcionamento é das 09:00 às 18:00. Por favor, deixe seu e-mail para que possamos entrar em contato.');

        // Função assíncrona para capturar o e-mail
        const captureEmail = async (msg: Message) => {
            // Verifica se a mensagem contém texto e é do mesmo chat
            if (msg.text && msg.chat.id === chatId) {
                const email = msg.text;
                try {
                    // Salva o e-mail no banco de dados
                    await prisma.user.create({
                        data: {
                            email,
                        },
                    });
                    bot.sendMessage(chatId, 'Seu email foi registrado. Entraremos em contato em breve.');
                } catch (error) {
                    console.error('Erro ao criar usuário:', error);
                    bot.sendMessage(chatId, 'Ocorreu um erro ao registrar seu email. Por favor, tente novamente mais tarde.');
                }

                // Remove o listener após capturar o e-mail
                bot.removeListener('message', captureEmail);
            }
        };

        // Adicione o listener para 'message'
        bot.on('message', captureEmail);
    }
});
