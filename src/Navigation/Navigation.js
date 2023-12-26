import React, { useState, createContext, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Auth } from "../Service/Auth";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import { onAuthStateChanged } from "firebase/auth";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

const NavigationScreen = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      Auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

const Navigation = () => {
  return (
    <AuthenticatedUserProvider>
      <NavigationScreen />
    </AuthenticatedUserProvider>
  );
};

export default Navigation;
