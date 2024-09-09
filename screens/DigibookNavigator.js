import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Digibook from '../screens/Digibook';
import RecommendationScreen from '../screens/RecommendationScreen';

const Stack = createStackNavigator();

const DigibookNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Digibook" component={Digibook} />
      <Stack.Screen name="RecommendationScreen" component={RecommendationScreen} />
    </Stack.Navigator>
  );
};

export default DigibookNavigator;
