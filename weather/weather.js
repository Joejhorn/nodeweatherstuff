const request = require('request');



var getWeather = (lat,lng, callback) =>
{
request({
  url: `https://api.darksky.net/forecast/75dcbe1fac1afe782513ddf088ea2ec6/${lat}, ${lng}`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200){
    callback(undefined, {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    })
  } else {
    callback('unable to fetch weather');
  }


});
};



// https://api.darksky.net/forecast/75dcbe1fac1afe782513ddf088ea2ec6/37.8267,-122.4233

module.exports = {
  getWeather
};
