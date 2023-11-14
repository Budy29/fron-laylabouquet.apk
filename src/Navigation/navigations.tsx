import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../components/splash';
import SplashScreen from '../screen/splashScren';
import Login from '../screen/login';
import Signup from '../screen/signup';
import Home from '../screen/home';
import Category from '../screen/category'

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                animation: 'none'
            }}
        >
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Category' component={Category} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}

export default Navigation;