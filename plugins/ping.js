
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
  pattern: "ping",
  react: "⏳️",
  desc: "Shows ping",
  category: "misc",
  filename: __filename,
}, async (message) => {
  try {
    await message.reply("*Checking ping...*");
    const startTime = new Date().getTime();
    const endTime = new Date().getTime();
    const speed = endTime - startTime;

    const pingMessage = `Pong!\nSpeed: ${speed}ms\nLatency: ${speed}ms`;

    await message.send(pingMessage);
  } catch (err) {
    console.error(err);
  }
});
/*


Changes:


- Removed `edit` option.
- Sent `pingMessage` as a new message.


Now, after "Checking ping...", it will send a new message with the ping result.


Test and let me know! */
