const { mkchar } = require("../../Database/dataschema.js");
const fs = require("fs"); 


module.exports = {
  name: "modeswitch",
  alias: ["mode", "botmode"],
  desc: "Change bot working mode to public/private",
  category: "Mods",
  usage: "mode [public/private]",
  react: "🎀",
  start: async (
    Miku,
    m,
    {
      args,
      isBotAdmin,
      isAdmin,
      isCreator,
      reply,
      prefix,
      pushName,
      botNumber,
      modStatus,
    }
  ) => {
    if (modStatus == "false" && !isCreator)
      return Miku.sendMessage(
        m.from,
        { text: "Sorry, only my *Owner* and *Mods* can use this command !" },
        { quoted: m }
      );
    if (args[0] == "self" && m.sender != botNumber) {
      return Miku.sendMessage(
        m.from,
        { text: "Sorry, only  *Bot hoster* can use this feature !" },
        { quoted: m }
      );
    }

    let checkdata = await mkchar.findOne({ id: "1" });
    var groupe = await Miku.groupMetadata(m.from);
    var members = groupe["participants"];
    var mems = [];
    members.map(async (adm) => {
      mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
    });

    if (args[0] === "private") {
      if (!checkdata) {
        await new mkchar({ id: "1", privateMode: "true" }).save();
        Miku.sendMessage(
          m.from,
          {
            text: `*Private Mode* has been *Activated* !\n\nNow only *Mods* can use my commands !`,
          },
          { quoted: m }
        );
        return Miku.sendMessage(
          m.from,
          {
            text: `*Private Mode* has been *Activated* !\n\nNow only *Mods* can use my commands !`,
          },
          { quoted: m }
        );
      } else {
        if (checkdata.privateMode == "true")
          return Miku.sendMessage(
            m.from,
            {
              text: `*Private Mode* is already *Activated* !\n\nNow only *Mods* can use my commands !`,
            },
            { quoted: m }
          );
        await mkchar.updateOne({ id: "1" }, { privateMode: "true" });
        return Miku.sendMessage(
          m.from,
          {
            text: `*Private Mode* has been *Activated* !\n\nNow only *Mods* can use my commands !`,
          },
          { quoted: m }
        );
      }
    } else if (args[0] === "public") {
      if (!checkdata) {
        await new mkchar({ id: "1", privateMode: "false" }).save();
        return Miku.sendMessage(
          m.from,
          {
            text: `*Public Mode* has been *Activated* !\n\nNow *Everyone* can use my commands !`,
          },
          { quoted: m }
        );
      } else {
        if (checkdata.privateMode == "false")
          return Miku.sendMessage(
            m.from,
            {
              text: `*Public Mode* is already *Activated* !\n\nNow *Everyone* can use my commands !`,
            },
            { quoted: m }
          );
        await mkchar.updateOne({ id: "1" }, { privateMode: "false" });
        return Miku.sendMessage(
          m.from,
          {
            text: `*Public Mode* has been *Activated* !\n\nNow *Everyone* can use my commands !`,
          },
          { quoted: m }
        );
      }
    } else if (args[0] === "self") {
      if (!checkdata) {
        await new mkchar({ id: "1", privateMode: "self" }).save();
        return Miku.sendMessage(
          m.from,
          {
            text: `*Self Mode* has been *Activated* !\n\nNow only *Bot Hoster* can use my commands !`,
          },
          { quoted: m }
        );
      } else {
        if (checkdata.privateMode == "self")
          return Miku.sendMessage(
            m.from,
            {
              text: `*Self Mode* is already *Activated* !\n\nNow only *Bot Hoster* can use my commands !`,
            },
            { quoted: m }
          );
        await mkchar.updateOne({ id: "1" }, { privateMode: "self" });
        return Miku.sendMessage(
          m.from,
          {
            text: `*Self Mode* has been *Activated* !\n\nNow only *Bot hoster* can use my commands !`,
          },
          { quoted: m }
        );
      }
    } else {

      await Miku.sendMessage(m.from, {image: fs.readFileSync("./Assets/face.jpg"), caption: `\n*「  Mode configuration  」*\n\n\n*Self* - Only Hoster can use\n*Private* - Only Mods can use\n*Public* - Everyone can use\n\n_*Usage:*_\n\n${prefix}mode self\n${prefix}mode private\n${prefix}mode public\n`,}, { quoted: m });
    }
  },
};
