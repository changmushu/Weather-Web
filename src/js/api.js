'use strict';

const api_key = "c784a80019e59bb4a062e8412ce09056"

/**
 * @param { string } URL
 * @param { Function } callback
 * 
 */



export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=&{api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&lang={zh_cn}&units=metric`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&lang={zh_cn}&units=metric`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&lang={zh_cn}`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&lang={zh_cn}&limit=5`
    },
    /** 
     * @param {string} query
    */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}