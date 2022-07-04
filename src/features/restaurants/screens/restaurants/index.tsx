/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {Colors, Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../../components/restaurant-info-card';
import {Content, Spacer, Loading, LoadingContainer} from './styles';
import {SafeArea} from '../../../../components/safe-area';

import {RestaurantsContext} from '../../../../services/restaraunts/restaurant-context';
import Search from '../../../../components/Search';

const RestaurantsScreen = () => {
  const {restaurants, isLoading} = useContext<{
    error: null | any;
    isLoading: boolean;
    restaurants: [];
  }>(RestaurantsContext as any);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading animating={true} color={Colors.blue500} size="large" />
          </LoadingContainer>
        )}
        <Search />

        <Content>
          <FlatList
            data={restaurants}
            renderItem={({item}: {item: any}) => (
              <>
                <Spacer>
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </>
            )}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
          />
        </Content>
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
