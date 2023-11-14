import * as React from 'react';
// import Navigation from './src/navigations/navigation';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/navigations';

import 'react-native-gesture-handler';


export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>

  )
}