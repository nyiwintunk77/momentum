const API_KEY = process.env.API_KEY;
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function successCallback(p){
    const latitude = p.coords.latitude;
    const longitude = p.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const data=fetch(url).then((res)=>res.json())
        .then((data) => { paintWeather(data.main); weatherCondition(data.weather); paintLocation(data)});
}

function errorCallback(e) {
    alert("ERROR");

}

function paintWeather(data){
    const weather = document.createElement('span');
    weather.innerText = `${data.temp}℃`; 
    
    const weatherDiv=document.querySelector('#weather');
    weatherDiv.appendChild(weather);       
}

function paintLocation(lo){
    const location = document.createElement('span');
    location.innerText = `${lo.name}`;
    console.log(lo.name)
    const locationDiv = document.querySelector('#location');
    locationDiv.appendChild(location);
}

const wcon = {
    Clear: '🌤',
    Rain: '🌧',
    Snow: '❄',
    Extreme : '⛈',
}

function weatherCondition(co){
    const type = wcon[co[0].main]
    const condition = document.createElement('span');
    condition.innerText = `${type}`
    console.log("Type :"+type);
    // condition.innerText = `${co[0].icon}`;
    const conditionDiv = document.querySelector('#condition');
    conditionDiv.appendChild(condition);
}