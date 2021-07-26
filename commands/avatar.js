const { MessageEmbed } = require('discord.js')
module.exports = {
    commands : ['av', 'avatar', 'mypfp', 'pfp', 'myav'],
    callback : (client, message, arguments, text) => {
        const { channel, mentions, author } = message
        targetMember = mentions.users.first() || arguments[0]
        if (!targetMember) {
            const myEmbed = new MessageEmbed()
            .setColor(0x6199FC)
            .setTitle(`__**AVATAR**__`)
            .setDescription(` Down Below Is ${author.username}'s Avatar `)
            .setAuthor(author.username)
            .setImage(author.avatarURL({ dynamic:true }))
            .setTimestamp()
        channel.send(myEmbed)
        } else {
            message.channel.send(targetMember)
            const targetEmbed = new MessageEmbed()
                .setColor(0x6199FC)
                .setTitle(`__**AVATAR**__`)
                .setDescription(` Down Below Is ${targetMember.username}'s Avatar `)
                .setAuthor(targetMember.username)
                .setImage(targetMember.avatarURL({ dynamic:true }))
                .setTimestamp()
            channel.send(targetEmbed)
        }
    }
}

