var search = document.querySelector("#search");
var input = document.querySelector("#input");
var location = document.querySelector("#place");
var temp = document.querySelector("#temperature");

search.onclick = function(event) { 
    event.preventDefault(); 
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&appid=4f9ba918e0d8a079dfc53e72aba1c1c8`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => alert('Invalid city name'))
}

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`)
    .then(res => res.json())
    .then(data => console.log(data))
    
search.addEventListener('click', buttonClickHandler);