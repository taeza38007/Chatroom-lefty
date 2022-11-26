const session = require('express-session');
const MongoStore = require('connect-mongo');
// const Session = require('../controllers/sessions');

const ses = session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie : { maxAge: 1000 * 60 * 60 * 24 },
    store: MongoStore.create({ 
        mongoUrl: process.env.DATABASE_URL,
        collection: 'sessions'
    })
});

const getView = (req) => {
    if(req.session.viewCount){
        req.session.viewCount++;
    }else{
        req.session.viewCount = 1;
    }
    console.log(req.session.viewCount);
}


const userSession = (req, username) => {
    if(!req.session.username){
        req.session.username = username;
    }
    console.log(`session username: ${req.session.username}`);
};

const createUserSession = (req) => {
    if(!req.session.userID){
        req.session.userID = req.session.id;
    }
    console.log(`User session id: ${req.session.id}`);
}

const isLogin = (req, res) => {
    if(!req.session.userID){
        res.redirect('/login');
        console.log('no user id');
    }else{
        getView(req);
        console.log('match user session ID');
        req.flash('welcome', 'Welcome!✍️🥳');
        // res.redirect('/home')
        res.render('index',{ title: "Welcome home!", views: req.session.viewCount, welcome: req.flash('welcome'),username:req.session.username } );
        // next();
    }
};

const logOut = async (req, res) => {

    if (req.session){
        await req.session.destroy();
        console.log('Session is destroyed....');
        console.log(req.session);
    }else{
        console.log('no session found');
    }
    // delete req.session.userID;
    // res.redirect('/login');
}

module.exports = { ses, getView, userSession, createUserSession, isLogin, logOut} ;
