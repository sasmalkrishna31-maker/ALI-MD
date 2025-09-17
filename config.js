
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VUzY7iRhB+l74a7djGBhtppBiDwcYGzI8BR3to7LYx+G/abQyskOa8Ut4gl1VWSrRJFClRFEXiFfaeyS1PwCtEZv72kGwmPpS6y62qr76qr96AOAky1EN70HgDUhxsIUHlkexTBBqgmXsewqACXEggaIBev6VQQ4rGGcUWzJSq4cXWqO4CqKdVDTGObmjLfMNHE8W4BscKSPNlGDifCaiuhwf/QHXXh6vuVC7CZCBNDC3P9YkdjyQ7c+ttJGy4G3WdXINjGREGOIj9drpCEcIw7KH9EAb4ZfANpeBga2jH2iqyBanVGsaaZcz2I3SjrPM5kY0mTSJ+bc2Ll8G3Aje1O7iYUTo7Do1+0T2Yw2jE2aPu3ho7/U6trilUWHisfw8/C/wYuaqLYhKQ/Yt57wxMN4dGvXqID27LUsT9jOzNlXpT40OjV0+I6UjiYHs1jl/Ie2RMiCEN+jWf4fq63wmW1qIpWCuuaXKTlNGaPZNi3PEN3kufAh/ix1nZ/B/eWZ2dd2JM5s3tOuijmVgYTC5mvbEccfXNjJtBOZtuqmO6O30h/H6MU7FI+uZoeKBqDCxSfZfixVJw5uzMo1Yxb7GU1DRM8xk+JDn+HMrlXBK6cnd5peGB3xr2+ku+7YiI7tw4cBgIEtb5hdqfj53DLqzb4j6IthOe7JZ9vNNoXhtP6HSQev5h3jeY/sSgFibRV8X1paIN2qsuaDDHCsDIDzKCIQmSuPTxXAVAdztGDkbkwi5YNkeLqj4meZU2J4LN7OyF3bSgYHs94nSbHttaFlJ1upEz4xpUQIoTB2UZcrtBRhK8N1CWQR9loPHl6wqI0Y7c963MVmUqwAtwRqZxnoYJdB+b+vgTOk6Sx2S8jx25PCAMGvSzGxESxH5W0pjHEDurYIvkFSQZaHgwzNBTgQgjFzQIztGTaOXELXnXjflc0XoGqIDo0o/ABQ0gMgLL0zxXF1i6wTFfZK+KMixM01cxIqACYli+BufT+/Pp3fn08/n0/fn01fn0y/n00/n06/n04/n0+/n07o9v797++eHu9uMPd7d3tx/fl/av376+XL672G8u9sPd7d1bUAHhJb3A1gRWrIm0ILAMVwIo/cenwkucLiIwCDPQALK61dPEb7a1mMbGotOR2r4k+xJ4Jupx4O47qqy3y3robRYxFRS93FSZNFHEqQk5IvqRkjuztVlD9NSSuOt/CAIaoGsoIe9orjJz1V5iDUg+VEe5uxjPeVUcZh1Fdrr1kd+S5gtamaWdSDLMqaBK+ty/0agop2yWs6o+1GbxTpd2V+1t0WyZ12U2F20DB32abHxlM+tatag1Xa5T62jdUXea2x0XujurF4ryvCdN2eVoNNtubN2Waj2L27Wr1k0kMsiTmBzFC4K1q2VdV1dttdhzIhL9BylcpBg+rMDgMqXlCJRXL0CXjfLQ6v8ciXvg5eTSx8onMR521L/ovDla1FmKn/Md7SrJZLyR+xA2PavdyXVvoa2WsZLQg5goijkAx+PrCkhDSLwER6ABsmgJQQXgJC91oMZe8plMskSrkn9fdggzIj1raxJEKCMwSkGDqfMCw4kMJ96/GuIk7cJsVQbgPK1f6mQvpemYQPKoVCCVn2pMwfFvL689ycQHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "*👑⃝🕊️⃝❂͜͡Soumya⍣⃟❂͜͡࿐*", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "delete", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/ydh46r.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "true", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "true",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "true", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "null", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
