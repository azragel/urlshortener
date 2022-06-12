const shorten_url=require('../shorten_url')
const shorten_url_JSON=require('../../shorten_url.json')
const shorten_url_Data=shorten_url_JSON.results

const db =require('../../config/mongoose')

db.once('open',()=>{
  shorten_url.create(shorten_url_Data)
  .then(()=>{
    console.log('urlseeders done!')
  }).catch(error=>console.log(error))
  .finally(()=>db.close())

})
