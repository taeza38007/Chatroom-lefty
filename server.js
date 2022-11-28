if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
};

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const http = require('http');
const server =http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
require('./controllers/socket')(io);

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const mongoose = require('mongoose');
const connection = mongoose.connect(process.env.DATABASE_URL)
    .then(result => console.log('connected to MongoDB! 🥳👏🏆'))
    .catch(err => console.log(err.message));

const PORT = process.env.PORT || 8000;

const indexRouter = require('./routes/index');
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const signoutRouter = require('./routes/signout');
const aboutRouter = require('./routes/about');
const errorRouter = require('./routes/404');
const chatroomRouter = require('./routes/chatroom');

const ses = require('./controllers/sessions');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.use(ses.ses);
app.use(flash());

app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/signout', signoutRouter);
app.use('/about', aboutRouter);
app.use('/chatroom', chatroomRouter);


app.use(errorRouter);


server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});