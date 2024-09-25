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
  
  // Get the current route name from the tab navigator's navigation state
  const currentRouteName = useNavigationState((state) => {
    const route = state.routes[state.index];
    return route.state ? route.state.routes[route.state.index].name : route.name;
  });


  // Route names for navigation
  const routeNames = ['HomeScreen', 'CameraScreen', 'DigibookNavigator'];
  
  // Custom display names for the footer
  const displayNames = ['Home', 'Kuhanan', 'DigiBook']; // Custom display names
  const iconNames = ['home', 'camera', 'book'];

  const handlePress = (screenName) => {
    console.log('Attempting to navigate to:', screenName);
    navigation.navigate(screenName);
  };

  // Get the screen width
  const { width } = Dimensions.get('window');
  const iconSize = width * 0.065; // Icon size is 8% of screen width
  const containerHeight = 57; // Height for Android devices

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      {routeNames.map((routeName, index) => (
        <TouchableOpacity
          key={routeName}
          onPress={() => handlePress(routeName)}
          style={styles.touchable}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { width: iconSize + 60 }]}>
            <Ionicons
              name={iconNames[index]}
              size={iconSize}
              style={currentRouteName === routeName ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <Text
              style={[styles.routeNameText, currentRouteName === routeName && styles.focusedText]}
              numberOfLines={1} // Limit to 1 line to prevent wrapping
            >
              {displayNames[index]} {/* Display the custom text */}
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
    
    
    flexDirection: 'column', // Stack icon and text vertically
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    zIndex: 2,
    padding: 5, // Optional: Add padding for extra space
    height: 60, // Adjust height to accommodate icon and text
    flexWrap: 'nowrap', // Prevent text wrapping
  },
  focusedIcon: {
    color: 'white',
  },
  unfocusedIcon: {
    color: 'gray',
  },
  routeNameText: {
    fontFamily:'Lora_400Regular',
    color: 'gray',
    fontSize: 12, // Font size for the text
    textAlign: 'center', // Center the text
    width: '100%',
  },
  focusedText: {
    color: 'white',
  },
});

export default Footer;