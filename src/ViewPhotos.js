import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, CameraRoll } from 'react-native';

export default class ViewPhotos extends Component<{}> {
  state = {
    showPhoto: false,
    photoArray: []
  }

  getPhotos() {
    const { navigate } = this.props.navigation
    CameraRoll.getPhotos({
      first: 10,
      assetType: 'All',
    })
    .then(r => {
        let photoArray = r.edges;
        this.setState({
          showPhoto: true,
          photoArray: photoArray
        })
    })
    .then(() => navigate('Profile', {photoArray: this.state.photoArray}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Kaka App!</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.getPhotos()}
        >
          <Text> View Photos </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
