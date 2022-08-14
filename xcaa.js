/*
  •> Script By FxSx
  •> Ini Sc Bot Masih Beta Dari Multi Device [Baileys]
  •> Dan Jangan Hapus Nama Yang Punya Script!
  •> Jangan copas bang, ingat allah maha mengetahui
  •> Kalo mau Izin dulu yang punya sc 
  •> kalo mau tambahin nama FxSx thanks to sc bot lu
*/
require('./settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const maker = require('mumaker')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')

//Lib
const { cerpen } = require('./lib/cerpen')
const { antiSpam } = require('./lib/antispam')
const { pinterest, wallpaper, wikimedia, quotesAnime, styletext } = require('./lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom } = require('./lib/myfunc')

//Waktu
const date = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

//database
global.db = JSON.parse(fs.readFileSync('./storage/db.json'))
  if (global.db) global.db = {
  afk: {},
  sticker: {},
  database: {},
  ...(global.db || {})
  }

//Module Exports
module.exports = xcaa = async(xcaa, m, chatUpdate, store) => {
  try {
  var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' // Script By FxSx
  var budy = (typeof m.text == 'string' ? m.text : '')
  var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
  const isCmd = body.startsWith(prefix)
  const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const pushname = m.pushName || "No Name"
  const from = m.key.remoteJid
  const botNumber = await xcaa.decodeJid(xcaa.user.id)
  const isOwner = [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
  const itsMe = m.sender == botNumber ? true : false
  const text = q = args.join(" ")
  const quoted = m.quoted ? m.quoted : m
  const mime = (quoted.msg || quoted).mimetype || ''
  const isMedia = /image|video|sticker|audio/.test(mime)
  const { type, quotedMsg, mentioned, now, fromMe } = m
  const more = String.fromCharCode(8206)
  const readmore = more.repeat(4001)

  const isGroup = m.key.remoteJid.endsWith('@g.us')
  const groupMetadata = m.isGroup ? await xcaa.groupMetadata(m.chat).catch(e => {}) : ''
  const groupName = m.isGroup ? groupMetadata.subject : ''
  const participants = m.isGroup ? await groupMetadata.participants : ''
  const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
  const groupOwner = m.isGroup ? groupMetadata.owner : ''
  const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
  const isAdmins = m.isGroup ? groupOwner.includes(m.sender) || groupAdmins.includes(m.sender) : false
  const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  const isNumber = x => typeof x === 'number' && !isNaN(x)
  const isUser = isOwner || global.userB.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

//Reply Error
  const reply2 = (hehe) => {
  xcaa.sendMessage(hehe, {audio: global.vnerror, ptt: true, contextInfo: {mentionedJid: [m.sender], mimetype: "audio/mp4", externalAdReply: {showAdAttribution: true, title: `Hai ${pushname}`, mediaType: 1, body: `${wib}`, thumbnail: thumb2, previewType: "IMAGE", sourceUrl: global.linkgc}}}, { quoted: m })
  }

//Fake Reply Troli
  const ftroli = {key: {fromMe: false, participant: `${m.sender.split('@')[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: "120363025016778449@g.us" } : {}) }, message: {orderMessage: {thumbnail: fs.readFileSync('./src/imgnya2.jpg'), itemCount: 2022, status: 1, surface: 1, message: `Hai ${pushname}`, orderTitle: global.packname, sellerJid: `0@s.whatsapp.net`}}}

//Fake Reply Troli2
  const ftroli2 = {key: {fromMe: false, participant: `${m.sender.split('@')[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: "120363025016778449@g.us" } : {}) }, message: {"orderMessage": {"orderId": "565697274457891", "thumbnail": fs.readFileSync('./src/imgnya2.jpg'), "itemCount": 2022, "status": "INQUIRY", "surface": "CATALOG", "message": global.packname, "orderTitle": global.author, "sellerJid": `0@s.whatsapp.net`, "token": "AR4mhQWosJug1zH7rNnQ0SRviWCV/rVLANvHd2aul9qgLA=="}}, "messageTimestamp": "1628179334", "ephemeralOutOfSync": true}

// Fake Reply Sticker
  const fstick = {key: {participant: `${m.sender.split('@')[0]}@s.whatsapp.net`, remoteJid: "120363025016778449@g.us", fromMe: false}, message: {stickerMessage: {fileSha256: "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", pngThumbnail: global.thumb2, mimetype: "image/webp", height: 64, width: 64, directPath: "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", fileLength: "60206", firstFrameLength: 3626, isAnimated: false}}, messageTimestamp: "1614070775", status: "PENDING"}

  let rdmfr = [ftroli, ftroli2, fstick]
  const rdmtrol = pickRandom(rdmfr)

//Get Case
  const rfx = `break`

//Random Name Packname
  let packk = [global.packname, global.packname2]
  const rdmpck = pickRandom(packk)

//Random Name Author
  let utt = [global.author, global.author2]
  const rdmaut = pickRandom(utt)

//Random File
  let rdmf = ['application/zip','application/pdf','image/jpeg','audio/mpeg']
  const rdmfil = pickRandom(rdmf)

  const ggbh = (teks) => {
  let btnn = [
     {urlButton: {displayText: 'Website', url: global.roflix2}},
     {callButton: {displayText: 'Number Owner', phoneNumber: global.ownerNumber2}},
     {quickReplyButton: {displayText: 'Owner Bot', id: 'owner'}},
     {quickReplyButton: {displayText: 'Status Bot', id: 'ping'}},
     {quickReplyButton: {displayText: 'Thanks To', id: 'thankto'}}
  ]
  let templateMessage = {
  document: global.thumb,
  fileName: `${rdmpck}`,
  mimetype: `${rdmfil}`,
  fileLength: 191562,
  jpegThumbnail: global.thumb,
  caption: teks,
  footer: `${rdmaut}`,
  templateButtons: btnn
  }
  xcaa.sendMessage(m.chat, templateMessage)
  }

  const ggbh2 = (teks) => {
  let buttons = [
      {buttonId: 'owner', buttonText: {displayText: 'Owner Bot'}, type: 1},
      {buttonId: 'ping', buttonText: {displayText: 'Status Bot'}, type: 1},
      {buttonId: 'thankto', buttonText: {displayText: 'Thanks To'}, type: 1}
  ]
  let buttonMessage = {
  document: global.thumb,
  fileName: `${rdmpck}`,
  mimetype: `${rdmfil}`,
  fileLength: 99999999,
  contactVcard: true,
  jpegThumbnail: global.thumb,
  caption: teks,
  footer: `${rdmaut}`,
  buttons: buttons,
  headerType: 4,
  contextInfo: {externalAdReply: {showAdAttribution: true, containsAutoReply: true, title: `Hai ${pushname}`, body: `${wib}`, previewType: "PHOTO", thumbnail: global.thumb2, sourceUrl: global.linkgc, text: teks}}
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: rdmtrol })
  }

  const ggbh3 = (teks) => {
  let template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
  "orderMessage": {
  "itemCount": 2022, 
  "message": teks, 
  "footerText": `${rdmaut}`, 
  "thumbnail": global.thumb2,
  "surface": 'CATALOG'
  }
  }), { userJid: m.chat, quoted: m })
  xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
  }

//Random Menu Button
  let rdmm = [ggbh, ggbh2, ggbh3]
  const rdmmenu = pickRandom(rdmm)

//Anti Delete Otomatis
  if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
  let key = m.message.protocolMessage.key
  let msg = await xcaa.serializeM(await store.loadMessage(key.remoteJid, [m.key.id]))
  let teks = `╭「 *Anti Delete* 」\n├ User : @${msg.sender.split("@")[0]}\n├ Date : ${moment(msg.messageTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB\n└ Type : ${msg.mtype}`
  xcaa.sendText(m.chat, teks, msg, { mentions: [msg.sender] })
  await xcaa.relayMessage(m.chat, msg.message, { messageId: msg.id })
  }

//Anti ViewOnce Otomatis
  if (m.isGroup && m.mtype == 'viewOnceMessage') {
  let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${wib} WIB\n└ *Message* : ${m.mtype}`
  xcaa.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
  await sleep(500)
  m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
  }
  
  // Mode Afk Simpel
  for (let x of mentionUser) {
  if (global.db.afk.hasOwnProperty(x.split('@')[0])) {
  ini_txt = "User Yang Anda Tag/Reply Sedang Afk"
  if (global.db.afk[x.split('@')[0]] != "") {
  ini_txt += "Dengan Alasan : " + global.db.afk[x.split('@')[0]]
  }
  m.reply(ini_txt)
  }
  }
  if (global.db.afk.hasOwnProperty(m.sender.split('@')[0])) {
  m.reply(`Anda Telah Keluar Dari Mode Afk\n\nSaat Nya Mulung Yak ${pushname}`)
  delete global.db.afk[m.sender.split('@')[0]]
  fs.writeFileSync("./storage/db.json", JSON.stringify(global.db.afk))
  }

  if (m.sender.startsWith('212')) return xcaa.updateBlockStatus(m.sender, 'block')

//Public And Self
  if (!xcaa.public) {
  if (!m.key.fromMe && !isOwner) return
  }

//Anti Spam Otomatis
  if (isCmd && antiSpam.isFiltered(from) && m.isGroup) {
  console.log(chalk.black(chalk.bgWhite('[ SPAM ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(`${command} [${args.length}]`)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
  return m.reply('Mohon Jangan Spam\nKasih Waktu 2 Detik!')
  }

//Push Message To Console
  if (m.message) {
  xcaa.sendReadReceipt(m.chat, m.sender, [m.key.id])
  console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
  }

  if (command) {
  await xcaa.sendPresenceUpdate('recording', m.chat)
  }

//Anti Spam Otomatis
  if (isCmd && !isOwner && !m.key.fromMe) antiSpam.addFilter(from)

//Daftar User Otomatis
  if (!isUser) {
  userB.push(m.sender.split("@")[0])
  }

//Save In Database Otomatis
  if (global.db) setInterval(async () => {
  fs.writeFileSync('./storage/db.json', JSON.stringify(global.db, null, 2))
  console.log('Updating Database...')
  }, 60 * 1000)

//Sticker Cmd
  if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
  let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
  let { text, mentionedJid } = hash
  let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {userJid: xcaa.user.id, quoted: m.quoted && m.quoted.fakeObj})
  messages.key.fromMe = areJidsSameUser(m.sender, xcaa.user.id)
  messages.key.id = m.key.id
  messages.pushName = m.pushName
  if (m.isGroup) messages.participant = m.sender
  let msg = {
  ...chatUpdate,
  messages: [proto.WebMessageInfo.fromObject(messages)],
  type: 'append'
  }
  xcaa.ev.emit('messages.upsert', msg)
  }

switch(command) {

case 'menu': case 'help': {
  let menunya = `╭「 *INFO BOT* 」
├ Name : RoF3X-Bot
├ Author : FxSx
├ Library : Bailyes-MD
├ Language : JavaScript
├ Device : Android
├ User : ${userB.length}
├ Date : ${date}
├ Wib : ${wib}
├ Wita : ${wita}
└ Wit : ${wit}
${readmore}
╭「 *OTHER* 」
├ ${prefix}delete
├ ${prefix}owner
├ ${prefix}ping
├ ${prefix}rules
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}request
├ ${prefix}report
├ ${prefix}afk
├ ${prefix}bahasa
└ ${prefix}thanksto

