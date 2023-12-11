const fs = require("fs"); 
module.exports = {

  name: "help",

  alias: ["menu", "h", "helpm", "helpmenu"],

  desc: "Gives all bot commands list",

  react: "🌀",

  category: "Core",

  start: async (

    Miku,

    m,

    { prefix, pushName, NSFWstatus, args, commands, text }

  ) => {

    if (args[0]) {

      let name = args[0].toLowerCase();

      let cmd =

        commands.get(name) ||

        Array.from(commands.values()).find((v) => v.alias.includes(name));

      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");

      else { let testa = ""

         testa += `🍁Command : ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}\n\n`;

      if (cmd.alias) { testa += `👾Alias : ${cmd.alias.join(", ")}`};

      if (cmd.cool) { testa += `\n\n⏱️Cooldown: ${cmd.cool}`};

      if (cmd.desc) { testa += `\n\n🧾Description : ${cmd.desc}`};

      if (cmd.usage) {  testa += `\n\n💡Example : ${cmd.usage

            .replace(/%prefix/gi, prefix)

            .replace(/%command/gi, cmd.name)

            .replace(/%text/gi, text)}`

        };

      
      return Miku.sendMessage(m.from, {text: testa}, { quoted: m });
      };

    } else {

      const pad = (s) => (s < 10 ? "0" : "") + s;

        const formatTime = (seconds) => {

        const hours = Math.floor(seconds / (60 * 60));

        const minutes = Math.floor((seconds % (60 * 60)) / 60);

        const secs = Math.floor(seconds % 60);

        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;

        };

        const uptime = () => formatTime(process.uptime());

const now = new Date();

        const hour = now.getHours();

       let greeting;

        if (hour >= 0 && hour < 12) {

          greeting = "Ohayou gozaimasu"; //good morning

        } else if (hour >= 12 && hour < 18) {

          greeting = "Konnichiwa"; //good afternoon

        } else {

          greeting = "Konbanwa"; //good evening

        }

      let textHelpMenu = 

        `╭──────────────────╮

        ${greeting} *${pushName}*  𝐒𝐞𝐧𝐩𝐚𝐢,𝐈 𝐚𝐦 ${botName}, 𝐚 𝐛𝐨𝐭 𝐞𝐝𝐢𝐭𝐞𝐝 𝐛𝐲 𝗬𝘂𝗷𝗶 𝗴𝗮𝗻𝗴.🎀 𝐌𝐲 𝐩𝐫𝐞𝐟𝐢𝐱 𝐢𝐬: ${prefix} 🧩 𝐒𝐞𝐫𝐯𝐞𝐫 𝐮𝐩𝐭𝐢𝐦𝐞: ${uptime()}\n╰──────────────────╯\n\n𝐇𝐞𝐫𝐞𝐬 𝐭𝐡𝐞 𝐥𝐢𝐬𝐭 𝐨𝐟 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬.\n\n⬛⬜⬛⬜𝐂𝐨𝐫𝐞⬜⬛⬜⬛
 
 >>> 𝐇𝐢, 𝐡𝐞𝐥𝐩, 𝐜𝐨𝐮𝐩𝐥𝐞𝐩𝐩, 𝐨𝐰𝐧𝐞𝐫, 𝐬𝐜𝐫𝐢𝐩𝐭, 𝐬𝐭𝐚𝐥𝐤, 𝐬𝐮𝐩𝐩𝐨𝐫𝐭, 𝐫𝐚𝐧𝐤, 𝐢𝐧𝐟𝐨, 𝐩𝐫𝐨𝐟𝐢𝐥𝐞,𝐬𝐞𝐭𝐛𝐢𝐨, 𝐬𝐞𝐭𝐮𝐬𝐞𝐫𝐧𝐚𝐦𝐞, 𝐬𝐞𝐭𝐠𝐞𝐧𝐝𝐞𝐫 >>>
 
 ⬛⬜⬛⬜𝐆𝐫𝐨𝐮𝐩⬜⬛⬜⬛
 
 >>> 𝐀𝐝𝐦𝐢𝐧𝐬, 𝐀𝐧𝐧𝐨𝐮𝐧𝐜𝐞, 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝐠𝐜, 𝐛𝐨𝐭𝐬𝐰𝐢𝐭𝐜𝐡, 𝐜𝐡𝐚𝐧𝐠𝐞𝐠𝐜𝐧𝐚𝐦𝐞, 𝐜𝐡𝐚𝐭𝐛𝐨𝐭𝐠𝐜, 𝐠𝐫𝐨𝐮𝐩𝐢𝐧𝐟𝐨, 𝐡𝐢𝐝𝐞𝐭𝐚𝐠, 𝐥𝐞𝐚𝐯𝐞, 𝐧𝐬𝐟𝐰, 𝐫𝐞𝐦𝐨𝐯𝐞, 𝐫𝐞𝐩𝐨𝐫𝐭, 𝐫𝐞𝐯𝐨𝐤𝐞, 𝐬𝐞𝐭𝐠𝐜𝐝𝐞𝐬𝐜, 𝐬𝐞𝐭𝐩𝐩𝐠𝐜, 𝐭𝐚𝐠𝐚𝐥𝐥, 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 >>>
 
 ⬛⬜⬛⬜𝐌𝐨𝐝𝐬⬜⬛⬜⬛
 
 >>>𝐀𝐝𝐝𝐦𝐨𝐝, 𝐝𝐞𝐥𝐞𝐭𝐞𝐦𝐨𝐝, 𝐛𝐚𝐧, 𝐮𝐧𝐛𝐚𝐧, 𝐛𝐚𝐧𝐠𝐜, 𝐮𝐧𝐛𝐚𝐧𝐠𝐜, 𝐛𝐥𝐨𝐜𝐤, 𝐮𝐧𝐛𝐥𝐨𝐜𝐤, 𝐛𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭, 𝐜𝐡𝐚𝐫𝐥𝐢𝐬𝐭, 𝐦𝐨𝐝𝐞, 𝐛𝐚𝐧𝐥𝐢𝐬𝐭, 𝐩𝐦𝐜𝐡𝐚𝐭𝐛𝐨𝐭, 𝐩𝐫𝐨𝐦𝐨𝐭𝐞𝐦𝐨𝐝 >>>
 
 ⬛⬜⬛⬜𝐌𝐞𝐝𝐢𝐚⬜⬛⬜⬛
 
 >>>𝐈𝐠𝐝𝐥, 𝐈𝐠𝐝𝐥𝟐, 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭, 𝐏𝐥𝐚𝐲, 𝐘𝐭𝐚𝐮𝐝𝐢𝐨, 𝐘𝐭𝐯𝐢𝐝𝐞𝐨, 𝐘𝐭𝐬, 𝐓𝐢𝐤𝐓𝐨𝐤, 𝐓𝐢𝐤𝐓𝐨𝐤𝐚𝐮𝐝𝐢𝐨, 𝐓𝐢𝐤𝐭𝐨𝐤𝐯𝐢𝐝𝐞𝐨, 𝐓𝐢𝐤𝐭𝐨𝐤𝐝𝐨𝐜, 𝐘𝐭𝐝𝐨𝐜 >>>
 
 ⬛⬜⬛⬜𝐒𝐞𝐚𝐫𝐜𝐡⬜⬛⬜⬛
 
 >>> 𝐀𝐧𝐢𝐦𝐞, 𝐆𝐢𝐟𝐬𝐞𝐚𝐫𝐜𝐡, 𝐆𝐢𝐦𝐚𝐠𝐞, 𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭, 𝐆𝐢𝐭𝐡𝐮𝐛, 𝐆𝐨𝐨𝐠𝐥𝐞, 𝐋𝐲𝐫𝐢𝐜𝐬, 𝐑𝐢𝐧𝐠𝐭𝐨𝐧𝐞, 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬𝐞𝐚𝐫𝐜𝐡, 𝐖𝐞𝐚𝐭𝐡𝐞𝐫, 𝐘𝐨𝐮𝐓𝐮𝐛𝐞𝐬𝐞𝐚𝐫𝐜𝐡 >>>
 
 ⬛⬜⬛⬜ 𝐔𝐭𝐢𝐥𝐢𝐭𝐢𝐞𝐬⬜⬛⬜⬛>>>𝐄𝐦𝐨𝐣𝐢𝐦𝐢𝐱, 𝐐/ 𝐐𝐮𝐨𝐭𝐞, 𝐒𝐭𝐢𝐜𝐤𝐞𝐫, 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐜𝐫𝐨𝐩, 𝐒𝐭𝐞𝐚𝐥, 𝐓𝐨𝐚𝐮𝐝𝐢𝐨, 𝐓𝐨𝐦𝐩𝟑, 𝐓𝐨𝐦𝐩𝟒, 𝐓𝐨𝐮𝐫𝐥, 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐦𝐞𝐦𝐞, 𝐓𝐞𝐱𝐭𝐝𝐞𝐬𝐢𝐠𝐧 >>>
 
 ⬛⬜⬛⬜𝐈𝐦𝐚𝐠𝐞 𝐞𝐝𝐢𝐭⬜⬛⬜⬛
 
 >>>𝐁𝐥𝐮𝐫 , 𝐂𝐢𝐫𝐜𝐥𝐞 , 𝐉𝐚𝐢𝐥, 𝐑𝐞𝐦𝐨𝐯𝐞𝐛𝐠, 𝐓𝐫𝐢𝐠𝐠𝐞𝐫 >>>
 
 ⬛⬜⬛⬜𝐀𝐮𝐝𝐢𝐨 𝐞𝐝𝐢𝐭⬜⬛⬜⬛
 
 >>>𝐁𝐚𝐬𝐬 , 𝐁𝐥𝐨𝐰𝐧 , 𝐃𝐞𝐞𝐩 ,𝐅𝐚𝐭 ,𝐍𝐢𝐠𝐡𝐭𝐜𝐨𝐫𝐞 , 𝐑𝐞𝐯𝐞𝐫𝐬𝐞 , 𝐑𝐨𝐛𝐨𝐭 , 𝐒𝐥𝐨𝐰 , 𝐒𝐦𝐨𝐨𝐭𝐡 , 𝐓𝐞𝐦𝐩𝐨 >>>
 
 ⬛⬜⬛⬜ 𝐄𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥𝐬⬜⬛⬜⬛
 
 >>>𝐄𝐥𝐞𝐦𝐞𝐧𝐭, 𝐒𝐜𝐫𝐞𝐞𝐧𝐬𝐡𝐨𝐭 , 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧 , 𝐒𝐚𝐲 , 𝐒𝐚𝐲𝐉𝐚𝐩𝐚𝐧𝐞𝐬𝐞 , 𝐒𝐚𝐲𝐁𝐞𝐧𝐠𝐚𝐥𝐢 , 𝐒𝐚𝐲𝐇𝐢𝐧𝐝𝐢 , 𝐔𝐃𝐢𝐜𝐢𝐭𝐢𝐨𝐧𝐚𝐫𝐲 >>>
 
 ⬛⬜⬛⬜𝐖𝐞𝐞𝐛⬜⬛⬜⬛
 
 >>>𝐀𝐧𝐢𝐦𝐞𝐐𝐮𝐨𝐭𝐞 , 𝐂𝐨𝐬𝐩𝐥𝐚𝐲 , 𝐂𝐨𝐬𝐩𝐥𝐚𝐲𝐯𝐢𝐝𝐞𝐨 , 𝐅𝐨𝐱𝐠𝐢𝐫𝐥 ,𝐌𝐚𝐢𝐝 , 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫, 𝐖𝐚𝐢𝐟𝐮 >>>
 
 ⬛⬜⬛⬜ 𝐑𝐞𝐚𝐜𝐭𝐢𝐨𝐧𝐬⬜⬛⬜⬛
 
 >>>𝐁𝐞𝐡𝐚𝐩𝐩𝐲, 𝐁𝐢𝐭𝐞, 𝐁𝐨𝐧𝐤, 𝐛𝐮𝐥𝐥𝐲, 𝐂𝐫𝐲, 𝐃𝐚𝐧𝐜𝐞, 𝐇𝐚𝐧𝐝𝐡𝐨𝐧𝐝, 𝐇𝐚𝐩𝐩𝐲, 𝐇𝐢𝐠𝐡𝐟𝐢𝐯𝐞, 𝐇𝐮𝐠, 𝐊𝐢𝐜𝐤, 𝐊𝐢𝐥𝐥, 𝐊𝐢𝐬𝐬, 𝐏𝐚𝐭, 𝐒𝐥𝐚𝐩, 𝐒𝐦𝐢𝐥𝐞, 𝐖𝐚𝐯𝐞, 𝐖𝐢𝐧𝐤, 𝐘𝐞𝐞𝐭 >>>
 
 ⬛⬜⬛⬜ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭⬜⬛⬜⬛
 
 >>>𝐁𝐮𝐲, 𝐈𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐲, 𝐌𝐢𝐧𝐞, 𝐒𝐡𝐨𝐩, 𝐑𝐞𝐠-𝐢𝐧𝐯 >>>
 
 ⬛⬜⬛⬜ 𝐄𝐜𝐨𝐧𝐨𝐦𝐲⬜⬛⬜⬛
 
 >>> 𝐁𝐚𝐧𝐤, 𝐂𝐚𝐩𝐚𝐜𝐢𝐭𝐲, 𝐃𝐚𝐢𝐥𝐲, 𝐃𝐞𝐩𝐨𝐬𝐢𝐭, 𝐆𝐚𝐦𝐛𝐥𝐞, 𝐋𝐛, 𝐑𝐨𝐛, 𝐒𝐥𝐨𝐭, 𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫, 𝐖𝐚𝐥𝐥𝐞𝐭, 𝐖𝐢𝐭𝐡𝐝𝐫𝐚𝐰 >>>

🔰 ${botName} 🔰𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲: 𝐓𝐞𝐚𝐦 *SHADOW*🎀 

𝐓𝐨 𝐮𝐬𝐞 𝐚𝐧𝐲 𝐨𝐟 𝐭𝐡𝐞𝐬𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐭𝐲𝐩𝐞 " ${prefix}𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐧𝐚𝐦𝐞".

©️ 𝐓𝐨 𝐜𝐡𝐞𝐜𝐤 𝐥𝐨𝐠𝐨 𝐦𝐚𝐤𝐞𝐫 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐭𝐲𝐩𝐞 " ${prefix}𝐋𝐨𝐠𝐨-𝐦𝐚k𝐞𝐫".

🏮 𝐓𝐨 𝐠𝐞𝐭 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐆𝐫𝐩 𝐥𝐢𝐧𝐤 𝐭𝐲𝐩𝐞 " ${prefix}𝐬𝐮𝐩𝐩𝐨𝐫𝐭".

🧩𝐓𝐨 𝐫𝐞𝐩𝐨𝐫𝐭 𝐚𝐧𝐲 𝐢𝐬𝐬𝐮𝐞𝐬 𝐭𝐨 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐭𝐲𝐩𝐞 " ${prefix}𝐫𝐞𝐩𝐨𝐫𝐭<𝐝𝐞𝐬𝐜𝐫𝐢𝐛𝐞 𝐢𝐬𝐬𝐮𝐞>".\n`;

      await Miku.sendMessage(m.from, {image: fs.readFileSync("./Assets/face.jpg"), caption: textHelpMenu,}, { quoted: m });

    }

  },
};
