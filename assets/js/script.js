const application = { 
    initialise: () => {
        document.getElementById('search')
        document.addEventListener('click', application.getWeather)
 },
 getWeather: (ev) => {
    var lat = document.getElementById('latitude').value;
    var lon = document.getElementById('longitude').value;
    var apikey = '4f9ba918e0d8a079dfc53e72aba1c1c8'
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
 
 fetch(url)
 .then((resp) => {
    if (!resp.ok) throw new Error(resp.statusText);
    return resp.json();
  })
  .then((data) => {
    application.display(data);
  })
  .catch(console.err);
},
display: (resp) => {
    console.log(resp);
    localStorage.setItem('weather', resp);
}
};

application.initialise();