╭「 *ISLAMIC* 」
├ ${prefix}iqra
├ ${prefix}hadist
├ ${prefix}juzamma
├ ${prefix}alquran
└ ${prefix}tafsirsurah

╭「 *RANDOM* 」
├ ${prefix}jodohku
├ ${prefix}jadian
├ ${prefix}bebangc
├ ${prefix}lonte
├ ${prefix}yatim
├ ${prefix}ganteng
├ ${prefix}cantik
├ ${prefix}apakah
├ ${prefix}kapankah
├ ${prefix}bisakah
├ ${prefix}katadilan
├ ${prefix}truth
├ ${prefix}dare
├ ${prefix}couple
├ ${prefix}pinterest
├ ${prefix}google
├ ${prefix}gimage
├ ${prefix}wallpaper
├ ${prefix}quotesanime
├ ${prefix}wikimedia
├ ${prefix}aesthetic
├ ${prefix}kucing
├ ${prefix}boneka
├ ${prefix}doraemon
├ ${prefix}meme
├ ${prefix}darkjokes
├ ${prefix}cewek
├ ${prefix}cowok
├ ${prefix}storyanime
├ ${prefix}cita-cita
└ ${prefix}cerpen-random

╭「 *ASUPAN* 」
├ ${prefix}bocil
├ ${prefix}santuy
├ ${prefix}ukhty
├ ${prefix}geayubi
├ ${prefix}asupanloli
└ ${prefix}asupan

╭「 *DOWNLOAD* 」
├ ${prefix}play
├ ${prefix}yts
├ ${prefix}ytmp3
├ ${prefix}ytmp4
└ ${prefix}gitclone

╭「 *TOOLS* 」
├ ${prefix}get
├ ${prefix}ssweb
├ ${prefix}gtts
├ ${prefix}translate
├ ${prefix}volumereq
├ ${prefix}bassreq
└ ${prefix}temporeq

╭「 *DATABASE* 」
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}delmsg
└ ${prefix}getmsg

╭「 *CONVERT* 」
├ ${prefix}sticker
├ ${prefix}stickerwm
├ ${prefix}smeme
├ ${prefix}emojimix
├ ${prefix}emojimix2
├ ${prefix}attp
├ ${prefix}styletext
├ ${prefix}toimg
├ ${prefix}tovideo
├ ${prefix}toaudio
├ ${prefix}tomp3
├ ${prefix}tovn
├ ${prefix}togif
├ ${prefix}tourl
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}smooth
├ ${prefix}tupai
└ ${prefix}imut

╭「 *ANIME* 」
├ ${prefix}listanime [mls ngetik]
├ ${prefix}akira
├ ${prefix}akiyama
├ ${prefix}ana
├ ${prefix}asuna
├ ${prefix}ayuzawa
├ ${prefix}boruto
├ ${prefix}chitoge
├ ${prefix}deidara
├ ${prefix}elaina
├ ${prefix}emilia
├ ${prefix}erza
├ ${prefix}gremory
├ ${prefix}hestia
├ ${prefix}hinata
├ ${prefix}inori
├ ${prefix}isuzu
├ ${prefix}itachi
├ ${prefix}itori
├ ${prefix}kaga
├ ${prefix}kagura
├ ${prefix}kakasih
├ ${prefix}kaori
├ ${prefix}keneki
├ ${prefix}kotori
├ ${prefix}kurumi
├ ${prefix}madara
├ ${prefix}mikasa
├ ${prefix}minato
├ ${prefix}naruto
├ ${prefix}nezuko
├ ${prefix}onepiece
├ ${prefix}pokemon
├ ${prefix}rize
├ ${prefix}rose
├ ${prefix}ryujin
├ ${prefix}sakura
├ ${prefix}sasuke
├ ${prefix}shina
├ ${prefix}shinka
├ ${prefix}shizuka
├ ${prefix}shota
├ ${prefix}toukachan
├ ${prefix}tsunade
├ ${prefix}yuki
├ ${prefix}yuri
├ ${prefix}sagiri
├ ${prefix}hentai
├ ${prefix}waifu
├ ${prefix}cry
├ ${prefix}kill
├ ${prefix}hug
├ ${prefix}pat
├ ${prefix}lick
├ ${prefix}kiss
├ ${prefix}bite
├ ${prefix}yeet
├ ${prefix}bully
├ ${prefix}bonk
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}nom
├ ${prefix}slap
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}awoo
├ ${prefix}blush
├ ${prefix}smug
├ ${prefix}glomp
├ ${prefix}happy
├ ${prefix}dance
├ ${prefix}cringe
├ ${prefix}cuddle
├ ${prefix}highfive
├ ${prefix}shinobu
├ ${prefix}megumin
└ ${prefix}handhold

╭「 *MAKER* 」
├ ${prefix}ktpmaker
├ ${prefix}candy
├ ${prefix}christmas
├ ${prefix}3dchristmas
├ ${prefix}sparklechristmas
├ ${prefix}deepsea
├ ${prefix}scifi
├ ${prefix}rainbow
├ ${prefix}waterpipe
├ ${prefix}spooky
├ ${prefix}pencil
├ ${prefix}circuit
├ ${prefix}discovery
├ ${prefix}metalic
├ ${prefix}fiction
├ ${prefix}fabric
├ ${prefix}demon
├ ${prefix}transformer
├ ${prefix}berry
├ ${prefix}thunder
├ ${prefix}magma
├ ${prefix}3dstone
├ ${prefix}neonlight
├ ${prefix}glitch
├ ${prefix}harrypotter
├ ${prefix}brokenglass
├ ${prefix}papercut
├ ${prefix}watercolor
├ ${prefix}multicolor
├ ${prefix}neondevil
├ ${prefix}underwater
├ ${prefix}graffitibike
├ ${prefix}graffitiwall
├ ${prefix}graffiticool
├ ${prefix}snow
├ ${prefix}cloud
├ ${prefix}honey
├ ${prefix}ice
├ ${prefix}fruitjuice
├ ${prefix}biscuit
├ ${prefix}wood
├ ${prefix}chocolate
├ ${prefix}strawberry
├ ${prefix}matrix
├ ${prefix}blood
├ ${prefix}dropwater
├ ${prefix}toxic
├ ${prefix}lava
├ ${prefix}rock
├ ${prefix}bloodglas
├ ${prefix}hallowen
├ ${prefix}darkgold
├ ${prefix}joker
├ ${prefix}wicker
├ ${prefix}firework
├ ${prefix}skeleton
├ ${prefix}blackpink
├ ${prefix}sand
├ ${prefix}steel
├ ${prefix}glue
├ ${prefix}1917
├ ${prefix}leaves
├ ${prefix}luxury
├ ${prefix}foggy
└ ${prefix}marvel

╭「 *GROUPS* 」
├ ${prefix}group
├ ${prefix}editinfo
├ ${prefix}ephemeral
├ ${prefix}linkgroup
├ ${prefix}revoke
├ ${prefix}kick
├ ${prefix}add
├ ${prefix}promote
├ ${prefix}demote
├ ${prefix}setname
├ ${prefix}setdesk
├ ${prefix}setppgrup
├ ${prefix}setppgrup2
├ ${prefix}tagall
├ ${prefix}hidetag
├ ${prefix}hidetag2
└ ${prefix}totag

╭「 *OWNER* 」
├ ${prefix}bc
├ ${prefix}bcgc
├ ${prefix}bcpvtchat
├ ${prefix}chat
├ ${prefix}join
├ ${prefix}culik
├ ${prefix}leave
├ ${prefix}block
├ ${prefix}unblock
├ ${prefix}setppbot
├ ${prefix}setthumb
├ ${prefix}setthumb2
├ ${prefix}setwelcome
├ ${prefix}setleave
├ ${prefix}setvnerror
├ ${prefix}setvnlink
├ ${prefix}setexif
├ ${prefix}creategc
├ ${prefix}self
├ ${prefix}public
├ ${prefix}reaction
├ ${prefix}getfile
├ ${prefix}getsesi
└ ${prefix}getcs
`
  rdmmenu(`${menunya}`)
  }
  break
case 'thankto': case 'thanksto': {
  try {
  let ingfo = `╭「 *THANK TO* 」
├ Allah SWT
├ Ortu
├ FxSx <base>
├ Fatih Arridho
├ Fadli
├ NathanDev
├ Dika Ardnt
├ Ferdiz Afk
└ Diva Uwu
`
  let buttons = [
      {buttonId: 'rulesb', buttonText: {displayText: 'Rules Bot'}, type: 1}
  ]
  let buttonMessage = {
  document: global.thumb2,
  fileName: `${rdmpck}`,
  mimetype: `${rdmfil}`,
  fileLength: 99999999,
  contactVcard: true,
  jpegThumbnail: global.thumb2,
  caption: `${ingfo}`,
  footer: `${rdmaut}`,
  buttons: buttons,
  headerType: 4,
  contextInfo: {externalAdReply: {showAdAttribution: true, containsAutoReply: true, title: `Hai ${pushname}`, body: `${wib}`, previewType: "PHOTO", thumbnail: global.thumb2, sourceUrl: global.linkgc, text: ingfo}}
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: rdmtrol })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'rules': case 'rulesbot': case 'rulesb': {
  try {
  let tteck = `1. Jangan spam bot
