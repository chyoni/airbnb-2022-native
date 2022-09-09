import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../screens/Main/Explore';
import Map from '../screens/Main/Map';
import Profile from '../screens/Main/Profile';
import Saved from '../screens/Main/Saved';
import colors from '../colors';
import { Ionicons } from '@expo/vector-icons';
import { isAndroid } from '../utils';
import { createStackNavigator } from '@react-navigation/stack';
import Room from '../screens/Main/Room';
import Search from '../screens/Main/Search';
import EditProfile from '../screens/Main/EditProfile';
import BackBtn from '../components/Auth/BackBtn';
import { RoomType } from '../redux/roomsSlice';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import EditPartial from '../screens/Main/EditProfile/EditPartial';

export type TabsChildrenParamList = {
  Explore: undefined;
  Saved: undefined;
  Map: undefined;
  Profile: undefined;
};

export type MainChildrenParamList = {
  Tabs: any;
  Room: { room: RoomType };
  Search: any;
  EditProfile: any;
  EditPartial: { label: string };
};

const TabsNavigator = createBottomTabNavigator<TabsChildrenParamList>();
const MainNavigator = createStackNavigator<MainChildrenParamList>();

const Tabs = () => (
  <TabsNavigator.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName = `${isAndroid() ? 'md-' : 'ios-'}`;
        if (route.name === 'Explore') {
          iconName += 'search';
        } else if (route.name === 'Saved') {
          iconName += 'heart';
        } else if (route.name === 'Map') {
          iconName += 'map';
        } else if (route.name === 'Profile') {
          iconName += 'person';
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
        textTransform: 'uppercase',
        fontWeight: '400',
      },
    })}
  >
    <TabsNavigator.Screen
      name="Explore"
      component={Explore}
      options={{ headerShown: false }}
    />
    <TabsNavigator.Screen
      name="Saved"
      component={Saved}
      options={{ headerShown: false }}
    />
    <TabsNavigator.Screen
      name="Map"
      component={Map}
      options={{ headerShown: false }}
    />
    <TabsNavigator.Screen
      name="Profile"
      component={Profile}
      options={{ tabBarLabel: 'Profile' }}
    />
  </TabsNavigator.Navigator>
);

export default () => (
  <MainNavigator.Navigator
    screenOptions={{
      presentation: 'modal',
      headerTintColor: colors.darkGray,
      headerBackTitleVisible: false,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <MainNavigator.Screen
      name={'Tabs'}
      component={Tabs}
      options={{ headerShown: false }}
    />
    <MainNavigator.Screen
      name={'Room'}
      component={Room}
      options={{
        headerTransparent: true,
        headerBackground: () => (
          <BlurView
            tint="light"
            intensity={20}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    />
    <MainNavigator.Screen
      name={'Search'}
      component={Search}
      options={{ headerShown: false }}
    />
    <MainNavigator.Screen
      name={'EditProfile'}
      component={EditProfile}
      options={{
        headerTitle: 'Edit profile',
        headerBackImage: () => (
          <Ionicons
            style={{ paddingHorizontal: 15 }}
            name={isAndroid() ? 'md-close-sharp' : 'ios-close-sharp'}
            size={23}
          />
        ),
      }}
    />
    <MainNavigator.Screen name={'EditPartial'} component={EditPartial} />
  </MainNavigator.Navigator>
);
