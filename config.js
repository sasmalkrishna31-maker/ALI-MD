
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VVzY6jRhB+l77aWgMD/pNGCsY2Nja2MQM2jvbQhgY3xg0DDRivLM15pbxBLquslGiTKFKiKIrkV9h7Jrc8gV8hwrOzs4dkM+FQ6m5aVV9VfV/1K0BCnKARKkD7FYhinEGKyiUtIgTaoJO6LopBFTiQQtAG+aTmoXW+RUtJ8AcWghQ7JDQZySLZbtAwCquAdjcYrpjwGhyrIErXAbY/49DS1iNhngzdmHe7uunszRaWUL9VIZtECheYHXpdSRn25I52DY6lR4hjTLxetEE7FMNghIoZxPHz4CfjfTGq8Xkl6htRx+bWENrjGEFBak23LofxDReF2+FgRKznwec0KO9rzPbg5Ou6ytf82qQiGUWDXXZbu26NCI1EKOSt2fKbD/AT7BHkDB1EKKbFs+sO5d1M7M44Y8SvoBZ0irAyy0kRZzoZDBQ5WIWVucaZmbJMngfciPIJrPgVccTwtwa2ezVL4BdkozQKsp9WsmavLh6SPt/vqZ8Cn8WPXNn+n7ozfZg6lXxuThYm6TJWkyWzHPKNBRxxmxTPhu7CdNxsnu+058FfSuHyttunG5YehIVX61lXUU9teONitbjZcnHd0Y3FYev6kvgEH9I0/hxKFdcm6pWpT7KR39mMoeentqbRyTRms/0SN6aFvisaEu2YQqQJVzyV2aCStVBrOlVuhwfC3bhozCR7NxoPzCJRcT1eeeL1JaMtKoYOaLPHKoiRhxMaQ4pDcjnjG1UAnUxHdozopbwADcgQKbuVaNW3xFe5imxVuL0x6yhDuBkxejyirm/47qqfX4MqiOLQRkmCnAFOaBgXKkoS6KEEtL98WQUE7elD48pwV2wVuDhOqEHSKAih89jVx5/QtsOUUL0gtlQuUAzazNMxohQTLynrmBIY2xucIWkDaQLaLgwS9DFDFCMHtGmcoo+qlUKnLHx3eWU255M5qILdpSHYAW3QYpucwAh8o8kxbYH5InmRl25hFL0giIIqILC8Dc6nt+fTm/Pp5/Pp+/Ppq/Ppl/Ppp/Pp1/Ppx/Pp9/PpzR/f3r/+89393fsf7u/u796/Le1fv3192Xx3sd9c7Lv7u/vXoAqCS/gmV29yrXqLaTY5li8BlOfHj4mXOB1EIQ4S0AaScjOOQq/Tm+oyr1qyLPY8UfJE8FSoR8Y9dLTvZ+tG4G4tUsH5KNWGbBT2W4YGedrydv3UXvhaHTGGKfLX/+CkHJVLwXb0RPG3MIHL6U19sBI3Cp/5bn+e33Ys0Vs6vXA8yPWwoy7kuqj6t3CipbPJ0GDclq1inYl9ueKMpLquYM8IJKmjXZfRHJRhG30aLFdTXc3l1MSJGsokZAJ/Xyg+bGXmbtCbhIftTqE4rhOjzjuBM8b7hXSwWOWgjQ/2dNHA9cC4GngdfaOq4lw/uOH0xs8ftHDRYvBhBuILS0sKlFsXo8tI+dDq/6TEA/CSucyx+omPD0PqX4TemVsNriIsBVmphYkUb6UJhB3X7Mnp2LWUzZr0Q2ZKaL+vTcHx+LIKogBSN4x35RuyW0NQBXGYljoYEjf8TCRJZIai95B2ABMqPmnrBu9QQuEuAm22ITRbzQbLsg+3ZnEYDWCyKR3wrjIpdVKIUaRTSB+VCsTyG4cIHP8GNdIZ08UHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙,❤️‍🩹", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "918250547829", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "Ｄａｒｋ－𓆩♔𓆪𝘴 𝘰 𝘶 𝘮 𝘺 𝘢𓆩♔𓆪ايڪـͬــͤــᷜــͨــͣــͪـي", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.5.0",
ANTILINK: process.env.ANTILINK || "delete,warn", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
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
