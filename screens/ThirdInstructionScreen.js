import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import {  Ionicons, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ThirdInstructionScreen = () => {
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
          style={styles.image}
          source={require('../assets/images/Recommendation.png')} // Change this to the path of your image
        /> 
        <TouchableOpacity
          style={styles.touchableIcon} // Add style to ensure it has size and position
          onPress={() => navigation.navigate('SecondInstructionScreen')}
        >
          <Ionicons name="arrow-back-circle-outline" size={40} style={styles.arrowback} />
        </TouchableOpacity>    
          </View>
          
        <View style={styles.instructcontainer}>
          <Text style={styles.instructTitle}>PAG-GAMIT NG APP</Text>
          <View style={styles.subheader}>
          <Image
              source={require('../assets/step3.png')} // Change this to the path of your step 1 image
              style={styles.stepImage}
            />
            
          <Text style={styles.stepTitle}>Rekomendasyong Ibinigay</Text>
          </View>
          <Text style={styles.stepDescription}>
          Pagkatapos matukoy ng app ang uri ng peste, makakatanggap ka ng mga rekomendasyon kung paano ito pamahalaan. Sundin ang mga tagubilin ng app para sa epektibong paraan ng pag-aalis ng peste at upang mapanatiling malusog ang iyong mga pananim.        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ClassifyScreen')} style={styles.buttonContainer}>
          <View style={styles.buttonTitle}>
          
          <Text style={styles.buttonText}>I-test ang App</Text>
          
          </View>
        </TouchableOpacity>
        </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   // marginTop: StatusBar.currentHeight || 0,
  }, 
  stepImage: {
    marginRight: 7,
    width: 19, // Adjust the size as per your requirement
    height: 19, // Adjust the size as per your requirement
  },
  imageContainer: {
    width: '100%', // Occupies the whole width of the screen
    height: '70%',
  },
  image: {
    width: '100%', // Occupies the whole width of the screen
    height: '100%',
    //marginTop: 0 // Adjust the height of the image as per your requirement
  },
  instructcontainer: {
    position: 'absolute',
    width: '100%',
    marginTop: '118%',
    height: 300, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed to flex-start to align items from the top
    flexDirection: 'column', // Changed to column to align items vertically
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20, // Added padding to create space at the top
  },
  instructTitle: {
    color: '#094F29',
    fontSize: 22,
    fontFamily: 'Quattrocento_700Bold',
  },
  stepTitle: {
    marginRight: 100,
    //width: '65%',
    marginBottom: 8,
    fontSize: 14,
    fontFamily: 'Lora_500Medium',
    color: '#094F29',
  },
  stepDescription: {
    fontFamily: 'Lora_400Regular',
    width: '80%',
    textAlign: 'justify',
    fontSize: 13,
    color: '#094F29',
    marginBottom: 15,
    
  },
  buttonContainer: {
    height: 50,
    width: '50%',
    backgroundColor: '#357B57',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonTitle: {
    width: '60%',
    flexDirection: 'row',
    //alignContent: 'flex-start',
  },
  buttonText: {
    fontFamily: 'Lora_500Medium',
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 5,
  },
  subheader: {
    marginTop: 10,
    flexDirection: 'row',
    width: '80%',
    alignContent: 'flex-start',
  },
  arrowback: {
    color: 'white',
    position: 'absolute',
   
  },
  touchableIcon: {
    position: 'absolute', // Position it absolutely
    top: 15, // Adjust the position as needed
    left: 15, // Adjust the position as needed
    //zIndex: 1, // Ensure it is above the image
  },
});

export default ThirdInstructionScreen;