function randomChar (digit) {
  const charPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let chars = ''
  for (i = 0; i < digit; i++) {
    const index = Math.floor(Math.random() * charPool.length - 1)
    chars += charPool[index]
  }
  return chars
}

module.exports = randomChar
