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
const welcome = require('./welcome2')

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

    // client.on('guildMemberAdd', (member) => {
    //     console.log(`${member.username}, Just Joined ${member.guild.name}`)
    //     if (member.guild.id === '769281523597181028') {
    //         const msg = `Test Welcome`
    //         const channel = member.guild.channels.cache.get('848271927281582080')// welcome Channel
    //         channel.send(msg)
    //     }
    // })

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

    client.on("messageCreate", async message => {
        if (message.author.id == '571027211407196161') {
            message.embeds.forEach(async (e) => {
                if (e.title && e.title == `**Raid Lobbies**`) {
                    data = e.description
                    c=0
                    data.split('\n\n').forEach(eachData => {
                        let card = eachData.toLowerCase()
                        card.replace('*','')
                        let RaidId = parseInt(card.split(' ')[9])
                        if (!RaidId) {
                            RaidId = parseInt(card.split(' ')[10])
                            if (!RaidId) {
                                RaidId = parseInt(card.split(' ')[11])
                                if (!RaidId) {
                                    RaidId = parseInt(card.split(' ')[12])
                                    if (!RaidId) {
                                        RaidId = parseInt(card.split(' ')[13])
                                        if (!RaidId) {
                                            RaidId = parseInt(card.split(' ')[14])
                                            if (!RaidId) {
                                                RaidId = ' ‍ '
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        //console.log(RaidId)
                        //console.log(eachData)
                        if (card.includes('ririka momobami [impossible]') || card.includes(`alice zuberg [impossible]`) || card.includes(`artoria pendragon [impossible]`) || card.includes(`byakuya togami [impossible]`) || card.includes(`dio brando [impossible]`) || card.includes(`doppo kunikida [impossible]`) || card.includes(`echidna [impossible]`) || card.includes(`edward elric [impossible]`) || card.includes(`erza scarlet [impossible]`) || card.includes(`escanor [impossible]`) || card.includes(`fuutarou uesugi [impossible]`) || card.includes(`fuyumi yanagi [impossible]`) || card.includes(`garou [impossible]`) || card.includes(`gowther [impossible]`) || card.includes(`ikumi mito [impossible]`) || card.includes(`izumi kyoka [impossible]`) || card.includes(`izumo kamiki [impossible]`) || card.includes(`jellal fernandes [impossible]`) || card.includes(`kakine teitoku [impossible]`) || card.includes(`kenma kozume [impossible]`) || card.includes(`kurumi tokisaki [impossible]`) || card.includes(`liala [impossible]`) || card.includes(`loke [impossible]`) || card.includes(`mayuri [impossible]`) || card.includes(`motoyasu kitamura [impossible]`) || card.includes(`nico robin [impossible]`) || card.includes(`no face [impossible]`) || card.includes(`ranpo edogawa [impossible]`) || card.includes(`riko saikawa [impossible]`) || card.includes(`ritsu [impossible]`) || card.includes(`ritsu kageyama [impossible]`) || card.includes(`ritsu tainaka [impossible]`) || card.includes(`satoru gojo [impossible]`) || card.includes(`shalltear bloodfallen [impossible]`) || card.includes(`shion [impossible]`) || card.includes(`shoto todoroki [impossible]`) || card.includes(`sora [impossible]`) || card.includes(`takehisa hinawa [impossible]`) || card.includes(`tanjiro kamado [impossible]`) || card.includes(`violet evergarden [impossible]`) || card.includes(`wiz [impossible]`) || card.includes(`wolf [impossible]`) || card.includes(`yukina [impossible]`) || card.includes(`yuno gasai [impossible]`) || card.includes(`zombieman [impossible]`)) {
                            if (card.includes('uncommon') ||card.includes('rare') || card.includes('super') || card.includes('ultra')) {
                                if (card.includes('[0/6]') || card.includes('[1/6]') || card.includes('[2/6]') || card.includes('[3/6]') || card.includes('[4/6]') || card.includes('[5/6]')) {
                                    client.users.cache.get(`439541365580365835`).send(card)
                                    client.users.cache.get(`439541365580365835`).send(`${RaidId}`)
                                    client.users.cache.get(`439541365580365835`).send(' ‍ ')
                                }
                            }
                        }
                    })
                    //message.channel.send(eachRaidArray.join('\n'))
                }
            });
        }
        
      });

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
