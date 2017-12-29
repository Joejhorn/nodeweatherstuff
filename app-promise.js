const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "address to fetch weather",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

var encodedAddress = encodeURIComponent(argv.address);

var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
axios
  .get(geocodeURL)
  .then(response => {
    if (response.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find address");
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherURL = `https://api.darksky.net/forecast/75dcbe1fac1afe782513ddf088ea2ec6/${lat}, ${lng}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
  })
  .then(response => {
    var temp = response.data.currently.temperature;
    var appTemp = response.data.currently.apparentTemperature;
    console.log(
      `The current temperatue is ${temp}, though it feels like ${appTemp}.`
    );
  })
  .catch(e => {
    if (e.code === "ECONNREFUSED") {
      console.log("unable to connect to api servers");
    } else {
      console.log(e.message);
    }
  });
