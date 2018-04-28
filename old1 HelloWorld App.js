import React, { Component} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


//-------- HELLO WORLD
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
