const text = document.querySelector('.navbar-brand');
console.log(text);
// text.textContent = "youo";
// text.setAttribute('style', 'font-size:100px;')

console.log('test');



const username = document.querySelector('#username');
const passwd = document.querySelector('#passwd');

username.addEventListener('keyup',() => {
    console.log(username.value);
    // username.setAttribute('style','color:yellow;')
    // username.setAttribute('style','font-size:4rem;')
    // console.log(username.value.length);
    
    username.style.backgroundColor = '#F38DF3';
    username.style.color = '#000000';

    username.style.fontSize = '1.8rem';


    if(username.value.length === 0){
        username.style.fontSize = '1rem';
        username.style.backgroundColor = '#808080';
    }
});


passwd.addEventListener('keyup',() => {
    console.log(passwd.value);
    passwd.style.fontSize = '1.8rem';
    // passwd.style.color = '#F38DF3';
    passwd.style.backgroundColor = '#F38DF3';
    passwd.style.color = '#000000';
    if(passwd.value.length === 0){
        passwd.style.fontSize = '1rem';
        passwd.style.backgroundColor = '#808080';
    }
});

const data = document.querySelector('#userinput');
const button = document.querySelector('button');
const usernameRegex = /^[a-z0-9!~*]+$/i
const passwdRegex = /^[a-z0-9!~*#$%^&()_;'.,/+]+$/i;

button.addEventListener('click',(e) => {
    // e.preventDefault();
    if(!usernameRegex.test(data.username.value)){
        e.preventDefault();
        alert(`👮‍♀️ Username can't be empty 🙅`);  
    }else if(data.username.value.length > 10){
        e.preventDefault();
        alert(`💂‍♀️ Username can't contain more than 10 characters 👩‍🏫`);  
    }else if(!passwdRegex.test(data.passwd.value)){
        e.preventDefault();
        alert(`🦹‍♂️ Password can't be empty ⚔️`); 
    }else if(data.passwd.value.length <= 2){
        e.preventDefault();
        alert(`Password must have a least 3 characters 🙊`); 
    }else if(data.passwd.value.length > 15){
        e.preventDefault();
        alert(`💂‍♀️ Password can't contain more than 15 characters 👩‍🏫`);  
    }


    console.log(`usesrname: ${data.username.value}\npassword: ${data.passwd.value}`);
})


