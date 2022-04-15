const discord = require('discord.js');
const client = new discord.Client();

const token = "";
const nukerid ="";

client.on('ready', () => {

    console.log('Bot started! ');



})


client.on('message', async(message) => {

    if(message.content.startsWith('!nuke')) {
        if(message.author.id === nukerid) {
            message.channel.clone().then(channel => {
                channel.setPosition(message.channel.position)
                channel.send(' @everyone nuked')
            })
            message.channel.delete()
        }
    }

})




client.login(token)