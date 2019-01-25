import React, { Component } from "react";
import { Button, View } from "react-native";

export default class Demo extends Component {
  static navigationOptions = {
    title: "Demo"
  };
  render() {
    return (
      <View>
        <Button
          onPress={() =>
            this.props.navigation.navigate("FixedDimensionsBasics")
          }
          title="Fixed Dimensions Basics"
        />
        <Button
          onPress={() => this.props.navigation.navigate("FlexDirectionBasics")}
          title="Flex Direction Basics"
        />
        <Button
          onPress={() => this.props.navigation.navigate("JustifyContentBasics")}
          title="Justify Content Basics"
        />
          <Button
          onPress={() => this.props.navigation.navigate("AlignItemsBasics")}
          title="Align Items Basics"
        />
      </View>
    );
  }
}
