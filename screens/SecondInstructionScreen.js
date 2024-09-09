import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


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
          <Text style={styles.pestDetected}>Pest Detected!</Text>
          <Text style={styles.pestName}>Brown Planthopper</Text>
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
   // marginTop: StatusBar.currentHeight || 0,
  }, 
  stepImage: {
    marginRight: 7,
    width: 19, // Adjust the size as per your requirement
    height: 19, // Adjust the size as per your requirement
  },
  imageContainer: {
    width: '100%', // Occupies the whole width of the screen
    height: '60%',
  },
  image: {   
    width: '100%', // Occupies the whole width of the screen
    height: '100%',
  },
  detectedContainer: {
    marginTop: 12,
    width: '80%',
    borderWidth: 1,
    borderColor:'#90A895',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 100, 
  },
  imageDetected: { 
    bottom: 11,  
    width: '40%', // Occupies the whole width of the screen
    height: '120%',
  },
  pestDetected: {
    bottom: 100,
    marginLeft: 150,
    fontSize: 19,
    fontFamily:'Lora_500Medium',
  },
  pestName: {
    fontFamily:'Lora_400Regular',
    bottom: 90,
    marginLeft: 150,
    fontSize: 14,
  },
  instructcontainer: {
    position: 'absolute',
    width: '100%',
    marginTop: '88%',
    height: 420, 
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
    //zIndex: 1, // Ensure it is above the image
  },
  
});

export default SecondInstructionScreen;