import React from 'react';
import {StatusBar, useColorScheme, Text} from 'react-native';
import {theme} from './src/global/theme';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeArea} from './src/components/safe-area';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {restaurantsRequest} from './src/services/restaraunts/restaurant';
import {RestaurantsContextProvider} from './src/services/restaraunts/restaurant-context';
import {LocationContextProvider} from './src/services/location/location-context';

const Restaurant = () => <RestaurantsScreen />;
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Tab = createBottomTabNavigator();
  restaurantsRequest();

  return (
    <>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({route}) => ({
                  tabBarIcon: ({color, size}) => {
                    let iconName = '';

                    if (route.name === 'Restaurants') {
                      iconName = 'md-restaurant';
                    } else if (route.name === 'Settings') {
                      iconName = 'md-settings';
                    } else if (route.name === 'Map') {
                      iconName = 'md-map';
                    }
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );

                    // You can return any component that you like here!
                  },
                  tabBarActiveTintColor: '#72BAFC',
                  tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen
                  name="Restaurants"
                  component={Restaurant}
                  options={{headerShown: false}}
                />
                <Tab.Screen
                  name="Map"
                  component={Map}
                  options={{headerShown: false}}
                />
                <Tab.Screen
                  name="Settings"
                  component={Settings}
                  options={{headerShown: false}}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
