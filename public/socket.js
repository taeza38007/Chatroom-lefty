const socket = io();

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const messages = document.querySelector('#messages');
const userCount = document.querySelector('#userCount');
const test = document.querySelector('#test');
const mainbox = document.querySelector('#boxes');
const but = document.querySelector('#but');
const namenav = document.querySelector('#namenav');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value){
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

const namee = document.getElementById('name');
console.log(typeof namee);

function setUsername(){ 
    socket.emit('setUsername', document.getElementById('name').value);
    console.log('herererere');

    console.log(document.getElementById('name').value);
};

// const setUsername = () => {
//     const name = document.getElementByName('name');
//     console.log(name);
//     socket.emit('setUsername', document.getElementByName('name'));
// };
// let user;
// socket.on('userExists', (data) => {
//     document.getElementById('error-container').innerHTML = data;
// });
// socket.on('userSet', (data) => {
//     user = data.username;
//     document.body.innerHTML = '<input type="text" id="message">\
// <button type="button" name="button" onclick="sendMessage()">Send</button>\
// <div id="message-container"></div>';
// });

const sendMessage = () => {
    let msg = document.getElementById('message').value;
    if (msg){
        socket.emit('msg', {message: msg, user: user});
    }
}


// TODO: HERE_______________________________________________-
socket.on('userList',(data) => {
    let userList = document.querySelector('#userList');
    console.log(data.userList);
    userList.innerHTML = data.userList;

    console.log(`chat: ${data.chathis.length}`);
    console.log(Object.values(data.chathis));
    let chathisText = data.chathis.map( a => a.text );
    console.log(chathisText);
    let chathisUser = data.chathis.map( a => a.username);
    console.log(chathisUser);

    
    // console.log(`namenav ${namenav.textContent}`);

    for(let i = 0; i < chathisUser.length; i++){
        let item = document.createElement('li');
        // console.log(chathisUser[i]);
        // console.log(chathisText[i]);
        item.textContent = `${chathisUser[i]}: ${chathisText[i]}`;
        // messages.appendChild(item);
        // item.textContent += `${chathisText[i]}`;
        if(chathisUser[i]=== namenav.textContent){
            item.style.textAlign = 'right';
        }
        messages.appendChild(item);
        but.click();
    };
    
// TODO: here 
    // chathisUser.forEach((e, i) => {
    //     console.log(e,i);
    //     item.textContent = `${e}: `;
    //     messages.appendChild(item);
    // });


    // item.textContent = `${chathisUser}: `;
    // messages.appendChild(item);
    // item.textContent += `${chathisText}`;

    // if(id === namenav.textContent){
        // item.style.textAlign = 'right';
    // }
    // messages.appendChild(item);


} );
// OPTIMIZE: making chat history in front end create li and put all history in them
// socket.emit('clientEvent', 'a message from client side');

// socket.on('broadcast', (data) => {
    // let item = document.createElement('li');
//     item.textContent = data; 
//     messages.appendChild(data.welcome);
//     window.scrollTo(0, document.body.scrollHeight);
// })

// var sk = io('/my-namespace');
// sk.on('hi',function(data){
//     document.body.innerHTML = '';
//     document.write(data);
// });

// TODO: userCount is herrree_____________CLIENT__________________________
socket.on('newclientconnect', (data) => {
    let userCount = document.querySelector('#userCount');
    userCount.innerHTML = data.say;
    // console.log(clients);
    // setTimeout(() => {
    //     userCount.innerHTML = data.say;
    //     console.log('here');
    // }, 3000);
});

// socket.on('broadcast',data => {
//     let userCount = document.querySelector('#userCount');

//     userCount.innerHTML =  data.description;
//     console.log(typeof data.description);
//     console.log(data.description);

//     // setTimeout(() => {
//     //     // userCount.innerHTML = ''
        

//     //     console.log('here');
//     // }, 1500);
// });

socket.on('yoEvent', (words) => {
    let item = document.createElement('li');
    item.innerHTML = words.yup;
    console.log(item);
    messages.appendChild(item);

});

// socket.on('broadcast',function(data){
//     let item = document.createElement('li');
//     // welcome.textContent = data.welcome;
//     item.textContent = data.description;
//     // messages.appendChild(welcome);
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
// });

// socket.on('message', (data) => {
//     let item = document.createElement('li');
//     console.log(data);
//     console.log(typeof data);
//     item.innerHTML = data;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
// });


socket.on('chat message', (msg, id, clients, userList) => {

    
    userCount.textContent = 'test';


    let span = document.createElement('span');
    let item = document.createElement('li');
    const name = id;
    // id = `user`;

    console.log(userList);

    console.log(`namenav: ${namenav.textContent.length}`);
    console.log(`id: ${id.length}`);

    console.log(`namenav: ${typeof namenav.textContent}`);
    console.log(`id: ${typeof id}`);

    // console.log(namenav.trim() === id.trim());
    // console.log(socket.request.session.username);

    item.textContent = `${id}: `;
    messages.appendChild(item);
    item.textContent += `${msg}`;

    if(id === namenav.textContent){
        item.style.textAlign = 'right';
    }
    messages.appendChild(item);
    but.click();

    but.addEventListener('click',() => {
        item.scrollIntoView({behavior: 'smooth'});
        
    })

    // item.textContent = `${id}: `;
    // span.appendChild(item);
    // item.textContent += `${msg}`;
    // span.appendChild(item);
    // messages.appendChild(span);
    

    // // messages.appendChild(document.createElement(' \n'));
    
    // window.scrollTo(0, document.body.scrollHeight);
});

// TODO: _____________CLIENT_______________________________________________________













