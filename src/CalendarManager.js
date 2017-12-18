import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, NativeModules } from 'react-native';

var CalendarManager = NativeModules.CalendarManager;

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: 'hello'
    }
  }

  methodTest() {
    var date = new Date();
    CalendarManager.addEvent(
      'Birthday Party',
      {
        location: '4 Privet Drive, Surrey',
        time: date.getTime(),
      }
    )
  }

  callbackTest() {
    CalendarManager.findEvents((error, events) => {
      if (error) {
        console.error(error);
      } else {
        this.setState({events: events})
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Button
        title='method_test'
        onPress={() => this.methodTest()}
        />
        <Button
          title='callback_test'
          onPress={() => this.callbackTest()}
        />
        <Text>
          {this.state.events}
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
  }
});
