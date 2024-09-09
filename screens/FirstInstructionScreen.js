import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
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
    marginRight: 9,
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
    marginTop: '120%',
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
    marginRight: 90,
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
    marginBottom: 9,
  },
  buttonContainer: {
    height: 50,
    width: '60%',
    backgroundColor: '#357B57',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonTitle: {
    width: '75%',
    flexDirection: 'row',
    alignContent: 'flex-start',
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
    position: 'absolute', // Position it absolutely
    top: 15, // Adjust the position as needed
    left: 15, // Adjust the position as needed
    //zIndex: 1, // Ensure it is above the image
  },
  
});

export default FirstInstructionScreen;