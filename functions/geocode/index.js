const { locations: locationsMock } = require('./geocode.mock');
const url = require('url');

module.exports.geocodeRequest = async (request, response) => {
  const {city} = url.parse(request.url, true).query;
  const idx = String(city).toLowerCase().split('"').join('');
  const elm = locationsMock[idx]
  console.log(JSON.stringify(elm, null, 4))
  console.log(elm,idx, ' index');
  response.json(elm);  
 };
