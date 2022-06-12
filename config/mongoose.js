const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI_SHORTEN, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('url_shortener mongoDB error')
})

db.once('open', () => {
  console.log('url-shortener mongoDB connected!')
})

module.exports = db
