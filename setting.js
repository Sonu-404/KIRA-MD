const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "Tharki-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5YQW5tNEVoeFhnaHVCVytsYVFwMERXZVlybDlCMHgrYm9uOXU2dmgwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNi9QdG92MnBZdEJIZjJQTS9ZTG1SUzJyV2FlVkdUU3ZjZTh3OWJQaGdDTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQ0kzc3J0aUg4U1B1MEpCWlRHTnlBenRJWXNOT21jdEVyRUFaKzNoNDBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNK0h6aDB6dFpUQVBkQUU5WEdwWDVkRkJzdkQxNzVSNk9mUlFXZnFmd3dFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNSCtxR0VMM0s2WnBXVHNtY3kzSXVhZXZ6R0lhZFdiZ2FYV3R1WWhhWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklhV2piS2toSk1WbkQrNG4yZ3J2NndsZzZxdTNZa3ZkbExmSU1OUVdJSFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE45WkpxN2F3dThCZDl1UTJReGZLa3RxbnBaRm9sVXRIOXdabDZwUjRsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclBnUjEvN3VMVXJSd1Brb1NqK2hEVGozM3lEY2paemExQTU1ZDdpQjBGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU0emQ4a0JaTkxXUFEyaW1jRmVmSUdDZ1pJRmFsaTgxRVFOd2xZQW1NRTZYWUU0NStZc1JhVkNQVThNbmRoRFdSRmdLNzYvQTA0Zk1vMVlNeG5tWUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6IjdqMmM0ZHg3bkh4V2lOWjlZZkxFZEptNWg1THFEWXdWVDF3b0wvSkx5SUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRVhRUVJDSjciLCJtZSI6eyJpZCI6IjkyMzExNjE4NDY4MDo1OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCbGFoIEJsYWgiLCJsaWQiOiIyMjQwMzAyNTg5NDYxNDc6NTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLN3UrSk1GRU5PM29jOEdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmY0N1ZER2NzZUakl0dzRvc01VU0J0U2l0TU5nM3ROZ0pkbWhDWklJeXlRPSIsImFjY291bnRTaWduYXR1cmUiOiI1N0lZTzZtRjc3TXpzOXJQU3pDSmdHdGtKd2Faa29PTkVMaFRJL1plOG4xb0pIM3lmbWxDM2Y1Qks0YUY1QVptTVh6MW9ueEQyYnRpa1JCZEtaU0ZBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM09YekJ6V2cxWGxGTENaNy83dk1DSXc3Tm5VakI0MjRDTDU2akdWVzZqc29NVjFzQW1ydENBU3JuVFlxcDRBUitpM3dwTXdjOWJURjErdEFWZ1BlQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjQwMzAyNTg5NDYxNDc6NTlAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlgzQXJuUTcrK2s0eUxjT0tMREZFZ2JVb3JURFlON1RZQ1hab1FtU0NNc2sifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lBZ2dTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NjgzNTU0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLT2wifQ==",
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







