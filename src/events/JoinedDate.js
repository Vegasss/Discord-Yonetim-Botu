const client = global.client;
const cfg = require("../configs/config.json");

module.exports = async () => {
  
  setInterval(() => {
  SevgimKalpVegas()
  }, 3600000);
  function SevgimKalpVegas() { 
  client.guilds.cache.get(cfg.Server.GuildID).members.cache.filter((member) =>  (Date.parse(new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" })) - member.joinedTimestamp) ).forEach((uye, index) => 
  setTimeout(() => {
  if(uye.roles.cache.has(cfg.Roles.Joined1Month) && uye.roles.cache.has(cfg.Roles.Joined2Month) && uye.roles.cache.has(cfg.Roles.Joined3Month) && uye.roles.cache.has(cfg.Roles.Joined6Month) && uye.roles.cache.has(cfg.Roles.Joined9Month) && uye.roles.cache.has(cfg.Roles.Joined12Month)) return
  uye.roles.add(cfg.Roles.Joined1Month)
  uye.roles.remove(cfg.Roles.Joined2Month)

