import React, {Component} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';
import {store} from './src/redux/root-store';
import RootScreen from './src/screens';
import RootNavigation from './src/navigation/root-navigation';

import {NavigationContainer} from '@react-navigation/native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}
