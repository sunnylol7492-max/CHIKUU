const fs = require("fs");
 const canvas = require(`${__dirname}/../alice/wrapper/leiamnashE.js`).makeBanner;

function leiamnash(){
 return{
  "name": "banner",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "banner": {
    "func": "banner",
    "cooldown": 10
   }
  }
 }
}

async function banner(event, api, leiam, log) {
try{
const leiamFile = __dirname + "/cache/banner_" + event.senderID + ".png";
  const leiamnash = Object.keys(event.mentions);
const leiamChat = leiam.join(" ");
if(event.type == "message_reply") {
  const leiamName = (await api.getUserInfo(event.messageReply.senderID))[event.messageReply.senderID]
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  await canvas({
    firstName: leiamName.firstName,
    file: event.senderID
  });
  api.chat({body: `${leiamName.name}`, mentions: [{ tag: leiamName.name, id: event.messageReply.senderID }], attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
   }, event.messageID);
} else if (!leiamChat) {
   const leiamName = (await api.getUserInfo(event.senderID))[event.senderID]
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  await canvas({
    firstName: leiamName.firstName,
    file: event.senderID
  });
  api.chat({body: `${leiamName.name}`, mentions: [{ tag: leiamName.name, id: event.senderID }], attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
