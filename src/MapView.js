import React, { Component } from 'react';
import { requireNativeComponent, View } from 'react-native';
import PropTypes from 'prop-types';

class MapView extends Component {
  _onRegionChange = (event) => {
    if (!this.props.onRegionChange) {
      return;
    }

    // process raw evvent
    // 所有callback方法都需要通過nativeEvent獲取返回值
    this.props.onRegionChange(event.nativeEvent);
  }

  render() {
    return (
      <RNTMap
        {...this.props}
        onRegionChange={this._onRegionChange}
      />
    )
  }
}

MapView.propTypes = {
  /**
   * A Boolean value that determines whether the user may use pinch
   * gestures to zoom in and out of the map.
   */
  zoomEnable: PropTypes.bool,
  pitchEnabled: PropTypes.bool,

  /**
   * The region to be displayed by the map.
   *
   * The region is defined by the center coordinates and the span of
   * coordinates to display.
   */
  region: PropTypes.shape({
    /**
     * Coordinates for the center of the map.
     */
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,

    /**
     * Distance between the minimum and the maximum latitude/longitude
     * to be displayed.
     */
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),

  /**
   * Callback that is called continuously when the user is dragging the map.
   */
  onRegionChange: PropTypes.func,
};

// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'
var RNTMap  = requireNativeComponent('RNTMap', MapView);
/*
 ** 注意我們現在把requireNativeComponent的第二參數
 ** 從null變成了用於封裝的組件MapView。
 ** 這使得React Native的底層框架可以檢查原生屬性和包裝類的屬性是否一致。
 */

module.exports = MapView;
