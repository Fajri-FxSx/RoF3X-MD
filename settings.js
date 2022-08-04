const fs = require('fs')
const chalk = require('chalk')


global.thumb = fs.readFileSync('./src/imgnya.jpg')
global.thumb2 = fs.readFileSync('./src/imgnya2.jpg')
global.weel = fs.readFileSync('./src/wellcom.mp3')
global.beey = fs.readFileSync('./src/leavee.mp3')
global.vnerror = fs.readFileSync('./src/errorr.mp3')
global.vnlinkgc = fs.readFileSync('./src/vnlinkgc.mp3')
global.roflix2 = 'https://roflix.my.id/'
global.roflix = 'https://roflixzy.vercel.app/'
global.linkgc = 'https://chat.whatsapp.com/Gr6Wy6OoRTP00YmV0x6pHr'
global.userB = []
global.ownerNumber = ['6283815956151','6283815956151']
global.ownerNumber2 = '+6283815956151'
global.packname = 'RoF3X-MD'
global.author = '© FxSx'
global.prefa = ['','!','#','&','/','.']
global.sessionName = 'sesi'
global.mess = {
  admin: '*Fitur Khusus Admin Grup*',
  botAdmin: '*Jadikan Bot Admin Terlebih Dahulu*',
  ownerBot: '*Fitur Khusus Owner*',
  group: '*Fitur Khusus Group*',
  private: '*Fitur Khusus Private Chat*',
  wait: '*Diproses...*',
  sukses: '*Sukses*',
  error: '*Error...*'
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
