const path = require("path")


const express = require("express")
const bodyParser = require("body-parser")

const adminData = require("./routes/admin")
const shopRouter = require("./routes/shop")

const app = express()

// Setting pug as the templating engine
app.set('view engine', 'pug') 

app.use(bodyParser.urlencoded({extended: false})) 
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminData.routes)
app.use(shopRouter)

app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(3000)