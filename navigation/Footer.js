import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('HomeScreen')}>
        <Image
          source={require('../assets/home.png')}
          style={[styles.icon, isFocused ? styles.activeIcon : null]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('ClassifyScreen')}>
        <Image
          source={require('../assets/diagram.png')}
          style={[styles.icon, isFocused ? styles.activeIcon : null]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('GuideBookScreen')}>
        <Image
          source={require('../assets/book.png')}
          style={[styles.icon, isFocused ? styles.activeIcon : null]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#225d41',
  },
  icon: {
    width: 30,
    height: 29,
  },
  activeIcon: {
    tintColor: 'white', // For example, change the icon color to white when active
  },
});

export default Footer;
