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


global.devs = "+2250585256740" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2250585256740";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_48_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICA1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU2LFxuICAgICAgICA5NyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICA2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQUJtQU5heGNUWUNFV3BVOUJqaHRnZFp0UlhCQUJxd0piaW9qd0Y3ZEIwbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibVMzSlJmWVpTejJLNEhFSkJidkVDd1wiLFxuICBcInBob25lSWRcIjogXCJhOGMyOWI0MC1lNzlkLTQxY2YtYjMwMi0yYjkwMjdhOWQ1NDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMTQ5LFxuICAgICAgMjksXG4gICAgICA1LFxuICAgICAgODksXG4gICAgICAyNTUsXG4gICAgICAxMDEsXG4gICAgICAxODIsXG4gICAgICAxLFxuICAgICAgNjMsXG4gICAgICAyMzMsXG4gICAgICA1MSxcbiAgICAgIDE4MCxcbiAgICAgIDI0MCxcbiAgICAgIDI1NCxcbiAgICAgIDk0LFxuICAgICAgMTgwLFxuICAgICAgMTM0LFxuICAgICAgMTY0LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMTY3LFxuICAgICAgMTEsXG4gICAgICAyNTUsXG4gICAgICAzOSxcbiAgICAgIDI0OSxcbiAgICAgIDE5NSxcbiAgICAgIDE1LFxuICAgICAgMTc0LFxuICAgICAgMTc2LFxuICAgICAgMTQ2LFxuICAgICAgMCxcbiAgICAgIDE4MCxcbiAgICAgIDIwLFxuICAgICAgNDksXG4gICAgICA4MyxcbiAgICAgIDIxMCxcbiAgICAgIDE2NSxcbiAgICAgIDI0OSxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0SkgyTkJURVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1ODUyNTY3NDA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOKjIgw6LCgsKsLS3DsMKdwpnClMOwwp3CmMK8w7DCncKZwonDsMKdwpnChsOwwp3CmcKAw7DCncKZwoAgw7DCncKZwoPDsMKdwpnCgMOwwp3CmcKHw7DCncKZwofDsMKdwpnCji0tLcOiwoLCrFwiLFxuICAgIFwibGlkXCI6IFwiMTg1NTY0NjQ5MjU5MDU3OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BTNnNySUVFT2I1dDdVR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS0NXYlFBWmZxZWRXS1FxTGJCY2EwQnFjZjJpRzBMWkg1bHpkZitDQURURT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaYnFLVUl2VE43MmdWT3RqQ3BBN1NyWjQyUGEyNGh6eEpWSUJSQjlCWG00SGV6d0NaZEJ3SXJ3RWs0TVp3cnExazVFZ2orWlgvc1B5NkJXNGpOUFBCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrcmtBVnhvN0ExKzMyYzFNelhlWnZxSVRDaDV5RE9MZ3A0UVlMYnY3NjJBdHdNT1Y2SE5MWFZnSElUV0RuRS9qL2FyU0ZzZmdMbVZubFExM0JFTFlDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU4NTI1Njc0MDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjc4NTA2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
