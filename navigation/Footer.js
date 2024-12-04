import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import {
  useFonts,
  Lora_400Regular,
  Lora_500Medium,
  Lora_600SemiBold,
  Lora_700Bold,
  Lora_400Regular_Italic,
  Lora_500Medium_Italic,
  Lora_600SemiBold_Italic,
  Lora_700Bold_Italic,
} from '@expo-google-fonts/lora';
const Footer = () => {
  const [loaded, error] = useFonts({
    Lora_400Regular,
    Lora_500Medium,
    Lora_600SemiBold,
    Lora_700Bold,
    Lora_400Regular_Italic,
    Lora_500Medium_Italic,
    Lora_600SemiBold_Italic,
    Lora_700Bold_Italic,
  });

  const navigation = useNavigation();

  // Get the current route name
  const currentRouteName = useNavigationState((state) => {
    const route = state.routes[state.index];
    return route.state ? route.state.routes[route.state.index].name : route.name;
  });

  // Route names for navigation
  const routeNames = ['HomeScreen', 'SpeechScreen', 'CameraScreen', 'DigibookNavigator' ];
  
  // Custom display names for the footer
  const displayNames = ['Home', 'Speech', 'Kuhanan', 'DigiBook'];
  const iconNames = ['home', 'mic', 'camera', 'book'];

  const handlePress = (screenName) => {
    console.log('Attempting to navigate to:', screenName);
    navigation.navigate(screenName);
  };

  // Get the screen width
  const { width } = Dimensions.get('window');
  const iconSize = width * 0.065; // Adjust dynamically to screen width
  const containerHeight = 57;

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      {routeNames.map((routeName, index) => (
        <TouchableOpacity
          key={routeName}
          onPress={() => handlePress(routeName)}
          style={styles.touchable}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { width: iconSize + 50 }]}>
            <Ionicons
              name={iconNames[index]}
              size={iconSize}
              style={currentRouteName === routeName ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <Text
              style={[styles.routeNameText, currentRouteName === routeName && styles.focusedText]}
              numberOfLines={1}
            >
              {displayNames[index]}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'white',
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2D6B4A',
    zIndex: 1,
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%',
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    padding: 5,
    height: 60,
    flexWrap: 'nowrap',
  },
  focusedIcon: {
    color: 'white',
  },
  unfocusedIcon: {
    color: 'gray',
  },
  routeNameText: {
    fontFamily: 'Lora_400Regular',
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
    width: '100%',
  },
  focusedText: {
    color: 'white',
  },
});

export default Footer;