const axios = require('axios');

const getGeo = (city)=>{
    return new Promise((resolve,reject)=>{
        const locationUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=1&appid=e11cfdcd19951791ca0c0943ac7529c3';

        axios.get(locationUrl)
        .then(function (response) {
            resolve({location:response.data[0].name,
                     lat: response.data[0].lat ,
                     lon: response.data[0].lon,
                     })
            // handle success
            // console.log(response.data[0].name + " is in lat = " + response.data[0].lat +"and lon = " + response.data[0].lon + " ==> " + response.data[0].country);

        })
        .catch(function (error) {
            reject({err : "Unable to find the location"})
            // handle error
            // console.log("Unable to find the location");
        });


            })
}

//get location
// const city = "matale";


module.exports = getGeo;