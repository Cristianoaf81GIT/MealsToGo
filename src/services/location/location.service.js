import camelize from "camelize";
import {host} from '../../utils/env';

// import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  const url = `${host}/geocode?city=${searchTerm.replace("\"","").trim()}`;
  console.log(url, ' a url de requisicao')
  return fetch(url)
    .then((response) => {
      console.log(response, ' response');
      return response.json();
    }).catch(error => {
      console.error(error, ' error');
      return error;
    });
    
};

export const locationTransform = (result) => {
  console.log(result, 'resultado');
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
