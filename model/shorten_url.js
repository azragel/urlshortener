const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shorturlSchema = new Schema({
  url: {
    type: String,
    require: true
  },
  shortenURL_ID: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('shorten_url', shorturlSchema)
