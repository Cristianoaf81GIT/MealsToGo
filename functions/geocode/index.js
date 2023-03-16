const { locations: locationsMock } = require('./geocode.mock');
const url = require('url');

module.exports.geocodeRequest = async (request, response) => {
  const {city} = url.parse(request.url, true).query;
  const idx = String(city).toLowerCase().replace(/[""]\"\"/g,'').trim();
  const elm = locationsMock[idx]
  console.log(elm,idx,elm);
  response.json(elm);  
 };
