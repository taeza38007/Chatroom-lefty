const ses = require('./sessions');
const Chathistory = require('../models/chathistory');




module.exports = (io) => {

    const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
    io.use(wrap(ses.ses));


    // users = [];
    let clients = 0;
    let userList = [];

    io.on('connection', async (socket) => {
    
        clients++;
        console.log(`This socket username: ${socket.request.session.username}`);
        console.log('---------------------------------');
        const id = socket.request.session.username;
        userList.push(id);

        // let chathis = await Chathistory.find({});
        // if (!chathis){
        //     console.log('No text');
        // }else{
        //     console.log(`length: ${chathis.length}`);
        // }

        
        // chathis.forEach(chat, () => {
        //     console.log(chat);
        // })

        io.emit('userList', { userList});
        // socket.on('adduser', (id) => {
        //     userList.push(id);
        // })
        // userList.push(id);

        
        let users = [];
        socket.on ('setUsername', (data) => {
            console.log(data);
            socket.id = data;
        })

    // FIX: userCount is herrree________________SERVER_______________________
        socket.emit('newclientconnect', {say: 'Hello 👋 , welcome! 🙃 '});
        console.log(userList.length);
        setTimeout(() => {
            socket.emit('newclientconnect', {say:`${clients} people Online 🥳`})

        },2000);

        // io.emit('newclientconnect', clients);
    
        socket.broadcast.emit('newclientconnect', { say: `${clients} clients online 🎉`});
        socket.on('disconnect', () => {
            clients--;

            let index = userList.indexOf(id);
            if(index > -1){
                userList.splice(index, 1);
            };
            // userList.pop(id);
            io.emit('userList', { userList });

            socket.broadcast.emit('newclientconnect', { say: `${clients} clients online`});
        });
    
        setTimeout(() => {
            // socket.send('after 2 seconds');
            socket.emit('yoEvent',{ yup: 'Hello welcome to the Chatroom!'});
        }, 1000);
        
    
        socket.on('clientEvent', (data) => {
            console.log(data);
        })

        
        socket.on('chat message', (msg) => {
            // let userList = [];

            Chathistory.create({ username:id, text:msg},(err,res) => {
                console.log('inserted.........');
            })
// TODO: userist           
            console.log(`id: ${id}`);
            console.log(`message: ${msg}`);
            // console.log(socket.id,typeof socket);
            // const id = socket.request.session.username;
            // userList.push(id);

            io.emit('chat message', msg, id, clients, userList);
        });
    });


}
// FIX: ________________SERVER_______________________
