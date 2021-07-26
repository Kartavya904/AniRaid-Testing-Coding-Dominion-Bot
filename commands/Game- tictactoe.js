const { tictactoe } = require('reconlx')

module.exports = {
    commands : ['tictactoe','ttt'],
     callback : async(client, message, arguments, text) => {
        const member = message.mentions.members.first()
        if (!member) return message.channel.send(`<@${message.author.id}>, Please Mention A User To Play Against.`)
        if(member) {
            message.channel.send(`The Order For The Squares Are The Following : \n1   2  3\n4  5  6\n7  8  9 \nThe Rules Are Simple:\n1. Read The Edited Message To Check Whose Turn It Is.\n2. Please Don't Spam Emojis On The Below Grid (Makes The Game Crash.)`)
            new tictactoe({
                player_two : member,
                message: message
            })
        }
    }
}
