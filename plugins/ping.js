
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
    const startTime = new Date().getTime();
    const { key } = await message.reply("*Checking ping...*");
    const endTime = new Date().getTime();
    const speed = endTime - startTime;

    const pingMessage = `Pong!\nSpeed: ${speed}ms\nLatency: ${speed}ms`;

    await message.send({
      caption: pingMessage,
    }, { edit: key });
  } catch (err) {
    console.error(err);
  }
});
/*


Requirements:


- Node.js
- WhatsApp bot library (e.g., `baileys`)
- `child_process` module
- `translatte` module


Ensure:


- Install required modules using `npm install` or `yarn add`.
- Replace `../config` and `../lib` with your actual file paths.


Test and let me know if you need further assistance! */
