import React, { Component } from 'react';
import MapView from './MapView';

export default class MapApp extends Component {
  onRegionChange(event) {
    console.log(event)
  }
  render() {
    var region = {
      latitude: 37.48,
      longitude: -122.16,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    return (
      <MapView
        region={region}
        zoomEnabled={false}
        onRegionChange={this.onRegionChange}
        style={{ flex: 1 }}
      />
    );
  }
}
