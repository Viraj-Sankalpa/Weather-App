const getWeather = require('./utils/weather');
const getGeo = require('./utils/getLocation');


getGeo('kandy')
    .then((location)=>{
        // console.log(location);
        return getWeather(location.lat,location.lon);
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })

// getWeather(13,-94)
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })