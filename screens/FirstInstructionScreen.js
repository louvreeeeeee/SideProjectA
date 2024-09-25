import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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
import {Quattrocento_400Regular, Quattrocento_700Bold} from '@expo-google-fonts/quattrocento';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window'); // Get screen dimensions

const FirstInstructionScreen = () => {
  const [loaded, error] = useFonts({ Quattrocento_400Regular, Quattrocento_700Bold,
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
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
          style={styles.image}
          source={require('../assets/images/Capture2.jpeg')} // Change this to the path of your image
        />
        
        <TouchableOpacity
          style={styles.touchableIcon} // Add style to ensure it has size and position
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Ionicons name="arrow-back-circle-outline" size={40} style={styles.arrowback} />
        </TouchableOpacity>
         
          </View>
          
        <View style={styles.instructcontainer}>
          <Text style={styles.instructTitle}>PAG-GAMIT NG APP</Text>
          <View style={styles.subheader}>
          <Image
              source={require('../assets/step1.png')} // Change this to the path of your step 1 image
              style={styles.stepImage}
            />
          <Text style={styles.stepTitle}>Buksan ang Camera App</Text>
          </View>
          <Text style={styles.stepDescription}>
          Pindutin ang icon ng camera sa app. Iposisyon ang camera nang maayos sa peste na nais mong kuhanan ng litrato. 
          Ayusin ang mga setting, tulad ng pag-zoom, upang makuha ang malinaw na larawan. Pindutin ang button para kumuha ng litrato.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SecondInstructionScreen')} style={styles.buttonContainer}>
          <View style={styles.buttonTitle}>
          <Text style={styles.buttonText}>Susunod na Hakbang</Text>
          <MaterialIcons name="arrow-right-alt" size={30} color = {'white'} bottom = {3}/>
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
    //marginTop: StatusBar.currentHeight || 0,
  }, 
  stepImage: {
    top: 5,
    marginRight: 9,
    width: 19, // Adjust the size as per your requirement
    height: 19, // Adjust the size as per your requirement
  },
  imageContainer: {
    width: '100%', // Occupies the whole width of the screen
    //height: '70%',
    height: screenHeight * 0.75, // Dynamic height based on screen size
  },
  image: {
    
    width: '100%', // Occupies the whole width of the screen
    height: '100%',
    //marginTop: 0 // Adjust the height of the image as per your requirement
  },
  instructcontainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0, // Place it at the bottom of the screen
    //height: '37%', // Adjust the height as a percentage for responsiveness
    height: screenHeight * 0.37, // 30% of the screen height
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    zIndex: 2,
   // Added padding to create space at the top
  },
  instructTitle: {
    color: '#094F29',
    //fontSize: 22,
    fontSize: screenHeight *0.03,
    fontFamily: 'Quattrocento_700Bold',
    
  },
  stepTitle: {
    flex: 1, // Make it take available space
    top: 5,
    marginBottom: 12,
    //fontSize: 14,
    fontSize: screenHeight *0.02,
    fontFamily: 'Lora_500Medium',
    color: '#094F29',
  },
  stepDescription: {
    flex: 1, // Make it take available space
    //top: '2%',
    fontFamily: 'Lora_400Regular',
    width: screenWidth * 0.8,
    textAlign: 'justify',
    //fontSize: 13,
    fontSize: screenHeight* 0.017,
    color: '#094F29',
    //bottom: 8,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 15,
    //height: 53,
    height: screenHeight * 0.072,
    width: '65%',
    backgroundColor: '#357B57',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    width: '75%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Lora_500Medium',
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 3,
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
    position: 'absolute',
    top: 15,
    left: 15,
    //zIndex: 1, // Make sure it's above the image
    padding: 5, // Ensure touch area is responsive
  },
  
});

export default FirstInstructionScreen;