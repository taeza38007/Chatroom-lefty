const session = require('express-session');
const MongoStore = require('connect-mongo');

const ses = session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie : { maxAge: 1000 * 60 * 60 * 24 },
    store: MongoStore.create({ 
        mongoUrl: process.env.DATABASE_URL,
        collection: 'sessions'
        })
    })


module.exports = ses;
 