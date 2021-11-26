import React, {Component} from 'react';
import {Text, StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import {COLORS} from '../../themes/styles';
export default class BackgroundView extends Component {
  render() {
    const {children, edges} = this.props;
    return (
      <SafeAreaView style={styles.container} edges={edges}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.lightBack}
        />
        {children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBack,
  },
});
