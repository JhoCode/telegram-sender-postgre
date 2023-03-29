// Importa las bibliotecas necesarias
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const schedule = require('node-schedule');
const { Client } = require('pg');

const token = process.env.TOKEN;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const partnerChatId = process.env.PARTNER_CHAT_ID;

// Crea una instancia de TelegramBot con el token especificado y habilita la encuesta
const bot = new TelegramBot(token, { polling: true });


// Configura la conexión a la base de datos PostgreSQL
const client = new Client({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

// Conecta el cliente de PostgreSQL a la base de datos
client.connect();

// Define una función asincrónica que devuelve un mensaje aleatorio de la base de datos
async function getRandomMessage() {
  const res = await client.query('SELECT message FROM messages ORDER BY RANDOM() LIMIT 1');
  return res.rows[0].message;
}

// Define una función que envía un mensaje aleatorio al chat especificado y registra el mensaje en la consola
function sendTenderMessage() {
  getRandomMessage()
    .then((message) => {
      bot.sendMessage(partnerChatId, message);
      console.log('Mensaje enviado:', message);
    })
    .catch((error) => {
      console.error('Error obteniendo mensaje aleatorio:', error);
    });
}

// Programa un trabajo para ejecutar la función sendTenderMessage cada minuto
const job = schedule.scheduleJob('0 */18 * * *', sendTenderMessage);


// Agrega un controlador de eventos para recibir mensajes en Telegram y registra el ID del chat en la consola
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `El ID de este chat es: ${chatId}`);
  console.log('Mensaje enviado al chat:', chatId);
});