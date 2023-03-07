const axios = require('axios');

// weather information
// let lat =6.982919;
// let lon = 79.871069;

const getWeather = (lat,lon)=>{
    return new Promise((resolve,reject)=>{

        const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=e11cfdcd19951791ca0c0943ac7529c3';


            axios.get(url)
            .then(function (response) {

                resolve({weather:'Weather status :  '+response.data.weather[0].main +'  &  Wind Speed :  '+ response.data.wind.speed +'m/s & Temperature :  '+ response.data.main.temp+ ' Country :  ' + response.data.sys.country})
                // resolve({weather: 'This city is Located in ' + response.data.country})
                // handle success
                // console.log("Tepperature : ",response.data.main.temp);
                console.log("Wind Speed : ",response.data.wind.speed,"m/s");
            })
            .catch(function (error) {
                reject({error:error.response.data.message})
                // handle error
                // console.log(error.response.data.message);
            });

    })
}


module.exports =  getWeather;