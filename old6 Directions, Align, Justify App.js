import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      //FlexDirection is by default column
      //Change FlexDiretion to column

      <View style={{flex: 1, paddingTop:24 }}>
        <Text>FlexDirection</Text>      
        <View style={{height:150, flexDirection: 'row', borderWidth:2}}>
          <View style={{width: 50, height: 50,  backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        {/* Try setting `justifyContent` to `center`.
            Try setting `flexDirection` to `row`.
            ['flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'space-evenly']*/}
        <Text>justifyContent</Text>      
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', borderWidth:2}}>
          <View style={{width: 50, height: 50,  backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        {/* Try setting `alignItems` to 'flex-start'
            Try setting `justifyContent` to `flex-end`.
            Try setting `flexDirection` to `row`.
            ['flex-start', 'center', 'flex-end', 'stretch']*/}
        <Text>AlignItems</Text>      
        <View style={{flex:1, flexDirection: 'column', justifyContent: 'space-between', alignItems:'center', borderWidth:2}}>
          <View style={{width: 50, height: 50,  backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
