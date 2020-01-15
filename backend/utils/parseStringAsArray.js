function parseStringAsArray(str) {
    return str.split(',').map(ele => ele.trim())
}   

module.exports = parseStringAsArray
