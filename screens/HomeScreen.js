import React from 'react';
import { StyleSheet, View, Text, Image, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const InfoImages = () => {
  return (
    <View style={styles.infoImagesContainer}>
      <Image
        source={require('../assets/farmer3.jpg')}
        style={styles.infoImage}
      />
      <Image
        source={require('../assets/farmers12.jpg')}
        style={styles.infoImage}
      />
      <Image
        source={require('../assets/farmer-rice.jpg')}
        style={styles.infoImage}
      />
    </View>
  );
};

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
        colors={['#FFFFFF', '#245f42']}
        start={{ x: 0.5, y: 0 }} // Adjust the start point as per your requirement
        end={{ x: 0.5, y: 1.5 }}   // Adjust the end point as per your requirement
        style={styles.gradient}
      >
        <Text style={styles.howItWorksText}>How it works?</Text>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <FontAwesome name="mobile-phone" size={40} color="white" />
            <Image
              source={require('../assets/number-one.png')} // Change this to the path of your step 1 image
              style={styles.stepImage}
            />
            <Text style={styles.iconText}>Mobile</Text>
            <Text style={styles.subText}>Access Anywhere</Text>
          </View>
          <View style={styles.iconWrapper}>
            <AntDesign name="cloudupload" size={40} color="white" />
            <Image
              source={require('../assets/number-2.png')} // Change this to the path of your step 2 image
              style={styles.stepImage}
            />
            <Text style={styles.iconText}>Upload</Text>
            <Text style={styles.subText}>Sync Data</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Foundation name="results" size={40} color="white" />
            <Image
              source={require('../assets/number-3.png')} // Change this to the path of your step 3 image
              style={styles.stepImage}
            />
            <Text style={styles.iconText}>Results</Text>
            <Text style={styles.subText}>View Analysis</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView}>
      <View style={styles.infoContainer}>
      <InfoImages />
  <View style={styles.infoContent}>
    <Text style={styles.infoTitle}>Your plants need you!</Text>
    <Text style={styles.infoText}>
  
The Rice Pest DigiBook is an essential tool for farmers and agricultural experts. It provides comprehensive information on pest management, enabling users to protect their crops efficiently. 

</Text>
<Text style={styles.infoText}>
        
</Text>
<Text style={styles.infoText}>
  Our platform equips users with step-by-step instructions tailored to combat specific pests that threaten rice plants. Our app provides detailed strategies to identify, prevent, and mitigate the impact of these pests on crops.
</Text>


  </View>
  
</View>

      </ScrollView>
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
    marginTop: 60,
    height: 250, // Adjusted to provide space for the "How it works?" text
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed to flex-start to align items from the top
    flexDirection: 'column', // Changed to column to align items vertically
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20, // Added padding to create space at the top
  },
  howItWorksText: {
    fontSize: 20,
    color: '#233b36',
    fontWeight: 'bold',
    marginBottom: 20, // Space between "How it works?" text and icons
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '105%', // Adjust the width as per your requirement
  },
  iconWrapper: {
    alignItems: 'center',
  },
  stepImage: {
    marginTop: 8,
    width: 17, // Adjust the size as per your requirement
    height: 17, // Adjust the size as per your requirement
  },
  iconText: {
    marginTop: 8,
    fontSize: 16,
    color: 'white', // Adjust the color as per your requirement
  },
  subText: {
    marginTop: 4,
    fontSize: 12,
    color: 'gray', // Adjust the color as per your requirement
  },
  scrollView: {
    width: '100%',
  },
  
  infoImagesContainer: {
    alignItems: 'center',
    marginRight: 25,
    marginLeft:10,
    marginTop: 30,
  },
  infoImage: {
    width: 130, // Adjust the size as per your requirement
    height: 130, // Adjust the size as per your requirement
    marginBottom: 10,
   
  },
  infoContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 0,
    width: '100%', // Adjust the width as per your requirement
    alignSelf: 'center', // Center the container within the scroll view
  },
  infoContent: {
    flex: 1,
    marginRight: 15,
    
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -45,
    marginBottom: 10, // Adjust spacing as per your requirement
    color: '#235d41', // Adjust color as per your requirement
  },
  infoText: {
    textAlign: 'justify',
    fontSize: 12,
    color: '#296c4b', // Adjust the color as per your requirement
  },
  
});

export default HomeScreen;
