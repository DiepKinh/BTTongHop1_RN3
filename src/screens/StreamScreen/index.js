import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class StreamScreen extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
