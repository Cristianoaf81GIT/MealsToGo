const {mocks, addMockImage} = require('./mock'); // @js-nocheck

const url = require('url');

module.exports.placesRequest = (request, response, client) => {
  const {location, mock} = url.parse(request.url,true).query;
  console.log(location);
  if (mock === 'true') {
    const data = mocks[location];
    if (data) {  
      data.results = data.results.map(addMockImage);
    }
    
    response.json(data);  
  }

  client.placesNearby({
    params: {
      location,
      radius: 1500,
      type: 'restaurant',
      key: functions.config().google.key
    },
    timeout: 1000
  }).then((res) => {
    res.data.results = res.data.results.map(addMockImage);
    return response.json(res.data);
  }).catch(console.err);
 };
