import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DetailScreen,
  HomeScreen,
  ProfileScreen,
  StreamScreen,
} from '../screens';
import {screenName} from '../utils/constant';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator options={{headerShown: false}}>
      <Tab.Screen
        component={HomeScreen}
        name={screenName.home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={StreamScreen}
        name={screenName.stream}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={ProfileScreen}
        name={screenName.proifile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
