import { mockImages, mocks } from "./mock";
import camelize from "camelize";
import {host} from '../../utils/env';

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
 /* return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });*/
  const url = `${host}/placesNearby?location=${location}`;
  console.log(url, ' a url de requisicao')
  return fetch(url)
    .then((response) => {
      console.log(response.json(), ' response');
      return response.json();
    }).catch(error => {
      console.error(error, ' error');
      return error;
    });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    /*restaurant.photos = restaurant.photos.map((_p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });*/
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
