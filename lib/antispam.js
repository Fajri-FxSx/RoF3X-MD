/*
  •> Script By FxSx
  •> Ini Sc Bot Masih Beta Dari Multi Device [Baileys]
  •> Dan Jangan Hapus Nama Yang Punya Script!
  •> Jangan copas bang, ingat allah maha mengetahui
  •> Kalo mau Izin dulu yang punya sc 
  •> kalo mau tambahin nama FxSx thanks to sc bot lu
*/
const usedCommandRecently = new Set()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 2000) //2 detik antispam!
}

module.exports = { 
    antiSpam: {
    isFiltered,
    addFilter
}
}