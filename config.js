//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//
global.APIs = {
	zenz: 'https://zenzapi.xyz',
	hardianto: 'https://hardianto.xyz',
	dhakey: 'https://api-invibot.herokuapp.com',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//
global.APIKeys = {
	'https://zenzapi.xyz': 'sanzychan01',
	'https://hardianto.xyz': 'hardianto',
	'https://api-invibot.herokuapp.com': 'APIKEY',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//
global.owner = ['6282325673016','6285742977895','6285813670476']
global.premium = ['6282325673016']
global.packname = 'Delta'
global.author = 'WhatsApp Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Ｓｕｃｃｅｓ．．．',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '📩 𝑫𝒂𝒕𝒂 𝑰𝒏 𝑷𝒓𝒐𝒄𝒆𝒔𝒔, 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
