import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home";

const Stack = createNativeStackNavigator();
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;