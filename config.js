//HAKI PATCH
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZkTklWT2xGSlQxbTZkK1J1b1dKejZtSU8xOGtGUVZZczRQNFhwK0prOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmUwNXRCdkt6QlFtY0tBclh3dWtISlpHWThEU1VzcDVCeDQra0dFMUpoYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXR0QrSG1uUDVCeThqamRuSDg5OGc2MFNYdXFYVmZoMWppMzBVRWRJcW5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3UVU1Yzc0Y1pMdmhwQVR1dit6Nms3Z0E3Z3d6ZlFNNDRlQktYM0tUSHd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtCOFNCTWExMGFmUitkM1JOQUdXeXFySFIyRXVqbVBVR0NiUFFmSVlPblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink2ZEROVktwSHZTbHNDSDJyMjdsRVcxZ0RrWDdwT1FsUXBTY0NTb1VyaFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUY5TUFxRUIrS3lZUTJzTG1KYi9leVpCM1NuS1BTRGJYeU5vVDRhZXFIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWxzTjRXckJhWnZYU1prT1VRdXlMQnFTRXBuc1BTNkxVeUlLaGQ4Y0VSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNWZE1EM28vekZLMlBHMjlneEcySXNSNTJQM2YzL0YyNzlTUGRWRDQwbDBQcExpaVgyQ3N1U2tmOXRtclBxNkVzdWo2NFozM2NvL01lK3EydnYyTGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiIyamJua3FxU0prM082Ymd4cjBzaHExQVMrZnpPRVcyalJMb1V2aG5kUkYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3ODMzMjExMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVBNkRENDBDQTQwQ0U1QkFEQkIzM0VBRTY2ODVEQkNBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY3Njk3MDB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3ODMzMjExMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMxNjIzRDRFNkU1QTM5QzkzRTI2MjcyRjgxRjZDNUJDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY3Njk3MDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1GVkxNQ2NWVGVDWkRZd3ExR0hZTEEiLCJwaG9uZUlkIjoiYTk3ODk2MDgtNjViNy00ZGNkLTg4NjQtMTVhZWY0ZTZlZjM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZtcWJDcTJDV3VHeFhselBWbWZ3QUVkYW8yOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTEF4cGVSeFVYOGhJNkxDT3ZkQkJuTmtGZ0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkY5UFNYQ0MiLCJtZSI6eyJpZCI6IjI3ODMzMjExMDcwOjEzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKTEN1cUVHRUpUVXNiY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMSDN3SWlSNDlWMTA1Y2J5cEZDZkZrNGQ4Y0RRUHpRT2JLY3JFZjVpSkhrPSIsImFjY291bnRTaWduYXR1cmUiOiJ2bU0vL1VleVJRZGlaRmRxTDJFTkFTYTFvcnYyQlZ6aVhtaHA2aEtpOEpzOE9ZakVLM29sbm9kcXZhL0l5cEZBK1BMbzkwa1h1MCtDZlZYR2tJZ2JEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL21NdlZQMVBJOXpWTHErYUswM2prVTZVdHJ5dlp6MC9jTTJaYitIM0Q2dDYyc2sySzVaeG9jeGlqNi9jUU1La3hQMGRURlVNY0h1bkVXKzV5Y0RCamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzgzMzIxMTA3MDoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTeDk4Q0lrZVBWZGRPWEc4cVJRbnhaT0hmSEEwRDgwRG15bkt4SCtZaVI1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NzY5Njk3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtyMiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
