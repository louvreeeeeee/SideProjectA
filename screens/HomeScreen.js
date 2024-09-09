import React ,{ useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, ScrollView } from 'react-native';
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
        colors={['#C8D7CF', '#245f42']}
        start={{ x: 0.9, y: 0.3 }} // Adjust the start point as per your requirement
        end={{ x: 0.9, y: 0.9}}   // Adjust the end point as per your requirement
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
            <Entypo name="mobile" size={45} color="white" />
            <Image
              source={require('../assets/number-one.png')} // Change this to the path of your step 1 image
              style={styles.stepImage}
            />
            <Text style={styles.iconText}>Kuhanan</Text>
            <Text style={styles.subText}>Gamitin kahit saan</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Feather name="upload-cloud" size={45} color="white" marginLeft={29} />
            <Image
              source={require('../assets/number-2.png')} // Change this to the path of your step 2 image
              style={[styles.stepImage, {marginLeft: 29}]}
            />
            <Text style={[styles.iconText, {marginLeft: 29}]}>Suriin</Text>
            <Text style={[styles.subText, {marginLeft: 29}]}>Tukuyin ang peste</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Octicons name="checklist" size={45} color="white" />
            <Image
              source={require('../assets/number-3.png')} // Change this to the path of your step 3 image
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
    fontSize: 30,
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
    height: 225, // Adjusted to provide space for the "How it works?" text
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed to flex-start to align items from the top
    flexDirection: 'column', // Changed to column to align items vertically
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20, // Added padding to create space at the top
  },
  howItWorksText: {
    fontFamily: 'Quattrocento_700Bold',
    fontSize: 19,
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
    fontSize: 15,
    color: 'white', // Adjust the color as per your requirement
  },
  subText: {
    fontFamily: 'Lora_400Regular',
    marginTop: 6,
    fontSize: 11,
    color: 'white', // Adjust the color as per your requirement
    textAlign: 'center', // Centers the text
    lineHeight: 12, // Adjusts line height for better readability
    flexWrap: 'wrap', // Allows text to wrap if it exceeds the width
    maxWidth: '75%', // Ensures it doesn't overflow the container
},
  
  infoImage: {
    bottom: 10,
    width: '40%', // Adjust the size as per your requirement
    height: 190, // Adjust the size as per your requirement
    //marginBottom: 25,
  },
  infoContainer: {
    marginLeft: 10,
    //marginTop: 8,
    backgroundColor: '#E9F9F0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%', // Adjust the width as per your requirement
    alignSelf: 'center', // Center the container within the scroll view
    height: 240, // Adjust the height as per your requirement
  },
  infoContent: {
    flex: 1,
    //marginRight: 15,
  },
  infoTitle: {
    top:5,
    //bottom: 1,
    left: 30,
    fontSize: 16,
    //fontWeight: 'bold',
    fontSize: 17,
   fontFamily:'Lora_600SemiBold',
    //marginBottom: 10, // Adjust spacing as per your requirement
    color: '#0D3315', // Adjust color as per your requirement
  },
  infoText: { 
    fontFamily: 'Lora_400Regular',
    top:12,
    //bottom: 1,
    marginRight: 18,
    marginLeft: 30,
    textAlign: 'justify',
    fontSize: 12,
    color: '#5D7562', // Adjust the color as per your requirement
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
