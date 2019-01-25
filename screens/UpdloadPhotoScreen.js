import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class UpdloadPhotoScreen extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
          title: params ? params.otherParam : 'A Nested Details Screen',
          /* These values are used instead of the shared configuration! */
          headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
          },
          headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
      };
      
  render() {
    return (<View>
      <Text>Hello From Upload Photo Screen</Text>
    </View>);
  }
}
