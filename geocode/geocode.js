const request = require('request');


var geocodeAddress = (address, callback) => {
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
  json: true
}, (error, response, body) => {
  if (error) {
    callback('error with google');
  } else if (body.status === 'ZERO_RESULTS') {
  callback('no address found');
} else if (body.status === 'OK') {
  callback(undefined, {
    address: body.results[0].formatted_address,
    latitude: body.results[0].geometry.location.lat,
    lonitude: body.results[0].geometry.location.lng
  })
}
}
)};


module.exports= {
geocodeAddress
};
