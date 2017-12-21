import React, { Component } from 'react';
import { requireNativeComponent, View } from 'react-native';
import PropTypes from 'prop-types';

// requireNativeComponent automatically resolves 'KakaView' to 'KakaViewManager'
//module.exports = requireNativeComponent('RCTKakaView', null);
//var KakaView = requireNativeComponent('KakaView', NativeUI);

class MapView extends Component {
  _onRegionChange = (event) => {
    if (!this.props.onRegionChange) {
      return;
    }

    // process raw evvent
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

var RNTMap  = requireNativeComponent('RNTMap', MapView);

module.exports = MapView;
