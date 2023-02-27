const axios = require('axios');

let lat =44.34;
let lon = 10.99;

const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=e11cfdcd19951791ca0c0943ac7529c3';


axios.get(url)
  .then(function (response) {
    // handle success
    console.log("Weather status : ",response.data.weather[0].main);
    console.log("Wind Speed : ",response.data.wind.speed,"m/s");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });