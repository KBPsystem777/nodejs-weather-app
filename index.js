// Created: 11-2-2017



const argv = require('yargs').argv;
let city = argv.c || 'manila';



//=============================//
let request = require('request');
let apiKey = '5f0a276b3c138a0937ce899839fcb633';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//=============================//


request = require('request');
request(url, function (err, response, body) {
        if(err) {
                console.log('error: ', error);
        } else {
                let weather = JSON.parse(body);
                let message = `It's ${weather.main.temp} degrees in ${weather.name}, ${weather.sys.country}!`;
                console.log(message);
                
                
        }
});

