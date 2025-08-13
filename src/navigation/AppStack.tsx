import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage, DetailPage, FavoritePage, TrendPage } from "../screens";

export type TabParamList = {
  Home: undefined;
  Favorite: undefined;
  Trend: undefined;
  Download: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
  Detail: undefined; 
};

const Tab = createBottomTabNavigator<TabParamList>();
const MainTabs: React.FC = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen name="Favorite" component={FavoritePage} />
    <Tab.Screen name="Download" component={HomePage} />
    <Tab.Screen name="Trend" component={TrendPage} />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Detail" component={DetailPage} />
  </Stack.Navigator>
);

export default AppStack;
