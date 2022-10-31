const API_KEY_SEARCH = process.env.API_KEY_SEARCH;
const inputValue = document.querySelector('.inputValue');
const searchForm = document.querySelector('.button');
const cityname = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

searchForm.addEventListener('click', function() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${API_KEY_SEARCH}&units=metric`;

    const data = fetch(url).then((res) => res.json())
        .then(d => {
            const nameValue = d['name'];
            const tempValue = d['main']['temp'];
            const descValue = d['weather'][0]['description'];

            cityname.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;

            console.log(nameValue)
        })
        .catch(err=>alert("Wrong City Name!"));
});



