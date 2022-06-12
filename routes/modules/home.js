const express = require('express')
const router = express.Router()
const shortenURL = require('../../model/shorten_url')
const randomChar = require('../../fuction/randomChar')

router.get('/', (req, res) => {
  res.render('index')
})

// 轉短網址
router.post('/', (req, res) => {
  const url = req.body.url
  const digit = 5
  const shortenURL_ID = randomChar(digit)
  const host = req.headers.origin
  console.log(url, shortenURL_ID)

  shortenURL.findOne({ url })
    .lean()
    .then(urlData => {
      if (urlData) {
        return res.render('index', ({ url, host, shorten_url: urlData.shortenURL_ID }))
      } else {
        shortenURL.create({ url, shortenURL_ID })
        return res.render('index', ({ url, host, shorten_url: shortenURL_ID }))
      }
    }).catch(error => console.log(error))
})

// 短網址導向原網址
router.get('/:id', (req, res) => {
  const id = req.params.id

  return shortenURL.findOne({ shortenURL_ID: `${id}` })
    .lean()
    .then(shortenURL => res.redirect(shortenURL.url))
    .catch(error => console.log(error))
})

module.exports = router
