const fetch = require('node-fetch');

module.exports = {
    commands : ['ass','asses','butt','booty'],
    callback : async(client, message, arguments, text) => {
      if (message.author.id === '439541365580365835') {
        message.channel.send('You Can Also Use `Ass`, `Boob`, `Hentai`, `NSFW`, `Pussy`, `Teens`, `Thigh`')
        try {
            var subreddits = [
              'asstastic',
              'pawg',
              'facedownassup',
              'ass',
              'brunetteass',
              'CheekyBottoms',
              'datgap',
              'underbun',
              'pawgtastic',
              'BestBooties',
              'CuteLittleButts'
            ]
    
            var reddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
          
            const data = await fetch(`https://meme-api.herokuapp.com/gimme/${reddit}`).then(res => res.json())
    
            if (!data) return message.channel.send(`Sorry, seems like i can't connect to API.`);
          
            const { title, postLink, url, subreddit } = data
    
            message.channel.send({
              embed: {
                color: "BLURPLE",
                title: `${title}`,
                url: `${postLink}`,
                image: {
                  url: url
                },
                footer: { text: `/reddit/${subreddit}` }
              }
            });
        } catch(error) {
            this.client.emit("apiError", error, message);
        } 
      }      
    }
}