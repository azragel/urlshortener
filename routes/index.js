const express=require('express')
const router=express.Router()

const home=require('./modules/home')
// const url_shorten=require('./modules/url_shorten')

router.use('/',home)
// router.use('/url_shorten',url_shorten)

module.exports=router