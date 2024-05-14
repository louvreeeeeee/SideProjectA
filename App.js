import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './navigation/Header';
import Footer from './navigation/Footer';
import HomeScreen from './screens/HomeScreen'
import ClassifyScreen from './screens/ClassifyScreen'
import GuideBookScreen from './screens/GuideBookScreen'

const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClassifyScreen" component={ClassifyScreen} />
        <Stack.Screen name="GuideBookScreen" component={GuideBookScreen} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
