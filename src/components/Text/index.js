import React, {Component} from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';
export default class Text extends Component {
  render() {
    const {color = COLORS.white, children} = this.props;
    return (
      <RNText {...this.props} style={[styles, {color}]}>
        {children}
      </RNText>
    );
  }
}

const styles = StyleSheet.create({});
