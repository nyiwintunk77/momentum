const clock = document.querySelector('#clock')

function getClock() {
    const date = new Date();
    const hours = addPad(date.getHours());
    const minutes = addPad(date.getMinutes());
    const seconds = addPad(date.getSeconds());
    clock.innerText = `${hours}:${minutes}:${seconds}`

}

function addPad(obj) {  
    return String(obj).padStart(2, '0');
}

getClock();
setInterval(getClock, 1000);

