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

// DetailPage parametre alacak şekilde güncelledik
export type RootStackParamList = {
  MainTabs: undefined;
  DetailPage: { movieId: number; movieTitle?: string };
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
        backgroundColor: "#0f1010ff",
        position: "absolute",
        opacity: 0.9,
        height: 90, // yükseklik artırıldı
        borderColor: "black",
      },
      tabBarIconStyle: {
        alignSelf: "center",
        marginTop: 10,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoritePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Download"
      component={HomePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="download" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Trend"
      component={TrendPage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="film" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="DetailPage" 
      component={DetailPage} 
      options={{ title: "Detail" }}
    />
  </Stack.Navigator>
);

export default AppStack;
