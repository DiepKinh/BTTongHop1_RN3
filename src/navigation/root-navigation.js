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
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../themes/styles';
import {StyleSheet, View} from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    // tabBarActiveBackgroundColor: COLORS.lightPurple,
    tabBarStyle: {
      backgroundColor: COLORS.lightBack,
      borderTopColor: COLORS.lightBack,
    },
    tabBarIcon: ({focused}) => {
      let iconName;
      const backgroundColor = focused ? COLORS.lightPurple : 'transparent';
      if (route.name === screenName.proifile) {
        iconName = 'user';
      } else if (route.name === screenName.stream) {
        iconName = 'game-controller';
      } else {
        iconName = 'home';
      }
      return (
        <View style={[styles.tabItem, {backgroundColor}]}>
          <EntypoIcon name={iconName} color={COLORS.white} size={22} />
        </View>
      );
    },
  };
};

const RootStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen component={HomeScreen} name={screenName.home} />
    <Stack.Screen
      component={DetailScreen}
      name={screenName.detail}
      options={{tabBarStyle: {display: 'none'}}}
    />
  </Stack.Navigator>
);
const RootTab = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen component={HomeScreen} name={screenName.homeTab} />
    <Tab.Screen component={StreamScreen} name={screenName.stream} />
    <Tab.Screen component={ProfileScreen} name={screenName.proifile} />
  </Tab.Navigator>
);
const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: 'modal'}}>
      <Stack.Screen component={RootTab} name={screenName.home} />
      <Stack.Screen component={DetailScreen} name={screenName.detail} />
    </Stack.Navigator>
  );
};
export default RootNavigation;

const styles = StyleSheet.create({
  tabItem: {
    width: '60%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
});
