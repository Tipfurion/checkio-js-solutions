function firstWord(str) {
    return str.replace(/[\s+.,]/g, ' ').trim().split(' ')[0]
}
