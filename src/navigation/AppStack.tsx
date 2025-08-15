import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage, DetailPage, FavoritePage, TrendPage } from "../screens/index";
import { Ionicons } from "@expo/vector-icons"; // Expo kullanıyorsan

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
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false, // label’ları gizle
      tabBarActiveTintColor: "#ffffffff",
      tabBarStyle: {
        backgroundColor: "#000000ff",
        position: "absolute",
        opacity: 0.75,
        height: 80, // yükseklik artırıldı
      },
      tabBarIconStyle: {
        alignSelf: "center",
        marginTop:5,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoritePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Download"
      component={HomePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="download-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Trend"
      component={TrendPage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="trending-up-outline" size={size} color={color} />
        ),
      }}
    />
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
