const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JDur6y3pvWsAqR0RwvEiGb";
global.website=process.env.GURL || "https://chat.whatsapp.com/JDur6y3pvWsAqR0RwvEiGb" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "+2250556335535" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2250556335535";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_50_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTkzLFxuICAgICAgICA1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY1LFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUbDFjMlN2b204WXJTQ0dQbk0xNURETE1FS0dJa3FuWE90ZVhPdlM0SldBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1TjJmR2hDcVM4Q3hsLWVQZ2pGOXFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjNTgzYTU5LThmMTQtNGMxMS1iYjE2LTMzODU5OTU2ZjE4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDI2LFxuICAgICAgMTMzLFxuICAgICAgNzQsXG4gICAgICAxOTMsXG4gICAgICA4OSxcbiAgICAgIDg3LFxuICAgICAgMTg5LFxuICAgICAgMTQzLFxuICAgICAgMTUxLFxuICAgICAgMjgsXG4gICAgICAyMzIsXG4gICAgICAxNDEsXG4gICAgICAxNTAsXG4gICAgICA2NSxcbiAgICAgIDEzNyxcbiAgICAgIDQ2LFxuICAgICAgOTAsXG4gICAgICA5NSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgNjQsXG4gICAgICAxMDUsXG4gICAgICAxMDgsXG4gICAgICAxNzQsXG4gICAgICAyMDcsXG4gICAgICAxNjUsXG4gICAgICA1LFxuICAgICAgMzAsXG4gICAgICA0NyxcbiAgICAgIDQ0LFxuICAgICAgMTQ1LFxuICAgICAgOTQsXG4gICAgICAxMTcsXG4gICAgICAxMixcbiAgICAgIDUwLFxuICAgICAgMTI1LFxuICAgICAgMTQxLFxuICAgICAgMTMxLFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2SjlSOEFUVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NTYzMzU1MzU6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTEyNTgzODkxNzg0NDo0NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTHg3cThCRU9EQXdyVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldoQzBXdEExTkpjWTVxUklMWTVXY1FDVUkzS0RhcjR6dUhhdmpWeFVGelE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK200TXUrbVhSOCtCQm9VNGhuR3lsaHpnNnZhQm1YbkY4SW9UYnJBa0JXbTZHWTVBWk5nd2UzQUNWaDdQQXhVNHdEU1czU3JkUGJDdXEyT1RqV3IrQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSUd6SXBFZERLaUdiRmVqSVV5YzArQmJ1K1NMMGo3Ung2MTk5emg0M1o4RmMyZ2xLTmR4SkllSUljRlYwQ05aWnUwSVluMjBYb2U5TTBKSnVCK0g2aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NTYzMzU1MzU6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODUxNDI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEJhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQQmEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJydlB0ZjhDOVA3UmFNNGFia2JRRXVFTVJ0bytJdXpzUHVDRTNRTE4wQmVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2ODgxODQxOCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyODUxMzczMDY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𓄂⍣⃝ 🪽𓍝𝙔𝘼𝙉𝙆𝙀𝙀 𝙃𝙀𝙇𝙇𝙎☠︎🌹🎧✮⃝",
  ownername:process.env.OWNER_NAME|| "𓄂⍣⃝ 🪽𓍝𝙔𝘼𝙉𝙆𝙀𝙀 𝙃𝙀𝙇𝙇𝙎☠︎🌹🎧✮⃝",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
