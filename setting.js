const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "KIRA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tJT1hiSWNVYUU1dWNvTWlSWklhaTRLVEs0YTF0dWIvdE85Und5U04xUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkIrWlpMcGQwRm12KzN3MURBUlQ2L2o5aVJ1bWNFcTlRV0RmNWYxbTNsQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRFViOXB4eTlkK3ZuQmxiVWNxNkhLQVNCWEpKeWNKTlRCa1cyTW0zL1ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4KzFOL2w2YWE4Y3Y4RUljWHdqNmJXSExVeVo2OEo1NDBVYXcxTUtwa0RvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQSkFWYzVka2t6ZzlRayttTTNmOXozU0ZNVTRJUFFCcXJzZmZtVE5LM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkvQjRjRTU4aHpvM3Q5d3J5SEFJc1Z2Z0NqMS9uU3RYRlVVRW9JTm14R3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05BeE5rLzl1WnNqR3p0cUNYTHZ5bE9jNU56VW9RNDF0eGQ1VExGcFlYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1REOTZ4Z3UwcEpjNko3SS9iVXVZM1hKMlp6bEJHUllvZUVzYk9YdVdDZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9RSldrbi8vWU5TTjdFY0NaTzFuT0xYRFpLQi9NYkdIMURrcmo0di9GQWZzV3I5UVVRSjBLWHZEajhpcDNaMmFmNEsyZXA5cm5na2VCWG14bUJ2T0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6InFpTXJTSW5weUtWZmZ3ZUxVc1RFdUdHN2MrNzBtUGFzYXhZVGt3d2pEQk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjM3MDQ1OTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNUIxQTVGMTk3MjkwREJDRTk3MzU4NjE5NUY1QzFBRiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc2NjY2NTcwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyMzcwNDU5MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1RTZBQTJEREE5QjA0QjMwNUE0QzczODE5OEZERDQ4IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzY2NjY1NzF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzIzNzA0NTkxOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTVGNjU0NUVGRkE5MzkzNUFGNEVDNDVFNzlBNDRCMzMiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NjY2NjU3MX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJER1hSMURHQiIsIm1lIjp7ImlkIjoiOTIzMjM3MDQ1OTE5OjUyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFyc2xhbi1NRCBvZmZpY2lhbCIsImxpZCI6IjEzMTA2NTc0MjEyNzIzNDo1MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUaDZMOERFTCtQbDg4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1XWml0WE9XOWlaQXp3VlZMVWZGUUp1Z2FSdytpYUhsazZoR0lHVjZWSHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJhd2NLMVY0cVRqcTNPVmxkNXZ1RXFQdWU1cVVQU3ViYld6VElVMG01NUtJZ3dhVlYyOUZ2RS9QeVpYUjltdVJIM1pYOWtyTmdEbHJ2aFU5eGV0QUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhWlgwRjVKMTlEQldUZDYyRUlINy96ZTFLTGJpNVo3OHY1Wit0T1FsUW0yTExkek5qK1NoMmNZMk9XVndRMVdENG9RcmVPaWJBTU1JQ1FqcGZycEtDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjEzMTA2NTc0MjEyNzIzNDo1MkBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmxtWXJWemx2WW1RTThGVlMxSHhVQ2JvR2tjUG9taDVaT29SaUJsZWxSNyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSUFnZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc2NjY2NTY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJKdCJ9",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KIRA-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KIRA-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KIRA-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







