import { useFonts } from "expo-font";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot} from "expo-router";
import { AuthProvider, useAuth } from "../app/context/AuthContext";
import BHomeScreen from "./drawer/(aRick)";
import RickLocation from "./drawer/(cRickLocation)"
import RickEpisodes from "./drawer/(dRickEpisods)"
import CGallery from "./drawer/(hGallery)";
import DPermission from "./drawer/(fPermission)";
import History from "./drawer/(iHistory)"
import LocationHIs from "./drawer/(jListLocations)"
import ENotes from "./drawer/(gNotes)"
import FLocation from "./drawer/(eLocation)";
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}

function RootLayout() {
  const { isAuthenticated } = useAuth();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; 
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {isAuthenticated ? <AuthenticatedScreens /> : <UnauthenticatedScreens />}
    </GestureHandlerRootView>
  );
}

function AuthenticatedScreens() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ffffff",//rgba(255, 255, 255, 0.9) para transparente
        },
        drawerLabelStyle: {
          color: "#000",
        },
        drawerActiveTintColor: "#2196f3",
        drawerInactiveTintColor: "#444",
      }}
    >
      <Drawer.Screen 
        name="aRick"
        component={BHomeScreen}
        options={{
           title: "Personajes Rick And Morty",
           drawerIcon: ({ color, size }) => (
            <Fontisto name="persons" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen 
        name="cRickLocation"
        component={RickLocation}
        options={{
           title: "Locaciones Rick And Morty",
           drawerIcon: ({ color, size }) => (
            <Fontisto name="world-o" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen 
        name="dRickEpisods"
        component={RickEpisodes}
        options={{
           title: "Episodios Rick And Morty",
           drawerIcon: ({ color, size }) => (
            <Ionicons name="film-outline" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen 
        name="hGallery"
        component={CGallery}
        options={{
           title: "Galería",
           drawerIcon: ({ color, size }) => (
            <SimpleLineIcons name="picture" size={24} color="black" />
           ),
        }} 
      />

      <Drawer.Screen 
        name="gNotes"
        component={ENotes}
        options={{
          title: "Notas",
          drawerIcon: ({ color, size }) => (
            <Foundation name="page-copy" size={30} color="black" />          
          ),
        }} 
      />

      <Drawer.Screen 
        name="fPermission"
        component={DPermission}
        options={{
          title: "Permisos",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="folder-star-multiple-outline" size={24} color="black" />
           ),
        }} 
      />

      <Drawer.Screen 
        name="eLocation"
        component={FLocation}
        options={{
          title: "Ubicación Actual",
          drawerIcon: ({ color, size }) => (
            <Entypo name="location" size={24} color="black" />
           ),
        }} 
      />

      <Drawer.Screen 
        name="iHistory"
        component={History}
        options={{
          title: "Historial de Ubicaciones",
          drawerIcon: ({ color, size }) => (
            <SimpleLineIcons name="map" size={24} color="black" />
           ),
        }} 
      />
          <Drawer.Screen 
        name="jListLocations"
        component={LocationHIs}
        options={{
          title: "Lista de Ubicaciones",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={24} color="black" />
           ),
        }} 
      />
    </Drawer.Navigator>
  );
}

function UnauthenticatedScreens() {
  return <Slot />;
}
