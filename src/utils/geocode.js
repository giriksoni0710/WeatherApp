const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ2lyaWsiLCJhIjoiY2p4b3duYzRsMDF2bjNkbGh2b3cxbXR6YSJ9.MKGwEB0nUVwj5tAZX6x-Og&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Connection to Location Services Not Available', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find Location', undefined);
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode