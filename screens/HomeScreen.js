import React ,{ useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { Cinzel_500Medium, Cinzel_900Black, Cinzel_600SemiBold } from '@expo-google-fonts/cinzel';
import {Quattrocento_400Regular, Quattrocento_700Bold} from '@expo-google-fonts/quattrocento';
import {PlayfairDisplay_600SemiBold} from '@expo-google-fonts/playfair-display';
import {
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
} from '@expo-google-fonts/oswald';
import {
  
  Lora_400Regular,
  Lora_500Medium,
  Lora_600SemiBold,
  Lora_700Bold,
  Lora_400Regular_Italic,
  Lora_500Medium_Italic,
  Lora_600SemiBold_Italic,
  Lora_700Bold_Italic,
} from '@expo-google-fonts/lora';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window'); // Get screen dimensions

/*const InfoImages = () => {
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
};*/

const HomeScreen = () => {
  const [loaded, error] = useFonts({
    Inter_900Black, Cinzel_900Black, Cinzel_500Medium, Cinzel_600SemiBold,
    Quattrocento_400Regular, Quattrocento_700Bold, PlayfairDisplay_600SemiBold,Lora_400Regular,
    Lora_500Medium,
    Lora_600SemiBold,
    Lora_700Bold,
    Lora_400Regular_Italic,
    Lora_500Medium_Italic,
    Lora_600SemiBold_Italic,
    Lora_700Bold_Italic,
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
  });
  
  const navigation = useNavigation();

  useEffect(() => {
    if (loaded || error) {
      //SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <ScrollView > 
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/banner.jpg')} // Change this to the path of your image
        />
      </View>
      <Text style={styles.headerText}>RICE PEST DIGIBOOK</Text>
      
      <LinearGradient
        colors={['#C8D7CF', '#356b50']}
        start={{ x: 0.9, y: 0.3 }} // Adjust the start point as per your requirement
        end={{ x: 0.9, y: 0.95}}   // Adjust the end point as per your requirement
        style={styles.gradient}
      >
      <TouchableOpacity onPress={() => navigation.navigate('FirstInstructionScreen')}>
        <View style={styles.row}>
        <Text style={styles.howItWorksText}>PAANO ITO GAMITIN?</Text>
        <MaterialIcons name="keyboard-double-arrow-right" size={29} color="#094F29" style={styles.arrowicon}/>
        </View>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Entypo name="mobile" size={45} color="#253F2E" />
            <Image
              source={require('../assets/number-oneN.png')} // Change this to the path of your step 1 image
              style={styles.stepImage}
            />
            <Text style={styles.iconText}>Kuhanan</Text>
            <Text style={styles.subText}>Gamitin kahit saan</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Feather name="upload-cloud" size={45} color="#253F2E" marginLeft={29} />
            <Image
              source={require('../assets/number-2N.png')} // Change this to the path of your step 2 image
              style={[styles.stepImage, {marginLeft: 29}]}
            />
            <Text style={[styles.iconText, {marginLeft: 29}]}>Suriin</Text>
            <Text style={[styles.subText, {marginLeft: 29}]}>Tukuyin ang peste</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Octicons name="checklist" size={45} color="#253F2E" />
            <Image
              source={require('../assets/number-3N.png')} // Change this to the path of your step 3 image
              style={styles.stepImage}
            />
            <Text style={styles.iconText}>Rekomendasyon</Text>
            <Text style={styles.subText}>Patnubay sa Pangangalaga</Text>
            
          </View>
        </View>
        
      </LinearGradient>
      <View style={styles.infoContainer}>
      <Image source={require('../assets/images/farmers1.jpg')} style={styles.infoImage} />
        <View style={styles.infoContent}>
        <Text style={styles.infoTitle}>Gabay ng Magsasaka!</Text>
        <Text style={styles.infoText}>
  
        Ang Rice Pest DigiBook ay isang mahalagang kagamitan para sa mga magsasaka at eksperto sa agrikultura. Nagbibigay ito ng komprehensibong impormasyon sa pamamahala ng peste, na tumutulong sa mga gumagamit na maprotektahan ang kanilang mga pananim nang epektibo. Ito’y madaling gamiting gabay para sa  pagkilala sa mga peste.
        </Text>
        </View>
      </View>

      
      

      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //marginTop: StatusBar.currentHeight || 0,
  },
  headerText: {
    fontFamily: 'Cinzel_600SemiBold',
    //fontSize: 30,
    fontSize: screenHeight* 0.04,
    color: 'white',
    //fontWeight: 'bold',
    top: -190, // Adjust the margin as per your requirement
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Occupies the whole width of the screen
    height: 300,
    
    //marginTop: 0 // Adjust the height of the image as per your requirement
  },
  gradient: {
    width: '100%',
    marginTop: -105,
    height: screenHeight* 0.298, // Adjusted to provide space for the "How it works?" text
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed to flex-start to align items from the top
    flexDirection: 'column', // Changed to column to align items vertically
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20, // Added padding to create space at the top
  },
  howItWorksText: {
    fontFamily: 'Quattrocento_700Bold',
    //fontSize: 19,
    fontSize: screenHeight* 0.025,
    color: '#094F29',
    //fontWeight: 'bold',
    marginBottom: 20, // Space between "How it works?" text and icons
  },
  iconContainer: {
    marginTop: 9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%', // Adjust the width as per your requirement
    alignItems: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  stepImage: {
    flexDirection: 'column',
    marginTop: 3,
    width: 15, // Adjust the size as per your requirement
    height: 15, // Adjust the size as per your requirement
  },
  iconText: {
    fontFamily: 'Lora_500Medium',
    //fontWeight: 'semi-bold',
    marginTop: 9,
    //fontSize: 15,
    fontSize: screenHeight* 0.02,
    color: '#E8E8E8', // Adjust the color as per your requirement
  },
  subText: {
    fontFamily: 'Lora_400Regular',
    marginTop: 6,
    fontSize: screenHeight* 0.015,
    //fontSize: 11,
    color: '#E8E8E8', // Adjust the color as per your requirement
    textAlign: 'center', // Centers the text
    lineHeight: 12, // Adjusts line height for better readability
    flexWrap: 'wrap', // Allows text to wrap if it exceeds the width
    maxWidth: '75%', // Ensures it doesn't overflow the container
},
  
  infoImage: {
    //bottom: 10,
    width: '43%', // Adjust the size as per your requirement
    height: '100%', // Adjust the size as per your requirement
    //marginBottom: 25,
  },
  infoContainer: {
    height: 'auto',  // Make height auto or percentage-based
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  // Distribute space between elements
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  infoContent: {
    flex: 1,
    marginLeft: 10,
  },
  infoTitle: {
    top:-6,
    //bottom: 1,
    left: 10,
    //fontSize: 16,
    fontSize: screenHeight* 0.0232,
    fontFamily:'Lora_600SemiBold',
    //marginBottom: 10, // Adjust spacing as per your requirement
    color: '#17262A', // Adjust color as per your requirement
  },
  infoText: { 
    fontFamily: 'Lora_400Regular',
    top:1,
    //bottom: 1,
    marginRight: 5,
    marginLeft: 10,
    textAlign:'justify',
    fontSize: screenHeight* 0.017,
    //fontSize: 12,
    color: '#253F2E', // Adjust the color as per your requirement
  },
  arrowicon: {
    marginBottom: 19, // Space between the text and the icon
    //alignSelf: 'center', // Aligns the icon vertically with the text
},
row: {
    flexDirection: 'row', // Aligns children in a row
    alignItems: 'center', // Centers items vertically
},
  
});

export default HomeScreen;
