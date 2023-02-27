const express = require('express');
const getWeather = require('./utils/weather');
const getGeo = require('./utils/getLocation');


const app = express();

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send("Address not found!");
    }

    getGeo(req.query.address)
    .then((location)=>{
        // console.log(location);
        return getWeather(location.lat,location.lon);
    })
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.send(error);
    })

})






app.listen(8080,()=>{
    console.log("Server is Working");
})