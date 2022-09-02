import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../screens/Main/Explore";
import Map from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import Saved from "../screens/Main/Saved";
import colors from "../colors";
import { Ionicons } from "@expo/vector-icons";
import { isAndroid } from "../utils";

const Main = createBottomTabNavigator();

export default () => (
  <Main.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName = `${isAndroid() ? "md-" : "ios-"}`;
        if (route.name === "Explore") {
          iconName += "search";
        } else if (route.name === "Saved") {
          iconName += "heart";
        } else if (route.name === "Map") {
          iconName += "map";
        } else if (route.name === "Profile") {
          iconName += "person";
        }
        return (
          <Ionicons
            name={iconName as any}
            size={20}
            color={focused ? colors.red : colors.gray}
          />
        );
      },
      tabBarActiveTintColor: colors.red,
      tabBarStyle: {},
      tabBarLabelStyle: {
        textTransform: "uppercase",
        fontWeight: "400",
      },
    })}
  >
    <Main.Screen name="Explore" component={Explore}></Main.Screen>
    <Main.Screen name="Saved" component={Saved}></Main.Screen>
    <Main.Screen name="Map" component={Map}></Main.Screen>
    <Main.Screen name="Profile" component={Profile}></Main.Screen>
  </Main.Navigator>
);
