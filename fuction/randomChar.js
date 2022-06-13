function randomChar (digit) {
  const charPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let chars = ''
  for (let i = 0; i < digit; i++) {
    const index = Math.floor(Math.random() * charPool.length)
    chars += charPool[index]
  }
  return chars
}

module.exports = randomChar
