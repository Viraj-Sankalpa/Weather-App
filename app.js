const getWeather = require('./utils/weather');

getWeather(13,-94)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })