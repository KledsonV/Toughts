// Dotenv
require('dotenv').config()
// Express
const express = require('express')
const app = express()
// Express-HandleBars
const exphbs = require('express-handlebars')
// Express-Session
const session = require('express-session')
// Session-File-Store
const Filestore = require('session-file-store')(session)
// Express-flash
const flash = require('express-flash')
// DatabBase
const conn = require('./db/conn')
// PORT
const port = process.env.PORT

// Config exphbs
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Configs
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Session middleware
app.use(
    session({
        name: 'session',
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        store: new Filestore({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    }),
)

// Flash Messges
app.use(flash())

// Public path
app.use(express.static('public'))

// Save session to res
app.use((req,res,next)  => {

    if(req.session.userid){
        res.locals.session = req.session
    }
    next()

})

// Models
const Tought = require('./models/Tought')
const User = require('./models/User')

// Toughts
const toughtsController = require('./controllers/toughtsController')
const ToughtRouter = require('./routes/toughtRoutes')

app.use('/toughts', ToughtRouter)
app.get('/', toughtsController.showToughts)

// Auth
const authRoutes = require('./routes/authRoutes')

app.use('/', authRoutes)


conn.sync()
.then(
    app.listen(port, () => {
        console.log(`Conectou na porta: ${port}`);
    })
)
.catch((err) => {
    console.log(`Erro index DB: ${err}`);
})