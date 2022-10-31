const loginInput = document.querySelector('#loginForm input');
const loginForm = document.querySelector('#loginForm');
const greeting = document.querySelector('#greeting');
const message = document.querySelector('#message');
const messageInput = document.querySelector('#messageForm input');
const messageForm = document.querySelector('#messageForm');
const list = document.querySelector('#list');

const HIDDEN = 'hidden';

const savedUsername = localStorage.getItem('username');
const savedList = localStorage.getItem('list');

if (savedUsername) {
    paintGreeting(savedUsername);
}else if (savedList){
    paintList(savedList);
} 
else {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener('submit', handleClick);
    messageForm.addEventListener('submit', handleList);
}

function paintGreeting(username) {
    greeting.innerText = `Good Day, ${username}.`;
    greeting.classList.remove(HIDDEN); 
}

function paintList(lis){
    list.innerHTML=`# ${lis}.`;
}
function handleList(e){
    e.preventDefault();
    const list1 = messageInput.value;
    localStorage.setItem('list',list1);
    paintList(list1);
    messageInput = '';
}

function handleClick(e) {
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN);
    localStorage.setItem('username', username);
    paintGreeting(username);
    message.classList.remove(HIDDEN);
    messageForm.classList.remove(HIDDEN);  
}

