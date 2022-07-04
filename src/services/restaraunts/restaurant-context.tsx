/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState, createContext, useEffect, useContext} from 'react';
import {LocationContext} from '../location/location-context';
import {restaurantsRequest, restaurantsTransform} from './restaurant';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}: {children: any}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {location} = useContext<any>(LocationContext);

  const retrieveRestaurants = location => {
    setIsLoading(true);
    setRestaurants([]);

    console.log(location);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform as any)
        .then((restaurants: any) => {
          setIsLoading(false);
          setRestaurants(restaurants);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
