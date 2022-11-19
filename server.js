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

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
    .then(result => console.log('connected to MongoDB! 🥳👏🏆'))
    .catch(err => console.log(err.message));

const PORT = process.env.PORT || 8000;

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const errorRouter = require('./routes/404');


app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true }));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use(errorRouter);

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});