import React from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/banner.jpg')} // Change this to the path of your image
        />
      </View>
      <Text style={styles.headerText}>Rice Pest DigiBook</Text>

      <LinearGradient
        colors={['#bfc0bf', '#FFFFFF']}
        style={styles.gradient}
      >
        <Text style={styles.howItWorksText}>How it works?</Text>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <FontAwesome name="mobile-phone" size={40} color="black" />
            <Image
              source={require('../assets/step1.png')} // Change this to the path of your step 1 image
              style={styles.stepImage}
            />
            <Text style={styles.iconText}>Mobile</Text>
            <Text style={styles.subText}>Access Anywhere</Text>
          </View>
          <View style={styles.iconWrapper}>
            <AntDesign name="cloudupload" size={40} color="black" />
            <Image
              source={require('../assets/step2.png')} // Change this to the path of your step 2 image
              style={styles.stepImage}
            />
            <Text style={styles.iconText}>Upload</Text>
            <Text style={styles.subText}>Sync Data</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Foundation name="results" size={40} color="black" />
            <Image
              source={require('../assets/step3.png')} // Change this to the path of your step 3 image
              style={styles.stepImage}
            />
            <Text style={styles.iconText}>Results</Text>
            <Text style={styles.subText}>View Analysis</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.infoContainer}>
        <Image
          source={require('../assets/farmer3.jpg')} // Change this to the path of your info image
          style={styles.infoImage}
        />
        <Text style={styles.infoText}>
          The Rice Pest DigiBook is an essential tool for farmers and agricultural experts. It provides comprehensive information on pest management, enabling users to protect their crops efficiently. Access real-time data, upload field reports, and get detailed analysis results, all in one place.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: -160, // Adjust the margin as per your requirement
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Occupies the whole width of the screen
    height: 350,
    marginTop: -120, // Adjust the height of the image as per your requirement
  },
  gradient: {
    width: '100%',
    height: 260, // Adjusted to provide space for the "How it works?" text
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed to flex-start to align items from the top
    flexDirection: 'column', // Changed to column to align items vertically
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20, // Added padding to create space at the top
  },
  howItWorksText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Space between "How it works?" text and icons
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%', // Adjust the width as per your requirement
  },
  iconWrapper: {
    alignItems: 'center',
  },
  stepImage: {
    marginTop: 8,
    width: 24, // Adjust the size as per your requirement
    height: 24, // Adjust the size as per your requirement
  },
  iconText: {
    marginTop: 8,
    fontSize: 16,
    color: 'black', // Adjust the color as per your requirement
  },
  subText: {
    marginTop: 4,
    fontSize: 12,
    color: 'gray', // Adjust the color as per your requirement
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    width: '90%', // Adjust the width as per your requirement
  },
  infoImage: {
    width: 100, // Adjust the size as per your requirement
    height: 100, // Adjust the size as per your requirement
    marginRight: 20,
    borderRadius: 10,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    color: 'black', // Adjust the color as per your requirement
  },
});

export default HomeScreen;
