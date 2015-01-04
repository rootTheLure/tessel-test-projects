var tessel = require('tessel');
// if you're using a si7020 replace this lib with climate-si7020
var climatelib = require('climate-si7020');
var climate = climatelib.use(tessel.port['A']);

climate.on('ready', function () {
    console.log('Connected to si7020');
    climate.readTemperature('f', function (err, temp) {
        console.log('Degrees:', temp + ' F');
    });

    climate.readHumidity(function (err, humid) {
        console.log('Humidity:', humid + ' %RH');
    });
});

climate.on('error', function(err) {
  console.log('error connecting module', err);
});