const STORAGE_KEY = 'vuetify-todos'

export const parse = function () {
    let toParse = ''
    if (window.localStorage.getItem(STORAGE_KEY)) {
      toParse = window.localStorage.getItem(STORAGE_KEY)
    } else {
      toParse = '[]'
    }
    console.log('parseado!')
    return JSON.parse(toParse)
}