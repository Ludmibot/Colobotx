import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
//await m.reply(`╭「 𝐆𝐞𝐫𝐚𝐥 𝐁𝐨𝐭 」\n│➯ *(♦️)*PON EL TEXTO DEL AUDIO QUE QUIERES REPRODUCIR*\n︎╰───────────────╯\n\n\n╭「 𝐆𝐞𝐫𝐚𝐥 𝐁𝐨𝐭 」\n│➯ *(♦️)*PUT THE TEXT OF THE AUDIO YOU WANT TO PLAY*\n︎╰───────────────╯`)
let pp = imagen6
//let vn = './Plugins/Audios/menu.mp3'
let img = await(await fetch('https://imgur.com/a/Z2X0lCN.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)    
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭「PRECIOS DE ludmibot」
│🛍️ *𝙷𝙾𝙻𝙰 𝚀𝚄𝙴 𝚃𝙰𝙻-${taguser}
│🛍️ *𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝚂𝙾𝚈 Ludmibot 
│🛍️ *𝙴𝚂𝚃𝙴 𝙴𝚂 𝙼𝙸 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙲𝙾𝙽𝚂𝚄𝙻𝚃𝙰𝚂:https://wa.me/5493813300744
│🛍️ *𝚃𝙴𝙽𝙶𝙾 𝙳𝙸𝙵𝙴𝚁𝙴𝙽𝚃𝙴𝚂 𝙿𝚁𝙴𝙲𝙸𝙾𝚂 𝙿𝙰𝚁𝙰 𝙼𝙸𝚂 𝙱𝙾𝚃
︎╰───────────────╯
🛍️᭢━━━━━━━━━᭥🛍️᭢
╭「𝐏𝐑𝐄𝐂𝐈𝐎𝐒 𝐃𝐄 𝐏𝐀𝐐𝐔𝐄𝐓𝐄 𝐃𝐄 𝐁𝐎𝐓𝐒 𝐏𝐑𝐎𝐆𝐑𝐀𝐌𝐀𝐃𝐎𝐒」
💌Bot Mensual : 🇵🇪4 Yape/🇦🇷800 Cbu/🇲🇽50 MX/💎500

💌Bot Permanente : 🇵🇪8 Yape/🇦🇷1000 Cbu/🇲🇽80 MX/💎1000

💌Bot Personalizado : 🇵🇪13 Yape/🇦🇷1800 Cbu/🇲🇽80 MX/💎1300

💌Bot Propio : 🇵🇪16 Yape/🇦🇷350000 Cbu/🇲🇽127 MX/💎2000
╰───────────────╯
🛍️᭢━━━━━━━━━᭥🛍️᭢
╭「𝐏𝐑𝐄𝐂𝐈𝐎𝐒 𝐃𝐄 𝐁𝐎𝐓𝐂𝐈𝐓𝐎𝐒 𝐏𝐀𝐑𝐀 𝐆𝐑𝐔𝐏𝐎𝐒」
│💌BOT MENSUAL : 🇵🇪4 Yape/🇦🇷800 Cbu/🇲🇽40 MX/💎100
│💌BOT TRIMESTRAL : 🇵🇪15 Yape/🇦🇷 1300 CBU/🇲🇽70 MX💎400
│💌BOT PERMANENTE : 🇵🇪8 Yape/🇦🇷1000 Cbu/🇲🇽60 MX/💎200
│💌HACER NÚMERO BOT :🇵🇪12 Yape/🇦🇷1300 Cbu/🇲🇽75 MX💎50
╰───────────────╯
🛍️᭢━━━━━━━━━᭥🛍️᭢
╭「𝐀𝐂𝐋𝐀𝐑𝐀𝐂𝐈𝐎𝐍𝐄𝐒」
│🤖NO HAGO VIDA SOCIAL AL PRIVD
│🤖NO HAGO REMBOLSOS SI NO ESTAS SEGUR@ DE COMPRAR ALGO NO LO HAGAS
│🤖NO INTERCAMBIO PAQUETE DE BOTS PROGRAMADOR POR PAQUETE DE BOTS UNIDOS POR LINKS
│🤖NO REGALO NADA, SOLO HAGO DESCUENTOS ALOS QUE YA AN SIDO CLIENTES O SI COMPRAN MAS COSAS
╰───────────────╯`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(zeroprecios|precios|thezeroprecios)$/i
handler.exp = 50
handler.register = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
