import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import WeatherScreen from './screens/WeatherScreen';
import ImageProcessingScreen from './screens/ImageProcessingScreen';

'''create a new object here''' 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={EventScreen} />
        <Tab.Screen name="Space Weather" component={WeatherScreen} />
        <Tab.Screen name="Image Processing" component={ImageProcessingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
