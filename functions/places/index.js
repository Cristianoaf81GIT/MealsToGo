const {mocks, addMockImage} = require('./mock'); 

const url = require('url');

const addGoogleImage = (restaurant) => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = ['https://sleeklens.com/wp-content/uploads/bfi_thumb/nick-hillier-254650-u39ugeyfbko142cpml54ghldtjoetnfxvyig1vzwvnst32bt1.jpg']
    return restaurant;
  }
  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
      functions.config().google.key
    }`,
  ]
  return restaurant;
};

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
    res.data.results = res.data.results.map(addGoogleImage);
    return response.json(res.data);
  }).catch(console.err);
 };
