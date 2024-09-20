
const os = require("os");
const fs = require("fs");
const Config = require("../config");
let { fancytext, tlang, tiny, runtime, formatp, prefix, smd, commands } = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const astro_patch = require("../lib/plugins");
const { exec } = require("child_process");
const translatte = require("translatte");

// Command definition
smd({
  pattern: "alive",
  react: "👸",
  desc: "Shows if the bot is alive and displays an image",
  category: "misc",
  filename: __filename,
}, async (message) => {
  try {
    const imageUrl = "https://imgur.com/a/JHoeGsG"; // Replace with your actual image link

    // Send initial message
    const { key } = await message.reply("*Checking if Queen Nikka is alive...*");

    // Final message with the status and image
    const finalMessage = `👸 *Queen Nikka is alive!*\n\n*LONG LIVE THE QUEEN 👸*`;

    // Send the final message with image, editing the previous one
    await message.send({
      image: { url: imageUrl },
      caption: finalMessage,
    }, { edit: key });
  } catch (err) {
    console.error(err);
  }
});
/*


Changes:


- Removed the `![Image](${imageUrl})` markdown.
- Used the `image` property in the `send` method to send the image.
- Set the `caption` property to the `finalMessage` string.


Replace `YOUR_IMAGE_LINK_HERE` with your actual image link.


Test and let me know if you need further assistance! */