•> Sanksi: *Warn/Soft Block*

2. Jangan telepon bot
•> Sanksi: *Soft Block*

3. Jangan mengeksploitasi bot
•> Sanksi: *Permanen Block*
`
  let buttons = [
      {buttonId: `faaajjjjrrriii`, buttonText: {displayText: 'Sudah Dimengerti'}, type: 1}
  ]
  let buttonMessage = {
  document: global.thumb2,
  fileName: `${rdmpck}`,
  mimetype: `${rdmfil}`,
  fileLength: 99999999,
  contactVcard: true,
  jpegThumbnail: global.thumb2,
  caption: `${tteck}`,
  footer: `${rdmaut}`,
  buttons: buttons,
  headerType: 4,
  contextInfo: {externalAdReply: {showAdAttribution: true, containsAutoReply: true, title: `Hai ${pushname}`, mediaType: "IMAGE", thumbnail: global.thumb2, mediaUrl: global.linkgc, sourceUrl: global.linkgc}}
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: rdmtrol })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'owner': {
  try {
  xcaa.sendContact(m.chat, global.ownerNumber, m)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'listpc': {
  try {
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
  let teks = `╭「 *LIST CHAT* 」\n└ Total Chat : ${anu.length}\n\n`
  for (let i of anu) {
  let nama = store.messages[i].array[0].pushName
      teks += `╭ *Nama :* ${nama}\n├ *User :* @${i.split('@')[0]}\n└ *Chat :* https://wa.me/${i.split('@')[0]}\n\n──────────────────\n\n`
  }
  xcaa.sendTextWithMentions(m.chat, teks, ftroli)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'listgc': {
  try {
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
  let teks = `╭「 *LIST GRUP* 」\n└ Total Group : ${anu.length} Group\n\n`
  for (let i of anu) {
  let metadata = await xcaa.groupMetadata(i)
      teks += `╭ *Nama :* ${metadata.subject}\n├ *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n├ *ID :* ${metadata.id}\n├ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n└ *Member :* ${metadata.participants.length}\n\n──────────────────\n\n`
  }
  xcaa.sendTextWithMentions(m.chat, teks, fstick)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'afk': {
  if (!args[0]) return m.reply(`*Contoh : ${prefix + command} Berak*`)
  alasan = args.join(" ")
  global.db.afk[m.sender.split('@')[0]] = alasan.toLowerCase()
  fs.writeFileSync("./storage/db.json", JSON.stringify(global.db.afk))
  ini_txt = "Anda Telah Afk\n"
  if (alasan != "") {
  ini_txt += "Dengan alasan : " + alasan
  }
  m.reply(ini_txt)
  }
  break
case 'delete': case 'del': case 'd': {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
  xcaa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
  }
  break
case 'request': case 'reqfitur': case 'reqf': {
  if (!args.join(" ")) return m.reply(`*Contoh : ${prefix + command} Tambahin Fitur Download*`)
  try {
  teks = `╭「 *Request Fitur* 」\n├ Nomor : @${m.sender.split("@")[0]}\n└ Request : ${args.join(" ")}`
  for (let i of global.ownerNumber) {
  xcaa.sendMessage(i + "@s.whatsapp.net", {text: teks, mentions: [m.sender]}, {quoted:m})
  }
  xcaa.sendMessage(m.chat, {text: global.mess.sukses, mentions: [m.sender]}, {quoted: m})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'report': case 'lapor': {
  if (!args.join(" ")) return m.reply(`*Contoh : ${prefix + command} Fitur Download Play Error*`)
  try {
  teks = `╭「 *Report Fitur* 」\n├ Nomor : @${m.sender.split("@")[0]}\n└ Report : ${args.join(" ")}`
  for (let i of global.ownerNumber) {
  xcaa.sendMessage(i + "@s.whatsapp.net", {text: teks, mentions: [m.sender]}, {quoted:m})
  }
  xcaa.sendMessage(m.chat, {text: global.mess.sukses, mentions: [m.sender]}, {quoted:m})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  try {
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
️Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\nRuntime : ${runtime(process.uptime())}

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
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'kodebahasa': case 'bahasa': case 'codebahasa': case 'cdbhs': case 'bhs': {
  m.reply(`╭「 *BAHASA* 」\n├ af: Afrikaans\n├ sq: Albanian\n├ ar: Arabic\n├ hy: Armenian\n├ ca: Catalan\n├ zh: Chinese\n├ zh-cn: Chinese (China)\n├ zh-tw: Chinese (Taiwan)\n├ zh-yue: Chinese (Cantonese)\n├ hr: Croatian\n├ cs: Czech\n├ da: Danish\n├ nl: Dutch\n├ en: English\n├ en-au: English (Australia)\n├ en-uk: English (Kingdom)\n├ en-us: English (States)\n├ eo: Esperanto\n├ fi: Finnish\n├ fr: French\n├ de: German\n├ el: Greek\n├ ht: Haitian Creole\n├ hi: Hindi\n├ hu: Hungarian\n├ is: Icelandic\n├ id: Indonesian\n├ it: Italian\n├ ja: Japanese\n├ ko: Korean\n├ la: Latin\n├ lv: Latvian\n├ mk: Macedonian\n├ no: Norwegian\n├ pl: Polish\n├ pt: Portuguese\n├ pt-br: Portuguese (Brazil)\n├ ro: Romanian\n├ ru: Russian\n├ sr: Serbian\n├ sk: Slovak\n├ es: Spanish\n├ es-es: Spanish (Spain)\n├ es-us: Spanish (States)\n├ sw: Swahili\n├ sv: Swedish\n├ ta: Tamil\n├ th: Thai\n├ tr: Turkish\n├ vi: Vietnamese\n└ cy: Welsh`)
  }
  break
//Owner Menu
case 'fx': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  try {
  await xcaa.toggleDisappearingMessages(from)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'bcgc': case 'bcgroup': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`)
  try {
  let getGroups = await xcaa.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  for (let i of anu) {
  await sleep(1500)
  let tksbc = `「 *BROADCAST* 」\n\n${text}`
  let btnn = [
     {urlButton: {displayText: 'Website', url: global.roflix2}},
     {callButton: {displayText: 'Number Owner', phoneNumber: global.ownerNumber2}},
     {quickReplyButton: {displayText: 'Status Bot', id: 'ping'}},
     {quickReplyButton: {displayText: 'Thanks To', id: 'thankto'}}
  ]
  let templateMessage = {
  document: global.thumb,
  fileName: `${rdmpck}`,
  mimetype: `${rdmfil}`,
  fileLength: 999999,
  jpegThumbnail: global.thumb,
  caption: `${tksbc}`,
  footer: `${rdmaut}`,
  templateButtons: btnn
  }
  xcaa.sendMessage(i, templateMessage)
  }
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`)
  try {
  let anu = await store.chats.all().map(v => v.id)
  let getGroups = await xcaa.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anuan = groups.map(v => v.id)
  for (let yoy of anu && anuan) {
  const template = generateWAMessageFromContent(yoy, proto.Message.fromObject({ 
   templateMessage: { 
    hydratedTemplate: { 
     hydratedContentText: `「 *BROADCAST* 」\n\n${text}`, 
     locationMessage: {
     jpegThumbnail: global.thumb }, 
     hydratedFooterText: `${rdmaut}`, 
     hydratedButtons: [
     {urlButton: {displayText: 'RoFlix Film', url: global.roflix}},
     {callButton: {displayText: 'Number Owner', phoneNumber: global.ownerNumber2}}, 
     {quickReplyButton: {displayText: 'Status Bot', id: 'ping'}}, 
     {quickReplyButton: {displayText: 'Owner Bot', id: 'owner'}}
     ]
    }
   }
  }), { userJid: m.chat });
  xcaa.relayMessage(yoy, template.message, { messageId: template.key.id } )
  }
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'bchat': case 'bcpvtchat': case 'bcchat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`)
  try {
  let anunuan = await store.chats.all().map(v => v.id)
  for (let yoi of anunuan) {
  const template = generateWAMessageFromContent(yoi, proto.Message.fromObject({ 
   templateMessage: { 
    hydratedTemplate: { 
     hydratedContentText: `「 *BROADCAST* 」\n\n${text}`, 
     locationMessage: {
     jpegThumbnail: global.thumb }, 
     hydratedFooterText: `${rdmaut}`, 
     hydratedButtons: [
     {urlButton: {displayText: 'RoFlix Film', url: global.roflix}},
     {callButton: {displayText: 'Number Owner', phoneNumber: global.ownerNumber2}},
     {quickReplyButton: {displayText: 'Status Bot', id: 'ping'}},
     {quickReplyButton: {displayText: 'Owner Bot', id: 'owner'}}
     ]
    }
   }
  }), { userJid: m.chat });
  xcaa.relayMessage(yoi, template.message, { messageId: template.key.id } )
  }
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'chat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!text) return m.reply('*Contoh : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete*')
  try {
  if (args[0] === 'mute') {
    xcaa.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'unmute') {
    xcaa.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'archive') {
    xcaa.chatModify({ archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'unarchive') {
    xcaa.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'read') {
    xcaa.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'unread') {
    xcaa.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'delete') {
    xcaa.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'join': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
  m.reply(mess.wait)
  try {
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await xcaa.groupAcceptInvite(result).then((res) => m.reply(mess.sukses)).catch((err) => reply2(from))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'culik': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  try {
  let pantk = []
  for (let mem of participants) {
  pantk.push(mem.jid)
  }
  xcaa.groupParticipantsUpdate(args[0], pantk)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'leave': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  try {
  await xcaa.groupLeave(m.chat).then((res) => m.reply('Sampai Jumpa Kembali\nRoF3X-Bot Akan Segera Keluar\nKarna Disuruh Owner')).catch((err) => reply2(from))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'block': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.updateBlockStatus(users, 'block').then((res) => m.reply(mess.sukses)).catch((err) => reply2(from))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'unblock': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.sukses)).catch((err) => reply2(from))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setppbot': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  try {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  await xcaa.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setthumb': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption : ${prefix + command}`)
  if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  try {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  fs.writeFileSync('./src/imgnya.jpg', media)
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setthumb2': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption : ${prefix + command}`)
  if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  try {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  fs.writeFileSync('./src/imgnya2.jpg', media)
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setvnwel': case 'setvnwelcom': case 'setvnwelcome': case 'setwelcom': case 'setwelkom': case 'setwelcome': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!quoted) return m.reply(`Kirim Audio Dengan Caption : ${prefix + command}`)
  if (!/audio/.test(mime)) throw `Kirim Audio Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  try {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  fs.writeFileSync('./src/wellcom.mp3', media)
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setvnlev': case 'setleave': case 'setvnout': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!quoted) return m.reply(`Kirim Audio Dengan Caption : ${prefix + command}`)
  if (!/audio/.test(mime)) throw `Kirim Audio Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  try {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  fs.writeFileSync('./src/leavee.mp3', media)
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setvnerr': case 'seterror': case 'seterr': case 'setvnerror': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!quoted) return m.reply(`Kirim Audio Dengan Caption : ${prefix + command}`)
  if (!/audio/.test(mime)) throw `Kirim Audio Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  try {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  fs.writeFileSync('./src/errorr.mp3', media)
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setexif': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!text) return m.reply(`*Contoh : ${prefix + command} packname|author*`)
  try {
  global.packname = text.split("|")[0]
  global.author = text.split("|")[1]
  m.reply(`╭ Packname : ${global.packname}\n└ Author : ${global.author}`)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  try {
  xcaa.public = true
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  try {
  xcaa.self = false
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'creategc': case 'bikingc': case 'bikingrup': case 'bikingroup': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!args.join(" ")) return m.reply(`Contoh : ${prefix+command} Teks`)
  try {
  let cret = await xcaa.groupCreate(args.join(" "), [])
  let response = await xcaa.groupInviteCode(cret.id)
  let teks = `╭ Name : ${cret.subject}\n├ Owner : @${cret.owner.split("@")[0]}\n├ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB\n└ Link : https://chat.whatsapp.com/${response}`
  xcaa.sendMessage(m.chat, { text: teks, mentions: await xcaa.parseMention(teks)}, {quoted: m})
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'react': case 'reaction': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  try {
  reactionMessage = {react: {text: args[0], key: { remoteJid: m.chat, fromMe: true, id: quoted.id }}}
  xcaa.sendMessage(m.chat, reactionMessage)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'getfile': case 'sendfile': case 'filebot': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!args[0]) return m.reply(`*Contoh : ${prefix + command} lib asupan.js\nAda 2 pilihan\n1. lib\n2. storage\nPastikan ada .js atau .json*`)
  try {
  if (args[0] === 'lib') {
  filnya = fs.readFileSync(`./lib/${text}`)
  xcaa.sendMessage(m.chat, {document: filnya, mimetype: 'application/octet-stream', fileName: `${text}`}, {quoted: m})
  } else if (args[0] === 'storage') {
  filnya2 = fs.readFileSync(`./storage/${text}`)
  xcaa.sendMessage(m.chat, {document: filnya2, mimetype: 'application/octet-stream', fileName: `${text}`}, {quoted: m})
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'getsesi': case 'sendsessions': case 'sendsession': case 'sendsessi': case 'sendsesi': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  try {
  sesinya = fs.readFileSync(`./${global.sessionName}.json`)
  let buttons = [
      {buttonId: `getcs getsesi`, buttonText: {displayText: 'Ambil Case'}, type: 1}
  ]
  let buttonMessage = {
  document: sesinya,
  fileName: `${global.sessionName}.json`,
  mimetype: 'application/octet-stream',
  jpegThumbnail: global.thumb,
  caption: global.mess.sukses,
  footer: `${rdmaut}`,
  buttons: buttons,
  headerType: 4,
  contextInfo: {externalAdReply: {showAdAttribution: true, title: `Hai ${pushname}`, body: `${wib}`, previewType: "PHOTO", thumbnail: global.thumb2, sourceUrl: global.linkgc}}
  }
  xcaa.sendMessage(m.chat, buttonMessage, {quoted: m})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'getcase': case 'getcs': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!args[0]) return m.reply("Mau ngambil case apa?")
  try {
  m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./xcaa.js').toString().split(`case '${args[0]}'`)[1].split(rfx)[0] + rfx)
  } catch (err) {
  reply2(from)
  }
  }
  break
//Group Menu
case 'linkgc': case 'linkgrup': case 'linkgroup': case 'linkgroups': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  try {
  try {
    ppgroup = await xcaa.profilePictureUrl(m.chat, 'image')
  } catch {
    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  let ppgcnya = await getBuffer(ppgroup)
  let response = await xcaa.groupInviteCode(m.chat)
  xcaa.sendMessage(m.chat, {text: `Link Grup : https://chat.whatsapp.com/${response}`, contextInfo: {externalAdReply: {showAdAttribution: true, title: `${groupMetadata.subject}`, mediaType: 2, body: `${wib}`, thumbnail: ppgcnya, previewType: "IMAGE", sourceUrl: `https://chat.whatsapp.com/${response}`}}}, { detectLink: true, quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'linkgc2': case 'linkgrup2': {
  try {
  let response = await xcaa.groupInviteCode(m.chat)
  let butlink = [
  {buttonTitle: `Salin`, actionLink: {url: `https://chat.whatsapp.com/${response}`}, type: 1}
  ]
  xcaa.sendButtonText(m.chat, butlink, `Nih Kak Link Grup Nya`, `${rdmaut}`, m)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'revoke': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  try {
  await xcaa.groupRevokeInvite(from)
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'kick': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di kick siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62')
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'add': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di add siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  try {
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'promote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di promote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'demote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di demote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await xcaa.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setname': case 'setsubject': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`)
  try {
  await xcaa.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setdesc': case 'setdesk': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`)
  try {
  await xcaa.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  try {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  await xcaa.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.sukses)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'setppgc2': case 'setppgrup2': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command} panjang`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command} panjang`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command} panjang`)
  try {
  var media = await xcaa.downloadAndSaveMediaMessage(quoted)
  if (args[0] == 'panjang') {
  var { img } = await generateProfilePicture(media)
  await xcaa.query({
  tag: 'iq',
  attrs: {
  to: m.chat,
  type:'set',
  xmlns: 'w:profile:picture'
  },
  content: [
  {
  tag: 'picture',
  attrs: { type: 'image' },
  content: img
  }
  ]
  })
  fs.unlinkSync(media)
  m.reply(mess.sukses)
  } else {
  var memeg = await xcaa.updateProfilePicture(m.chat, { url: media })
  fs.unlinkSync(media)
  m.reply(mess.sukses)
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'tagall': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  try {
  let teks = `╭ *Tag All*\n└ *Pesan : ${q ? q : 'Kosong'}*\n\n`
  for (let mem of participants) {
  teks += `•> @${mem.id.split('@')[0]}\n`
  }
  xcaa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fstick })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  try {
  xcaa.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fstick })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'hidetag2': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  try {
  if (/sticker/.test(mime)) {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  xcaa.sendMessage(m.chat, { sticker : fs.readFileSync(media), mentions: participants.map(a => a.id)}, { quoted: m })
  await fs.unlinkSync(media)
  } else if (/image/.test(mime)) {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  xcaa.sendMessage(m.chat, { image : fs.readFileSync(media), caption:m.quoted ? m.quoted.caption : "", mentions: participants.map(a => a.id)}, { quoted: m })
  await fs.unlinkSync(media)
  } else if (/video/.test(mime)) {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  xcaa.sendMessage(m.chat, { video : fs.readFileSync(media), mimetype:"video/mp4", caption:m.quoted ? m.quoted.caption : "", mentions: participants.map(a => a.id)}, { quoted: m })
  await fs.unlinkSync(media)
  } else if (/audio/.test(mime)) {
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  xcaa.sendMessage(m.chat, { audio : fs.readFileSync(media), mimetype:"audio/mp4", ptt:true, mentions: participants.map(a => a.id)}, { quoted: m })
  await fs.unlinkSync(media)
  } else {
  xcaa.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'totag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
  try {
  xcaa.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'ephemeral': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply('Masukan Value enable/disable')
  try {
  if (args[0] === 'enable') {
  await xcaa.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await xcaa.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'group': case 'groups': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply('Masukan Value open/close')
  try {
  if (args[0] === 'close'){
  await xcaa.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await xcaa.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${prefix + command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${prefix + command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await xcaa.sendButtonText(m.chat, buttonsgroup, `Mode Buka/Tutup Grup️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply('Masukan Value open/close')
  try {
  if (args[0] === 'open'){
  await xcaa.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await xcaa.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${prefix + command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${prefix + command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await xcaa.sendButtonText(m.chat, buttons, `Mode Edit Info Grup`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
//Converter Menu
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
  if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
  try {
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await xcaa.sendImageAsSticker(m.chat, media, m, { packname: `${rdmpck}`, author: `${rdmaut}` })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await xcaa.sendVideoAsSticker(m.chat, media, m, { packname: `${rdmpck}`, author: `${rdmaut}` })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'stikerwm': {
  if (!m.quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command} Teks|Teks`)
  let [teks1, teks2] = text.split`|`
  if (!teks1) return m.reply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
  if (!teks2) return m.reply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
  try {
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await xcaa.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await xcaa.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
  await fs.unlinkSync(encmedia)
  } else {
    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image/sticker Dengan Caption ${prefix + command} Teks|Teks`)
  if (!text) return m.reply(`Kirim/Reply Image/sticker Dengan Caption ${prefix + command} Teks|Teks`)
  try {
  atas = text.split('|')[0] ? text.split('|')[0] : '-'
  bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let dwnld = await quoted.download()
  let inni = await floNime(dwnld)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${inni.result.url}`
  let encmedia = await xcaa.sendImageAsSticker(m.chat, smeme, m, { packname: `${rdmpck}`, author: global.auhor })
  await fs.unlinkSync(encmedia)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'emojimix': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} 😅+😊*`)
  let [emoji1, emoji2] = text.split`+`
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
  for (let res of anu.results) {
  let encmedia = await xcaa.sendImageAsSticker(m.chat, res.url, m, { packname: `${rdmpck}`, author: `${rdmaut}`, categories: res.tags })
  await fs.unlinkSync(encmedia)
  }
  }
  break 
case 'emojimix2': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} 😅*`)
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
  for (let res of anu.results) {
  let encmedia = await xcaa.sendImageAsSticker(m.chat, res.url, m, { packname: `${rdmpck}`, author: `${rdmaut}`, categories: res.tags })
  await fs.unlinkSync(encmedia)
  }
  }
  break
case 'attp': case 'ttp': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`)
  try {
  let anu = await fetchJson(`https://xteam.xyz/${command}?file&text=${text}`)
  for (let reslut of anu.results) {
  let encmedia = await xcaa.sendImageAsSticker(m.chat, reslut.url, m, { packname: `${rdmpck}`, author: `${rdmaut}` }, {asSticker: true})
  await fs.unlinkSync(encmedia)
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'style': case 'styletext': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Text*`)
  try {
  let anu = await styletext(text)
  let teks = `Style Text From ${text}\n\n`
  for (let i of anu) {
  teks += `•> *${i.name}* : ${i.result}\n\n`
  }
  m.reply(teks)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'toimage': case 'toimg': {
  if (!m.quoted) return m.reply('Reply Stickernya')
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) return reply2(from)
  let buffer = fs.readFileSync(ran)
  xcaa.sendMessage(m.chat, { image: buffer, caption: global.mess.sukses}, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break
case 'tomp4': case 'tovideo': {
  if (!quoted) return m.reply('Reply Sticker Gif')
  if (!/webp/.test(mime)) return m.reply(`Balas sticker gif dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let { webp2mp4File } = require('./lib/uploader')
  let webpToMp4 = await webp2mp4File(media)
  await xcaa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: global.mess.sukses} }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'toaud': case 'toaudio': {
  if (!quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let { toAudio } = require('./lib/converter')
  let audio = await toAudio(media, 'mp4')
  xcaa.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mp4'}, { quoted : m })
  }
  break
case 'tomp3': {
  if (!quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  if (/document/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let { toAudio } = require('./lib/converter')
  let audio = await toAudio(media, 'mp4')
  xcaa.sendMessage(m.chat, {document: audio, mimetype: 'audio/mp4', fileName: `Convert By ${xcaa.user.name}.mp3`}, { quoted : m })
  }
  break
case 'tovn': case 'toptt': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
  if (!quoted) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let { toPTT } = require('./lib/converter')
  let audio = await toPTT(media, 'mp4')
  xcaa.sendMessage(m.chat, {audio: audio, mimetype:'audio/mp4', ptt:true }, {quoted: m})
  }
  break
case 'togif': {
  if (!quoted) return m.reply('Reply Sticker Gif')
  if (!/webp/.test(mime)) return m.reply(`Balas stiker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let { webp2mp4File } = require('./lib/uploader')
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await xcaa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: global.mess.sukses}, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'tourl': {
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
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
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': 
case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': 
case 'smooth': case 'tupai': case 'imut': {
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
  if (/imut/.test(command)) set = '-af atempo=3/4,asetrate=44500*4/3'
  if (/audio/.test(mime)) {
  m.reply(mess.wait)
  let media = await xcaa.downloadAndSaveMediaMessage(quoted)
  let ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(err)
  let buff = fs.readFileSync(ran)
  xcaa.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
  fs.unlinkSync(ran)
  })
  } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
  } catch (err) {
  reply2(from)
  }
  }
  break
//Maker Menu
case 'ktpmaker': {
  if (args.length == 0) return m.reply(`*Contoh :\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar*`)
  try {
  get_args = args.join(" ").split("|")
  nik = get_args[0]
  if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
  prov = get_args[1]
  if (!prov) return m.reply('probinsi mana kak')
  kabu = get_args[2]
  if (!kabu) return m.reply('kabupaten mana kak')
  name = get_args[3]
  if (!name) return m.reply('nama nya siapa kak')
  ttl = get_args[4]
  if (!ttl) return m.reply('tempat tanggal lahir nya kak')
  jk = get_args[5]
  if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
  jl = get_args[6]
  if (!jl) return m.reply('alamat rumah nya mana kak')
  rtrw = get_args[7]
  if (!rtrw) return m.reply('RT / RW berapa kak')
  lurah = get_args[8]
  if (!lurah) return m.reply('kelurahan mana kak')
  camat = get_args[9]
  if (!camat) return m.reply('kecamatan mana kak')
  agama = get_args[10]
  if (!agama) return m.reply('agama nya apa kak')
  nikah = get_args[11]
  if (!nikah) return m.reply('status belum ada')
  kerja = get_args[12]
  if (!kerja) return m.reply('pekerjaan belum ada')
  warga = get_args[13]
  if (!warga) return m.reply('region belum ada')
  until = get_args[14]
  if (!until) return m.reply('waktu berlaku belum ada')
  gd = get_args[15]
  if (!gd) return m.reply('golongan darah belum ada')
  img = get_args[16]
  if (!img) return m.reply('url image belum ada')
  m.reply(mess.wait)
  bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
  console.log(bikin)
  ardaktp = await getBuffer(bikin)
  await sleep(8000)
  await xcaa.sendMessage(m.chat, { image: ardaktp, caption: global.mess.sukses }, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'fabric': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'steel': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves':
case 'luxury': case 'foggy': case 'marvel': case 'graffiticool': case 'graffitiwall': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`) 
  m.reply(mess.wait)
  try {
  let link
  if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
  if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
  if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
  if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
  if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
  if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
  if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
  if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
  if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
  if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
  if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
  if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
  if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
  if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
  if (/fabric/.test(command)) link = 'https://textpro.me/fabric-text-effect-online-964.html'
  if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
  if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
  if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
  if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
  if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
  if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
  if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
  if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
  if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
  if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
  if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
  if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
  if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
  if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
  if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
  if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
  if (/graffitiwall/.test(command)) link = 'https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html'
  if (/graffiticool/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
  if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
  if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
  if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
  if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
  if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
  if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
  if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
  if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
  if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
  if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
  if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
  if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
  if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
  if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
  if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
  if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
  if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
  if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
  if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
  if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
  if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
  if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
  if (/steel/.test(command)) link = 'https://textpro.me/steel-text-effect-online-921.html'
  if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
  if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
  if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
  if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
  if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
  if (/luxury/.test(command)) link = 'https://textpro.me/3d-luxury-gold-text-effect-online-1003.html'
  if (/foggy/.test(command)) link = 'https://textpro.me/write-text-on-foggy-window-online-free-1015.html'
  if (/marvel/.test(command)) link = 'https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html'
  let anu = await maker.textpro(link, text)
  xcaa.sendMessage(m.chat, { image: { url: anu }, caption: global.mess.sukses }, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
//Random
case 'jodohku': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let me = m.sender
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let jawab = `Jodoh Mu Adalah\n\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n\nGaskeun Pepet Ae Ngap`
  let ments = [me, jodoh]
  let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Jodohku' }, type: 1 }]
  xcaa.sendButtonText(m.chat, buttons, jawab, `${rdmaut}`, m, {mentions: ments})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'jadian': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let jawab = `Ehem Ada Yang Jadian Nih\n\n@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n\nBisa Kali Dapet Pajaknya`
  let menst = [orang, jodoh]
  let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Jadian' }, type: 1 }]
  xcaa.sendButtonText(m.chat, buttons, jawab, `${rdmaut}`, m, {mentions: menst})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'beban': case 'bebangc': case 'bbngc': case 'bbn': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let bn = member[Math.floor(Math.random() * member.length)]
  let jawab = `Mau Lihat Beban Group?${readmore}\n\n@${bn.split('@')[0]}`
  let menst = [bn]
  let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Beban' }, type: 1 }]
  xcaa.sendButtonText(m.chat, buttons, jawab, `${rdmaut}`, m, {mentions: ments})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'yatim': case 'ytem': case 'nggapunyabapak': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let ytm = member[Math.floor(Math.random() * member.length)]
  let jawab = `Yahaha Yatim\n\n@${ytm.split('@')[0]}`
  let menst = [ytm]
  let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Yatim' }, type: 1 }]
  xcaa.sendButtonText(m.chat, buttons, jawab, `${rdmaut}`, m, {mentions: menst})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'lonte': case 'lontegc': case 'lontegrup': case 'lontegroup': case 'lontegroups': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let lon = member[Math.floor(Math.random() * member.length)]
  let jawab = `Lonte Group\n\n@${lon.split('@')[0]}`
  let menst = [lon]
  let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Lonte' }, type: 1 }]
  xcaa.sendButtonText(m.chat, buttons, jawab, `${rdmaut}`, m, {mentions: menst})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'ganteng': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let tng = member[Math.floor(Math.random() * member.length)]
  let jawab = `Ganteng Nih\n\n@${tng.split('@')[0]}\n\nYang Ciwi² Gas Pepet`
  let menst = [tng]
  let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Ganteng' }, type: 1 }]
  xcaa.sendButtonText(m.chat, buttons, jawab, `${rdmaut}`, m, {mentions: menst})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'cantik': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let ctk = member[Math.floor(Math.random() * member.length)]
  let jawab = `Dede Gemes Nih\n\n@${ctk.split('@')[0]}\n\nYang Cwok Gas Pepet`
  let menst = [ctk]
  let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Cantik' }, type: 1 }]
  xcaa.sendButtonText(m.chat, buttons, jawab, `${rdmaut}`, m, {mentions: menst})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'apakah': {
  if (!text) return m.reply(`Contoh : ${prefix + command} Teks`)
  const apa = ['Iya','Tidak','Bisa Jadi','Betul','Mungkin']
  const kah = apa[Math.floor(Math.random() * apa.length)]
  xcaa.sendMessage(m.chat, { text: `${kah}` }, { quoted: m })
  }
  break
case 'bisakah': {
  if (!text) return m.reply(`Contoh : ${prefix + command} Teks`)
  const aa = ['Bisa','Gak Bisa','Gak Bisa Ajg Wkwkwk','Pasti Bisa','Coba Tanya Pak Rt Aja']
  const ka = aa[Math.floor(Math.random() * aa.length)]
  xcaa.sendMessage(m.chat, { text: `${ka}` }, { quoted: m })
  }
  break
case 'kapankah': {
  if (!text) return m.reply(`Contoh : ${prefix + command} Teks`)
  const pa = ['Besok','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','7 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','4 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','12 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','7 Tahun Lagi','8 Tahun Lagi','9 Tahun Lagi','10 Tahun Lagi','11 Tahun Lagi','12 Tahun Lagi','13 Tahun Lagi','14 Tahun Lagi','15 Tahun Lagi','16 Tahun Lagi','17 Tahun Lagi','18 Tahun Lagi','19 Tahun Lagi','20 Tahun Lagi']
  const kh = pa[Math.floor(Math.random() * pa.length)]
  xcaa.sendMessage(m.chat, { text: `${kh}` }, { quoted: m })
  }
  break
case 'katadilan': {
  if (!text) m.reply(`Contoh : ${prefix + command} Teks `)
  const kata = ["Aku tidak ingin mengekangmu. Terserah! Bebas ke mana engkau pergi. Asal aku ikut.","Kalau kamu ninggalin aku, itu hak kamu, asal jangan aku yang ninggalin kamu. Aku takut kamu kecewa.","Bagiku, Kamu adalah bagian terbesar dari hidupku. Aku bisa saja membiarkanmu melakukan apa yang kamu inginkan, tetapi tidak untuk hal yang akan berakibat buruk bagimu.","Terima kasih, kau pernah mau kepadaku. Dan kini, biarkan aku, kalau selalu ingin tahu kabarmu.","Jangan rindu, ini berat. Kau tak akan kuat. Biar aku saja.","Kamu lahir itu sengaja buat bikin aku senang ada di Bumi.","Malam ini, kalau tidur jangan ingat aku, ya! Tapi kalau mau, silakan.","Cinta itu indah. Jika menurutmu tidak indah, pastinya kamu salah memilih pasangan.","Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaimu.","Sekarang aku mungkin bukan aku yang dulu, waktu membawa aku pergi, tetapi perasaan tetap sama, bersifat menjalar, hingga ke depan.","Kukira itu normal. Itu adalah bagian dari suatu proses berduka. Tetapi cepat atau lambat, aku harus bisa menerima sepenuhnya, meskipun sebagian dari diriku masih berharap akan bisa kembali bersama-sama.","Jangan salah paham. Semua sikapku kepadamu, bahkan termasuk ketika aku marah, ketika aku kesal, ketika aku jengkel, kamu harus tahu bahwa semua bersumber dari aku yang sangat mencintaimu","Kalau mencintaimu adalah kesalahan, yasudah. Biar. Aku salah terus saja.","PR-ku adalah merindukanmu. Lebih kuat dari Matematika. Lebih luas dari Fisika. Lebih kerasa dari Biologi.","Dik jangan pergi jauh-jauh kan ada darahku di tubuhmu.","Kalau aku jadi presiden yang harus mencintai seluruh rakyatnya, aduh, maaf, aku pasti tidak bisa karena aku cuma suka Kamu."]
  const dilan = kata[Math.floor(Math.random() * kata.length)]
  let buttonsk = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}]
  xcaa.sendButtonText(m.chat, buttonsk, `${dilan}`, `${rdmaut}`, m)
  }
  break
case 'truth': {
  try {
  const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
  const ttrth = trut[Math.floor(Math.random() * trut.length)]
  let buttonsk = [{buttonId: `${command}`, buttonText: {displayText: 'Truth'}, type: 1},{buttonId: `dare`, buttonText: {displayText: 'Dare'}, type: 1}]
  xcaa.sendButtonText(m.chat, buttonsk, `${ttrth}`, `${rdmaut}`, m)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'dare': {
  try {
  const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
  const der = dare[Math.floor(Math.random() * dare.length)]
  let buttonsk = [{buttonId: `${command}`, buttonText: {displayText: 'Dare'}, type: 1},{buttonId: `truth`, buttonText: {displayText: 'Truth'}, type: 1}]
  xcaa.sendButtonText(m.chat, buttonsk, `${der}`, `${rdmaut}`, m)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'pinterest': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Naruto*`)
  m.reply(mess.wait)
  try {
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `${prefix + command} ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}]
  xcaa.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'wallpaper': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Naruto HD*`)
  m.reply(mess.wait)
  try {
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `${command} ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}]
  xcaa.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'google': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`)
  let google = require('google-it')
  google({'query': text}).then(res => {
  let teks = `「 *Google Search* 」`
  for (let g of res) {
  teks += `╭ *Title* : ${g.title}\n`
  teks += `├ *Description* : ${g.snippet}\n`
  teks += `└ *Link* : ${g.link}\n\n───────────────────\n\n`
  } 
  m.reply(teks)
  })
  }
  break
case 'gimage': case 'googleimg': case 'imgg': case 'gimg': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Boruto HD*`)
  m.reply(mess.wait)
  let gis = require('g-i-s')
  gis(text, async (error, result) => {
  n = result
  images = n[Math.floor(Math.random() * n.length)].url
  let buttonsg = [{buttonId: `${command} ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}]
  xcaa.sendMessage(m.chat, { image: { url: images }, caption: `*Media Url* : ${images}`, buttons: buttonsg }, { quoted: m })
  })
  }
  break
case 'quotesanime': {
  m.reply(mess.wait)
  try {
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'Next'}, type: 1}]
  xcaa.sendButtonText(m.chat, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, `${rdmaut}`, m)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'wikimedia': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`)
  try {
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `${prefix + command} ${text}`, buttonText: {displayText: 'Next Wiki'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `╭ Title : ${result.title}\n├ Source : ${result.source}\n└ Media Url : ${result.image}`,
  footer: `${rdmaut}`,
  buttons: buttons,
  headerType: 4
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'kucing': case 'boneka': case 'meme': case 'darkjokes': 
case 'cowok': case 'cewek': case 'doraemon': case 'aesthetic': {
  m.reply(mess.wait)
  try {
  filenya = fs.readFileSync(`./lib/${command}.js`);
  jsonData = JSON.parse(filenya);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  roall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ image: roall }, { upload: xcaa.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    imageMessage: message.imageMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: `${rdmaut}`,
     hydratedButtons: [
     {urlButton: {displayText: 'RoFlix Film', url: global.roflix}},
     {callButton: {displayText: 'Number Owner', phoneNumber: global.ownerNumber2}}, 
     {quickReplyButton: {displayText: 'Next Image', id: `${command}`}}
    ]
   }
  }
  }), { userJid: m.chat, quoted: m })
  xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'couple': case 'ppcp': {
  m.reply(mess.wait)
  try {
  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
  let random = anu[Math.floor(Math.random() * anu.length)]
  xcaa.sendMessage(m.chat, { image: { url: random.female }, caption: global.mess.sukses }, { quoted: m })
  let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'Next Image'}, type: 1}]
  let buttonMessage = {
  image: { url: random.male },
  caption: global.mess.sukses,
  footer: `${rdmaut}`,
  buttons: buttons,
  headerType: 4
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'asupan': case 'asupanloli': case 'bocil': case 'santuy': 
case 'geayubi': case 'ukhty': case 'storyanime': {
  m.reply(mess.wait)
  try {
  asupa = JSON.parse(fs.readFileSync(`./lib/${command}.json`));
  hasil = pickRandom(asupa);
  let buttons = [
     {buttonId: `${command}`, buttonText: {displayText: 'Next Video'}, type: 1}
  ]
  let buttonMessage = {
  video: {url: hasil.url},
  caption: global.mess.sukses,
  footer: `${rdmaut}`,
  buttons: buttons,
  headerType: 4
  }
  xcaa.sendMessage(m.chat, buttonMessage, {quoted: m})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'cita-cita': case 'citacita': case 'cita': {
  try {
  let cit = [`citacita1`,`citacita2`,`citacita3`,`citacita4`,`citacita5`,`citacita6`,`citacita7`,`citacita8`,`citacita9`,`citacita10`,`citacita11`,`citacita12`,`citacita13`,`citacita14`,`citacita15`,`citacita16`,`citacita17`,`citacita18`,`citacita19`,`citacita20`,`citacita21`,`citacita22`,`citacita23`,`citacita24`,`citacita25`,`citacita26`,`citacita27`,`citacita28`,`citacita29`,`citacita30`,`citacita31`,`citacita32`,`citacita33`,`citacita34`,`citacita35`]
  let acita = cit[Math.floor(Math.random() * cit.length)]
  let citac = fs.readFileSync(`./src/citacita/${acita}.mp3`)
  xcaa.sendMessage(m.chat, {audio: citac, ptt: true, mimetype: 'audio/mpeg'}, {quoted: m})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'cerpen-random': {
  try {
  let ce = [`anak`,`bahasa daerah`,`bahasa inggris`,`bahasa jawa`,`bahasa sunda`,`budaya`,`cinta`,`cinta islami`,`cinta pertama`,`cinta romantis`,`cinta sedih`,`cinta segitiga`,`cinta sejati`,`galau`,`gokil`,`inspiratif`,`jepang`,`kehidupan`,`keluarga`,`kisah nyata`,`korea`,`kristen`,`liburan`,`malaysia`,`mengharukan`,`misteri`,`motivasi`,`nasihat`,`nasionalisme`,`olahraga`,`patah hati`,`penantian`,`pendidikan`,`pengalaman pribadi`,`pengorbanan`,`penyesalan`,`perjuangan`,`perpisahan`,`persahabatan`,`petualangan`,`ramadhan`,`remaja`,`rindu`,`rohani`,`romantis`,`sastra`,`sedih`,`sejarah`]
  let pen = ce[Math.floor(Math.random() * ce.length)]
  let cerpe = await cerpen(pen)
  m.reply(`╭ *Title :* ${cerpe.title}\n├ *Author :* ${cerpe.author}\n├ *Category :* ${cerpe.kategori}\n├ *Pass Moderation :* ${cerpe.lolos}\n└ *Story :* ${cerpe.cerita}`)
  } catch (err) {
  reply2(from)
  }
  }
  break
//Downloader
case 'play': case 'ytplay': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Sholawat Ibadahallah*`)
  m.reply(mess.wait)
  try {
  let yts = require("yt-search")
  let search = await yts(text)
  let hasil = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [
  {buttonId: `ytmp3 ${hasil.url}`, buttonText: {displayText: 'Audio'}, type: 1}, 
  {buttonId: `ytmp4 ${hasil.url}`, buttonText: {displayText: 'Video'}, type: 1}
  ]
  let buttonMessage = {
  image: { url: hasil.thumbnail },
  caption: `╭ *Title :* ${hasil.title}\n├ *Duration :* ${hasil.timestamp}\n├ *Viewers :* ${hasil.views}\n├ *Upload :* ${hasil.ago}\n├ *Channel :* ${hasil.author.url}\n└ *Url :* ${hasil.url}`,
  footer: `${rdmaut}`,
  buttons: buttons,
  headerType: 4
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'ytmp3': case 'ytaudio': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} https://youtube.com/ 128kbps*`)
  try {
  let { yta } = require('./lib/y2mate')
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
  xcaa.sendMessage(m.chat, {audio: {url: media.dl_link}, mimetype: "audio/mpeg", fileName: `${media.title}.mp3`, contextInfo: {externalAdReply: {showAdAttribution: true, title: `${media.title}`, body: `${media.filesizeF}`, previewType: "PHOTO", thumbnailUrl: `${media.thumb}`, thumbnail: `${media.thumb}`, sourceUrl: `${isUrl(text)}`}}}, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'ytmp4': case 'ytvideo': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} https://youtube.com/ 360p*`)
  try {
  let { ytv } = require('./lib/y2mate')
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
  xcaa.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `╭ Title : ${media.title}\n├ File Size : ${media.filesizeF}\n├ Url : ${isUrl(text)}\n├ Ext : MP3\n└ Resolusi : ${args[1] || '360p'}`}, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'yts': case 'ytsearch': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Dj 30 Detik*`)
  m.reply(mess.wait)
  try {
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '╭「 *Data Diproleh* 」\n└ Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `╭ No : ${no++}\n├ Type : ${i.type}\n├ Video ID : ${i.videoId}\n├ Title : ${i.title}\n├ Views : ${i.views}\n├ Duration : ${i.timestamp}\n├ Upload : ${i.ago}\n├ Author : ${i.author.name}\n└ Url : ${i.url}\n\n────────────\n\n`
  }
  xcaa.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'gitclone': case 'github': {
  let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  if (!args[0]) return m.reply(`*Contoh : ${prefix + command} Linknya*`)
  if (!regx.test(args[0])) return m.reply('*Pastikan Link Sudah Benar*')
  try {
  let [, user, repo] = args[0].match(regx) || []
  repos = repo.replace(/.git$/, '')
  let hasdl = `https://api.github.com/repos/${user}/${repos}/zipball`
  let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  xcaa.sendFile(m.chat, hasdl, namafile, m)
  } catch (err) {
  reply2(from)
  }
  }
  break
//Tools
case 'get': {
  if (!args[0]) return m.reply(`*Contoh : ${prefix + command} Linknya*`)
  if (!isUrl(text)) return m.reply(`*Contoh : ${prefix + command} Linknya*`)
  try {
  let gts = await fetchJson(text)
  m.reply(gts)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'ssweb': {
  if (!args[0]) return m.reply(`*Contoh : ${prefix + command} Linknya*`)
  if (!isUrl(args[0])) return m.reply(`*Contoh : ${prefix + command} Linknya*`)
  m.reply(mess.wait)
  try {
  fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${args[0]}&full_page=true&output=json&file_type=png&dark_mode=true&wait_for_event=load`).then(res => xcaa.sendMessage(from, {image:{url:res.screenshot}, caption: global.mess.sukses}, {quoted:m}))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'translate': case 'terjemahan': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} Teks*`)
  try {
  tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${text}`)
  ipo = tes.info
  dtk = tes.translate
  m.reply(`╭ Translate : ${dtk}\n└ Hasil : ${ipo}`)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'tts': case 'gtts': {
  if (!args[1]) return m.reply(`*Contoh : ${prefix + command} id Teks\nJika Ingin Melihat Kode Bahasa Silahkan Ketik ${prefix}bahasa*`)
  let gtts = require('./lib/gtts')(args[0])
  if (!args[1]) return m.reply('*Textnya Mana*')
  dtt = args.join(' ')
  ranm = getRandom('.mp3')
  rano = getRandom('.ogg')
  dtt.length > 600
  ? m.reply('*Batas Maksimal 600 Text*')
  : gtts.save(ranm, dtt, function() {
  exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
  fs.unlinkSync(ranm)
  let buff = fs.readFileSync(rano)
  if (err) return reply2(from)
  xcaa.sendMessage(m.chat, {audio: buff, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
  fs.unlinkSync(rano)
  })
  })
  }
  break
case 'volumereq': {
  if (!args.join(" ")) return m.reply(`*Contoh : ${prefix + command} 10*`)
  try {
  media = await xcaa.downloadAndSaveMediaMessage(quoted, "volume")
  if (/audio/.test(mime)) {
  rname = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply2(from)
  jadie = fs.readFileSync(rname)
  xcaa.sendMessage(m.chat, {audio: jadie, mimetype: 'audio/mp4', ptt: false}, {quoted: m})
  fs.unlinkSync(rname)
  })
  } else if (/video/.test(mime)) {
  rname = getRandom('.mp4')
  exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply2(from)
  jadie = fs.readFileSync(rname)
  xcaa.sendMessage(m.chat, {video: jadie, mimetype: 'video/mp4', caption: global.mess.sukses}, {quoted: m})
  fs.unlinkSync(rname)
  })
  } else {
  m.reply("Kirim video/audio")
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'bassreq': {
  if (!args.join(" ")) return m.reply(`*Contoh : ${prefix + command} 10*`)
  var req = args.join(' ')
  media = await xcaa.downloadAndSaveMediaMessage(quoted, "bass")
  if (/audio/.test(mime)) {
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply2(from)
  hah = fs.readFileSync(ran)
  xcaa.sendMessage(m.chat, {audio: hah, mimetype: 'audio/mp4', ptt: false}, {quoted: m})
  fs.unlinkSync(ran)
  })
  } else if (/video/.test(mime)) {
  ran = getRandom('.mp4')
  exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply2(from)
  hah = fs.readFileSync(ran)
  xcaa.sendMessage(m.chat, {video: hah, mimetype: 'video/mp4', caption: global.mess.sukses}, {quoted: m})
  fs.unlinkSync(ran)
  })
  } else {
  m.reply("Kirim video/audio")
  }
  }
  break
case 'temporeq': {
  if (!args.join(" ")) return m.reply(`*Contoh : ${prefix + command} 10*`)
  var req = args.join(' ')
  media = await xcaa.downloadAndSaveMediaMessage(quoted, "tempo")
  if (/audio/.test(mime)) {
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply2(from)
  hah = fs.readFileSync(ran)
  xcaa.sendMessage(m.chat, {audio: hah, mimetype:'audio/mp4', ptt: false}, {quoted:m})
  fs.unlinkSync(ran)
  })
  } else if (/video/.test(mime)) {
  ran = getRandom('.mp4')
  exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply2(from)
  hah = fs.readFileSync(ran)
  xcaa.sendMessage(m.chat, {video: hah, mimetype:'video/mp4', caption: global.mess.sukses}, {quoted:m})
  fs.unlinkSync(ran)
  })
  } else {
  m.reply("Kirim video/audio")
  }
  }
  break
//Database
case 'setcmd': {
  if (!m.quoted) return m.reply('*Reply Sticker!*')
  if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
  if (!text) return m.reply(`Untuk Command Apa?`)
  let hash = m.quoted.fileSha256.toString('base64')
  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
  global.db.sticker[hash] = {
    text,
    mentionedJid: m.mentionedJid,
    creator: m.sender,
    at: + new Date,
    locked: false,
  }
  m.reply(mess.sukses)
  }
  break
case 'delcmd': {
  let hash = m.quoted.fileSha256.toString('base64')
  if (!hash) return m.reply(`*Command Sticker Itu Tidak Ada Di Database Bot*`)
  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
  delete global.db.sticker[hash]
  m.reply(mess.sukses)
  }
  break
case 'listcmd': {
  let teks = `*List Hash*\nInfo: *bold* hash is Locked\n${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
  xcaa.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
  }
  break
case 'lockcmd': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.ownerBot)
  if (!m.quoted) return m.reply('*Reply Sticker!*')
  if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
  let hash = m.quoted.fileSha256.toString('base64')
  if (!(hash in global.db.sticker)) throw 'Hash not found in database'
  global.db.sticker[hash].locked = !/^un/i.test(command)
  m.reply(mess.sukses)
  }
  break
case 'addmsg': {
  if (!m.quoted) return m.reply('*Reply Message!*')
  if (!text) return m.reply(`*Contoh : ${prefix + command} FileName*`)
  let msgs = global.db.database
  if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`)
  msgs[text.toLowerCase()] = quoted.fakeObj
  let buttons = [
      {buttonId: `${prefix}listmsg`, buttonText: {displayText: 'List Message'}, type: 1}
  ]
  let buttonMessage = {
  document: global.thumb2,
  fileName: `${rdmpck}`,
  mimetype: `${rdmfil}`,
  fileLength: 99999999,
  jpegThumbnail: global.thumb2,
  caption: `Sukses Menambah List Pesan Sebagai : *${text}*\n\nAkses dengan ${prefix}getmsg ${text}\nAtau Klik Tombol Dibawah\n\nLihat List Pesan Dengan ${prefix}listmsg`,
  footer: `${rdmaut}`,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply: {showAdAttribution: true, title: `Hai ${pushname}`, body: `${wib}`, previewType: "PHOTO", thumbnailUrl: ``, thumbnail: global.thumb2, sourceUrl: global.roflix}}
  }
  xcaa.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
case 'getmsg': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} FileName\n\nLihat list pesan dengan ${prefix}listmsg*`)
  let msgs = global.db.database
  if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' Tidak terdaftar di list pesan`)
  xcaa.copyNForward(m.chat, msgs[text.toLowerCase()], true)
  }
  break
case 'listmsg': case 'listmess': case 'listmes': case 'listmessage': {
  try {
  let msgs = JSON.parse(fs.readFileSync('./storage/db.json'))
  let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
  listMsgs = []
  for (let i of seplit) {
  listMsgs.push({title: `${i.nama}`, rowId: `${i.nama}`, description: `${getContentType(i.message).replace(/Message/i, '')}`})
  }
  const sections = [
  {title: "Total Message " + seplit.length, rows: listMsgs}
  ]
  const listMessage = {
  text: "Silahkan Klik Dibawah, Untuh Melihat List Respon Message",
  footer: `${rdmaut}`,
  title: "「 List Respon Message 」",
  buttonText: "List Message",
  sections,
  }
  xcaa.sendMessage(m.chat, listMessage, {quoted: m})
  } catch {
  m.reply(`Belum ada respon message yang ditambahkan dalam list`)
  }
  }
  break
case 'delmsg': case 'deletemsg': {
  let msgs = global.db.database
  if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
  delete msgs[text.toLowerCase()]
  m.reply(`Berhasil menghapus '${text}' dari list pesan`)
  }
  break
//Islamic
  case 'iqra': {
  if (!text) return m.reply(`*Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1, 2, 3, 4, 5, 6*`)
  try {
  bufft = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
  xcaa.sendMessage(m.chat, {document: bufft, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted: m}).catch ((err) => m.reply(`Contoh : ${prefix + command} 1\n\nIQRA Yang tersedia : 1, 2, 3, 4, 5, 6`))
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'juzamma': {
  try {
  if (args[0] === 'pdf') {
  m.reply(mess.wait)
  xcaa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
  } else if (args[0] === 'docx') {
  m.reply(mess.wait)
  xcaa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
  } else if (args[0] === 'pptx') {
  m.reply(mess.wait)
  xcaa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
  } else if (args[0] === 'xlsx') {
  m.reply(mess.wait)
  xcaa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
  } else {
  m.reply(`*Contoh : ${prefix + command} pdf/docx/pptx/xlsx*`)
  }
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'hadis': case 'hadist': {
  if (!args[0]) return m.reply(`*Contoh : ${prefix + command} muslim 1\n\nPilihan Tersedia :\n\nabu-daud\n1 - 4590\nahmad\n1 - 26363\nbukhari\n1 - 7008\ndarimi\n1 - 3367\nibu-majah\n1 - 4331\nnasai\n1 - 5662\nmalik\n1 - 1594\nmuslim\n1 - 5362*`)
  if (!args[1]) return m.reply(`*Contoh : ${prefix + command} muslim 1*`)
  try {
  let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
  let { number, arab, id } = res.find(v => v.number == args[1])
  m.reply(`No. ${number}\n\n${arab}\n\n${id}`)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'alquran': {
  if (!args[0]) return m.reply(`*Contoh : ${prefix + command} 1 2\nMaka hasilnya surah Al-Fatihah ayat 2 beserta audionya*`)
  if (!args[1]) return m.reply(`*Contoh : ${prefix + command} 1 2\nMaka hasilnya surah Al-Fatihah ayat 2 beserta audionya*`)
  try {
  let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
  let txt = `「 *Al-Qur'an* 」

*Arab* : ${res.result.data.text.arab}

*English* : ${res.result.data.translation.en}

*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
  auu = await xcaa.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
  xcaa.sendMessage(m.chat, {text: txt}, {quoted: auu})
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'tafsirsurah': {
  if (!args[0]) return m.reply(`*Contoh : ${prefix + command} 1 2\nMaka hasilnya tafsir surah Al-Fatihah ayat 2*`)
  if (!args[1]) return m.reply(`*Contoh : ${prefix + command} 1 2\nMaka hasilnya tafsir surah Al-Fatihah ayat 2*`)
  try {
  let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
  let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
  m.reply(txt)
  } catch (err) {
  reply2(from)
  }
  }
  break
//Anime
case 'listanime': case 'listanim': {
  try {
  let sections = [{
  title: "List Anime",
  rows: [
  {title: "Akira", rowId: `akira`, description: ``},
  {title: "Akiyama", rowId: `akiyama`, description: ``},
  {title: "Ana", rowId: `ana`, description: ``},
  {title: "Asuna", rowId: `asuna`, description: ``},
  {title: "Ayuzawa", rowId: `ayuzawa`, description: ``},
  {title: "Boruto", rowId: `boruto`, description: ``},
  {title: "Chitoge", rowId: `chitoge`, description: ``},
  {title: "Deidara", rowId: `deidara`, description: ``},
  {title: "Elaina", rowId: `elaina`, description: ``},
  {title: "Emilia", rowId: `emilia`, description: ``},
  {title: "Erza", rowId: `erza`, description: ``},
  {title: "Gremory", rowId: `gremory`, description: ``},
  {title: "Hestia", rowId: `hestia`, description: ``},
  {title: "Hinata", rowId: `hinata`, description: ``},
  {title: "Inori", rowId: `inori`, description: ``},
  {title: "Isuzu", rowId: `isuzu`, description: ``},
  {title: "Itachi", rowId: `itachi`, description: ``},
  {title: "Itori", rowId: `itori`, description: ``},
  {title: "Kaga", rowId: `kaga`, description: ``},
  {title: "Kagura", rowId: `kagura`, description: ``},
  {title: "Kakasih", rowId: `kakasih`, description: ``},
  {title: "Kaori", rowId: `kaori`, description: ``},
  {title: "Kaneki", rowId: `keneki`, description: ``},
  {title: "Kotori", rowId: `kotori`, description: ``},
  {title: "Kurumi", rowId: `kurumi`, description: ``},
  {title: "Madara", rowId: `madara`, description: ``},
  {title: "Mikasa", rowId: `mikasa`, description: ``},
  {title: "Minato", rowId: `minato`, description: ``},
  {title: "Naruto", rowId: `naruto`, description: ``},
  {title: "Nezuko", rowId: `nezuko`, description: ``},
  {title: "Onepiece", rowId: `onepiece`, description: ``},
  {title: "Pokemon", rowId: `pokemon`, description: ``},
  {title: "Rize", rowId: `rize`, description: ``},
  {title: "Rose", rowId: `rose`, description: ``},
  {title: "Ryujin", rowId: `ryujin`, description: ``},
  {title: "Sakura", rowId: `sakura`, description: ``},
  {title: "Sagiri", rowId: `sagiri`, description: ``},
  {title: "Hentai", rowId: `hentai`, description: ``},
  {title: "Sasuke", rowId: `sasuke`, description: ``},
  {title: "Shina", rowId: `shina`, description: ``},
  {title: "Shinka", rowId: `shinka`, description: ``},
  {title: "Shizuka", rowId: `shizuka`, description: ``},
  {title: "Shota", rowId: `shota`, description: ``},
  {title: "Toukachan", rowId: `toukachan`, description: ``},
  {title: "Tsunade", rowId: `tsunade`, description: ``},
  {title: "Yuki", rowId: `yuki`, description: ``},
  {title: "Yuri", rowId: `yuri`, description: ``}
  ]
  },
  ]
  xcaa.sendList(m.chat, `Silahkan Klik Dibawah Jika Ingin Melihat List Anime`, `${rdmaut}`, `Hai ${pushname}`, `Klik Disini`, sections, m)
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'akira': case 'akiyama': case 'ana': case 'asuna':
case 'ayuzawa': case 'boruto': case 'chitoge': case 'deidara': case 'elaina':
case 'emilia': case 'erza': case 'gremory': case 'hestia': case 'hinata':
case 'inori': case 'isuzu': case 'itachi': case 'itori': case 'kaga':
case 'kagura': case 'kakasih': case 'kaori': case 'keneki': case 'kotori':
case 'kurumi': case 'madara': case 'mikasa': case 'minato': case 'naruto':
case 'nezuko': case 'onepiece': case 'pokemon': case 'rize': case 'rose': case 'ryujin': case 'sakura':
case 'sagiri': case 'hentai': case 'sasuke': case 'shina': case 'shinka': case 'shizuka':
case 'shota': case 'toukachan': case 'tsunade': case 'yuki': case 'yuri': {
  m.reply(mess.wait)
  try {
  jri = fs.readFileSync(`./lib/${command}.js`);
  jsonData = JSON.parse(jri);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  roall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ image: roall }, { upload: xcaa.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    imageMessage: message.imageMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: `${rdmaut}`,
     hydratedButtons: [
     {urlButton: {displayText: 'RoFlix Film', url: global.roflix}},
     {callButton: {displayText: 'Number Owner', phoneNumber: global.ownerNumber2}}, 
     {quickReplyButton: {displayText: 'Next Image', id: `${command}`}}
    ]
   }
  }
  }), { userJid: m.chat, quoted: m })
  xcaa.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  reply2(from)
  }
  }
  break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'waifu': case 'shinobu': case 'megumin': case 'handhold': {
  m.reply(mess.wait)
  axios.get(`https://api.waifu.pics/sfw/${command}`)
  .then(({data}) => {
  xcaa.sendImageAsSticker(m.chat, data.url, m, { packname: `${rdmpck}`, author: `${rdmaut}` })
  })
  }
  break
//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.ownerBot)
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
  if (!isOwner) return m.reply(mess.ownerBot)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.ownerBot)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }
if (isCmd && budy.toLowerCase() != undefined) {
  if (m.chat.endsWith('broadcast')) return
  if (m.isBaileys) return
  if (!(budy.toLowerCase() in global.db.database)) return
  xcaa.copyNForward(m.chat, global.db.database[budy.toLowerCase()], true)
  }

  } // switch
  } /* try*/catch (err) {
    console.log(util.format(err))
  }
} // module


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
