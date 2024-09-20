
const os = require("os");
const fs = require("fs");
const Config = require("../config");
let { fancytext, tlang, tiny, runtime, formatp, prefix, smd, commands } = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const astro_patch = require("../lib/plugins");
const { exec } = require("child_process");
const translatte = require("translatte");

smd({
  pattern: "alive",
  react: "👑",
  desc: "Shows bot status",
  category: "misc",
  filename: __filename,
}, async (message) => {
  try {
    const owner = "https://wa.me/9112171078";
    const uptime = runtime();
    const speed = Date.now() - message.messageTimestamp;

    const aliveMessage = ` Long Live The Queen \n\n`
      + `Speed: ${speed}ms\n`
      + `Owner: ${owner}\n`
      + `Uptime: ${uptime}\n\n`
      + `Powered by Queen Nikka Bot\n`
      + `Repository: https://github.com/Your-Repository-Link`;

    await message.send({
      text: aliveMessage,
    });
  } catch (err) {
    console.error(err);
  }
});
/*
Changes:


- Replaced `caption` with `text` in `message.send`.
- Ensure `https://wa.me/9112171078` is your owner's WhatsApp link.
- Replace `https://github.com/Your-Repository-Link` with your bot's repository link.


If still not working:


- Check console logs for errors.
- Verify `runtime()` function returns uptime correctly.
- Ensure WhatsApp bot library and dependencies are updated. */


Test and let me know!
