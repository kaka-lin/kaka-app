import React, { Component } from 'react';
import { requireNativeComponent, View } from 'react-native';

var KakaCamera = requireNativeComponent('KakaCamera', KCamera)

export default class KCamera extends Component {
  render() {
    return (
      <KakaCamera style={{ flex: 1 }}/>
    );
  }

}
