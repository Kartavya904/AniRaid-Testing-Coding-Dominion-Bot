const { MessageEmbed, MessageAttachment } = require("discord.js")
const Canvas = require('canvas')
//const { Canvas } = require('canvacord')
module.exports = {
    commands : ['buy'],
    callback : async(client, message, arguments, text) => {
        const imageList = [
            ['2B', 'https://i.ibb.co/0XgcjLp/c3cae03eae5b.png'],
            
            ['9S', 'https://i.ibb.co/19Z7BdB/1d07c0121215.png'],
            
            ['Accelerator', 'https://i.ibb.co/Wx9mR3K/5e1ce88ba2b5.png'],
            
            ['Ai Hayasaka', 'https://i.ibb.co/XbcYYzG/d7e9bd181d2d.png'],
            
            ['Ainz Ooal Gown', 'https://i.ibb.co/dPGckHS/090e479781ab.png'],
            
            ['Ais Wallenstein', 'https://i.ibb.co/bF3bHyh/dac718938fe3.png'],
            
            ['Akame', 'https://i.ibb.co/dMn2RKM/ccf00bbfeda5.png'],
            
            ['Akane Tsunemori', 'https://i.ibb.co/R0jMfzh/326784a64f59.png'],
            
            ['Akeno Himejima', 'https://i.ibb.co/wyPbwyQ/71e012356ab9.png'],
            
            ['Akiko Yosano', 'https://i.ibb.co/GdvpdRK/3ee8420b2b54.png'],
            
            ['Akira Hayama', 'https://i.ibb.co/Bqg3Wxp/d970e52bf14b.png'],
            
            ['Akitaru Obi', 'https://i.ibb.co/mtkSVNp/d5417b123afd.png'],
            
            ['Aladdin', 'https://i.ibb.co/KLw6w5g/489faa99f17f.png'],
            
            ['Albedo', 'https://i.ibb.co/pR81qFn/5b0137e2e666.png'],
            
            ['Alex Louis Armstrong', 'https://i.ibb.co/MRvf1Xm/3fdd81769d02.png'],
            
            ['Alibaba Saluja', 'https://i.ibb.co/G38bQ6D/66a1974c227b.png'],
            
            ['Alice Nakiri', 'https://i.ibb.co/6ZxWtyP/ebd39b212ba0.png'],
            
            ['Alice Zuberg', 'https://i.ibb.co/68jxJxG/b1b3bc0bb719.png'],
            
            ['All Might', 'https://i.ibb.co/Cw423rt/3cc9fe1001f7.png'],
            
            ['Amber', 'https://i.ibb.co/12S48r7/308ffeb9605a.png'],
            
            ['Ami Mizuno (Sailor Mercury)', 'https://i.ibb.co/L0Kg5Xp/e4516e84477d.png'],
            
            ['Android 18', 'https://i.ibb.co/bRT5ZMc/fc18e323b685.png'],
            
            ['Annie Leonhart', 'https://i.ibb.co/rxRGNSS/b47b938dffc3.png'],
            
            ['Aoi Asahina', 'https://i.ibb.co/M1vqrbd/d960dd5072a6.png'],
            
            ['Aqua', 'https://i.ibb.co/RYC3qmn/d7fb450453b2.png'],
            
            ['Arataka Reigen', 'https://i.ibb.co/XX11txN/908aa181e6d2.png'],
            
            ['Armin Arlert', 'https://i.ibb.co/KFGdKQS/02c9e1ec970d.png'],
            
            ['Arthur Boyle', 'https://i.ibb.co/vcTJfs6/99d0f4cc7d34.png'],
            
            ['Artoria Pendragon', 'https://i.ibb.co/7WMFBfb/66e36f8f67fd.png'],
            
            ['Aru Akise', 'https://i.ibb.co/gFH6Bhg/748861de61c0.png'],
            
            ['Asia Argento', 'https://i.ibb.co/smJZXj0/6cf7ae9c080f.png'],
            
            ['Asta', 'https://i.ibb.co/ykd3FLf/bfcce5983ce6.png'],
            
            ['Asuna Yuuki', 'https://i.ibb.co/G3k12mm/f79031e146fa.png'],
            
            ['Atsushi Nakajima', 'https://i.ibb.co/dJ47Jy0/3344fda81bc4.png'],
            
            ['Ayano Keiko [Silica]', 'https://i.ibb.co/T26bJw7/24351488a946.png'],
            
            ['Ayato Kirishima', 'https://i.ibb.co/VCBvY4L/27b33ccf6c8f.png'],
            
            ['Ayato Naoi', 'https://i.ibb.co/DgDZm2g/ce2e4766a8b4.png'],
            
            ['Azusa Nakano', 'https://i.ibb.co/rfDX4HN/b2f244ce0ca2.png'],
            
            ['Bad [Metal Bat]', 'https://i.ibb.co/2S0NkCH/51459c1fc239.png'],
            
            ['Ban', 'https://i.ibb.co/fNR2cvF/b6092780224b.png'],
            
            ['Basara Toujou', 'https://i.ibb.co/ThC6V5B/687fc61c88cc.png'],
            
            ['Bell Cranel', 'https://i.ibb.co/v4HBH2j/002195ea0310.png'],
            
            ['Bell Hydra', 'https://i.ibb.co/58w32Sw/a8ec417ae317.png'],
            
            ['Benedict Blue', 'https://i.ibb.co/SwWTGTj/4fbf33dd6194.png'],
            
            ['Benimaru', 'https://i.ibb.co/m04yk9L/792026a6b3a8.png'],
            
            ['Benimaru Shinmon', 'https://i.ibb.co/rpgYK7m/e90480f5facc.png'],
            
            ['Beros', 'https://i.ibb.co/5GTZJ1R/d97e72113584.png'],
            
            ['Bishamonten', 'https://i.ibb.co/whZXKBm/641582d8b121.png'],
            
            ['Bisky Krueger', 'https://i.ibb.co/1z91PqH/188db518bc30.png'],
            
            ['Black Star', 'https://i.ibb.co/2MsY2Lg/2009f31aa381.png'],
            
            ['Blair', 'https://i.ibb.co/2j9qmpb/157878e4bbb6.png'],
            
            ['Botan', 'https://i.ibb.co/mXs3GZf/a422a351a072.png'],
            
            ['Braz D Blood', 'https://i.ibb.co/84Ztwvc/64960f4144d5.png'],
            
            ['Brook', 'https://i.ibb.co/vckZ2PK/f55fd9b32db0.png'],
            
            ['Byakuya Togami', 'https://i.ibb.co/fSy7cLG/2eb241e6a7a1.png'],
            
            ['C.C.', 'https://i.ibb.co/KzwZDQ2/8901efab89eb.png'],
            
            ['Charmy Pappitson', 'https://i.ibb.co/tKjwZKn/6de6dc387858.png'],
            
            ['Chiaki Nanami', 'https://i.ibb.co/sKfkBYJ/edf9ad48b048.png'],
            
            ['Chika Fujiwara', 'https://i.ibb.co/jWmgXh4/5674af9bd651.png'],
            
            ['Child Emperor', 'https://i.ibb.co/YNzNdLK/dacb593f1f8c.png'],
            
            ['Chino Kafuu', 'https://i.ibb.co/bzwpPK1/63e024956d24.png'],
            
            ['Chisato Hasegawa', 'https://i.ibb.co/z5tLSN5/3af1b32a40df.png'],
            
            ['Chiya Ujimatsu', 'https://i.ibb.co/SddMSWJ/013f2a55141c.png'],
            
            ['Chlammy Zell', 'https://i.ibb.co/pfm9tcX/bd8ed83d07bf.png'],
            
            ['Chomusuke', 'https://i.ibb.co/1Zxr0LD/2ee09fd9a8f4.png'],
            
            ['Chrome', 'https://i.ibb.co/pbYymG9/1a372fa4c297.png'],
            
            ['Cocoa Hoto', 'https://i.ibb.co/qYdnVqs/b49a7ba93595.png'],
            
            ['Colossal Titan', 'https://i.ibb.co/xzYz9hR/1f9d8703b58d.png'],
            
            ['Cornelia Britannia', 'https://i.ibb.co/RS7vh1w/ec1c7bd493ad.png'],
            
            ['Cow Girl', 'https://i.ibb.co/VjsJvjh/e68054408b91.png'],
            
            ['Crona', 'https://i.ibb.co/Bss1665/41eae30be88a.png'],
            
            ['Crusch Karsten', 'https://i.ibb.co/5hT5Jqs/344c5d5e149c.png'],
            
            ['Dabi', 'https://i.ibb.co/LxPcdsZ/0bc434cb9d60.png'],
            
            ['Darkness', 'https://i.ibb.co/tcR7MJR/1b5cdedee3bb.png'],
            
            ['Death The Kid', 'https://i.ibb.co/Gv4nwHQ/9423b500b545.png'],
            
            ['Demiurge', 'https://i.ibb.co/P6dBRQQ/2ddc74225b58.png'],
            
            ['Denki Kaminari', 'https://i.ibb.co/71X0zvB/14a99aa12795.png'],
            
            ['Diablo', 'https://i.ibb.co/vm1fZSk/b598acd24fe9.png'],
            
            ['Diane', 'https://i.ibb.co/mX0mgLQ/130c8fedd80c.png'],
            
            ['Dio Brando', 'https://i.ibb.co/LQ7y8nc/2a37a4eedce4.png'],
            
            ['Doppo Kunikida', 'https://i.ibb.co/ZdDGJmW/cf469ee1c0dc.png'],
            
            ['Echidna', 'https://i.ibb.co/nrB5j7w/427626a7de9e.png'],
            
            ['Ed', 'https://i.ibb.co/PFL9wbQ/8bec10165b83.png'],
            
            ['Edward Elric', 'https://i.ibb.co/J3B0nBx/cb7b9343022c.png'],
            
            ['Elaine', 'https://i.ibb.co/K0mNjgx/127804d10a3b.png'],
            
            ['Elma', 'https://i.ibb.co/f8crHGf/5aed3d98d512.png'],
            
            ['Emilia', 'https://i.ibb.co/ZKdZ4SH/6a911c57972a.png'],
            
            ['Enel', 'https://i.ibb.co/3BqL9cG/534976827018.png'],
            
            ['Envy', 'https://i.ibb.co/ZJXZ1C6/66b0a91176e7.png'],
            
            ['Eren Yeager', 'https://i.ibb.co/8jGzNNV/e5223310d2f8.png'],
            
            ['Eri', 'https://i.ibb.co/1b0NTgc/48a117963205.png'],
            
            ['Erina Nakiri', 'https://i.ibb.co/SvxwPjf/54ef79d02a98.png'],
            
            ['Eris', 'https://i.ibb.co/RyvwKtC/d7ba6c5b650a.png'],
            
            ['Eruka Frog', 'https://i.ibb.co/4TSkf22/980d059d9441.png'],
            
            ['Erwin Smith', 'https://i.ibb.co/RjsyGnX/f6a9f42de8fd.png'],
            
            ['Erza Scarlet', 'https://i.ibb.co/xfRKdcs/f0597d364549.png'],
            
            ['Escanor', 'https://i.ibb.co/XLDQ6p6/e2a9eff0b01c.png'],
            
            ['Esdeath', 'https://i.ibb.co/LRqB0b4/088cc86b8c40.png'],
            
            ['Eto Yoshimura', 'https://i.ibb.co/4pvMnsh/a68cfe3102c4.png'],
            
            ['Eugeo', 'https://i.ibb.co/Ptd80Lh/78347e23d19b.png'],
            
            ['Fafnir', 'https://i.ibb.co/ZVzc8xq/0a8611478d3c.png'],
            
            ['Fairy King Harlequin', 'https://i.ibb.co/v1cMPGc/31af07190a36.png'],
            
            ['Faye Valentine', 'https://i.ibb.co/txqJsFr/312ca6469523.png'],
            
            ['Feitan Portor', 'https://i.ibb.co/zFhnMFY/83cfb651e17c.png'],
            
            ['Felix Argyle', 'https://i.ibb.co/WyFJk4K/1f553f8d520b.png'],
            
            ['Ferid Bathory', 'https://i.ibb.co/Jrp8m1J/e89e49d334cc.png'],
            
            ['Fiel Nirvalen (Fii)', 'https://i.ibb.co/8Bq4Yw7/91d64f5a82e8.png'],
            
            ['Filo', 'https://i.ibb.co/xsj40PD/bef7ceba5921.png'],
            
            ['Fitoria', 'https://i.ibb.co/HP4nrNZ/084dff753ca9.png'],
            
            ['Fran', 'https://i.ibb.co/mRJ4Qd4/6172eddefdaf.png'],
            
            ['Franken Stein', 'https://i.ibb.co/djH8mM7/60384e119847.png'],
            
            ['Freya', 'https://i.ibb.co/tm8T0kN/0f95a2e9aeac.png'],
            
            ['Fumikage Tokoyami', 'https://i.ibb.co/YbQm3dW/5d59f7a8adf5.png'],
            
            ['Fuutarou Uesugi', 'https://i.imgur.com/cLVtv3u.png'],
            
            ['Fuyumi Yanagi', 'https://i.ibb.co/B37pnKG/fb72ae7ab8ea.png'],
            
            ['Gaara', 'https://i.ibb.co/yR7ZGLV/03e6e4ac13af.png'],
            
            ['Gajeel Redfox', 'https://i.ibb.co/4VmRLxV/8ab55bb37fe1.png'],
            
            ['Garou', 'https://i.ibb.co/kGthFpc/62ae51b25329.png'],
            
            ['Gen Asagiri', 'https://i.ibb.co/S64Btxx/a8305b171241.png'],
            
            ['Genos', 'https://i.ibb.co/FxnWJhv/277429c416d3.png'],
            
            ['Genryusai Shigekuni Yamamoto', 'https://i.ibb.co/mR9Fdyp/5bb080fa6b75.png'],
            
            ['Ghost', 'https://i.ibb.co/NtVWz2M/884590ae256e.png'],
            
            ['Gilbert Bougainvillea', 'https://i.ibb.co/ggw5WJN/6c467dfa066c.png'],
            
            ['Gilgamesh', 'https://i.ibb.co/ccqD6r9/5fae6dfa3617.png'],
            
            ['Gilthunder', 'https://i.ibb.co/fC5grbG/45ec78539a5b.png'],
            
            ['Gin', 'https://i.ibb.co/xHS4NcD/e1a1d476f10e.png'],
            
            ['Gintoki Sakata', 'https://i.ibb.co/Pc05HRX/a2ff52db30c1.png'],
            
            ['Giorno Giovanna', 'https://i.ibb.co/Qkk3PtJ/8d76e52c3261.png'],
            
            ['Giyu Tomioka', 'https://i.ibb.co/TbySdR4/4cfe8ff57d2a.png'],
            
            ['Goblin Slayer', 'https://i.ibb.co/DQz2PZz/c2d019ab72d1.png'],
            
            ['Gon Freecss', 'https://i.ibb.co/Z6GgMGx/46ebc9a72495.png'],
            
            ['Goro (056)', 'https://i.ibb.co/ZGmR5vc/4dfb761784c1.png'],
            
            ['Gowther', 'https://i.ibb.co/zfK0tNq/8d5263e75dab.png'],
            
            ['Gray Fullbuster', 'https://i.ibb.co/4YhCxS3/8c7ac3fd6e1e.png'],
            
            ['Greed', 'https://i.ibb.co/xjrry6x/0b3fbae9cef9.png'],
            
            ['Grimmjow Jeagerjaques', 'https://i.ibb.co/jh952c3/bc89e03d1293.png'],
            
            ['Guild Girl', 'https://i.ibb.co/rstxYNQ/7b536e2b6677.png'],
            
            ['Guren Ichinose', 'https://i.ibb.co/1sKg0SF/73b279be3a7d.png'],
            
            ['Happy', 'https://i.ibb.co/GkjpWJh/502283159e61.png'],
            
            ['Haruka Tenou (Sailor Uranus)', 'https://i.ibb.co/YLLNBfp/df7f236b8e4e.png'],
            
            ['Hatsune Miku', 'https://i.ibb.co/PGfRZwk/b07656817511.png'],
            
            ['Hayato Gokudera', 'https://i.ibb.co/cLSspBq/9731aa1fd997.png'],
            
            ['Hei', 'https://i.ibb.co/B2kQZcM/238dae07d758.png'],
            
            ['Hestia', 'https://i.ibb.co/tmPVQgb/fcd963a9563a.png'],
            
            ['Hibana', 'https://i.ibb.co/10kwp4B/d9592bf9774b.png'],
            
            ['Hideyoshi Nagachika', 'https://i.ibb.co/SK2V6gY/daa0a2920ad9.png'],
            
            ['Hiei', 'https://i.ibb.co/GJCMWL6/5400225fe598.png'],
            
            ['High Elf Archer', 'https://i.ibb.co/L6DYQrZ/1f35870472d8.png'],
            
            ['Hijikata Toushirou', 'https://i.ibb.co/DzQT97n/2977348ed190.png'],
            
            ['Himiko Toga', 'https://i.ibb.co/VNbZZCv/f79b0d0befdc.png'],
            
            ['Hinami Fueguchi', 'https://i.ibb.co/QpK1myF/f4e53acf9ee7.png'],
            
            ['Hinata Hyuga', 'https://i.ibb.co/3h3sNjs/b044c19cfb61.png'],
            
            ['Hiro (016)', 'https://i.ibb.co/4JGzXrk/2f30bbec50b5.png'],
            
            ['Hisako Arato', 'https://i.ibb.co/8j5bm6g/d958cf3e8cb4.png'],
            
            ['Hisoka Morrow', 'https://i.ibb.co/Nn1hd71/05a672145663.png'],
            
            ['Historia Reiss', 'https://i.ibb.co/s21mt6T/0f654c88eb19.png'],
            
            ['Hiyori Iki', 'https://i.ibb.co/fYP13Yf/028dac0cab8d.png'],
            
            ['Hotaru Takegawa', 'https://i.ibb.co/tps8b92/3acd94ec73ad.png'],
            
            ['Houka Inumuta', 'https://i.ibb.co/YcDj15z/ace516b72b81.png'],
            
            ['Ichigo (015)', 'https://i.ibb.co/ctt13jf/26ec7b296e96.png'],
            
            ['Ichigo Kurosaki', 'https://i.ibb.co/FKt6qhG/e636b3c45681.png'],
            
            ['Ichika Nakano', 'https://i.imgur.com/ZLQnWvj.png'],
            
            ['Ikumi Mito', 'https://i.ibb.co/gysX7N2/43005d151184.png'],
            
            ['Illyasviel Von Einzbern', 'https://i.ibb.co/FVrN5vW/a3dcf95f3581.png'],
            
            ['Inosuke Hashibira', 'https://i.ibb.co/ZgZ3G8s/ca35ec285abc.png'],
            
            ['Inuyasha', 'https://i.ibb.co/r3THf3R/1da871e27aed.png'],
            
            ['Ira Gamagori', 'https://i.ibb.co/dp2ypZS/2fd11f181797.png'],
            
            ['Irina Jelavic', 'https://i.ibb.co/GnjGBNG/0379bf543581.png'],
            
            ['Iris', 'https://i.ibb.co/xHLmr2G/f3b1f0a241fd.png'],
            
            ['Issei Hyoudou', 'https://i.ibb.co/HPBvPW8/1b70a2ff6b99.png'],
            
            ['Itachi Uchiha', 'https://i.ibb.co/d6xJxhV/4d59729bf301.png'],
            
            ['Itaru Hashida', 'https://i.ibb.co/sVvtkrc/4221f5feee2a.png'],
            
            ['Itona Horibe', 'https://i.ibb.co/RpWTPrQ/626198baabfd.png'],
            
            ['Itsuki Kawasumi', 'https://i.ibb.co/YDcDJmY/a2f3f3faf293.png'],
            
            ['Itsuki Nakano', 'https://i.imgur.com/niWKUw3.png'],
            
            ['Izuku Midoriya (Deku)', 'https://i.ibb.co/qdMqjjp/53a9c84a1cea.png'],
            
            ['Izumi Kyoka', 'https://i.ibb.co/1rWG8VN/c2ad4504c493.png'],
            
            ['Izumo Kamiki', 'https://i.ibb.co/jb8sLg2/1a86e836d2d7.png'],
            
            ['Izuna Hatsuse', 'https://i.ibb.co/CmGP3FV/aab51dc2add3.png'],
            
            ['Jack Frost', 'https://i.ibb.co/CbXbmQv/fc9ab061af4e.png'],
            
            ['Jellal Fernandes', 'https://i.ibb.co/NSpt6hF/1e480b654cc7.png'],
            
            ['Jet Black', 'https://i.ibb.co/Tc89Vcn/c50535ea5c3b.png'],
            
            ['Jibril', 'https://i.ibb.co/cLDJhD0/f692851ade18.png'],
            
            ['Jiraiya', 'https://i.ibb.co/dgcjhmM/be78ce24978a.png'],
            
            ['Jonathan Joestar', 'https://i.ibb.co/yNbJ5BQ/4ac7dabe918e.png'],
            
            ['Joseph Joestar', 'https://i.ibb.co/pPBWYfM/a0320b0a5c69.png'],
            
            ['Josuke Higashikata', 'https://i.ibb.co/0F32WtS/a74712e1b2c7.png'],
            
            ['Jotaro Kujo', 'https://i.ibb.co/rfdt48k/94a6ab0140af.png'],
            
            ['Judar', 'https://i.ibb.co/RjScTrF/15137e76db9a.png'],
            
            ['July', 'https://i.ibb.co/d7cCDfy/886a1f1b2cf9.png'],
            
            ['Junko Enoshima', 'https://i.ibb.co/NrKVhdX/9ee6c4a0b288.png'],
            
            ['Juvia Lockser', 'https://i.ibb.co/prCFyC4/7d4ac9997f7c.png'],
            
            ['Kaede Kayano', 'https://i.ibb.co/M23WwGx/64637fd90d2d.png'],
            
            ['Kagome Higurashi', 'https://i.ibb.co/KFhcHnK/8fa9c77adbc6.png'],
            
            ['Kagura', 'https://i.ibb.co/8mTTmGn/a34cd49903d1.png'],
            
            ['Kaguya Shinomiya', 'https://i.ibb.co/NjbQ3rp/c9e4cb886c61.png'],
            
            ['Kakashi Hatake', 'https://i.ibb.co/Ycr0KDq/f54ed5d57ae5.png'],
            
            ['Kakine Teitoku', 'https://i.ibb.co/VvQFLG5/9a13849e25ae.png'],
            
            ['Kallen Kozuki', 'https://i.ibb.co/Mp9xYGY/ca88e07d9a7b.png'],
            
            ['Kamijou Touma', 'https://i.ibb.co/090Gyzm/edc70191f615.png'],
            
            ['Kanade Tachibana', 'https://i.ibb.co/B6y5Z8m/a76632d0afa2.png'],
            
            ['Kanao Tsuyuri', 'https://i.ibb.co/DV5PhgC/80ecb27ea746.png'],
            
            ['Kaneki Ken', 'https://i.ibb.co/ChqTwJS/5d85e0d8cff5.png'],
            
            ['Kanna Kamui', 'https://i.ibb.co/zrGJN99/e7728db8b171.png'],
            
            ['Karasuma Tadaomi', 'https://i.ibb.co/CMsxkrC/d8016c0767b3.png'],
            
            ['Karma Akabane', 'https://i.ibb.co/QFTqBbL/d7f009c30731.png'],
            
            ['Katsuki Bakugo', 'https://i.ibb.co/k24cQH9/8f2dbbb3bbf9.png'],
            
            ['Katsura Kotarou', 'https://i.ibb.co/HBm6crP/7709e6d2dca5.png'],
            
            ['Kazuma', 'https://i.ibb.co/bKPnLBR/1b54fd66833c.png'],
            
            ['Kazuma Kuwabara', 'https://i.ibb.co/PrqzbS0/badfdec48f57.png'],
            
            ['Kazuma Satou', 'https://i.ibb.co/cwdf4wm/a4c4a072ba36.png'],
            
            ['Keigo Takami (Hawks)', 'https://i.ibb.co/S0bJ7XD/c93993230895.png'],
            
            ['Kei Shirogane', 'https://i.ibb.co/yyJPvQW/8e69098cc077.png'],
            
            ['Kei Tsukishima', 'https://i.ibb.co/YyXjZGc/fe8618324a0d.png'],
            
            ['Kenji Miyazawa', 'https://i.ibb.co/dM6wp3b/6c34661c0f71.png'],
            
            ['Kenma Kozume', 'https://i.ibb.co/p2z0Xz7/884bdaf3eba4.png'],
            
            ['Kenpachi Zaraki', 'https://i.ibb.co/mynNN7S/d562f32b414c.png'],
            
            ['Kento Nanami', 'https://i.ibb.co/jvXZqB7/7456979b0985.png'],
            
            ['Kid Buu', 'https://i.ibb.co/kSQ5NjX/419e82fa008d.png'],
            
            ['Kikyo', 'https://i.ibb.co/w72cBLX/6ea301ba3f79.png'],
            
            ['Killua Zoldyck', 'https://i.ibb.co/z54pXL5/9c487298d7cd.png'],
            
            ['Kirari Momobami', 'https://i.ibb.co/7pj5mfr/06710cea5030.png'],
            
            ['Kirito', 'https://i.ibb.co/DtK1TmP/7c5e4b99bb88.png'],
            
            ['Kiritsugu Emiya', 'https://i.ibb.co/4t3tjk3/60d7695a3980.png'],
            
            ['Kishou Arima', 'https://i.ibb.co/p4v4VTM/45779c62c2d9.png'],
            
            ['Kisuke Urahara', 'https://i.ibb.co/dbfbYNB/1ec152d7e76b.png'],
            
            ['Klein', 'https://i.ibb.co/ChX2YG0/44ec5f88873b.png'],
            
            ['Kobayashi', 'https://i.ibb.co/B65f6MW/7d9b44c5cf5f.png'],
            
            ['Koenma', 'https://i.ibb.co/QdyzSpM/572567b56dbd.png'],
            
            ['Kofuku', 'https://i.ibb.co/VCytwb4/b11600f56c4e.png'],
            
            ['Kohaku', 'https://i.ibb.co/VjRM16J/7b339d5caf9f.png'],
            
            ['Kojiro Shinomiya', 'https://i.ibb.co/fY6bJyM/2410bf8fa73f.png'],
            
            ['Kokoro', 'https://i.ibb.co/rMdQxZr/a46570cb6693.png'],
            
            ['Koneko Toujou', 'https://i.ibb.co/Jjzy7nC/17722dd1ef2c.png'],
            
            ['Konno Yuuki', 'https://i.ibb.co/7k8WHZ6/c3fe128677d3.png'],
            
            ['Koro Sensei', 'https://i.ibb.co/m461kkC/9935197ab66d.png'],
            
            ['Koshi Sugawara', 'https://i.ibb.co/mv2RRsQ/155dbc79b52e.png'],
            
            ['Kotori Itsuka', 'https://i.ibb.co/S5dbKsy/f832272a387d.png'],
            
            ['Kougyoku', 'https://i.ibb.co/0hw4cGQ/8497dd581006.png'],
            
            ['Kouta', 'https://i.ibb.co/nf0rVcS/6019e57e26a3.png'],
            
            ['Krillin', 'https://i.ibb.co/hLWzF8f/f770746529e8.png'],
            
            ['Krul Tepes', 'https://i.ibb.co/pr47B2q/addecc6f8b31.png'],
            
            ['Kurapika', 'https://i.ibb.co/c3MRcqG/f9f7c30ffc70.png'],
            
            ['Kurisu Makise', 'https://i.ibb.co/xG1HdCR/e6a216a5885e.png'],
            
            ['Kurumi Nonaka', 'https://i.ibb.co/bQLmhb5/74fbf58e9ce9.png'],
            
            ['Kurumi Tokisaki', 'https://i.ibb.co/HVMR3tL/2a304256d67e.png'],
            
            ['Kyoka Jiro', 'https://i.ibb.co/HYJ0jPH/eda0dceb9bbe.png'],
            
            ['Kyoko Kirigiri', 'https://i.ibb.co/C7qggN9/91aa180fa731.png'],
            
            ['Kyoya Hibari', 'https://i.ibb.co/WxVr0C9/8530e4db6c9d.png'],
            
            ['L', 'https://i.ibb.co/qjJYTY8/f327743d308d.png'],
            
            ['Lambo', 'https://i.ibb.co/HN4qMXJ/503171c9ed4f.png'],
            
            ['Laxus Dreyar', 'https://i.ibb.co/nnCxTC9/e0ccddfb6519.png'],
            
            ['Lelouch Lamperouge', 'https://i.ibb.co/FVYQw4w/1955a1c487aa.png'],
            
            ['Leorio Paradinight', 'https://i.ibb.co/8zpB7YG/c51e2b510e2e.png'],
            
            ['Levi Ackerman', 'https://i.ibb.co/f903brK/4cd39ebceab3.png'],
            
            ['Liala', 'https://i.ibb.co/bF3r5gB/b3f862666f9e.png'],
            
            ['Light Yagami (Kira)', 'https://i.ibb.co/G51w1Q8/99f974bcd0f9.png'],
            
            ['Liliruca Arde', 'https://i.ibb.co/Cbn40Q7/d2fa3bc64d92.png'],
            
            ['Lisa Lisa', 'https://i.ibb.co/yRvgBnC/b44e3b305c22.png'],
            
            ['Liz T Blood', 'https://i.ibb.co/hyRPkpQ/5899e9ebf73b.png'],
            
            ['Loke', 'https://i.ibb.co/6DcxLcp/3d02160309df.png'],
            
            ['Lubbock', 'https://i.ibb.co/1JCtnvg/7b5974a6d586.png'],
            
            ['Luck Voltia', 'https://i.ibb.co/RjMWN2t/00f31d861f55.png'],
            
            ['Lucoa', 'https://i.ibb.co/6DjcgnC/ad076e46a535.png'],
            
            ['Lucy Heartfilia', 'https://i.ibb.co/hRPKD2v/63842e5cffef.png'],
            
            ['Lucy (Kaede)', 'https://i.ibb.co/Y2Jp003/58a29e12146a.png'],
            
            ['Machi Komacine', 'https://i.ibb.co/6X4svLG/eeb52a427fff.png'],
            
            ['Madara Uchiha', 'https://i.ibb.co/WFwvxz5/3f4b1fed8740.png'],
            
            ['Maka Albarn', 'https://i.ibb.co/vQLWc5q/c49b4b616024.png'],
            
            ['Maki Oze', 'https://i.ibb.co/dtDY4qb/f146d71803a6.png'],
            
            ['Mako Mankanshoku', 'https://i.ibb.co/ZYDGZBF/b644883a7af1.png'],
            
            ['Makoto Kino (Sailor Jupiter)', 'https://i.ibb.co/hHMfW6N/12b19bf6dc1b.png'],
            
            ['Makoto Naegi', 'https://i.ibb.co/854RpBb/0e4c1ef3e189.png'],
            
            ['Mamoru Chiba (Tuxedo Mask)', 'https://i.ibb.co/ZXqKJFx/40cdda686864.png'],
            
            ['Maria Naruse', 'https://i.ibb.co/XJ4wLN1/808ba50a554b.png'],
            
            ['Mariko Kurama', 'https://i.ibb.co/tDgJZxy/48e8a89633b3.png'],
            
            ['Mary Saotome', 'https://i.ibb.co/x5B4tJ7/dde9886b8f8c.png'],
            
            ['Mavis Vermillion', 'https://i.ibb.co/bmRnF8B/fd27a22dc327.png'],
            
            ['Maya Joga', 'https://i.ibb.co/mSRTCkw/a40e44bc8af7.png'],
            
            ['Mayu', 'https://i.ibb.co/FB9xP7y/cc6caf63bd43.png'],
            
            ['Mayuri', 'https://i.ibb.co/B3nwNYv/d7d73cdc4c23.png'],
            
            ['Mayuri Shiina', 'https://i.ibb.co/Z65sNPZ/5f0a28913b76.png'],
            
            ['Medusa Gorgon', 'https://i.ibb.co/MDdrtT4/73ee8f33bbe9.png'],
            
            ['Megumi Fushiguro', 'https://i.ibb.co/mFbNLzq/5558d9189573.png'],
            
            ['Megumin', 'https://i.ibb.co/d6bWkmZ/35a8e40c8f55.png'],
            
            ['Megumi Natsu', 'https://i.ibb.co/4mfD0N8/12862c9731e8.png'],
            
            ['Megumi Tadokoro', 'https://i.ibb.co/LC2ccjW/3c8c0b8be5bb.png'],
            
            ['Meliodas', 'https://i.ibb.co/TRddqtP/4c17845f6fe0.png'],
            
            ['Mello', 'https://i.ibb.co/6mMtzfw/25df2ef4c7d9.png'],
            
            ['Melty Q Melromarc', 'https://i.ibb.co/CPwLkFN/f6e86b7e5632.png'],
            
            ['Mephisto Pheles', 'https://i.ibb.co/bg2xsGm/a941e45d2980.png'],
            
            ['Mera Mera', 'https://i.ibb.co/NVkW9cV/ec7f24441e2e.png'],
            
            ['Merlin', 'https://i.ibb.co/8g4LZWH/de9f763d8cb6.png'],
            
            ['Mikaela Hyakuya', 'https://i.ibb.co/gdXVkBp/1baf50d032bf.png'],
            
            ['Mikasa Ackerman', 'https://i.ibb.co/z2pQCxV/31f65fc26ba5.png'],
            
            ['Miko', 'https://i.ibb.co/PrfsH0c/8d9e56d1de76.png'],
            
            ['Miko Iino', 'https://i.ibb.co/pP44csn/9a90fbc7909f.png'],
            
            ['Miku (390)', 'https://i.ibb.co/16GFBcp/2bb5b40d626d.png'],
            
            ['Miku Nakano', 'https://i.imgur.com/KYqUGsh.png'],
            
            ['Milim Nava', 'https://i.ibb.co/2WwwhcT/32b3f3b73055.png'],
            
            ['Minako Aino (Sailor Venus)', 'https://i.ibb.co/PGSWSP4/d17375a9416a.png'],
            
            ['Minato Namikaze', 'https://i.ibb.co/4jCRff9/74d4ba62a614.png'],
            
            ['Mine', 'https://i.ibb.co/Y30WXZv/8ec30b0798b2.png'],
            
            ['Minene Uryuu', 'https://i.ibb.co/2KK5SKf/449e8f4de404.png'],
            
            ['Mio Akiyama', 'https://i.ibb.co/hWr8HN8/75a704936853.png'],
            
            ['Mio Naruse', 'https://i.ibb.co/kqZ6qtt/3eb9ff5b1030.png'],
            
            ['Mio Takamiya', 'https://i.ibb.co/b67fnQK/63a74ee508a7.png'],
            
            ['Miroku', 'https://i.ibb.co/nf1WJvr/545ec816676d.png'],
            
            ['Misa Amane', 'https://i.ibb.co/q1dj5Cn/e977afbb08ea.png'],
            
            ['Misaka Mikoto', 'https://i.ibb.co/F0kfFc4/d7f7604b7463.png'],
            
            ['Mitsuba Sangu', 'https://i.ibb.co/6XWs5K6/d74a877c02a8.png'],
            
            ['Miyuki Shirogane', 'https://i.ibb.co/tCynLgV/13fc054123e9.png'],
            
            ['Mocha Hoto', 'https://i.ibb.co/CKCVxpV/eda64e246dd6.png'],
            
            ['Momo Yaoyorozu', 'https://i.ibb.co/Htnpyk1/2f6d943a338a.png'],
            
            ['Monika', 'https://i.ibb.co/nR6RTCW/1055134a6e6e.png'],
            
            ['Monkey D Luffy', 'https://i.ibb.co/kSDr57K/d354b76a74b9.png'],
            
            ['Morgiana', 'https://i.ibb.co/8s6Rvyv/53ca8288c7af.png'],
            
            ['Mori Jin', 'https://i.ibb.co/4Zvgkwx/e684a704d89e.png'],
            
            ['Motoyasu Kitamura', 'https://i.ibb.co/1bs3dyq/4ecde28e34e7.png'],
            
            ['Mukuro Rokudo', 'https://i.ibb.co/JsJnS2F/dda750d1a711.png'],
            
            ['Nagisa Shiota', 'https://i.ibb.co/3fvQDrP/99f1d018da77.png'],
            
            ['Nagito Komaeda', 'https://i.ibb.co/7W0gM5s/7701fb3d6790.png'],
            
            ['Nami', 'https://i.ibb.co/mv0XCFY/327f19e5a8d2.png'],
            
            ['Nana', 'https://i.ibb.co/m9FR9GG/4f6859b73375.png'],
            
            ['Naofumi Iwatani', 'https://i.ibb.co/d67Ftj1/5632387b22c1.png'],
            
            ['Naomi Misora', 'https://i.ibb.co/Kq9H7m5/89c9096ce600.png'],
            
            ['Naraku', 'https://i.ibb.co/B4YktQB/213ccb40d5dd.png'],
            
            ['Naruto Uzumaki', 'https://i.ibb.co/k3P7cVG/aff3413d7beb.png'],
            
            ['Natsu Dragneel', 'https://i.ibb.co/zF09gy7/0c703fe29018.png'],
            
            ['Natsuki', 'https://i.ibb.co/3ky6Lm5/961e629beca3.png'],
            
            ['Near', 'https://i.ibb.co/58tL7xR/d82de7e8d5f3.png'],
            
            ['Neji Hyuga', 'https://i.ibb.co/WkgH0f3/b523f6e8e3d4.png'],
            
            ['Nero', 'https://i.ibb.co/vHdtsMZ/1191b71a6a4e.png'],
            
            ['Nezuko Kamado', 'https://i.ibb.co/vLDGS1X/7484620ddea0.png'],
            
            ['Nico Robin', 'https://i.ibb.co/6DndZkS/c720bb110c02.png'],
            
            ['Nino Nakano', 'https://i.imgur.com/u5YiN8Y.png'],
            
            ['Nobara Kugisaki', 'https://i.ibb.co/vzn6vf6/c5af259ae2ef.png'],
            
            ['Nobuchika Ginoza', 'https://i.ibb.co/TB6jVHd/e545d53f943b.png'],
            
            ['Noda', 'https://i.ibb.co/yYsgcGP/376f1dcee0dc.png'],
            
            ['Noelle Silva', 'https://i.ibb.co/TBgKQ05/fa05cff8cb60.png'],
            
            ['No Face', 'https://i.ibb.co/q9q3tCg/d70642c2ccf5.png'],
            
            ['November', 'https://i.ibb.co/5sbJVYN/3fd0a5d16bce.png'],
            
            ['Nui Harime', 'https://i.ibb.co/QYWHkn3/2e9cf782b032.png'],
            
            ['Ochaco Uraraka', 'https://i.ibb.co/YcLYQgC/e7bcd5ce2dd9.png'],
            
            ['Okita Sougo', 'https://i.ibb.co/5kjkhmQ/bd31f3ede945.png'],
            
            ['Origami Tobiichi', 'https://i.ibb.co/cgh0nnj/566cb595d5cc.png'],
            
            ['Osamu Dazai', 'https://i.ibb.co/6XdZCTK/39f6fd3d72b6.png'],
            
            ['Padoru', 'https://i.ibb.co/2YZKSVN/e8b1b5be70d8.png'],
            
            ['Pain', 'https://i.ibb.co/23K9LBV/93d3a5bb67c3.png'],
            
            ['Piccolo', 'https://i.ibb.co/VDKFBTQ/742ea68b19d3.png'],
            
            ['Portgas D Ace', 'https://i.ibb.co/rvZPRYF/f4fa47e265ee.png'],
            
            ['Priestess', 'https://i.ibb.co/WnKDxdh/a804de43d0ef.png'],
            
            ['Prince Diamond', 'https://i.ibb.co/bscGjVt/a614ff297bc3.png'],
            
            ['Puck', 'https://i.ibb.co/R35jWmW/2cfc8e196d99.png'],
            
            ['Rabo', 'https://i.ibb.co/przj5F5/7e38f74e15a0.png'],
            
            ['Ram', 'https://i.ibb.co/qgc2j2m/53f930cf7763.png'],
            
            ['Ranpo Edogawa', 'https://i.ibb.co/N72tyGX/3a48a243af57.png'],
            
            ['Raphtalia', 'https://i.ibb.co/bvFTnpY/61fb9d3c64db.png'],
            
            ['Reborn', 'https://i.ibb.co/1nDsywY/e033c706da2e.png'],
            
            ['Rei Hino (Sailor Mars)', 'https://i.ibb.co/5Fvsv8K/e613c120728c.png'],
            
            ['Reisuke Houjou', 'https://i.ibb.co/FzzhngY/623982d53a6a.png'],
            
            ['Rem', 'https://i.ibb.co/HKGqy7G/ac78497f22dd.png'],
            
            ['Ren Amaki', 'https://i.ibb.co/601dS7Z/51bf5002c42a.png'],
            
            ['Ren Amamiya (Joker)', 'https://i.ibb.co/k6jBjnv/15084024616c.png'],
            
            ['Ren Hakuryuu', 'https://i.ibb.co/x1kWMHV/4dff317f29eb.png'],
            
            ['Renzo Shima', 'https://i.ibb.co/z49Mhhb/510fc9ef032c.png'],
            
            ['Rias Gremory', 'https://i.ibb.co/1Q2yBst/68723e18e8b9.png'],
            
            ['Riko Saikawa', 'https://i.ibb.co/rfzXskH/1746efa83678.png'],
            
            ['Rimuru Tempest', 'https://i.ibb.co/yFk40wW/5ba32f77c314.png'],
            
            ['Rin Okumura', 'https://i.ibb.co/3kQMj5z/64fca10e066f.png'],
            
            ['Rintarou Okabe', 'https://i.ibb.co/HKDg0GG/7b294198f3a7.png'],
            
            ['Rin Tohsaka', 'https://i.ibb.co/Dw07LFN/ad716aa736b5.png'],
            
            ['Ririka Momobami', 'https://i.ibb.co/TRpGPrB/b679f0ec25f7.png'],
            
            ['Ritsu', 'https://i.ibb.co/t3GVVNm/c206ec15952b.png'],
            
            ['Ritsu Kageyama', 'https://i.ibb.co/sP13hLn/83402ae6f9c0.png'],
            
            ['Ritsu Tainaka', 'https://i.ibb.co/qnW9fn3/2dffe767869a.png'],
            
            ['Riza Hawkeye', 'https://i.ibb.co/TPBNXCN/6f43cbbdaab1.png'],
            
            ['Rize Tedeza', 'https://i.ibb.co/wZnypZH/b5db3ea9d04b.png'],
            
            ['Rock Lee', 'https://i.ibb.co/NSGZC15/431cbfe0026e.png'],
            
            ['Roronoa Zoro', 'https://i.ibb.co/2dcGcFZ/a958f9668d24.png'],
            
            ['Rossweisse', 'https://i.ibb.co/7ntLMsn/69e750800fdd.png'],
            
            ['Roy Mustang', 'https://i.ibb.co/0MBzPp2/2bc65ca7502e.png'],
            
            ['Rukia Kuchiki', 'https://i.ibb.co/stw2pHJ/de737aae50c2.png'],
            
            ['Ryohei Sasagawa', 'https://i.ibb.co/JrHQ964/fc2f2ac3e145.png'],
            
            ['Ryo Kurokiba', 'https://i.ibb.co/R37s3vq/6da93c48cd2c.png'],
            
            ['Ryota Suzui', 'https://i.ibb.co/6tMPZ2Q/bc1856a21d4c.png'],
            
            ['Ryuji Suguro', 'https://i.ibb.co/CMSdbw5/7651e0c2441d.png'],
            
            ['Ryuk', 'https://i.ibb.co/1ZNKHyR/624e9a6fa29f.png'],
            
            ['Ryuko Matoi', 'https://i.ibb.co/6nbqk1Q/8aca5a628612.png'],
            
            ['Ryuu Lion', 'https://i.ibb.co/wyFqKNN/bc7213b7cff9.png'],
            
            ['Saitama', 'https://i.ibb.co/gmgHWzH/47cd861d1465.png'],
            
            ['Sakura Haruno', 'https://i.ibb.co/6HHt8d5/3d34c5e32a44.png'],
            
            ['Sakura Matou', 'https://i.ibb.co/Fb5vrz4/ad71f21e21fa.png'],
            
            ['Sango', 'https://i.ibb.co/cvR6hWr/ddc8b83319d8.png'],
            
            ['Sanji', 'https://i.ibb.co/CBwdzTB/b1e147c13fb2.png'],
            
            ['Sans', 'https://i.ibb.co/9prkyC0/456108998db4.png'],
            
            ['Sasuke Uchiha', 'https://i.ibb.co/f9YRKKd/496504d21a05.png'],
            
            ['Saten Ruiko', 'https://i.ibb.co/cJv1FZg/535ae2cf3c34.png'],
            
            ['Satoru Gojo', 'https://i.ibb.co/qJFwrQ6/cba345d56c21.png'],
            
            ['Satoshi Isshiki', 'https://i.ibb.co/LSTG52j/c94d966f1b18.png'],
            
            ['Satsuki Kiryuin', 'https://i.ibb.co/FKWWVYC/a538387fae11.png'],
            
            ['Sayaka Maizono', 'https://i.ibb.co/Pxz5J3b/bfe6f956dd0e.png'],
            
            ['Sayori', 'https://i.ibb.co/GvM6y2F/87c54c10ee41.png'],
            
            ['Scar', 'https://i.ibb.co/Rvs968P/fa6a74fbbea3.png'],
            
            ['Scathach', 'https://i.ibb.co/BLSwV9M/7481768fc636.png'],
            
            ['Sebas Tian', 'https://i.ibb.co/kyhsVcm/df3a75ef098d.png'],
            
            ['Senku Ishigami', 'https://i.ibb.co/8x9tZGJ/db80c3f9bfac.png'],
            
            ['Sesshomaru', 'https://i.ibb.co/CQ3z9MY/ee99ede71c1f.png'],
            
            ['Shalltear Bloodfallen', 'https://i.ibb.co/wyyNjtT/04dc6a826c09.png'],
            
            ['Sharo Kirima', 'https://i.ibb.co/pjxrQhx/3ab57b38313c.png'],
            
            ['Shido Itsuka', 'https://i.ibb.co/4KP8t66/6a0a2d460067.png'],
            
            ['Shiemi Moriyama', 'https://i.ibb.co/0Jh7pDg/756610c5b1d0.png'],
            
            ['Shigeo Kageyama', 'https://i.ibb.co/DC9DDVs/337627864a3f.png'],
            
            ['Shikamaru Nara', 'https://i.ibb.co/nfsjRqQ/5d91ad6329b8.png'],
            
            ['Shimura Shinpachi', 'https://i.ibb.co/W6ztPHd/9f1d5b65cd58.png'],
            
            ['Shinoa Hiragi', 'https://i.ibb.co/WvkTdPB/0ff4665a97d1.png'],
            
            ['Shinobu Kocho', 'https://i.ibb.co/fqprV5t/a36c80d79134.png'],
            
            ['Shinra Kusakabe', 'https://i.ibb.co/gWZ8jb1/da749cef8989.png'],
            
            ['Shinya Hiragi', 'https://i.ibb.co/TKZPKdL/bf1661864be6.png'],
            
            ['Shinya Kogami', 'https://i.ibb.co/mbv2jDY/5782a96881f7.png'],
            
            ['Shion', 'https://i.ibb.co/6NbdPJf/9a3817cacc86.png'],
            
            ['Shirai Kuroko', 'https://i.ibb.co/W6jXhJL/1173ebaa0b8f.png'],
            
            ['Shirley Fenette', 'https://i.ibb.co/qmz2H3w/6b7335852290.png'],
            
            ['Shiro', 'https://i.ibb.co/dByPP11/e69f66dc81b4.png'],
            
            ['Shirou Emiya', 'https://i.ibb.co/Dg4TZfB/b88490be27f4.png'],
            
            ['Shizue Izawa', 'https://i.ibb.co/RHRNL5D/234da1630fc3.png'],
            
            ['Shogo Makishima', 'https://i.ibb.co/pzHThfZ/dd27670928f8.png'],
            
            ['Shokuhou Misaki', 'https://i.ibb.co/kXz0Cqz/90903b5ca21b.png'],
            
            ['Sho Suzuki', 'https://i.ibb.co/1GZzxdf/7f057d488796.png'],
            
            ['Shota Aizawa (Eraser Head)', 'https://i.ibb.co/WpvcHdv/d66f2bd2a395.png'],
            
            ['Shoto Todoroki', 'https://i.ibb.co/Mk490BG/1ebc2c0157d3.png'],
            
            ['Shoyo Hinata', 'https://i.ibb.co/dfMj11P/cb30cd77bf9d.png'],
            
            ['Shrek', 'https://i.ibb.co/TMyyrsN/db165e8684a3.png'],
            
            ['Shusei Kagari', 'https://i.ibb.co/fSWjmS5/da10f6557409.png'],
            
            ['Sinbad', 'https://i.ibb.co/hMW9bjP/dfd216f6a9e3.png'],
            
            ['Sinon', 'https://i.ibb.co/Rjp8Hzf/1a135f8ccc32.png'],
            
            ['Skeleton', 'https://i.ibb.co/Dpq8RXj/13847b39eb1a.png'],
            
            ['Soma Yukihira', 'https://i.ibb.co/s1vHcc6/82ee420f7364.png'],
            
            ['Son Goku', 'https://i.ibb.co/NnMh2Yx/51f48a6e9a51.png'],
            
            ['Sora', 'https://i.ibb.co/ftz4Mmg/08a93cab49cc.png'],
            
            ['Sosuke Aizen', 'https://i.ibb.co/cy0BJBp/3b8d359694ef.png'],
            
            ['Souei', 'https://i.ibb.co/M1fcXfr/1bb39b2c4f2e.png'],
            
            ['Soul Evans', 'https://i.ibb.co/R2rQCJv/3b9595d58336.png'],
            
            ['Spike Spiegel', 'https://i.ibb.co/gyvfc56/5016dcbe4f4d.png'],
            
            ['Squalo', 'https://i.ibb.co/2WBpLwP/073c6a183d90.png'],
            
            ['Staz C Blood', 'https://i.ibb.co/p0fKfSS/23b204b644a5.png'],
            
            ['Stephanie Dola', 'https://i.ibb.co/fXw5FPv/bea2a8522c1b.png'],
            
            ['Subaru Natsuki', 'https://i.ibb.co/0fPLf7N/231c381c59de.png'],
            
            ['Suika', 'https://i.ibb.co/dJnwBbp/fd9258c5eaaa.png'],
            
            ['Suou Pavlichenko', 'https://i.ibb.co/jD60VbX/b57943a179c3.png'],
            
            ['Suzaku Kururugi', 'https://i.ibb.co/fGQH9hV/b1d801093d7a.png'],
            
            ['Suzuha Amane', 'https://i.ibb.co/64whRxz/0fced7cb5aaa.png'],
            
            ['Suzuya Juuzou', 'https://i.ibb.co/3fYyQHx/0b34d1102a23.png'],
            
            ['Sword Maiden', 'https://i.ibb.co/5sqFCqR/55d6184f4bc2.png'],
            
            ['Takasugi Shinsuke', 'https://i.ibb.co/CWYTkHr/15603713f9a6.png'],
            
            ['Takehisa Hinawa', 'https://i.ibb.co/qj9pTT1/57a7c7a123c1.png'],
            
            ['Takeshi Yamamoto', 'https://i.ibb.co/hLsgSx1/4efac2904ff4.png'],
            
            ['Takumi Aldini', 'https://i.ibb.co/6b5pnHn/a9f74e1d4b54.png'],
            
            ['Tamaki Kotatsu', 'https://i.ibb.co/yFcxFDf/2d1d17a01dab.png'],
            
            ['Tanjiro Kamado', 'https://i.ibb.co/6wbpMkX/85bbed126ea0.png'],
            
            ['Tatsumaki', 'https://i.ibb.co/TmPXRNC/78f58792bbd1.png'],
            
            ['Tatsumi', 'https://i.ibb.co/QbR5pxZ/b5a3e70d3c0f.png'],
            
            ['Teruki Hanazawa', 'https://i.ibb.co/vq2nfVP/462d05640a94.png'],
            
            ['Tet', 'https://i.ibb.co/hXn9CC4/000dded68bba.png'],
            
            ['Tetsuro Kuroo', 'https://i.ibb.co/TWDRG6W/a7f638b836f2.png'],
            
            ['Tobio Kageyama', 'https://i.ibb.co/jWNRVnp/a1cc09b21772.png'],
            
            ['Toge Inumaki', 'https://i.ibb.co/92ZXHR2/b1ce08951c48.png'],
            
            ['Tohka Yatogami', 'https://i.ibb.co/G0NGKvQ/3b9812f06da2.png'],
            
            ['Tohru', 'https://i.ibb.co/P6DCbwS/863f1ddc6e6f.png'],
            
            ['Toko Fukawa', 'https://i.ibb.co/rp9XjDS/9be8f3cdb613.png'],
            
            ['Tony Tony Chopper', 'https://i.ibb.co/P9ZQvXp/36dcf2c261eb.png'],
            
            ['Toshiro Hitsugaya', 'https://i.ibb.co/4T7gfpL/aaefc82c23be.png'],
            
            ['Touka Kirishima', 'https://i.ibb.co/yFKtpbN/c01c8e4d4238.png'],
            
            ['Trafalgar D Law', 'https://i.ibb.co/Tv1mwrh/c08fb7110816.png'],
            
            ['Trunks', 'https://i.ibb.co/K7zPHTw/cf5469cff58c.png'],
            
            ['Tsubaki Kasugano', 'https://i.ibb.co/TW3ZLR5/769b61f847a4.png'],
            
            ['Tsukasa Shishio', 'https://i.ibb.co/yfsxsmx/0c02c6362ccb.png'],
            
            ['Tsukuyo', 'https://i.ibb.co/JvQz47B/02dfdd71c813.png'],
            
            ['Tsumugi Kotobuki', 'https://i.ibb.co/fFRFGVC/164e68457b8e.png'],
            
            ['Tsunayoshi Sawada (Tsuna)', 'https://i.ibb.co/5RzVhqD/633c7576d343.png'],
            
            ['Ukyo Saionji', 'https://i.ibb.co/wBQqN84/3c6d970be0f7.png'],
            
            ['Ulquiorra Schiffer', 'https://i.ibb.co/8c1bfgL/913714e2438e.png'],
            
            ['Usagi Tsukino (Sailor Moon)', 'https://i.ibb.co/VYp8hYy/4b902712aeef.png'],
            
            ['Usopp', 'https://i.ibb.co/2y4wFdb/c0cfb88bc5e9.png'],
            
            ['Uzu Sanageyama', 'https://i.ibb.co/122y1P8/81bf0a6ecc1c.png'],
            
            ['Vegeta', 'https://i.ibb.co/8PdmL5L/8f8d48553f77.png'],
            
            ['Vicious', 'https://i.ibb.co/N22bPxn/12c41ca03d7d.png'],
            
            ['Violet Evergarden', 'https://i.ibb.co/TLxvwNn/7ec335985eee.png'],
            
            ['Wave', 'https://i.ibb.co/RSys4P7/701d7ff972f2.png'],
            
            ['Wendy Marvell', 'https://i.ibb.co/Jsdpprf/7c232c7c9ea5.png'],
            
            ['Wiz', 'https://i.ibb.co/TcjyN5L/3cbc80f774fc.png'],
            
            ['Wolf', 'https://i.ibb.co/LxbmF28/3e47676cb00d.png'],
            
            ['Yami Sukehiro', 'https://i.ibb.co/rtMY0G6/1d12243af4c8.png'],
            
            ['Yato', 'https://i.ibb.co/Ss4Cg0T/2389136202d4.png'],
            
            ['Yin', 'https://i.ibb.co/rQGzY7w/50b78fe983ac.png'],
            
            ['Yoichi Saotome', 'https://i.ibb.co/bzNNwVV/693de3f85211.png'],
            
            ['Yoko Kurama', 'https://i.ibb.co/QXzs7rN/f041282073da.png'],
            
            ['Yoshino', 'https://i.ibb.co/GtdrZ9v/55156fef6d67.png'],
            
            ['Yotsuba Nakano', 'https://i.imgur.com/HBeoXM5.png'],
            
            ['Yui', 'https://i.ibb.co/jyWMw04/fe31d44e47f3.png'],
            
            ['Yuichiro Hyakuya', 'https://i.ibb.co/3BJNv6C/3eeaea78c111.png'],
            
            ['Yui Hirasawa', 'https://i.ibb.co/8zfhRHr/1aa314975f9f.png'],
            
            ['Yu Ishigami', 'https://i.ibb.co/64s13Yb/28fdf84aacdd.png'],
            
            ['Yuji Itadori', 'https://i.ibb.co/WxtMDXB/8ec7348d6443.png'],
            
            ['Yukichi Fukuzawa', 'https://i.ibb.co/kMtg94W/c564ee9b5500.png'],
            
            ['Yukina', 'https://i.ibb.co/gts5hfB/a90e2b972bf1.png'],
            
            ['Yukine', 'https://i.ibb.co/rbSHdM5/359c5d60782f.png'],
            
            ['Yuki Nonaka', 'https://i.ibb.co/NTtjqVH/0e31c1dd5fed.png'],
            
            ['Yukio Okumura', 'https://i.ibb.co/q9qdr28/4c890ffa1c7e.png'],
            
            ['Yukiteru Amano', 'https://i.ibb.co/Snq8sLr/d2d7e4734db6.png'],
            
            ['Yumeko Jabami', 'https://i.ibb.co/Tv6fY9C/7818fc337ed8.png'],
            
            ['Yu Nishinoya', 'https://i.ibb.co/Vvfth6j/ebd6a8253236.png'],
            
            ['Yuno', 'https://i.ibb.co/HFzZgYy/05d6b75ee2a6.png'],
            
            ['Yuno Gasai', 'https://i.ibb.co/7vHTYKy/11a3d94ff547.png'],
            
            ['Yunyun', 'https://i.ibb.co/x2DJcCx/e0b44bc3a040.png'],
            
            ['Yuri', 'https://i.ibb.co/YpWVst2/16690ec1eb4e.png'],
            
            ['Yuriko Nishinotouin', 'https://i.ibb.co/wRwRvPx/d00ead942bd1.png'],
            
            ['Yuri Nakamura', 'https://i.ibb.co/98mWBzB/ca8ac2e35fd8.png'],
            
            ['Yusuke Urameshi', 'https://i.ibb.co/Yfc63qJ/f8fb861cea53.png'],
            
            ['Yuta Okkotsu', 'https://i.ibb.co/Q965nPv/2dcecbd614c6.png'],
            
            ['Yuzuru Otonashi', 'https://i.ibb.co/tpy15BZ/ef10ed24e5a8.png'],
            
            ['Zenitsu Agatsuma', 'https://i.ibb.co/XLvN6ZX/3e298e0db95e.png'],
            
            ['Zero Two', 'https://i.ibb.co/qxqzw8r/4f5d6cd512e6.png'],
            
            ['Zest', 'https://i.ibb.co/LRGZNvq/9002a3c9a925.png'],
            
            ['Zombieman', 'https://i.ibb.co/cwvtLSq/c5470847a8b3.png'],
            
            ['Zora Ideale', 'https://i.ibb.co/M94bfc7/eab1e173040e.png']
            
            ]
        var rarities = [[1,'Common',0],[2,'Uncommon',0],[3,'Rare',0],[4,'Super Rare',0],[5,'Ultra Rare',0]]  
        if (arguments[0]) {
            if (arguments[0].toLowerCase() === 'rare' || arguments[0].toLowerCase() === 'r') {
                if (arguments[1]) {
                    if (arguments[1].toLowerCase() === 'pack') {
                        //message.channel.send(`Works`)
                        let cardRarityNo = 0
                        var gotRarities = []
                        let allCardIdRecieved = []
                        for (let i=0; i<5; i++) {
                            let chance = Math.floor((Math.random()*1001)+1)
                            var cardIds = Math.floor((Math.random()*526))
                            if (cardIds === 1 || cardIds === 2) { cardIds =3 }
                            if (cardIds === 44 || cardIds === 122 || cardIds === 123 || cardIds === 126 || cardIds === 141 || cardIds === 158 || cardIds === 180 || cardIds === 315 || cardIds === 318 || cardIds === 330 || cardIds === 341 || cardIds === 348 || cardIds === 364 || cardIds === 396 || cardIds === 403 || cardIds === 433 || cardIds === 437 || cardIds === 488 || cardIds === 516 ) {
                                cardIds++
                            }
                            allCardIdRecieved.push(cardIds)
                            //console.log(cardId)
                            //console.log(i)
                            if (chance>=1 && chance<=500) {
                                cardRarityNo = 2
                            } else if (chance>=501 && chance<=920) {
                                cardRarityNo = 3
                            } else if (chance>=921 && chance<=1000) {
                                cardRarityNo = 4
                            } else if (chance === 1001) {
                                cardRarityNo = 5
                            }
                            gotRarities+=cardRarityNo
                        }
                        for (let Id of allCardsRecieved) {
                            if (Id === 1 || Id === 2) { Id =3 }
                            if (Id === 44 || Id === 122 || Id === 123 || Id === 126 || Id === 141 || Id === 158 || Id === 180 || Id === 315 || Id === 318 || Id === 330 || Id === 341 || Id === 348 || Id === 364 || Id === 396 || Id === 403 || Id === 433 || Id === 437 || Id === 488 || Id === 516 ) {
                                Id = Id+1
                            }
                        }
        
                        for (let words of arguments) {
                            if (words.toLowerCase() === 'ur') {
                                gotRarities[0] = 5
                            }
                        }
                        let rarityRecieved = ''
                        let allRarityRecieved = []
                        for(let eachCardRarity of gotRarities) {
                            //console.log(eachCardRarity)
                            for (let eachLog of rarities) {
                                if (parseInt(eachCardRarity) === parseInt(eachLog[0])) {
                                    rarityRecieved = eachLog[1]
                                    //console.log(rarityRecieved)
                                    allRarityRecieved.push(`${rarityRecieved}`) 
                                }
                            }
                        }
                        let allCardsRecieved = []
                        let allCardsRecievedIMG = []
                        cardId = -1
                        for (let eachCard of imageList) {
                            cardId++
                            for (let eachId of allCardIdRecieved) {
                                if (parseInt(cardId) === parseInt(eachId)) {
                                    cardReceived = eachCard[0]
                                    cardReceivedIMG = eachCard[1]
                                    allCardsRecieved.push(`${cardReceived}`)
                                    allCardsRecievedIMG.push(`${cardReceivedIMG}`)
                                }
                            }
                        }
                        message.channel.send(`Summoner, you have totally not spent __10000__ gold and received...`)

                        // Image Formation

                        const canvas = Canvas.createCanvas(700, 190);
                        const ctx = canvas.getContext('2d');
                        const image1 = await Canvas.loadImage(allCardsRecievedIMG[0])
                        ctx.drawImage(image1, 0, 0, 150, canvas.height)
                        const image2 = await Canvas.loadImage(allCardsRecievedIMG[1])
                        ctx.drawImage(image2, 140, 0, 150, canvas.height)
                        const image3 = await Canvas.loadImage(allCardsRecievedIMG[2])
                        ctx.drawImage(image3, 280, 0, 150, canvas.height)
                        const image4 = await Canvas.loadImage(allCardsRecievedIMG[3])
                        ctx.drawImage(image4, 420, 0, 150, canvas.height)
                        const image5 = await Canvas.loadImage(allCardsRecievedIMG[4])
                        ctx.drawImage(image5, 560, 0, 150, canvas.height)

                        //console.log(canvas.toBuffer())

                        const attachment = new MessageAttachment(canvas.toBuffer(), 'pack.png')

                        var PackEmbed = new MessageEmbed()
                            .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
                            .setTitle(`**Pack Opened!**`)
                            .setDescription(`The following cards have totally not been added to your inventory.\n\n\n${allRarityRecieved[0]} **${allCardsRecieved[0]}** \n\n\n${allRarityRecieved[1]} **${allCardsRecieved[1]}**  \n\n\n${allRarityRecieved[2]} **${allCardsRecieved[2]}**  \n\n\n${allRarityRecieved[3]} **${allCardsRecieved[3]}** \n\n\n${allRarityRecieved[4]} **${allCardsRecieved[4]}**`)
                            .setThumbnail(client.user.displayAvatarURL({dynamic:true}))
                            .setColor(`0x00FFFF`)
                            .setImage('attachment://pack.png')
                            //.setImage(`https://images-ext-1.discordapp.net/external/f_JUHSZMo_iIBjEw-8BuZUV87jxszrgaId1EYIsrWv8/https/images-ext-2.discordapp.net/external/5h8Ft5MRCb9FmYlUsT220MGfh7i7yrDp2mPbKXJLlsU/https/images-ext-1.discordapp.net/external/UB5EKO5TGAFdE2UHSkTz_GKEMMV_ZgYRQ5pmhK0XnME/https/images-ext-2.discordapp.net/external/RbeQMn91CZtIgt0CRTw5_VGQ3H-PT4QTj-h6FZ-MmI8/https/images-ext-2.discordapp.net/external/HD0NjjqqY_xfttHZYBQ3qxy4jZvhh8QsWsPZcoUriSg/https/images-ext-2.discordapp.net/external/8NJyq6wOTFhB7sV5aZZPM0sxVFu-OqbqA_r3_ICuWjQ/https/images-ext-2.discordapp.net/external/AobYlw89XPgp-M3JO6iaFil57Kebob1IiEI1Gj-WsYM/https/images-ext-1.discordapp.net/external/kkksUy6_ndRNH4FMfF_HjdKdj9cSdzTQ3tTgS_s1yyM/https/images-ext-2.discordapp.net/external/1pMUJZCNS-yfcutpPnM2eDIUcgjdUb8wq-LAlZM2fR0/https/images-ext-1.discordapp.net/external/4HwlXd41JDHUSGTnM-ce-QhnskgFaRyjDeMQRfD5YSo/https/images-ext-1.discordapp.net/external/xSNDHHsVGgPyY-f-9G_3Uak_N45Fy8GCo4NqmE29qPs/https/images-ext-2.discordapp.net/external/V48ALmFdzKnukxMTxmOM5k_F8LwvUn8k2PZAr6gpNS4/https/images-ext-2.discordapp.net/external/_gXH4EtzH7OhPK-qv2YtLP0Q_J-PEVoXX6JgonG9YC8/https/media.discordapp.net/attachments/784430986532356106/833002587774255144/image0.png`)

                        message.channel.send({ embeds : [PackEmbed] , files: [attachment] })
                        // console.log(allRarityRecieved)
                        // console.log(allCardIdRecieved)
                        // console.log(allCardsRecieved)
                    }
                }
            }
        }
    }
}