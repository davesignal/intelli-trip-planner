const request = require('request');

function getDistanceMatrix(origins, destinations) {
    origins = origins.join('|');
    destinations = destinations.join('|');
    return new Promise((resolve, reject) => {
        // HTTP Request to Google Map API
        // For now we use a set of example GPS coordinates
        const key = 'AIzaSyDtZvRnTEtBj8SP7tClaNxJRx5lrwmVASE';
        // API KEY from Yining's old Python code
        const url = "https://maps.googleapis.com/maps/api/distancematrix/json";
        const mode = 'driving';
        const qs = {
            key, mode, origins, destinations
        };
        request({url, qs}, (error, response, body) => {
            if (error) {
                reject(error.message);
            } else {
                if (response.statusCode !== 200) {
                    reject(`status code: ${response.statusCode}`);
                } else {
                    resolve(JSON.parse(body));
                }
            }
        });
    })
}

exports.getDistanceMatrix = getDistanceMatrix;