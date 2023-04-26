'use strict';

const api_key = "API"

/**
 * @param { string } URL
 * @param { Function } callback
 * 
 */



export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(console.log(URL))
        .then(res => res.json())
        .then(data => callback(data));
    
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&lang=zh_cn`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&lang=zh_cn`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&lang=zh_cn`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&lang=zh_cn`
    },
    /** 
     * @param {string} query
    */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&lang=zh_cn`
    }
}