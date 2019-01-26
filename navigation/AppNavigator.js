import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { Button, View } from "react-native";

import MainTabNavigator from "./MainTabNavigator";
import SignInScreen from "../screens/AuthScreens/SignInScreen";
import RegisterScreen from "../screens/AuthScreens/RegisterScreen";
import AuthLoadingScreen from "../screens/AuthScreens/AuthLoadingScreen";
import Demo from "../screens/DemoScreens/Demo";
import FixedDimensionsBasics from "../screens/DemoScreens/FixedDimensionsBasics";
import FlexDirectionBasics from "../screens/DemoScreens/FlexDirectionBasics";
import JustifyContentBasics from "../screens/DemoScreens/JustifyContentBasics";
import AlignItemsBasics from "../screens/DemoScreens/AlignItemBasics";

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  Register: RegisterScreen
});

const DemoStack = createStackNavigator(
  {
    /*
    DemoTabNavigator: createBottomTabNavigator({
      "Log In": props => { 
        return (
          <View>
            <Button
              onPress={() => props.navigation.navigate("SignIn")}
              title="Go To Login"
            />
          </View>
        );
      },
      Demo
    }),
    */
    Demo,
    FixedDimensionsBasics,
    FlexDirectionBasics,
    JustifyContentBasics,
    AlignItemsBasics
  },
  {
    initialRouteName: "Demo"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen,
      Demo: DemoStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
