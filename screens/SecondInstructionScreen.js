import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window'); // Get screen dimensions

const SecondInstructionScreen = () => {
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
          style={styles.image}
          source={require('../assets/Pests/brown.jpg')} // Change this to the path of your image
        />
        
        <TouchableOpacity
          style={styles.touchableIcon} // Add style to ensure it has size and position
          onPress={() => navigation.navigate('FirstInstructionScreen')}
        >
          <Ionicons name="arrow-back-circle-outline" size={40} style={styles.arrowback} />
        </TouchableOpacity>
         
          </View>
         
        <View style={styles.instructcontainer}>
          <Text style={styles.instructTitle}>PAG-GAMIT NG APP</Text>
          <View style={styles.detectedContainer}>
          <Image
          style={styles.imageDetected}
          source={require('../assets/images/BPH-nobackground.png')} // Change this to the path of your image
        />
          <View style={styles.pestInfo}>
            <Text style={styles.pestDetected}>Pest Detected!</Text>
            <Text style={styles.pestName}>Brown Planthopper</Text>
          </View>
        </View>
          <View style={styles.subheader}>
          <Image
              source={require('../assets/step2.png')} // Change this to the path of your step 1 image
              style={styles.stepImage}
            />
          <Text style={styles.stepTitle}>Tukuyin ang Peste</Text>
          </View>
          <Text style={styles.stepDescription}>
          Pagkatapos makunan ng litrato, hintayin ang app na awtomatikong matukoy ang uri ng peste. Ang app ay magsasagawa ng pagsusuri at ipapakita ang resulta sa screen. Suriin ang impormasyong ibinigay ng app upang malaman ang uri ng peste at ang mga susunod na hakbang.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ThirdInstructionScreen')} style={styles.buttonContainer}>
          <View style={styles.buttonTitle}>
          <Text style={styles.buttonText}>Susunod na Hakbang</Text>
          <MaterialIcons name="arrow-right-alt" size={30} color = {'white'} />
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
    //height: '55%',
    height: screenHeight * 0.65,
  },
  image: {   
    width: '100%', // Occupies the whole width of the screen
    height: '100%',
  },
  detectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    width: '80%',
    borderWidth: 1,
    borderColor: '#90A895',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 3,
  },
  imageDetected: {
    width: 90, // Ensure the detected image has a consistent size
    height: 65,
  },
  pestInfo: {
    marginLeft: 30, // Separates the image and text
  },
  pestDetected: {
    //bottom: 100,
    //marginLeft: 135,
    fontSize: screenHeight *0.025,
    //fontSize: 19,
    fontFamily:'Lora_500Medium',
    color: '#094F29',
  },
  pestName: {
    fontFamily:'Lora_400Regular',
    //bottom: 90,
    //marginLeft: 135,
    //fontSize: 14,
    fontSize: screenHeight *0.019,
  },
  instructcontainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0, // Aligns the container at the bottom
    //height: '49%', // Adjusted height to make room for content
    height: screenHeight * 0.495,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    zIndex: 2,
  },
  instructTitle: {
    color: '#094F29',
    fontSize: screenHeight *0.03,
    //fontSize: 22,
    fontFamily: 'Quattrocento_700Bold',
    
  },
  stepTitle: {
    marginLeft: 10,
    marginBottom: 8,
    fontSize: screenHeight *0.02,
    //fontSize: 14,
    fontFamily: 'Lora_500Medium',
    color: '#094F29',
  },
  stepDescription: {
    fontFamily: 'Lora_400Regular',

    width: '80%',
    textAlign: 'justify',
    fontSize: screenHeight* 0.017,
    fontSize: 13,
    color: '#094F29',
    //marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 15,
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
    marginTop: 15,
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
    zIndex: 1, // Ensure it is above the image
    padding: 5,
  },
  
});

export default SecondInstructionScreen;