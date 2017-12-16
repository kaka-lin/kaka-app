import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, NativeModules } from 'react-native';

var MyObjcClass = NativeModules.MyObjcClass;

export default class ObjectiveC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  squareMe(num) {
    if (num == '') {
      return;
    }
    MyObjcClass.squareMe(num, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        this.setState({number: result});
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {MyObjcClass.greeting}
        </Text>
        <TextInput style={styles.input} onChangeText={(text) => this.squareMe(text)} />
        <Text style={styles.result}>
          {this.state.number}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: 100,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    alignItems: 'center',
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  }
});
