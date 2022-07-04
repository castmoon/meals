import {mockImages, mocks} from './mock';

import camelize from 'camelize';

export const restaurantsRequest = location => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    console.log(location);
    if (!mock) {
      reject('location not found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map((restaurant: any) => {
    restaurant.photos = restaurant.photos.map((_: any) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });

  return camelize(mappedResults);
};
