import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/AppScreen/HomeScreen";
import FishScreen from "../Screen/AppScreen/FishScreen";
import FishDetail from "../Screen/DetailScreen/FishDetail";
import SettingScreen from "../Screen/AppScreen/SettingScreen";
import BBMScreen from "../Screen/AppScreen/BBMScreen";
import BeritaDetail from "../Screen/DetailScreen/BeritaDetail";

import Ionicons from "react-native-vector-icons/Ionicons";
import AkunScreen from "../Screen/DetailScreen/AkunScreen";
import PelabuhanScreen from "../Screen/DetailScreen/PelabuhanScreen";
import Privasi from "../Screen/DetailScreen/Privasi";
import AboutScreen from "../Screen/DetailScreen/AboutScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "BBM") {
            iconName = focused ? "flame" : "flame";
          } else if (route.name === "Fish") {
            iconName = focused ? "basket" : "basket";
          } else if (route.name === "Setting") {
            iconName = focused ? "settings-sharp" : "settings-sharp";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="BBM" component={BBMScreen} />
      <Tab.Screen name="Fish" component={FishScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FishDetail"
        component={FishDetail}
        options={{ title: "Harga Ikan" }}
      />

      <Stack.Screen
        name="BeritaDetail"
        component={BeritaDetail}
        options={{ title: "Berita" }}
      />
      <Stack.Screen
        name="AkunScreen"
        component={AkunScreen}
        options={{ title: "Akun" }}
      />
      <Stack.Screen
        name="PelabuhanScreen"
        component={PelabuhanScreen}
        options={{ title: "Pelabuhan Jawa Timur" }}
      />
      <Stack.Screen
        name="KebijakanPrivase"
        component={Privasi}
        options={{ title: "Kebijakan Privasi" }}
      />
      <Stack.Screen
        name="TentangAplikasi"
        component={AboutScreen}
        options={{ title: "Tentang Aplikasi" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
