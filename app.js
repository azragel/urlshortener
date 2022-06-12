// 載入框架套件
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// 與MONGODB連線設定
require('./config/mongoose')

const app = express()
const port = process.env.PORT || 3000

// 載入路由設定
const routes = require('./routes')

// 樣板引擎設定
app.engine('hbs', exphbs({ defaultlayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

// 使用路由
app.use(routes)

app.listen(port, () => {
  console.log(`http://localhost:${port} is activated`)
})
