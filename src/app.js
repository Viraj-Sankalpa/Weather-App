const path = require('path');
const express = require('express');
const getWeather = require('./utils/weather');
const getGeo = require('./utils/getLocation');
const hbs = require('hbs');


const app = express();

const templatePath = path.join(__dirname,"../template");
const partialPath = path.join(__dirname,"../template/partials");

app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialPath);



const publicDirPath = path.join(__dirname,"../public");
console.log(publicDirPath);

app.use(express.static(publicDirPath));

app.get('/',(req,res)=>{
    res.render('index');
})

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


app.get('/help',(req,res)=>{
    res.render('help');
});

app.get('/about',(req,res)=>{
    res.render('about');
});





app.listen(8080,()=>{
    console.log("Server is Working");
})