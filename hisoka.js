
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const crypto = require('crypto')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
//━━━━━━━━━━━━━━━[ VIRTEX ]━━━━━━━━━━━━━━━━━//
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { bughole } = require('./virtex/bughole')
//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
//━━━━━━━━━━━━━━━[ DATABASE RPG ]━━━━━━━━━━━━━━━━━//
// E V E N T  G A M E📍
let event = JSON.parse(fs.readFileSync('./lib/data/event.json'))
//D A T A B A S E  U S E R📍
let limit = JSON.parse(fs.readFileSync('./lib/bot/limit.json'));
let balance = JSON.parse(fs.readFileSync('./lib/bot/balance.json'));
let glimit = JSON.parse(fs.readFileSync('./lib/bot/glimit.json'));
let pendaftar = JSON.parse(fs.readFileSync('./lib/bot/user.json'))
// I V E N T O R Y  U S E R📍
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish, addPet, getPet } = require("./lib/rpgfunction");
//D A T A B A S E  R P G📍
let _RPG = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./lib/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let { TelegraPh } = require('./lib/uploader')
//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
//━━━━━━━━━━━━━━━[ GROUP ]━━━━━━━━━━━━━━━━━//
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPetualang = checkPetualangUser(m.sender)
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//━━━━━━━━━━━━━━━[ WAKTU ]━━━━━━━━━━━━━━━━━//
       const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
       const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
       const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync('./lib/hisoka.jpg'), surface: 200, message: `D H A N I O F C`, orderTitle: 'Please Subscribe Youtube DhaniOfc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true} 
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `I’m From Indonesia 🇮🇩`,jpegThumbnail: thumb}}}
//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
      let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
//━━━━━━━━━━━━━━━[ LEVEL ROLE ]━━━━━━━━━━━━━━━━━//
const levelRole = getLevelingLevel(m.sender)
   	     var role = 'bronz'
   	     if (levelRole <= 3) {
   	         role = 'Copper'
   	     } else if (levelRole <= 5) {
   	         role = 'Iron'
   	     } else if (levelRole <= 7) {
   	         role = 'Silver'
   	     } else if (levelRole <= 10) {
   	         role = 'Gold'
   	     } else if (levelRole <= 12) {
   	         role = 'Platinum'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Orichalcum'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamantite'
   	     } else if (levelRole <= 45) {
   	         role = 'Good In Game'
   	     }    
//━━━━━━━━━━━━━━━[ SAYA AMBIL DARI FEBRI ]━━━━━━━━━━━━━━━━━//   
        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
        var petnya = ['😾','🐺','🦊','🐶','🐰']
        var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
        var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
                    
        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍋 : 🍋 : 🍋 Win👑', 
        '🔔 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',    
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔', 
        '🍊 : 🍒 : 🍐', 
        '🍒 : 🔔 : 🍊', 
        '🍇 : 🍇 : 🍇 Win👑', 
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐', 
        '🔔 : 🍒 : 🍊', 
        '🍊 : 🍋 : 🔔',	
        '🍐 : 🍒 : 🍋', 
        '🍐 : 🍐 : 🍐 Win👑', 
        '🍊 : 🍒 : 🍒', 
        '🔔 : 🔔 : 🍇', 
        '🍌 : 🍒 : 🔔', 
        '🍐 : 🔔 : 🔔', 
        '🍊 : 🍋 : 🍒', 
        '🍋 : 🍋 : 🍌', 
        '🔔 : 🔔 : 🍇', 
        '🔔 : 🍐 : 🍇', 
        '🍌 : 🍌 : 🍌 Win👑']   
