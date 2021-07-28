const path = require('path')
const fs = require('fs')
const EventEmitter = require('events')
const emitter = new EventEmitter()
EventEmitter.defaultMaxListeners = 100
const Discord = require('discord.js')
const { Client, Intents, Message, DiscordAPIError, MessageEmbed, Presence, BaseClient } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const { token } = require('./config.json')

const commandBase = require('./commands/commands-base')
const welcome = require('./welcome2.js')

client.on('ready', async () => {
    client.on('debug',debug => console.log(debug))
    console.log(client.users.fetch(`439541365580365835`,{cache:true}))
    var kartId = '439541365580365835'
    var kartDms = client.users.cache.get(kartId)
    var resbotlogcha = client.channels.cache.get('855080924403335168')
    console.log(`Logged In As ${client.user.tag}!!`);
    console.log(`MongoDB Conection Not Established!!`)
    // More Addition

    console.log(`Changed ${client.user.tag}'s Status As Playing A.help`)
    client.user.setPresence({
        activity: {
            name : 'A.help' ,
            type: 0,
        }
    })

    client.on('messageCreate', async (message) => {
        mentions = message.mentions.users.first()
        if (mentions) {
            mentionsEmbed = new MessageEmbed()
                .setColor(`blurple`)
                .setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
                .setDescription(`Hey! ${message.author.username}! My Prefix Is \`a.\`\nUse \`a.help\` for more information.`)
            if (mentions.id === '840646484935835698') {
                message.channel.send(mentionsEmbed)
            }
        }
    })

    client.on('messageCreate', message => {
        if (message.content === '.process.exit()') {
            if (message.author.id === '439541365580365835') {
                message.channel.send(`kek, Imma Die :sob:`).then((msg1) => {
                    setTimeout(() => {
                        msg1.delete()
                    },5000)
                })
                resbotlogcha.send(`<@${kartId}>, ${client.user.tag} Has Just Been Shut Downed.`).then(() => {
                    process.exit(-1)
                })
            } else {
                message.channel.send(`Only ${kartDms.tag} Can Switch Me Off.`)
            }
        }
    })

    const baseFile = 'commands-base.js'
    const CommandBase = require(`./commands/${baseFile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        files.shift(1)
        files.shift(1)
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                CommandBase(client, option)
            }
        }
    }

    readCommands('commands')

    welcome(client)

})

client.login(token);
