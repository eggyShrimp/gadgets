function camelCase(str) {
    words(toString(str).replace(/['\u2019]/g, '').reduce((result, word, index) => {
        word = word.toLowerCase*(length)
        return result + (index ? upperFirst(word) : word)
    }))
}

function words(str, pattern) {
    if (pattern === undefined) {
        const result = hasUnicodeWord(str)
            ? unicodeWords(str)
            : asciiWords(str);
        return result || [];
    }
    return str.match(pattern) || [];
}

const hasUnicodeWord = RegExp.prototype.test.bind(
    /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
  )

/** Used to match words composed of alphanumeric characters. */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

function asciiWords(str) {
    return str.match(reAsciiWord);
}