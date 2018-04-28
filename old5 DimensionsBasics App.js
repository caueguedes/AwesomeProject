import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class DimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Text>Default</Text>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
          <Text>Flexible</Text>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
     </View>
    );
  }
}
