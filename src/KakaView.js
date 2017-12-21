import React, { Component } from 'react';
import { requireNativeComponent, View } from 'react-native';

// requireNativeComponent automatically resolves 'RCTKakaView' to 'RCTKakaViewManager'
//module.exports = requireNativeComponent('RCTKakaView', null);
const KakaView = requireNativeComponent('KakaView', null);

export default class KakaCamera extends Component {
  render() {
    return (
      <KakaView style={{ flex: 1}}/>
    );
  }
}
