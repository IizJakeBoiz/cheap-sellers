const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

})


var interval = setInterval (function () {
   client.channels.get("557027773470736404").send("**Selling all kinds of things from minecraft to roblox! Say "!help" in my DM's for more info!!!")
 
      }, 60000); 


client.login("NTYyNjc2ODAyODM4MDY5MjY5.XKn9-w.3-ULLJrmr0DlO_CVt7dHRS_dYm4")