
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './navigation/Header';
import Footer from './navigation/Footer'; // Custom footer for tabs
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import ClassifyScreen from './screens/ClassifyScreen';
import GuideBookScreen from './screens/GuideBookScreen';
import GuidebookSection from './screens/GuideBookSection';
import FirstInstructionScreen from './screens/FirstInstructionScreen';
import SecondInstructionScreen from './screens/SecondInstructionScreen';
import ThirdInstructionScreen from './screens/ThirdInstructionScreen';
import Digibook from './screens/Digibook';
import CameraScreen from './screens/CameraScreen';

import RecommendationScreen from './screens/RecommendationScreen';
import { useFonts } from 'expo-font';
import React, { useState, useEffect } from 'react';
import DigibookNavigator from './screens/DigibookNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Onboarding from './screens/Onboarding';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (

    <Tab.Navigator
      tabBar={(props) => <Footer {...props} />} // Use Footer as the custom tab bar
      screenOptions={{ headerShown: false }} // Hide headers if not needed
    >
      
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CameraScreen" component={CameraScreen} />
      <Tab.Screen name="DigibookNavigator" component={DigibookNavigator} />
      <Tab.Screen name="RecommendationScreen" component={RecommendationScreen} />
    </Tab.Navigator>

  );
};

const App = () => {
  

  return (
<NavigationContainer>
      <Header />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding}/>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="FirstInstructionScreen" component={FirstInstructionScreen} />
        <Stack.Screen name="SecondInstructionScreen" component={SecondInstructionScreen} />
        <Stack.Screen name="ThirdInstructionScreen" component={ThirdInstructionScreen} />
        
        <Stack.Screen name="GuideBookSection" component={GuidebookSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;