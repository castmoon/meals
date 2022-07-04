import camelize from 'camelize';

import {locations} from './mock';

export const locationRequest = (searchTerm: any) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject('Not found');
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: any) => {
  const formattedResponse = camelize(result);
  const {geometry = {}} = formattedResponse.results[0];
  const {lat, lng} = geometry.location;
  return {lat, lng};
};
