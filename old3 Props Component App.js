import React, { Component} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

//------- PROPS YOUR COMPONENT
class Gretting extends Component {
  render() {
    return (
      <Text> Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGrettings extends Component {
  render() {
    return (
    <View style={{alignItems: 'center'}}>
      <Gretting name='Rexxar' />
      <Gretting name='Jaina' />
      <Gretting name='Valera' />
    </View>
    );
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