//━━━━━━━━━━━━━━━[ RANDOM NOMOR ]━━━━━━━━━━━━━━━━━//
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
  }
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
function monospace(string) {
            return '```' + string + '```'
        }
        function bintang(string) {
            return '*' + string + '*'
        }
        function miring(string) {
            return '_' + string + '_'
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
//━━━━━━━━━━━━━━━[ PUBLIC\SELF ]━━━━━━━━━━━━━━━━━//
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//━━━━━━━━━━━━━━━[ LIMIT ]━━━━━━━━━━━━━━━━━//
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
//━━━━━━━━━━━━━━━[ AUTO SET BIO ]━━━━━━━━━━━━━━━━━//
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
//━━━━━━━━━━━━━━━[ ANTI LINK ]━━━━━━━━━━━━━━━━━//
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
//━━━━━━━━━━━━━━━[ MUTE CHAT ]━━━━━━━━━━━━━━━━━//
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//━━━━━━━━━━━━━━━[ RESPON CMD MEDIA ]━━━━━━━━━━━━━━━━━//
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
//━━━━━━━━━━━━━━━[ TICTACTOE ]━━━━━━━━━━━━━━━━━//
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//━━━━━━━━━━━━━━━[ SUIT PVP ]━━━━━━━━━━━━━━━━━//
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
switch(command) {
//━━━━━━━━━━━━━━━[ AFK ]━━━━━━━━━━━━━━━━━//
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
}
break	
case 'darkjokes': 
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://hadi-api.herokuapp.com/api/darkjokes`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'simi':
if (!m.isGroup) throw mess.group
const cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
hisoka.sendMessage(m.chat, { text: cimcimi.success})
break
//━━━━━━━━━━━━━━━[ GAME MENU ]━━━━━━━━━━━━━━━━━//
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'sc': case 'scrip': {
hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/f30498d2c36818a004e67.jpg' }, caption: `⭔MAO SC NYA YA KAK SUBSCRIBE CHANNEL YOUTUBE GW DULU YA GUYS` }, { quoted: m })
}
break
case 'chat': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
   }
}
break
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await hisoka.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
    }
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'tebak': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
     }
   }
}
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./src/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
   }
}
break
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
}
break
//━━━━━━━━━━━━━━━[ GROUP MENU ]━━━━━━━━━━━━━━━━━//
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setexif': {
if (!isCreator) throw mess.owner
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
 case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `     〘  TAG ALL 〙
 
 *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'style': case 'styletext': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
  }
m.reply(teks)
}
break
case 'vote': {
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: hisoka.user.name,
buttons: buttonsVote,
headerType: 1
   }
hisoka.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: hisoka.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
   }
hisoka.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: hisoka.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
   }
hisoka.sendMessage(m.chat, buttonMessageDevote)
}
break                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)
   }
}
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)
}
}
break
case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
   }
}
break
case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${hisoka.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
    }
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
let response = await hisoka.groupInviteCode(m.chat)
hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
   }
}
break
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await hisoka.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 882-9202-4190'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 882-9202-4190'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await hisoka.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await hisoka.groupMetadata(i)
teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
//━━━━━━━━━━━━━━━[ PETUALANGAN MENU ]━━━━━━━━━━━━━━━━━//
case 'profile': case 'rpgmenu':
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Uang : $${(getBalance(m.sender, balance))}
 • Xp : ${getLevelingXp(m.sender)}/${reqXp}
 • Level : ${getLevelingLevel(m.sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(m.sender, balance))}
 • Emas : ${getEmas(m.sender)}
 • Besi : ${getBesi(m.sender)}
 • Ikan : ${getFish(m.sender)}
 • Berlian : ${getDm(m.sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest 
 • mining
 • mancing
 • luckyday
 • adventure
 • myinventori
 • topleaderboard
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 • killslime
 • killgoblin
 • killdevil
 • killbehemoth
 • killdemond
 • killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: hisoka.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pp,
hydratedButtons: [{
urlButton: {
displayText: 'Group Wa',
url: 'https://chat.whatsapp.com/F9MPedE7AzPIl8ZWuDw3nF'
}
}, {
urlButton: {
displayText: 'Youtube',
url: 'https://youtube.com/c/DhaniOfc/'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '𝑺𝒄𝒓𝒊𝒑𝒕',
id: 'sc'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
break
case 'mybag':
case 'cekinven':
case 'inventori':
case 'myinventori':
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿

 • Nama : ${pushname}
 • Rank : ${role}
 • Xp : ${getLevelingXp(m.sender)}/${reqXp}
 • Level : ${getLevelingLevel(m.sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :

 • Emas : ${getEmas(m.sender)}🪙
 • Uang : $${(getBalance(m.sender, balance))}💰
 • Besi : ${getBesi(m.sender)}⛓️
 • Berlian : ${getDm(m.sender)}💎
 • Ikan : ${getFish(m.sender)}🎣`)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
  }
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 882-9202-4190'
   }
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
  }
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
 }  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
 }
}]
hisoka.send5ButImg(m.chat, done, hisoka.user.name, global.thumb, btn)
break
//━━━━━━━━━━━━━━━[ EFEK STICKER ]━━━━━━━━━━━━━━━━━//
case 'smeme': case 'stickermeme': case 'stickmeme': {	
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'wasted':
case 'joke':
case 'hitler':
case 'wanted':
case 'greyscale':
case 'trash':
case 'cicle':
case 'blur':
case 'sepia':
case 'invert':
case 'affect':
case 'picture': {
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://leyscoders-api.herokuapp.com/api/img/${command}?url=${mem}&apikey=IkyOgiwara`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case '1977': 
case 'aden':
case 'clarendon':
case 'gingham':
case 'hudson': 
case 'inkwell': 
case 'earlybird': 
case 'kelvin': 
case 'lark':
case 'lofi': 
case 'maven': 
case 'mayfair': 
case 'moon': 
case 'nashville': 
case 'perpetua': 
case 'reyes': 
case 'rise': 
case 'slumber': 
case 'stinson': 
case 'toaster': 
case 'valencia': 
case 'walden': 
case 'willow': 
case 'xpro2': {
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/filter/${command}?apikey=sanzychan01&img=${mem}`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'jail':
case 'rainbow':
case 'rip': {
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.lolhuman.xyz/api/creator1/${command}?apikey=sanzychan01&img=${mem}`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'spongebob': case 'patrick': {
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://hardianto.xyz/api/knights/${command}?apikey=hardianto&pp=${mem}`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
//━━━━━━━━━━━━━━━[ VIRUS/VIRTEX ]━━━━━━━━━━━━━━━━━//
case 'virus1':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, virtex2(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'virus2':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, virtex3(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'virus3':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, virtex4(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'virus4':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, virtex5(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'virus5':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, virtex6(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'virus6':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, virtex7(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'virus7':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, virtex8(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'virus8':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, virtex9(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'virus9':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, ngazap(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'virus10':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, emoji2(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'bug1':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, vweb9(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'bughole':
if (!isCreator) throw mess.owner
hisoka.sendText(m.chat, bughole(prefix), text, {quoted: ftroli, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
//━━━━━━━━━━━━━━━[ FITUR NULIS ]━━━━━━━━━━━━━━━━━//
case 'tulis': case 'nulis': {
if (args.length < 1) return m.reply('apa yang mau ditulis kak?')
teks = args.join(' ')
m.reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return m.reply(res.data.error)
buff1 = Buffer.from(res.data.result.split(',')[1], 'base64')
hisoka.sendMessage(m.chat, { image: buff1,caption: 'Nih Kak' }, { quoted: ftroli}).catch(e => {
return m.reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})       
}
break
//━━━━━━━━━━━━━━━[ LOGO MAKER ]━━━━━━━━━━━━━━━━━//
case 'guramaker':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} DhaniOfc`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {caption: `Nih Kak`, image: {url: `https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${q}`}}, {quoted: m })
break
case 'kanekimaker':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} DhaniOfc`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {caption: `Nih Kak`, image: {url: `https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${q}`}}, {quoted: m })
break
case 'lolimaker':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} DhaniOfc`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {caption: `Nih Kak`, image: {url: `https://hardianto.xyz/api/bot/gfx2?apikey=hardianto&nama=${q}`}}, {quoted: m })
break
case 'waifumaker':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} DhaniOfc`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {caption: `Nih Kak`, image: {url: `https://hardianto.xyz/api/bot/gfx4?apikey=hardianto&text1=${text}&text2=${text}`}}, {quoted: m })
break
case 'sadboymaker':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} DhaniOfc`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {caption: `Nih Kak`, image: {url: `https://hardianto.xyz/api/bot/gfx3?apikey=hardianto&text1=${q}&text2=${q}`}}, {quoted: m })
break
case 'remmaker':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} DhaniOfc`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {caption: `Nih Kak`, image: {url: `https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${q}`}}, {quoted: m })
break
//━━━━━━━━━━━━━━━[ BUTTON MAKER ]━━━━━━━━━━━━━━━━━//
case 'silverbutton':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} DhaniOfc`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {caption: `Nih Kak`, image: {url: `https://saipulanuar.herokuapp.com/api/maker/silver-button?apikey=FreeApikey&text=${q}`}}, {quoted: m })
break
case 'goldbutton':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} DhaniOfc`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {caption: `Nih Kak`, image: {url: `https://saipulanuar.herokuapp.com/api/maker/gold-button?apikey=FreeApikey&text=${q}`}}, {quoted: m })
break
//━━━━━━━━━━━━━━━[ PRIMBON MENU ]━━━━━━━━━━━━━━━━━//
case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (!text) throw `Example : ${prefix + command} Dika Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Example : ${prefix + command} Dika|Novia`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])          
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//━━━━━━━━━━━━━━━[ CONVERSATION ]━━━━━━━━━━━━━━━━━//
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
m.reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
//━━━━━━━━━━━━━━━[ DOWNLOADER ]━━━━━━━━━━━━━━━━━//
case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶


*Data Berhasil Didapatkan!*

⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'mediafire': case 'mediafiredl': {
if (!text) throw 'No Query Url!'
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=sanzychan01&url=${text}`)
let buttons = [{buttonId: `mddl ${isUrl(text)}`, buttonText: {displayText: 'DOWNLOAD'}, type: 1}]
let buttonMessage = {
text: `File Berhasil Di Dapatkan\n\nNama : ${anu.result.filename}\nSize : ${anu.result.filesize}\nLink : ${anu.result.link}\nUpload : ${anu.result.uploaded}\n\nSilahkan Klik Tombol Download Di Bawah Ini`,
footerText: `Press The Button Below`,
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
}
break
case 'mddl': {
if (!text) throw 'No Query Url!'
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=sanzychan01&url=${text}`)
hisoka.sendText(m.chat, util.format(anu), m)
hisoka.sendMedia(m.chat, anu.result.link, {quoted: ftroli, mimetype: anu.result.mime, filename: anu.result.filename})
}
break
case 'instagram': case 'ig': case 'igdl': {
if (!text) throw 'No Query Url!'
m.reply(mess.wait)
if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
for (let media of anu.data) hisoka.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
} else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
hisoka.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
   }
}
break
case 'joox': case 'jooxdl': {
if (!text) throw 'No Query Title'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
let msg = await hisoka.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
}
break
case 'soundcloud': case 'scdl': {
if (!text) throw 'No Query Title'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
}
break
case 'twitdl': case 'twitter': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
let buttons = [
{buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
]
let buttonMessage = {
video: { url: anu.result.HD || anu.result.SD },
caption: util.format(anu.result),
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'twittermp3': case 'twitteraudio': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
let buttons = [
{buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.result.thumb },
caption: util.format(anu.result),
footer: 'Press The Button Below',
buttons: buttons,
headerType: 4
}
let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
}
break
case 'fbdl': case 'fb': case 'facebook': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(`https://yx-api.herokuapp.com/api/download/fb?url=${url}`)
hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
}
break
case 'pindl': case 'pinterestdl': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
}
break
case 'umma': case 'ummadl': {
if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
let { umma } = require('./lib) scraper')
let anu = await umma(isUrl(text)[0])
if (anu.type == 'video') {
let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.author.profilePic },
caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
footer: hisoka.user.name,
buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
} else if (anu.type == 'image') {
anu.media.map(async (url) => {
hisoka.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
})
}
}
break
case 'ringtone': {
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'getmusic': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${media.dl_link}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'getvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${media.dl_link}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//━━━━━━━━━━━━━━━[ MAKER ]━━━━━━━━━━━━━━━━━//
case '1917': 
case '3d-crack-text-effect-online': 
case '3d-underwater': 
case '3d-wood': 
case '3d-wood2':
case '3damerican-flag':
case '3dgalaxy-metal': 
case '3dgold':
case '3dgradient':
case '3dgradient2':
case '3dmetal-effect':
case '3dmetal-text-':
case '3dmulticolor-papercut':
case '3dpig-gif':
case '3drose-gold':
case '3druby-stone':
case '3dsand-engraved':
case '3dshiny-metallic':
case '3dsilver':
case '3dspace':
case '3dsparkle-christmas':
case '3dstone':
case '3dsub-zombie':
case '3dtext-effect':
case '3dtext-effect2':
case '3dtext-effect3':
case '3dtext-pig':
case '3dvalentine-cards':
case '3dvintage-light-bulb':
case '3dxmas-cards':
case '3dxmas-cards2':
case '83day-card':
case '83day-card2':
case '83day-card3':
case '83day-card4':
case 'advanced-glow':
case 'ahri-league-of-legends':
case 'alice-league-of-kings':
case 'amily-arena-of-valor':
case 'angels-wings':
case 'anonymous-neon':
case 'art-shader':
case 'avengers':
case 'azzenka-league-of-kings':
case 'balloon-noel':
case 'balloon-text':
case 'balloons-cards':
case 'balloons-love':
case 'bats-halloween': {
if (!text) throw `Example : ${prefix + command} SanzyYT`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.violetics.pw/api/ephoto360/${command}?apikey=beta&text=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'airline': case 'ballon': case 'beach-sign': case 'blood_writing': case 'bracelet': case 'cemetery-gates': case 'chalk_writing': case 'christmas-writing': case 'cookies_writing': case 'denim-emdroidery': case 'einstein': case 'foggy_window_writing': case 'fortune-cookie': case 'frosty-window-writing': case 'haunted-hotel': case 'heart_tattoo': case 'light-graffiti': case 'lipstick-writing': case 'nightmare-writing': case 'noir': case 'pendant': case 'plane-banner': case 'sand_writing': case 'snow-sign': case 'soup_letters': case 'street-sign': case 'typewriter': case 'water-writing': case 'wooden_sign': case 'yacht': {
if (!text) throw `Example : ${prefix + command} SanzyYT`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.violetics.pw/api/photofunia/${command}?apikey=beta&name=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
if (!text) throw `Example : ${prefix + command} text`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
}
break
case '3d-effect': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dgold': case '3dgolden': case '3dgradient': case '3dgradient': case '3dlove': case '3dluxury': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3drosegold': case '3dscifi': case '3dsilver': case '3dspace': case '3dstone': case '3dtext-effect': case '3dunderwater': case '3dvintage': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'avengers': case 'azzenka-league-of-kings': case 'balloons-cards': case 'balloons-love': case 'bearlogo': case 'bg-crossfire': case 'birthday-cake': case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bulb-effect': case 'bubble-effect': {
if (!text) throw `Example : ${prefix + command} SanzyYT`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.violetics.pw/api/textpro/${command}?apikey=beta&text=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
if (!text) throw 'No Query Text'
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
}
break
case 'shadow': case 'cup': case 'cup1': case 'burnpaper': case 'lovemessage': case 'undergrass': case 'woodheart': case 'woodenboard': case 'wolfmetal': case 'nature3d': case 'underwater': case 'golderrose': case 'fallleaves': case 'flamming': case 'harrypotter': {
if (!text) throw `Example : ${prefix + command} SanzyYT`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=sanzychan01&text=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
if (!text) throw 'No Query Text'
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
}
break
case 'wetglass': case 'multicolor3d': case 'watercolor': case 'luxurygold': case 'galaxywallpaper': case 'lighttext': case 'beautifulflower': case 'royaltext': case 'heartshaped': case 'birdhdaycake': case 'galaxystyle': case 'hologram3d': case 'greenneon': case 'glossychrome': case 'greenbush': case 'metallogo': case 'neoltext': case 'glittergold': case 'textcake': case 'startsnight': case 'wooden3d': case 'textbyname': case 'writegalacy': case 'galaxybat': case 'snow3d': case 'birthdayday': case 'silverplaybutton': case 'cartoongravity': case 'anonymhacker': case 'mlwall': case 'pubgmaskot': case 'aovwall': case 'logogaming': case 'fpslogo': case 'avatarlolnew': case 'lolbanner': case 'avatardota': {
if (!text) throw `Example : ${prefix + command} SanzyYT`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=sanzychan01&text=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'juventusshirt': case 'cutegravity': case 'realvintage': case 'codwarzone': {
if (!text) throw `Example : ${prefix + command} SanzyYT`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=sanzychan01&text1=${text}&text2=${text}`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
//━━━━━━━━━━━━━━━[ RANDOM IMAGE ]━━━━━━━━━━━━━━━━━//
case 'couple': {
m.reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'coffe': case 'kopi': {
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'bokep': {
m.reply(mess.wait)
let anu = await getBuffer(`https://saipulanuar.herokuapp.com/api/bokepig?apikey=FreeApikey`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
case 'teknologi': case 'mountain': case 'cyberspace': case 'programming':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://yx-api.herokuapp.com/api/wallpaper/${command}`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
//══════════[ STALK MENU ]══════════//
case 'ytstalk': 
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/yt-stalk?q=${q}&apikey=IkyOgiwara`)
var captnya = `\`\`\`⭔ Channel : ${data.result.channel}\`\`\`\n\`\`\`⭔ Subscriber : ${data.result.subscriber_count}\`\`\`\n\`\`\`⭔ Verified : ${data.result.is_verified}\`\`\`\n\`\`\`⭔ Family : ${data.result.is_family}\`\`\`\n\`\`\`⭔ Description : ${data.result.desc}\`\`\`\n\`\`\`⭔ Link : ${data.result.link}\`\`\`\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.result.image }}, {quoted: ftroli })
break
case 'igstalk': case 'stalkig': {
if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nExample : ${prefix + command} Jokowi`
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { image: { url: anu.result.photo_profile }, caption: `Username : ${anu.result.username}\nFull Name : ${anu.result.fullname}\nFollowers : ${anu.result.followers}\nFollowing : ${anu.result.following}\nBio : ${anu.result.bio}`}, { quoted: ftroli })
}
break
case 'tiktokstalk': case 'ttstalk': case 'stalktiktok': {
if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nExample : ${prefix + command} Jes No Limit`
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { image: { url: anu.result.user_picture }, caption: `Username : ${anu.result.username}\nNick Name : ${anu.result.nickname}\nBio : ${anu.result.bio}\nFollowers : ${anu.result.followers}\nFollowings : ${anu.result.followings}\nLikes : ${anu.result.likes}\nVideo : ${anu.result.video}`}, { quoted: ftroli })
}
break
case 'stalktwit': case 'stalktwitter': case 'twitterstalk': {
if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nExample : ${prefix + command} Jokowi`
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { image: { url: anu.result.profile_picture }, caption: `Name : ${anu.result.name}\nScreen Name : ${anu.result.screen_name}\nFollowers : ${anu.result.followers}\nFollowing : ${anu.result.following}\nBio : ${anu.result.bio}\nTweet : ${anu.result.tweet}\nDeskripsi : ${anu.result.description}\nJoined : ${anu.result.joined}`}, { quoted: ftroli })
}
break
case 'ssweb': case 'sswebfull': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await getBuffer(`https://bx-hunter.herokuapp.com/api/ssweb?url=${q}&apikey=FuckBitch`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
//══════════[ SEARCH ]══════════//
case 'samehadaku': 
m.reply(mess.wait)
var data = await fetchJson(`https://x-restapi.herokuapp.com/api/samehadaku-search?q=${q}&apikey=BETA`)
var captnya = `*[ SAMEHADAKU ]*\n\nJudul : *${data.title}*\nSumber : *${data.url}*\nDecrption : *${data.desc}*`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.image }}, {quoted: ftroli })
break
case 'otakudesu':
if(!q) return reply('judul animenya?')
m.reply(mess.wait)
let anime = await hx.otakudesu(q)
rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
ram = await getBuffer(anime.img)
hisoka.sendMessage(m.chat, { image: ram, caption:rem }, { quoted: ftroli })
break
case 'groupwhatsapp': {
if (!text) throw `Example : ${prefix + command} Islami`
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/groupwhatsapp2?apikey=SanzyChan01&query=${text}`)
ram = anu.result
for (var x of ram) {
txt =`Nama : ${x.name}\nGenre : ${x.genre}\nLink : ${x.link}`
}
m.reply(txt)
}
break
case 'wallpaper': {
if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wikimedia': {
if (!text) throw 'Masukkan Query Title'
let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
if (!text) throw `Example : ${prefix + command} Tutorial Membuat Bot WhatsApp`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
//══════════[ ISLAMIC ]══════════//
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
case 'juzamma': {
if (args[0] === 'pdf') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tafsirsurah': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
}
break
case 'surah1': {
m.reply(mess.wait)
let anu = await getBuffer(`https://zenzapi.xyz/islami/quran/audio/1?apikey=sanzychan01`) 
buffer = await getBuffer(anu.result)
hisoka.sendMessage(m.chat, { audio: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
case 'asmaulhusna': {
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=sanzychan01`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'audio1': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/1?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio2': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/2?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio3': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/3?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio4': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/4?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio5': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/5?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio6': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/6?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio7': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/7?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio8': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/8?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio9': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/9?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'audio10': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/10?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
//══════════[ CECAN ]══════════//
case 'indonesia': case 'korea': case 'china': case 'malaysia': {
m.reply(mess.wait)
let anu = await getBuffer(`https://ziy.herokuapp.com/api/gacha/${command}?apikey=xZiyy`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
case 'ryujin': case 'rose': case 'justina': case 'cogan': case 'cogan2': case 'jeni': case 'jiso': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api-invibot.herokuapp.com/api/wallpaper/${command}?apikey=Invibot`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
//══════════[ HEWAN MENU ]══════════//
case 'fox':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/fox`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'dog':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/dog`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'panda':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/panda`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'panda2':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/red_panda`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'bird':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/bird`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'koala':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/koala`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'whale':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/Whale`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'raccon':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/Raccoon`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'kanguru':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/Kangaroo`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'cat':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/img/cat`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'goose':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://nekos.life/api/v2/img/goose`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
//══════════[ RANDOM IMAGE ]══════════//
case 'meme':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://some-random-api.ml/meme`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.image }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'darkjoke': case 'darkjokes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://x-restapi.herokuapp.com/api/random-darkjoke?apikey=BETA`)
hisoka.sendMessage(m.chat, { caption: "nih kak", image: { url: data.urlimage }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
//══════════[ ANIME MENU ]══════════//
case 'kurama': case 'rimuru': case 'dazai': case 'eren': case 'titan': 
case 'animerem': case 'minato': case 'jiraya':case 'kiba':case 'sarada': 
case 'madara': case 'obito': case 'zenitsu': case 'tanjiro': case 'luffy':                      
case 'gon': case 'killua': case 'natsu': case 'genos': 
case 'zoro': case 'sanji':case 'saitama': case 'levi':
m.reply(mess.wait)
let im = await hx.chara(command)
let acak = im[Math.floor(Math.random() * im.length)]
hisoka.sendImage(m.chat,`${acak}`,`Ｓｕｃｃｅｓ．．．`)
break
case 'kakasih': case 'shota': case 'yotsuba': case 'shinomiya': case 'yumeko': case 'tejina': case 'chiho': case 'boruto': case 'kaori': case 'mikasa': case 'akiyama': case 'gremoriy': case 'isuzu': case 'shina': case 'kagura': case 'shinka': case 'eba': case 'elaina': case 'yuri': case 'erza': case 'hinata': case 'minato': case 'naruto': case 'sagiri': case 'nezuko': case 'riza': case 'ana': case 'deidara': case 'yuki': case 'asuna': case 'ayazawa': case 'chitoge': case 'emilia': case 'hestai': case 'inori': case 'itachi': case 'madara': case 'sakura': case 'sasuke': case 'tsunade': case 'onepiece': case 'kaneki': case 'megumin': case 'toukachan': case 'akira': case 'itori': case 'kurumi': case 'miku': case 'pokemon': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api-invibot.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY` },
caption: `Ｓｕｃｃｅｓ．．．`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'waifu': case 'awoo': case 'megumin': case 'neko': case 'shinobu': case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'loli':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://x-restapi.herokuapp.com/api/random-loli?apikey=BETA`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'husbu':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://x-restapi.herokuapp.com/api/random-husbu?apikey=BETA`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'nekoanime':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://x-restapi.herokuapp.com/api/random-neko?apikey=BETA`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'kemono':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://x-restapi.herokuapp.com/api/random-kemono?apikey=BETA`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'wallanime':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://x-restapi.herokuapp.com/api/random-wallanime?apikey=BETA`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.link }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'randomwallpaper':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-xchillds.herokuapp.com/api/random/wallpaper?apikey=XChillDs`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
//══════════[ NSFW MENU ]══════════//
case 'ass':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/ass`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'ahegao':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/ahegao`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'bdsm':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/bdsm`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'blowjob':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/blowjob`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'cuckold':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/cuckold`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'cum':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/cum`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'ero':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/ero`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'femdom':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/femdom`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'foot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/foot`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'gangbang':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/gangbang`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'hentai':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/hentai`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'jahy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/jahy`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'masturbation':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/masturbation`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'nsfwneko':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/nsfwNeko`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'orgy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/orgy`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'panties':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/panties`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'pussy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/pussy`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'thighs':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/thighs`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'yuri':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/yuri`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'feet':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://nekos.life/api/v2/img/feet`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'lewdkemo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var data = await fetchJson(`https://nekos.life/api/v2/img/lewdkemo`)
hisoka.sendMessage(m.chat, { caption: "Ｓｕｃｃｅｓ．．．", image: { url: data.url }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
//══════════[ RANDOM TEKS ]══════════//
case 'ceritahoror': case 'ceritaseram': case 'ceritahantu':
var data = await fetchJson(`https://x-restapi.herokuapp.com/api/random-cehor?apikey=BETA`)
var captnya = `
\`\`\`\⭔Judul : ${data.judul} \`\`\`\n
\`\`\`\⭔Description : ${data.desc}\`\`\`\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.thumb }}, {quoted: ftroli })
break
case 'ceritasex': case 'cersex':
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=IkyOgiwara`)
var captnya = `
\`\`\`\⭔Cerita : ${data.result}\`\`\`\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.gambar }}, {quoted: ftroli })
break
case 'ceritapendek': case 'cerpen':
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=IkyOgiwara`)
var captnya = `
\`\`\`⭔Title : ${data.result.title}\`\`\`\n
\`\`\`⭔Pengarang : ${data.result.pengarang}\`\`\`\n
\`\`\`⭔Kategori : ${data.result.kategori}\`\`\`\n
\`\`\`⭔Story : ${data.result.story}\`\`\`\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: `https://telegra.ph/file/c79b34b221a4a42510b3b.jpg` }}, {quoted: ftroli })
break
case 'jadwalsholat': case 'jadwalshalat':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Jakarta`
var data = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${q}?apikey=sanzychan01`)
var captnya = `
\`\`\`⭔Daerah : ${data.result.wilayah}\`\`\`\n
\`\`\`⭔Tanggal : ${data.result.tanggal}\`\`\`\n
\`\`\`⭔Shubuh : ${data.result.subuh}\`\`\`\n
\`\`\`⭔Dzuhur : ${data.result.dzuhur}\`\`\`\n
\`\`\`⭔Ashar : ${data.result.ashar}\`\`\`\n
\`\`\`⭔Magrib : ${data.result.maghrib}\`\`\`\n
\`\`\`⭔Isya : ${data.result.isya}\`\`\`\n`
m.reply(captnya)
break
case 'infocuaca': case 'cuaca':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Jakarta`
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuaca?q=${q}&apikey=IkyOgiwara`)
var captnya = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┉┓
┆ *INFO CUACA*
└┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶


*Data Berhasil Didapatkan!*

\`\`\`⭔Daerah : ${data.result.Daerah}\`\`\`\n
\`\`\`⭔Latitude : ${data.result.Latitude}\`\`\`\n
\`\`\`⭔Longitude : ${data.result.Longitude}\`\`\`\n
\`\`\`⭔TimeZone : ${data.result.TimeZone}\`\`\`\n
\`\`\`⭔Temperature : ${data.result.Temperature}\`\`\`\n
\`\`\`⭔Tanggal : ${data.result.Tanggal}\`\`\`\n
\`\`\`⭔Waktu : ${data.result.Waktu}\`\`\`\n
\`\`\`⭔Hari : ${data.result.Hari}\`\`\`\n
\`\`\`⭔Cuaca : ${data.result.Cuaca}\`\`\`\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: `https://telegra.ph/file/d6d8aba369ebfd7c03178.jpg` }}, {quoted: ftroli })
break
case 'covidworld': case 'coviddunia':
var data = await fetchJson(`https://api-yogipw.herokuapp.com/api/info/covidworld`)
var captnya = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┉┓
┆ *COVID WORLD*
└┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶


*Data Berhasil Didapatkan!*

\`\`\`⭔totalCases : ${data.result.totalCases}\`\`\`\n
\`\`\`⭔recovered : ${data.result.recovered}\`\`\`\n
\`\`\`⭔deaths : ${data.result.deaths}\`\`\`\n
\`\`\`⭔activeCases : ${data.result.activeCases}\`\`\`\n
\`\`\`⭔closedCases : ${data.result.closedCases}\`\`\`\n
\`\`\`⭔lastUpdate : ${data.result.lastUpdate}\`\`\`\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: `https://telegra.ph/file/86b3b90581f9d31353b62.jpg`}}, {quoted: m })
break
case 'waktuindonesia': case 'waktuindo':
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/time?apikey=IkyOgiwara`)
var captnya = `
\`\`\`⭔wib : ${data.result.wib}\`\`\`\n
\`\`\`⭔wita : ${data.result.wita}\`\`\`\n
\`\`\`⭔wit : ${data.result.wit}\`\`\`\n`
m.reply(captnya)
break
case 'artizodiak': case 'zodiaksearch':
var data = await fetchJson(`https://bx-hunter.herokuapp.com/api/zodiaksearch?text=${text}&apikey=FuckBitch`)
var captnya = `
\`\`\`⭔Umum : ${data.umum}\`\`\`\n\`\`\`⭔Love : ${data.love}\`\`\`\n\`\`\`⭔Keuangan : ${data.keuangan}\`\`\`\n`
m.reply(captnya)
break
case 'infogempa': case 'gempa': {
m.reply(mess.wait)
let anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/infogempa?apikey=IkyOgiwara`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: anu.result.Map },
 caption: `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┉┓
┆ *INFO GEMPA*
└┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*

⭔Waktu : ${anu.result.Waktu}
⭔Lintang : ${anu.result.Lintang}
⭔Bujur : ${anu.result.Bujur}
⭔Magnitudo : ${anu.result.Magnitudo}
⭔Kedalaman : ${anu.result.Kedalaman}
⭔Wilayah : ${anu.result.Wilayah}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'pinterest': {
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Miku Nakano`
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
image: { url: `https://leyscoders-api.herokuapp.com/api/pinsearch?q=${q}&apikey=IkyOgiwara` },
caption: `Ｓｕｃｃｅｓ．．．`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'resepmakanan': {
m.reply(mess.wait)
let anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${text}&apikey=FuckBitch`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
image: { url: anu.results.thumb },
caption: `
⭔ Title : ${anu.results.title}
⭔ Servings : ${anu.results.servings}
⭔ Duration : ${anu.results.times}
⭔ Dificulty : ${anu.results.dificulty}
⭔ Desc : ${anu.results.desc}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'kisahnabi': {
m.reply(mess.wait)
let anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nabi?q=${text}&apikey=IkyOgiwara`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
image: { url: anu.result.image },
 caption: `
⭔ Nama : ${anu.result.nabi}
⭔ Lahir : ${anu.result.lahir}
⭔ Umur : ${anu.result.umur}
⭔ Tempat : ${anu.result.tempat}
⭔ Kisah : ${anu.result.kisah}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'infohoax':
get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/infohoax?apikey=IkyOgiwara`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `\`\`\`🐥 Title : ${x.title}\`\`\`\n`
ini_txt += `\`\`\`🐥 Sumber : ${x.url}\`\`\`\n`
ini_txt += `\`\`\`🐥 Info : ${x.tanggal}\`\`\`\n`
ini_txt += `\`\`\`🐥 Image : ${x.img}\`\`\`\n`
ini_txt += `\`\`\`🐥 Link : ${x.desc}\`\`\`\n\n`
}
m.reply(ini_txt)
break
case 'katabijak': case 'searchkatabijak':
if (!text) throw `Kirim perintah ${command} mentari`
m.reply(mess.wait)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/kata-bijak?q=${q}&apikey=IkyOgiwara`)
anu = anu.result
ini_txt = ""
for (var x of anu) {
ini_txt += `\`\`\`🐥 Author : ${x.author}\`\`\`\n\n`
ini_txt += `\`\`\`🐥 Kata Bijak : ${x.katabijak}\`\`\`\n`
ini_txt += `\`\`\`🐥 Vote Counts : ${x.voteCount}\`\`\`\n`
}
m.reply(ini_txt)
break
case 'shopee': case 'shope':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Kaos Bola`
m.reply(mess.wait)
var data = await fetchJson(`https://x-restapi.herokuapp.com/api/shopee-search?q=${q}&apikey=BETA`)
var captnya = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶


*Data Berhasil Didapatkan!*

\`\`\`⭔Nama Produk : ${data.name}\`\`\`\n
\`\`\`⭔Currency : ${data.currency}\`\`\`\n
\`\`\`⭔Stock : ${data.stock}\`\`\`\n
\`\`\`⭔Sold : ${data.sold}\`\`\`\n
\`\`\`⭔Historical Sold : ${data.historical_sold}\`\`\`\n
\`\`\`⭔Like : ${data.liked_count}\`\`\`\n
\`\`\`⭔View : *${data.view_count}\`\`\`\n
\`\`\`⭔Catid : ${data.catid}\`\`\`\n
\`\`\`⭔Brand : ${data.brand}\`\`\`\n
\`\`\`⭔Currency : ${data.currency}\`\`\`\n
\`\`\`⭔Cmt : ${data.cmt_count}\`\`\`\n
\`\`\`⭔Status Item : ${data.item_status}\`\`\`\n
\`\`\`⭔Prince : ${data.price}\`\`\`\n
\`\`\`⭔Prince Min : ${data.price_min}\`\`\`\n
\`\`\`⭔Price Max : ${data.price_max}\`\`\`\n
\`\`\`⭔Price Min Before Discount : ${data.price_min_before_discount}\`\`\`\n
\`\`\`⭔Price Max Before Discount : ${data.price_max_before_discount}\`\`\`\n
\`\`\`⭔Price Before Discount : ${data.price_before_discount}\`\`\`\n
\`\`\`⭔Discount : ${data.discount}\`\`\`\n
\`\`\`⭔Rating : ${data.item_rating}\`\`\`\n
\`\`\`⭔Adult : ${data.is_adult}\`\`\`\n
\`\`\`⭔Verified : ${data.shopee_verified}\`\`\`\n
\`\`\`⭔Official Shop : ${data.is_official_shop}\`\`\`\n
\`\`\`⭔Location : ${data.shop_location}\`\`\`\n
\`\`\`⭔Cod : ${data.can_use_cod}\`\`\`\n
\`\`\`⭔Flase Sale : ${data.is_on_flash_sale}\`\`\`\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.image }}, {quoted: ftroli })
break
case 'amazon': case 'amazonsearch':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Charger`
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/amazon-search?q={q}&apikey=IkyOgiwara`)
var captnya = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┉┓
┆ *AMAZON SEARCH*
└┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶


*Data Berhasil Didapatkan!*

\`\`\`⭔Nama Produk : ${data.result.item}\`\`\`\n
\`\`\`⭔Review : ${data.result.review}\`\`\`\n
\`\`\`⭔Rating : ${data.result.rating}\`\`\`\n
\`\`\`⭔Sold : ${data.result.price}\`\`\`\n
\`\`\`⭔Score : ${data.result.score}\`\`\`\n
\`\`\`⭔Diskon : ${data.result.diskon}\`\`\`\n
\`\`\`⭔Url : *${data.result.url}\`\`\`\n
\`\`\`⭔Sponsor : ${data.result.sponsor}\`\`\`\n
\`\`\`⭔Best Seller : ${data.result.best_seller}\`\`\`\n
\`\`\`⭔Amazon Prime : ${data.result.amazon_prime}\`\`\`\n\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.result.thumb }}, {quoted: ftroli })
break
case 'gsmarena': case 'gsm':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Charger`
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/gsm-arena?q=${q}&apikey=IkyOgiwara`)
var captnya = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┉┓
┆ *GSM ARENA*
└┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶


*Data Berhasil Didapatkan!*

\`\`\`⭔Spek : ${data.result.spek}\`\`\`\n
\`\`\`⭔Type : ${data.result.display_type}\`\`\`\n
\`\`\`⭔Size : ${data.result.display_size}\`\`\`\n
\`\`\`⭔Resolusi : ${data.result.display_resolusi}\`\`\`\n
\`\`\`⭔Chipset : ${data.result.chipset}\`\`\`\n
\`\`\`⭔Os : ${data.result.os}\`\`\`\n
\`\`\`⭔Cpu : *${data.result.cpu}\`\`\`\n
\`\`\`⭔Internal : ${data.result.internal}\`\`\`\n
\`\`\`⭔Camera : ${data.result.camera}\`\`\`\n
\`\`\`⭔Baterai : ${data.result.Batterai}\`\`\`\n\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.result.thumb }}, {quoted: ftroli })
break
case 'malanime':
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Charger`
m.reply(mess.wait)
var data = await fetchJson(`https://bx-hunter.herokuapp.com/api/malanime?text=${q}&apikey=FuckBitch`)
var captnya = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┉┓
┆ *MALANIME SEARCH*
└┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶


*Data Berhasil Didapatkan!*

\`\`\`⭔Title : ${data.title}\`\`\`\n
\`\`\`⭔Review : ${data.score}\`\`\`\n
\`\`\`⭔Member : ${data.member}\`\`\`\n
\`\`\`⭔Url : ${data.url}\`\`\`\n
\`\`\`⭔Description : ${data.deskripsi}\`\`\`\n`
hisoka.sendMessage(m.chat, {caption: captnya, image: { url: data.thumb }}, {quoted: ftroli })
break
//══════════[ RANDOM TEKS ]══════════//
case 'pantun': case 'katabijak': case 'faktaunik': {
let anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/${command}?apikey=FuckBitch`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'fuckmylife': {
let anu = await fetchJson(`https://yx-api.herokuapp.com/api/fml`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result.fml,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'nickepep': {
let anu = await fetchJson(`https://yx-api.herokuapp.com/api/nickepep`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'katacinta': {
let anu = await fetchJson(`https://yx-api.herokuapp.com/api/katacinta`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'hitungangka': {
if (!text) throw `Example : ${prefix + command} 8`
let anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${q}&apikey=FuckBitch`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'artikata': {
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Mentri`
let anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${q}&apikey=IkyOgiwara`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'kapital': {
if (!text) throw `Kirim perintah ${command} Text\nContoh : ${command} Teks`
let anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/kapital?text=${q}&apikey=FuckBitch`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//══════════[ ASUPAN ]══════════//
case 'bocil': case 'santuy': case 'ukhti': case 'geayubi': {
m.reply(mess.wait)
let anu = await fetchJson(`https://yx-api.herokuapp.com/api/asupan/${command}`)
hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `Nih Kak....`}, { quoted: ftroli })
} 
break
case 'rikagusriani': {
m.reply(mess.wait)
let anu = await fetchJson(`https://ziy.herokuapp.com/api/asupan/rikagusriani?apikey=xZiyy`)
hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `Nih Kak....`}, { quoted: ftroli })
} 
break
case 'asupanloli': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
video: { url: 'https://recoders-area.caliph.repl.co/api/lolivid' },
caption: `Random ${command}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
  }
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'asupan2k': {
m.reply(mess.wait)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'NEXT➡️'}, type: 1}
]
let buttonMessage = {
video: { url: 'https://ziy.herokuapp.com/api/asupan2k?apikey=xZiyy' },
caption: `Random ${command}`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
  }
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//══════════[ STICKER ]══════════//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'ebinary': {
let { eBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let eb = await eBinary(teks)
 m.reply(eb)
}
break
case 'dbinary': {
let { dBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let db = await dBinary(teks)
m.reply(db)
}
break
case 'attp': case 'ttp': {
if (!text) throw `Example : ${prefix + command} Dhani Chann`
m.reply(mess.wait)
let anu = await getBuffer(`https://xteam.xyz/${command}?file&text=${text}`)
hisoka.sendMessage(m.chat, { sticker: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'emojimix': {
if (!text) throw `Example : ${prefix + command} 😅+🤔`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'patrick': case 'gawrgura': {
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { sticker: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
//══════════[ SERTIFIKAT ]══════════//
case 'toloserti': 
case 'fuckboy':
case 'fuckgirl':
case 'bucinserti':
case 'goodboy':
case 'goodgirl':
case 'badboy':
case 'badgirl': {
if (!text) throw `Example : ${prefix + command} ${pushname} tolol`
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=sanzychan01&name=${text}`) 
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'pacarserti': {
if (!text) throw `Example : ${prefix + command} Teks1: ${pushname} Teks2: ${pushmame} `
m.reply(mess.wait)
let anu = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=sanzychan01&name1=${text}&name2=${text}`) 
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: ftroli})
}
break
case 'phcomment': {
if (!text) throw `Example : ${prefix + command} Keren Sih`
m.reply(mess.wait)
let anu = await getBuffer(`https://zenzapi.xyz/api/image/phcomment?image=https://i.ibb.co/KjSBWx4/Pics-Art-02-07-11-45-03.jpg&text=${text}&username=SanzyYT&apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
case 'ytcomment': {
if (!text) throw `Example : ${prefix + command} Keren Sih`
m.reply(mess.wait)
let anu = await getBuffer(`https://zenzapi.xyz/api/image/ytcomment?image=https://i.ibb.co/KjSBWx4/Pics-Art-02-07-11-45-03.jpg&text=${text}&username=SanzyYT&apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
case 'kannagen': {
if (!text) throw `Exampel : ${prefix + command} SanzyYT`
let anu = await getBuffer (`https://zenzapi.xyz/api/image/kannagen?text=${text}&apikey=sanzychan01`)
hisoka.sendMessage(m.chat, { image: anu, caption: `Nih  Kak` }, { quoted: m})
}
break
//══════════[ PENGUBAH SUARA ]══════════//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
//══════════[ AUTO RESPONSE ]══════════//
case 'p': {
m.reply('salam yang bener kak')
}
break
case 'assalamualaikum': {
m.reply('walaikumsallam')
}
break
case 'Assalamualaikum': {
m.reply('walaikumsallam')
}
break
case 'Dhani': {
m.reply('hayo Ngomongin DhaniOfc ya gw bilangin ah')
}
break
//══════════[ SET CMD ]══════════//
case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
delete global.db.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'owner': case 'creator': {
hisoka.sendContact(m.chat, global.owner, m)
}
break
case 'public': {
if (!isCreator) throw mess.owner
hisoka.public = true
m.reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isCreator) throw mess.owner
hisoka.public = false
m.reply('Sukses Change To Self Usage')
}
break
case 'list': case 'menu': case 'help': case '?': {
txt = `
『INFO USER』

➥\`\`\`\Name : ${pushname}\`\`\`\n➥\`\`\`\Number : ${m.sender.split("@")[0]}\`\`\`\n➥\`\`\`\Rank User : ${role}\`\`\`\n

『INFO BOT』
                 
➥\`\`\`\Mode : ${hisoka.public ? 'Public' : 'Self'}\`\`\`\n➥\`\`\`\Owner : ${isCreator}\`\`\`\n➥\`\`\`\Runtime : ${runtime(process.uptime())}\`\`\`\n➥\`\`\`\Library : *Baileys-MD*\`\`\`\n➥\`\`\`\Prefix : ( ${prefix} )\`\`\`\n

『WAKTU INDONESIA』

➥\`\`\`\Waktu: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\`\`\`\n➥\`\`\`\Tanggal: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\`\`\`\n➥\`\`\`\Wib : ${wib}\`\`\`\n➥\`\`\`\Wit : ${wit}\`\`\`\n➥\`\`\`\Wita : ${wita}\`\`\`\n
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: hisoka.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedButtons: [{
urlButton: {
displayText: 'Forum Group Whatsapp',
url: 'https://chat.whatsapp.com/F9MPedE7AzPIl8ZWuDw3nF'
}
}, {
urlButton: {
displayText: 'Youtube',
url: 'https://youtube.com/channel/UCkq29eVGgDbHPGyhEmSJs2A'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Scrip WhatsApp Bot',
id: 'sc'
}  
}, {
quickReplyButton: {
displayText: 'WhatsApp Bot Features',
id: 'allmenu'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'allmenu': case 'features': {
txt =`┌──⭓ *Information*
│
│➥⭔ • Name : ${pushname}
│➥⭔• Owner : ${isCreator}
│➥⭔ • Mode : ${hisoka.public ? 'Public' : 'Self'}
│➥⭔ • Runtime : ${runtime(process.uptime())}
│➥⭔ • Library : *Baileys-MD*
│➥⭔ • Prefix : ( ${prefix} )
│➥⭔ • Waktu: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
│➥⭔ • Tanggal: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
│➥⭔ • Wib : ${wib}
│➥⭔ • Wit : ${wit}
│➥⭔ • Wita : ${wita}
│
└───────⭓

┌──⭓ *Group Menu*
│
│➥⭔ ${prefix}linkgroup
│➥⭔ ${prefix}ephemeral [option]
│➥⭔ ${prefix}setppgc [image]
│➥⭔ ${prefix}setname [text]
│➥⭔ ${prefix}setdesc [text]
│➥⭔ ${prefix}group [option]
│➥⭔ ${prefix}editinfo [option]
│➥⭔ ${prefix}add @user
│➥⭔ ${prefix}kick @user
│➥⭔ ${prefix}hidetag [text]
│➥⭔ ${prefix}tagall [text]
│➥⭔ ${prefix}promote @user
│➥⭔ ${prefix}demote @user
│➥⭔ ${prefix}vote [text]
│➥⭔ ${prefix}antilink [on/of]
│➥⭔ ${prefix}antiyt [on/of]
│➥⭔ ${prefix}antilinktt [on/of]
│➥⭔ ${prefix}devote
│➥⭔ ${prefix}upvote
│➥⭔ ${prefix}cekvote
│➥⭔ ${prefix}hapusvote
│
└───────⭓

┌──⭓ *Downloader Menu*
│
│➥⭔ ${prefix}tiktoknowm [url]
│➥⭔ ${prefix}tiktokwm [url]
│➥⭔ ${prefix}tiktokmp3 [url]
│➥⭔ ${prefix}mediafire [url]
│➥⭔ ${prefix}instagram [url]
│➥⭔ ${prefix}twitter [url]
│➥⭔ ${prefix}twittermp3 [url]
│➥⭔ ${prefix}facebook [url]
│➥⭔ ${prefix}pinterestdl [url]
│➥⭔ ${prefix}ytmp3 [url]
│➥⭔ ${prefix}ytmp4 [url]
│➥⭔ ${prefix}getmusic [query]
│➥⭔ ${prefix}getvideo [query]
│➥⭔ ${prefix}umma [url]
│➥⭔ ${prefix}joox [query]
│➥⭔ ${prefix}soundcloud [url]
│
└───────⭓

┌──⭓ *Search Menu*
│
│➥⭔ ${prefix}play [query]
│➥⭔ ${prefix}yts [query]
│➥⭔ ${prefix}google [query]
│➥⭔ ${prefix}gimage [query]
│➥⭔ ${prefix}pinterest [query]
│➥⭔ ${prefix}wallpaper [query]
│➥⭔ ${prefix}wikimedia [query]
│➥⭔ ${prefix}ytsearch [query]
│➥⭔ ${prefix}ringtone [query]
│➥⭔ ${prefix}groupwhatsapp [query]
│➥⭔ ${prefix}otakudesu [query]
│➥⭔ ${prefix}konachan [query]
│➥⭔ ${prefix}wallpapercave [query]
│➥⭔ ${prefix}alphacoders [query]
│➥⭔ ${prefix}samehadaku [query]
│➥⭔ ${prefix}malanime [query]
│➥⭔ ${prefix}resepmakanan [query]
│➥⭔ ${prefix}searchkatabijak [query]
│➥⭔ ${prefix}shopee [query]
│➥⭔ ${prefix}amazon [query]
│➥⭔ ${prefix}ssweb [link]
│
└───────⭓

┌──⭓ *Random Image*
│
│➥⭔ ${prefix}stanic
│➥⭔ ${prefix}katakata
│➥⭔ ${prefix}pentol
│➥⭔ ${prefix}kartun
│➥⭔ ${prefix}cyberspace
│➥⭔ ${prefix}islami
│➥⭔ ${prefix}programing
│➥⭔ ${prefix}teknologi
│➥⭔ ${prefix}mountain
│➥⭔ ${prefix}gaming
│➥⭔ ${prefix}couple
│➥⭔ ${prefix}bokep
│
└───────⭓

┌──⭓ *Wibu Menu*
│
│➥⭔ ${prefix}anime
│➥⭔ ${prefix}waifu
│➥⭔ ${prefix}husbu
│➥⭔ ${prefix}nekonime
│➥⭔ ${prefix}cosplay
│➥⭔ ${prefix}kakasih
│➥⭔ ${prefix}shota
│➥⭔ ${prefix}yotsuba
│➥⭔ ${prefix}shinomiya
│➥⭔ ${prefix}yumeko
│➥⭔ ${prefix}tejina
│➥⭔ ${prefix}chiho
│➥⭔ ${prefix}boruto
│➥⭔ ${prefix}kaori
│➥⭔ ${prefix}mikasa
│➥⭔ ${prefix}akiyama
│➥⭔ ${prefix}gremoriy
│➥⭔ ${prefix}isuzu
│➥⭔ ${prefix}shina
│➥⭔ ${prefix}kagura
│➥⭔ ${prefix}shinka
│➥⭔ ${prefix}eba
│➥⭔ ${prefix}elaina
│➥⭔ ${prefix}yuri
│➥⭔ ${prefix}erza
│➥⭔ ${prefix}hinata
│➥⭔ ${prefix}minato
│➥⭔ ${prefix}naruto
│➥⭔ ${prefix}sagiri
│➥⭔ ${prefix}nezuko
│➥⭔ ${prefix}riza
│➥⭔ ${prefix}ana
│➥⭔ ${prefix}deidara 
│➥⭔ ${prefix}yuki
│➥⭔ ${prefix}asuna
│➥⭔ ${prefix}ayazawa
│➥⭔ ${prefix}chitoge
│➥⭔ ${prefix}emilia
│➥⭔ ${prefix}hestai
│➥⭔ ${prefix}inori
│➥⭔ ${prefix}itachi
│➥⭔ ${prefix}madara 
│➥⭔ ${prefix}sakura
│➥⭔ ${prefix}sasuke
│➥⭔ ${prefix}tsunade
│➥⭔ ${prefix}onepiece
│➥⭔ ${prefix}kaneki
│➥⭔ ${prefix}megumin
│➥⭔ ${prefix}toukachan
│➥⭔ ${prefix}akira
│➥⭔ ${prefix}itori
│➥⭔ ${prefix}kurumi
│➥⭔ ${prefix}miku
│➥⭔ ${prefix}pokemon
│➥⭔ ${prefix}shinobu
│➥⭔ ${prefix}megumin
│➥⭔ ${prefix}waifus
│➥⭔ ${prefix}nekos
│➥⭔ ${prefix}kurama
│➥⭔ ${prefix}rimuru
│➥⭔ ${prefix}dazai
│➥⭔ ${prefix}eren
│➥⭔ ${prefix}titan
│➥⭔ ${prefix}animerem
│➥⭔ ${prefix}minato
│➥⭔ ${prefix}jiraya
│➥⭔ ${prefix}kiba
│➥⭔ ${prefix}sarada
│➥⭔ ${prefix}madara
│➥⭔ ${prefix}obito
│➥⭔ ${prefix}zenitsu
│➥⭔ ${prefix}tanjiro
│➥⭔ ${prefix}luffy
│➥⭔ ${prefix}gon
│➥⭔ ${prefix}killua
│➥⭔ ${prefix}natsu
│➥⭔ ${prefix}genos
│➥⭔ ${prefix}zoro
│➥⭔ ${prefix}sanji
│➥⭔ ${prefix}saitama
│➥⭔ ${prefix}levi
│
└───────⭓

┌──⭓ *Cecan Menu*
│
│➥⭔ ${prefix}jeni
│➥⭔ ${prefix}jiso
│➥⭔ ${prefix}cecan2
│➥⭔ ${prefix}cogan2
│➥⭔ ${prefix}ryujin
│➥⭔ ${prefix}rose
│➥⭔ ${prefix}justina
│➥⭔ ${prefix}cogan
│➥⭔ ${prefix}cecan
│➥⭔ ${prefix}indonesia
│➥⭔ ${prefix}vietnam
│➥⭔ ${prefix}thailand
│➥⭔ ${prefix}korea
│➥⭔ ${prefix}china
│➥⭔ ${prefix}japan
│➥⭔ ${prefix}malaysia
│
└───────⭓

┌──⭓ *Asupan Menu*
│
│➥⭔ ${prefix}bocil
│➥⭔ ${prefix}santuy
│➥⭔ ${prefix}ukhty
│➥⭔ ${prefix}geayubi
│➥⭔ ${prefix}lolivid
│➥⭔ ${prefix}asupan2k
│➥⭔ ${prefix}asupanrikagusriani
│
└───────⭓

┌──⭓ *Hewan Menu*
│
│➥⭔ ${prefix}cat
│➥⭔ ${prefix}dog
│➥⭔ ${prefix}goose
│➥⭔ ${prefix}fox
│➥⭔ ${prefix}panda
│➥⭔ ${prefix}panda2
│➥⭔ ${prefix}bird
│➥⭔ ${prefix}koala
│➥⭔ ${prefix}whale
│➥⭔ ${prefix}raccon
│➥⭔ ${prefix}kanguru
│
└───────⭓

┌──⭓ *Move Story*
│
│➥⭔ ${prefix}cerpen
│➥⭔ ${prefix}ceritahoror
│➥⭔ ${prefix}cersex
│
└───────⭓

┌──⭓ *Random Teks*
│
│➥⭔ ${prefix}artikata
│➥⭔ ${prefix}kapital
│➥⭔ ${prefix}pantun
│➥⭔ ${prefix}katabijak
│➥⭔ ${prefix}faktaunik
│➥⭔ ${prefix}fuckmylife
│➥⭔ ${prefix}nickepep
│➥⭔ ${prefix}katacinta
│➥⭔ ${prefix}quotesanime
│
└───────⭓

┌──⭓ *Nsfw Menu*
│
│➥⭔ ${prefix}ass
│➥⭔ ${prefix}bdsm
│➥⭔ ${prefix}cuckold
│➥⭔ ${prefix}cum
│➥⭔ ${prefix}ero
│➥⭔ ${prefix}femdom
│➥⭔ ${prefix}foot
│➥⭔ ${prefix}gangbanh
│➥⭔ ${prefix}glasess
│➥⭔ ${prefix}hentai
│➥⭔ ${prefix}gifs
│➥⭔ ${prefix}jahy
│➥⭔ ${prefix}manga
│➥⭔ ${prefix}mstb
│➥⭔ ${prefix}neko
│➥⭔ ${prefix}loli
│➥⭔ ${prefix}neko
│➥⭔ ${prefix}orgy
│➥⭔ ${prefix}panties
│➥⭔ ${prefix}pussy
│➥⭔ ${prefix}neko2
│➥⭔ ${prefix}tentacles
│➥⭔ ${prefix}things
│➥⭔ ${prefix}yuri
│➥⭔ ${prefix}zettai
│➥⭔ ${prefix}waifu
│➥⭔ ${prefix}chiisaihentai
│➥⭔ ${prefix}trap
│➥⭔ ${prefix}blowjob
│➥⭔ ${prefix}yaoi
│➥⭔ ${prefix}milf
│➥⭔ ${prefix}ecchi
│➥⭔ ${prefix}hentai
│➥⭔ ${prefix}ahegao
│➥⭔ ${prefix}hololewd
│➥⭔ ${prefix}sideoppai
│➥⭔ ${prefix}animefeets
│➥⭔ ${prefix}animebooty
│➥⭔ ${prefix}animethighss
│➥⭔ ${prefix}animearmpits
│➥⭔ ${prefix}hentaifemdom
│➥⭔ ${prefix}lewdanimegirls
│➥⭔ ${prefix}biganimetiddies
│➥⭔ ${prefix}hentai4everyone
│
└───────⭓

┌──⭓ *Comment Menu*
│
│➥⭔ ${prefix}phcomment
│➥⭔ ${prefix}ytcomment
│➥⭔ ${prefix}kannagen
│
└───────⭓

┌──⭓ *Sertifikat Menu*
│
│➥⭔ ${prefix}toloserti 
│➥⭔ ${prefix}fuckboy
│➥⭔ ${prefix}fuckgirl
│➥⭔ ${prefix}bucinserti
│➥⭔ ${prefix}goodboy
│➥⭔ ${prefix}goodgirl
│➥⭔ ${prefix}badboy
│➥⭔ ${prefix}badgirl
│➥⭔ ${prefix}pacarserti
│
└───────⭓

┌──⭓ *Text Pro Menu*
│
│➥⭔ ${prefix}3dchristmas
│➥⭔ ${prefix}3ddeepsea
│➥⭔ ${prefix}americanflag
│➥⭔ ${prefix}3dscifi
│➥⭔ ${prefix}3drainbow
│➥⭔ ${prefix}3dwaterpipe
│➥⭔ ${prefix}halloweenskeleton
│➥⭔ ${prefix}sketch
│➥⭔ ${prefix}bluecircuit
│➥⭔ ${prefix}space
│➥⭔ ${prefix}metallic
│➥⭔ ${prefix}fiction
│➥⭔ ${prefix}greenhorror
│➥⭔ ${prefix}transformer
│➥⭔ ${prefix}berry
│➥⭔ ${prefix}thunder
│➥⭔ ${prefix}magma
│➥⭔ ${prefix}3dcrackedstone
│➥⭔ ${prefix}3dneonlight
│➥⭔ ${prefix}impressiveglitch
│➥⭔ ${prefix}naturalleaves
│➥⭔ ${prefix}fireworksparkle
│➥⭔ ${prefix}matrix
│➥⭔ ${prefix}dropwater
│➥⭔ ${prefix}harrypotter
│➥⭔ ${prefix}foggywindow
│➥⭔ ${prefix}neondevils
│➥⭔ ${prefix}christmasholiday
│➥⭔ ${prefix}3dgradient
│➥⭔ ${prefix}blackpink
│➥⭔ ${prefix}gluetext
│➥⭔ ${prefix}3d-effect 
│➥⭔ ${prefix}3d-rubystone 
│➥⭔ ${prefix}3d-text-sub-zombie 
│➥⭔ ${prefix}3dengraved 
│➥⭔ ${prefix}3dgold 
│➥⭔ ${prefix}3dgolden 
│➥⭔ ${prefix}3dgradient 
│➥⭔ ${prefix}3dgradient 
│➥⭔ ${prefix}3dlove 
│➥⭔ ${prefix}3dluxury 
│➥⭔ ${prefix}3dneonlight 
│➥⭔ ${prefix}3dpapercut 
│➥⭔ ${prefix}3drainbow 
│➥⭔ ${prefix}3drealistic 
│➥⭔ ${prefix}3drosegold 
│➥⭔ ${prefix}3dscifi 
│➥⭔ ${prefix}3dsilver 
│➥⭔ ${prefix}3dspace 
│➥⭔ ${prefix}3dstone 
│➥⭔ ${prefix}3dtext-effect 
│➥⭔ ${prefix}3dunderwater 
│➥⭔ ${prefix}3dvintage 
│➥⭔ ${prefix}3dwaterpipe 
│➥⭔ ${prefix}alice-league-of-kings 
│➥⭔ ${prefix}angel-wing-galaxy 
│➥⭔ ${prefix}anubis 
│➥⭔ ${prefix}arch-crossfire 
│➥⭔ ${prefix}art-shader 
│➥⭔ ${prefix}assassins-creed 
│➥⭔ ${prefix}avengers 
│➥⭔ ${prefix}azzenka-league-of-kings 
│➥⭔ ${prefix}balloons-cards 
│➥⭔ ${prefix}balloons-love 
│➥⭔ ${prefix}bearlogo 
│➥⭔ ${prefix}bg-crossfire 
│➥⭔ ${prefix}birthday-cake 
│➥⭔ ${prefix}birthday-cards 
│➥⭔ ${prefix}birthday-greeting 
│➥⭔ ${prefix}birthday-roses 
│➥⭔ ${prefix}black-metal 
│➥⭔ ${prefix}blood-frosted 
│➥⭔ ${prefix}blood-text 
│➥⭔ ${prefix}blue-effect 
│➥⭔ ${prefix}blue-glitter 
│➥⭔ ${prefix}brickwall 
│➥⭔ ${prefix}brokentext 
│➥⭔ ${prefix}bulb-effect 
│➥⭔ ${prefix}bubble-effect 
│
└───────⭓

┌──⭓ *Photo Oxy Menu*
│
│➥⭔ ${prefix}shadow
│➥⭔ ${prefix}romantic
│➥⭔ ${prefix}smoke
│➥⭔ ${prefix}burnpapper
│➥⭔ ${prefix}naruto
│➥⭔ ${prefix}lovemsg
│➥⭔ ${prefix}grassmsg
│➥⭔ ${prefix}lovetext
│➥⭔ ${prefix}coffecup
│➥⭔ ${prefix}butterfly
│➥⭔ ${prefix}harrypotter
│➥⭔ ${prefix}retrolol
│➥⭔ ${prefix}shadow 
│➥⭔ ${prefix}cup 
│➥⭔ ${prefix}cup1 
│➥⭔ ${prefix}burnpaper 
│➥⭔ ${prefix}lovemessage 
│➥⭔ ${prefix}undergrass 
│➥⭔ ${prefix}woodheart
│➥⭔ ${prefix}woodenboard 
│➥⭔ ${prefix}wolfmetal 
│➥⭔ ${prefix}nature3d 
│➥⭔ ${prefix}underwater 
│➥⭔ ${prefix}golderrose 
│➥⭔ ${prefix}fallleaves 
│➥⭔ ${prefix}flamming 
│➥⭔ ${prefix}harrypotter
│
└───────⭓

┌──⭓ *Photo Maker*
│
│➥⭔ ${prefix}1917 
│➥⭔ ${prefix}3d-crack-text-effect-online 
│➥⭔ ${prefix}3d-underwater 
│➥⭔ ${prefix}3d-wood 
│➥⭔ ${prefix}3d-wood2
│➥⭔ ${prefix}3damerican-flag
│➥⭔ ${prefix}3dgalaxy-metal 
│➥⭔ ${prefix}3dgold
│➥⭔ ${prefix}3dgradient
│➥⭔ ${prefix}3dgradient2
│➥⭔ ${prefix}3dmetal-effect
│➥⭔ ${prefix}3dmetal-text-
│➥⭔ ${prefix}3dmulticolor-papercut
│➥⭔ ${prefix}3dpig-gif
│➥⭔ ${prefix}3drose-gold
│➥⭔ ${prefix}3druby-stone
│➥⭔ ${prefix}3dsand-engraved
│➥⭔ ${prefix}3dshiny-metallic
│➥⭔ ${prefix}3dsilver
│➥⭔ ${prefix}3dspace
│➥⭔ ${prefix}3dsparkle-christmas
│➥⭔ ${prefix}3dstone
│➥⭔ ${prefix}3dsub-zombie
│➥⭔ ${prefix}3dtext-effect
│➥⭔ ${prefix}3dtext-effect2
│➥⭔ ${prefix}3dtext-effect3
│➥⭔ ${prefix}3dtext-pig
│➥⭔ ${prefix}3dvalentine-cards
│➥⭔ ${prefix}3dvintage-light-bulb
│➥⭔ ${prefix}3dxmas-cards
│➥⭔ ${prefix}3dxmas-cards2
│➥⭔ ${prefix}83day-card
│➥⭔ ${prefix}83day-card2
│➥⭔ ${prefix}83day-card3
│➥⭔ ${prefix}83day-card4
│➥⭔ ${prefix}advanced-glow
│➥⭔ ${prefix}ahri-league-of-legends
│➥⭔ ${prefix}alice-league-of-kings
│➥⭔ ${prefix}amily-arena-of-valor
│➥⭔ ${prefix}angels-wings
│➥⭔ ${prefix}anonymous-neon
│➥⭔ ${prefix}art-shader
│➥⭔ ${prefix}avengers
│➥⭔ ${prefix}azzenka-league-of-kings
│➥⭔ ${prefix}balloon-noel
│➥⭔ ${prefix}balloon-text
│➥⭔ ${prefix}balloons-cards
│➥⭔ ${prefix}balloons-love
│➥⭔ ${prefix}bats-halloween
│
└───────⭓

┌──⭓ *Ephoto Menu*
│
│➥⭔ ${prefix}ffcover
│➥⭔ ${prefix}crossfire
│➥⭔ ${prefix}galaxy
│➥⭔ ${prefix}glass
│➥⭔ ${prefix}neon
│➥⭔ ${prefix}beach
│➥⭔ ${prefix}blackpink
│➥⭔ ${prefix}igcertificate
│➥⭔ ${prefix}ytcertificate
│➥⭔ ${prefix}wetglass 
│➥⭔ ${prefix}multicolor3d 
│➥⭔ ${prefix}watercolor 
│➥⭔ ${prefix}luxurygold 
│➥⭔ ${prefix}galaxywallpaper 
│➥⭔ ${prefix}lighttext 
│➥⭔ ${prefix}beautifulflower 
│➥⭔ ${prefix}royaltext 
│➥⭔ ${prefix}heartshaped 
│➥⭔ ${prefix}birdhdaycake 
│➥⭔ ${prefix}galaxystyle 
│➥⭔ ${prefix}hologram3d 
│➥⭔ ${prefix}greenneon 
│➥⭔ ${prefix}glossychrome 
│➥⭔ ${prefix}greenbush 
│➥⭔ ${prefix}metallogo 
│➥⭔ ${prefix}neoltext 
│➥⭔ ${prefix}glittergold 
│➥⭔ ${prefix}textcake 
│➥⭔ ${prefix}startsnight 
│➥⭔ ${prefix}wooden3d 
│➥⭔ ${prefix}textbyname 
│➥⭔ ${prefix}writegalacy 
│➥⭔ ${prefix}galaxybat 
│➥⭔ ${prefix}snow3d 
│➥⭔ ${prefix}birthdayday 
│➥⭔ ${prefix}silverplaybutton 
│➥⭔ ${prefix}cartoongravity 
│➥⭔ ${prefix}anonymhacker 
│➥⭔ ${prefix}mlwall 
│➥⭔ ${prefix}pubgmaskot 
│➥⭔ ${prefix}aovwall 
│➥⭔ ${prefix}logogaming 
│➥⭔ ${prefix}fpslogo 
│➥⭔ ${prefix}avatarlolnew 
│➥⭔ ${prefix}lolbanner 
│➥⭔ ${prefix}avatardota 
│➥⭔ ${prefix}juventusshirt 
│➥⭔ ${prefix}cutegravity 
│➥⭔ ${prefix}realvintage 
│➥⭔ ${prefix}codwarzone 
│➥⭔ ${prefix}valorantbanner
│
└───────⭓

┌──⭓ *Foto Funia*
│
│➥⭔ ${prefix}airline
│➥⭔ ${prefix}ballon
│➥⭔ ${prefix}beach-sign
│➥⭔ ${prefix}blood_writing
│➥⭔ ${prefix}bracelet
│➥⭔ ${prefix}cemetery-gates
│➥⭔ ${prefix}chalk_writing
│➥⭔ ${prefix}christmas-writing
│➥⭔ ${prefix}cookies_writing
│➥⭔ ${prefix}denim-emdroidery
│➥⭔ ${prefix}einstein
│➥⭔ ${prefix}foggy_window_writing
│➥⭔ ${prefix}fortune-cookie
│➥⭔ ${prefix}frosty-window-writing
│➥⭔ ${prefix}haunted-hotel
│➥⭔ ${prefix}heart_tattoo
│➥⭔ ${prefix}light-graffiti
│➥⭔ ${prefix}lipstick-writing
│➥⭔ ${prefix}nightmare-writing
│➥⭔ ${prefix}noir
│➥⭔ ${prefix}pendant
│➥⭔ ${prefix}plane-banner
│➥⭔ ${prefix}sand_writing
│➥⭔ ${prefix}snow-sign
│➥⭔ ${prefix}soup_letters
│➥⭔ ${prefix}street-sign
│➥⭔ ${prefix}typewriter
│➥⭔ ${prefix}water-writing
│➥⭔ ${prefix}wooden_sign
│➥⭔ ${prefix}yacht
│
└───────⭓

┌──⭓ *Maker Menu*
│
│➥⭔ ${prefix}guramaker
│➥⭔ ${prefix}kanekimaker
│➥⭔ ${prefix}lolimaker
│➥⭔ ${prefix}waifumaker
│➥⭔ ${prefix}sadboymaker
│➥⭔ ${prefix}remmaker
│➥⭔ ${prefix}silverbutton
│➥⭔ ${prefix}goldbutton
│
└───────⭓

┌──⭓ *Sticker Efek*
│
│➥⭔ ${prefix}wasted
│➥⭔ ${prefix}fisheye
│➥⭔ ${prefix}pixelate
│➥⭔ ${prefix}invert
│➥⭔ ${prefix}roundimage
│➥⭔ ${prefix}1977 
│➥⭔ ${prefix}aden
│➥⭔ ${prefix}clarendon
│➥⭔ ${prefix}gingham
│➥⭔ ${prefix}hudson 
│➥⭔ ${prefix}inkwell 
│➥⭔ ${prefix}earlybird 
│➥⭔ ${prefix}kelvin 
│➥⭔ ${prefix}lark
│➥⭔ ${prefix}lofi 
│➥⭔ ${prefix}maven 
│➥⭔ ${prefix}mayfair 
│➥⭔ ${prefix}moon 
│➥⭔ ${prefix}nashville 
│➥⭔ ${prefix}perpetua 
│➥⭔ ${prefix}reyes 
│➥⭔ ${prefix}rise 
│➥⭔ ${prefix}slumber 
│➥⭔ ${prefix}stinson 
│➥⭔ ${prefix}toaster 
│➥⭔ ${prefix}valencia 
│➥⭔ ${prefix}walden 
│➥⭔ ${prefix}willow 
│➥⭔ ${prefix}xpro2 
│➥⭔ ${prefix}jail
│➥⭔ ${prefix}rainbow
│➥⭔ ${prefix}rip
│➥⭔ ${prefix}sepia
│➥⭔ ${prefix}wanted
│➥⭔ ${prefix}joke
│➥⭔ ${prefix}hitler
│➥⭔ ${prefix}trash
│➥⭔ ${prefix}greyscale
│➥⭔ ${prefix}cicle
│➥⭔ ${prefix}spongebob
│➥⭔ ${prefix}patrick
│
└───────⭓

┌──⭓ *Fun Menu*
│
│➥⭔ ${prefix}apakah
│➥⭔ ${prefix}kapan
│➥⭔ ${prefix}halah
│➥⭔ ${prefix}hilih
│➥⭔ ${prefix}huluh
│➥⭔ ${prefix}heleh
│➥⭔ ${prefix}holoh
│➥⭔ ${prefix}jadian
│➥⭔ ${prefix}jodohku
│➥⭔ ${prefix}delttt
│➥⭔ ${prefix}tictactoe
│➥⭔ ${prefix}family100
│➥⭔ ${prefix}tebak [option]
│➥⭔ ${prefix}math [mode]
│➥⭔ ${prefix}suitpvp [@tag]
│
└───────⭓

┌──⭓ *Virus Menu*
│
│➥⭔ ${prefix}virus1
│➥⭔ ${prefix}virus2
│➥⭔ ${prefix}virus3
│➥⭔ ${prefix}virus4
│➥⭔ ${prefix}virus5
│➥⭔ ${prefix}virus6
│➥⭔ ${prefix}virus7
│➥⭔ ${prefix}virus8
│➥⭔ ${prefix}virus9
│➥⭔ ${prefix}virus10
│➥⭔ ${prefix}bughole
│
└───────⭓

┌──⭓ *Primbon Menu*
│
│➥⭔ ${prefix}nomorhoki
│➥⭔ ${prefix}artimimpi
│➥⭔ ${prefix}artinama
│➥⭔ ${prefix}ramaljodoh
│➥⭔ ${prefix}ramaljodohbali
│➥⭔ ${prefix}suamiistri
│➥⭔ ${prefix}ramalcinta
│➥⭔ ${prefix}cocoknama
│➥⭔ ${prefix}pasangan
│➥⭔ ${prefix}jadiannikah
│➥⭔ ${prefix}sifatusaha
│➥⭔ ${prefix}rezeki
│➥⭔ ${prefix}pekerjaan
│➥⭔ ${prefix}nasib
│➥⭔ ${prefix}penyakit
│➥⭔ ${prefix}tarot
│➥⭔ ${prefix}fengshui
│➥⭔ ${prefix}haribaik
│➥⭔ ${prefix}harisangar
│➥⭔ ${prefix}harisial
│➥⭔ ${prefix}nagahari
│➥⭔ ${prefix}arahrezeki
│➥⭔ ${prefix}peruntungan
│➥⭔ ${prefix}weton
│➥⭔ ${prefix}karakter
│➥⭔ ${prefix}keberuntungan
│➥⭔ ${prefix}memancing
│➥⭔ ${prefix}masasubur
│➥⭔ ${prefix}zodiak
│➥⭔ ${prefix}artizodiak
│➥⭔ ${prefix}shio
│
└───────⭓

┌──⭓ *Convert Menu*
│
│➥⭔ ${prefix}toimage
│➥⭔ ${prefix}removebg
│➥⭔ ${prefix}sticker
│➥⭔ ${prefix}emojimix
│➥⭔ ${prefix}tovideo
│➥⭔ ${prefix}togif
│➥⭔ ${prefix}tourl
│➥⭔ ${prefix}tovn
│➥⭔ ${prefix}tomp3
│➥⭔ ${prefix}toaudio
│➥⭔ ${prefix}ebinary
│➥⭔ ${prefix}dbinary
│➥⭔ ${prefix}styletext
│
└───────⭓

┌──⭓ *Main Menu*
│
│➥⭔ ${prefix}ping
│➥⭔ ${prefix}owner
│➥⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│➥⭔ ${prefix}delete
│➥⭔ ${prefix}infochat
│➥⭔ ${prefix}quoted
│➥⭔ ${prefix}listpc
│➥⭔ ${prefix}listgc
│➥⭔ ${prefix}listonline
│
└───────⭓

┌──⭓ *Database Menu*
│
│➥⭔ ${prefix}setcmd
│➥⭔ ${prefix}listcmd
│➥⭔ ${prefix}delcmd
│➥⭔ ${prefix}lockcmd
│➥⭔ ${prefix}addmsg
│➥⭔ ${prefix}listmsg
│➥⭔ ${prefix}getmsg
│➥⭔ ${prefix}delmsg
│
└───────⭓

┌──⭓ *Anonymous Menu*
│
│➥⭔ ${prefix}anonymous
│➥⭔ ${prefix}start
│➥⭔ ${prefix}next
│➥⭔ ${prefix}keluar
│➥⭔ ${prefix}sendkontak
│
└───────⭓

┌──⭓ *Islamic Menu*
│
│➥⭔ ${prefix}iqra
│➥⭔ ${prefix}hadist
│➥⭔ ${prefix}alquran
│➥⭔ ${prefix}juzamma
│➥⭔ ${prefix}tafsirsurah
│➥⭔ ${prefix}surah1
│➥⭔ ${prefix}kisahnabi
│➥⭔ ${prefix}jadwalsholat
│
└───────⭓

┌──⭓ *Audio Quran*
│
│➥⭔ ${prefix}audio1
│➥⭔ ${prefix}audio2
│➥⭔ ${prefix}audio3
│➥⭔ ${prefix}audio4
│➥⭔ ${prefix}audio5
│➥⭔ ${prefix}audio6
│➥⭔ ${prefix}audio7
│➥⭔ ${prefix}audio8
│➥⭔ ${prefix}audio9
│➥⭔ ${prefix}audio10
│
└───────⭓

┌──⭓ *Voice Changer*
│
│➥⭔ ${prefix}bass
│➥⭔ ${prefix}blown
│➥⭔ ${prefix}deep
│➥⭔ ${prefix}earrape
│➥⭔ ${prefix}fast
│➥⭔ ${prefix}fat
│➥⭔ ${prefix}nightcore
│➥⭔ ${prefix}reverse
│➥⭔ ${prefix}robot
│➥⭔ ${prefix}slow
│➥⭔ ${prefix}tupai
│
└───────⭓

┌──⭓ *Stalk Menu*
│
│➥⭔ ${prefix}githubstalk
│➥⭔ ${prefix}ytstalk
│➥⭔ ${prefix}stalkig
│➥⭔ ${prefix}stalktiktok
│➥⭔ ${prefix}twitterstalk
│
└───────⭓

┌──⭓ *Nulis Menu*
│
│➥⭔ ${prefix}nulis
│➥⭔ ${prefix}tulis
│
└───────⭓

┌──⭓ *Informasi Menu*
│
│➥⭔ ${prefix}covid
│➥⭔ ${prefix}infotsunami
│➥⭔ ${prefix}infocuaca
│➥⭔ ${prefix}infogempa
│➥⭔ ${prefix}waktuindo
│➥⭔ ${prefix}covidworld
│➥⭔ ${prefix}infohoax
│
└───────⭓

┌──⭓ *Owner Menu*
│
│➥⭔ ${prefix}chat [option]
│➥⭔ ${prefix}join [link]
│➥⭔ ${prefix}leave
│➥⭔ ${prefix}block @user
│➥⭔ ${prefix}unblock @user
│➥⭔ ${prefix}bcgroup [text]
│➥⭔ ${prefix}bcall [text]
│➥⭔ ${prefix}bcallmedia
│➥⭔ ${prefix}setppbot [image]
│
└───[BOT-XeonOFC]


┌──⭓ *THANKS TO*
│
│⬡  Ortu Saya.
│⬡  DikaArdnt (Author).
│⬡  DhaniOfc.
│⬡  Sanzy YT.
│⬡  Fatih A.
│⬡  Nurutomo.
│⬡  Mhankbarbar.
│⬡  ZeeoneOfc.
│⬡  Penyedia Module.
│⬡  Penyedia Res Api's.
│⬡  All My Friends.
│
└───────⭓`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: hisoka.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedButtons: [{
urlButton: {
displayText: 'Forum Group Whatsapp',
url: 'https://chat.whatsapp.com/F9MPedE7AzPIl8ZWuDw3nF'
}
}, {
urlButton: {
displayText: 'Youtube',
url: 'https://youtube.com/channel/UCkq29eVGgDbHPGyhEmSJs2A'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '𝑺𝒄𝒓𝒊𝒑𝒕',
id: 'sc'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//━━━━━━━━━━━━━━━[ AKHIR DARI SEGALANYA ]━━━━━━━━━━━━━━━━━//
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
