const functions = require("firebase-functions");
const {geocodeRequest} = require("./geocode");
const {placesRequest} = require('./places');
const {Client} = require('@googlemaps/google-maps-services-js');

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

const client = new Client({});

 exports.geocode = functions.https.onRequest((request, response) => {
   geocodeRequest(request, response, client);
 });


exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
});
