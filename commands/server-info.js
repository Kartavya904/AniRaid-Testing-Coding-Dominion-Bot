const { MessageEmbed } = require ('discord.js')
module.exports = {
    commands : ['serverinfo','Serverinfo','myserverinfo','thisserverinfo','myserver', 'thisserver'],
    callback : (client, message, arguments, text ) => {
        const { guild } = message
        const icon = guild.iconURL()
        const { name, region, memberCount, owner, afkTimeout } = guild

        const embed = new MessageEmbed()
            .setColor(0x6199FC)
            .setTitle(`Server Info For '${name}'`)
            .setThumbnail(icon)
            .addFields(
            {
                name : `__**Region**__`,
                value : region.toUpperCase()
            },
            {
                name : `__**Members**__`,
                value : memberCount
            },
            {
                name : `__**OwnerID**__`,
                value : message.guild.owner
            },
            {
                name : `__**AFKTimeout**__`,
                value : `${afkTimeout/60} Mins`
            })

            .setFooter('I Hope You Like This Format ;)')
            .setTimestamp()
        message.channel.send(embed)
    }
}


