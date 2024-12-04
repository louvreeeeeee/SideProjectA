import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import Voice from '@react-native-voice/voice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    useFonts,  
    
    LeagueSpartan_700Bold,
    LeagueSpartan_800ExtraBold,
    LeagueSpartan_900Black,
  } from '@expo-google-fonts/league-spartan';
import {
    LibreBaskerville_400Regular,
    LibreBaskerville_400Regular_Italic,
    LibreBaskerville_700Bold,
  } from '@expo-google-fonts/libre-baskerville';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window'); // Get screen dimensions
// Preload pest images
const pestImages = {
  "YELLOW STEM BORER": require('../assets/Speech/yellowstem.png'),
  "RICE BUG": require('../assets/Speech/RiceBlackBug.jpg'),
  "WHORL MAGGOT": require('../assets/Speech/whorl.jpeg'),
  "GREEN LEAFHOPPER": require('../assets/Speech/GREEN.jpg'),
  "BROWN PLANTHOPPER": require('../assets/Speech/brown.png'),
  "LEAFFOLDER": require('../assets/Speech/leaffolder.jpg'),
  "CORN BORER": require('../assets/Speech/corn-borer.jpg'),
  "BLACK CUTWORM": require('../assets/Speech/Cutworm.jpg'),
  "FALL ARMYWORM": require('../assets/Speech/armyworm.jpg'),
  "CORN APHIDS": require('../assets/Speech/aphid.jpg'),

  // Tagalog names
  "DILAW NA BAGOMBONG": require('../assets/Speech/yellowstem.png'),
  "ATANGYA": require('../assets/Speech/RiceBlackBug.jpg'),
  "LANGAW PALAY": require('../assets/Speech/whorl.jpeg'),
  "NGUSONG KABAYO": require('../assets/Speech/GREEN.jpg'),
  "KAYUMANGGING NGUSONG KABAYO": require('../assets/Speech/brown.png'),
  "MAMBIBILOT": require('../assets/Speech/leaffolder.jpg'),
  "MANINIKLUP": require('../assets/Speech/leaffolder.jpg'),
  "DALIPOG": require('../assets/Speech/corn-borer.jpg'),
  "LIMAS": require('../assets/Speech/Cutworm.jpg'),
  "ULOD": require('../assets/Speech/Cutworm.jpg'),
  "DIMAS": require('../assets/Speech/Cutworm.jpg'),
  "HARABAS": require('../assets/Speech/armyworm.jpg'),
  "APLAT": require('../assets/Speech/aphid.jpg'),
};

const SpeechScreen = () => {
  const [started, setStarted] = useState(false);
  const [results, setResults] = useState([]);
  const [imageSource, setImageSource] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startSpeechToText = async () => {
    setResults([]);
    setImageSource(null);
    setError('');
    await Voice.start('en-NZ'); // Change language if needed
    setStarted(true);

     
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    if (result.value && result.value.length > 0) {
      let speechText = result.value[0].toUpperCase().trim();
      setResults([speechText]);

      // Post-process speech text
      speechText = postProcessSpeechText(speechText);

      setResults([speechText]); // Update results after processing

      if (pestImages[speechText]) {
        setImageSource(pestImages[speechText]);
        setError('');
      } else {
        setImageSource(null);
        setError('Pest not recognized. Please mention a valid rice pest.');
      }
    }
  };

  // Post-process speech text to handle common misinterpretations
  const postProcessSpeechText = (text) => {
    // Define common corrections (e.g., "rice bag" -> "rice bug")
    const corrections = {
      "RICE BAG": "RICE BUG", 
      "DILAW NA BAGUMBONG": "DILAW NA BAGOMBONG",
      "GREEN LEAF HOPPER": "GREEN LEAFHOPPER",
      "MAMBIBILUT": "MAMBIBILOT",
      "MANINIKLOP": "MANINIKLUP",
      "WORLD MAGGOT": "WHORL MAGGOT", 
      "WHIRL MAGGOT": "WHORL MAGGOT",
      "LEAF FOLDER": "LEAFFOLDER",
      "BROWN PLANT HOPPER": "BROWN PLANTHOPPER",
      "YELLOW STIM BORER": "YELLOW STEM BORER",
      "YELLOW STEM BORDER": "YELLOW STEM BORER",
      "YELLOW STIM BORDER": "YELLOW STEM BORER",
      "DALIPUG": "DALIPOG",
      "CORN BOARER": "CORN BORER",
      "BLOCK CUTWORM": "BLACK CUTWORM",
      "BLACK CAT WORM": "BLACK CUTWORM",
      "BLOCK CAT WORM": "BLACK CUTWORM",
      "BLACK CATWORM": "BLACK CUTWORM",
      "FULL ARMY WORM": "FALL ARMYWORM",
      "FALL ARMY WORM": "FALL ARMYWORM",
    };

    // Apply corrections
    return corrections[text] || text;
  };

  const onSpeechError = (error) => {
    console.log(error);
    setError('Speech recognition error. Please try again.');
  };

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SPEECH RECOGNITION</Text>
      </View>
  
      <TouchableOpacity
        style={styles.microphoneButton}
        onPress={!started ? startSpeechToText : stopSpeechToText}
      >
        <Icon name="mic" size={80} color={started ? "red" : "white"} />
      </TouchableOpacity>
  
      <Text style={styles.instructionText}>
        Pindutin ang mikropono at magbanggit ng uri ng peste sa palay o mais
      </Text>
  
      {/* Results start rendering below other elements */}
      <View style={styles.resultsContainer}>
        {results.map((result, index) => (
          <Text key={index} style={styles.resultText}>
            {result}
          </Text>
        ))}
      </View>
  
      {/* Display image if pest is recognized */}
      {imageSource && <Image source={imageSource} style={styles.pestImage} />}
  
      {/* Display error message if pest is not recognized */}
      {error && <Text style={styles.errorText}>{error}</Text>}
  
      <StatusBar style="auto" />
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  microphoneButton: {
    marginTop: 94, // Push microphone below title
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D6B4A',
    borderRadius: 70,
    padding: 20,
    borderWidth: 5, // Border thickness
    borderColor: '#838a86', // Border color (for the glowing effect)
    shadowColor: '#80FA27', // Shadow color (glow color)
    shadowOffset: { width: 0, height: 0 }, // Center the glow around the button
    shadowRadius: 100, // Radius of the shadow (size of the glow)
    shadowOpacity: 100, // Intensity of the glow
    elevation: 250, // Elevation for Android shadow
  },
  instructionText: {
    fontFamily: 'sans-serif-regular',
    marginTop: 20, // Space between microphone and instruction text
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 10,
  },
  resultsContainer: {
    marginTop: 40, // Space to separate from instruction text
    width: '100%',
    alignItems: 'center',
  },
  resultText: {
    fontFamily: 'LeagueSpartan_700Bold',
    fontSize: 21,
    textAlign: 'center',
    marginVertical: 3,
    color: 'black',
  },
  pestImage: {
    width: 300,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: 35, // Title near the top of the screen
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'LeagueSpartan_800ExtraBold', // Customize as needed
    //fontWeight: 'bold',
    textAlign: 'center',
    color: '#2D6B4A',
    letterSpacing: 1,
    textShadowColor: '#3c8c62', // Glow color
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20, // Size of the glow
  },
});


export default SpeechScreen;