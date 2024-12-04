import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RecommendationScreen from './RecommendationScreen';
import { Dimensions } from 'react-native';

const { width: screenWidth , height: screenHeight} = Dimensions.get('window');


// Import the logo image
const logo = require('../assets/questionmark.png');
const insects = [
  { name: 'Brown Planthopper', tagalog: '(Kayumangging ngusong kabayo)', image: require('../assets/images/BPH-nobackground.png'), color: '#357B57', iconColor: 'rgba(255, 255, 255, 1)' , textColor: 'white' },
  { name: 'Rice Bug', tagalog: 'Atangya (Tagalog)', image: require('../assets/images/RBG-Blackricebug.png'), color: '#D8EBE1', iconColor: '#357B57', textColor: '#094F29'  },
  { name: 'Green Leafhopper', tagalog: 'Ngusong Kabayo', image: require('../assets/images/RBG-GreenPH3.png'), color: '#357B57', iconColor: 'rgba(255, 255, 255, 1)', textColor: 'white'},
  { name: 'Whorl Maggot', tagalog: 'Langaw palay', image: require('../assets/images/RBG-WhorlMaggot.png'), color: '#D8EBE1', iconColor: '#357B57', textColor: '#094F29' },
  { name: 'Leaffolder', tagalog: 'Mambibilot o Maniniklup', image: require('../assets/images/RBG-Leaffolder.png'), color: '#357B57', iconColor: 'rgba(255, 255, 255, 1)', textColor: 'white' },
  { name: 'Yellow Stem Borer', tagalog: 'Dilaw na bagombong', image: require('../assets/images/RBG-YellowStemBorer.png'), color: '#D8EBE1', iconColor: '#357B57' , textColor: '#094F29' },
  { name: 'Corn Borer', tagalog: 'Dalipog (Ilokano)', image: require('../assets/images/RBG_corn_borer_larva2.png'), color: '#357B57', iconColor: 'rgba(255, 255, 255, 1)', textColor: 'white'},
  { name: 'Black Cutworm', tagalog: 'Limas, Dimas, Ulod', image: require('../assets/images/RBG_Black_Cutworm_Larva2.png'), color: '#D8EBE1', iconColor: '#357B57', textColor: '#094F29' },
  { name: 'Army worm', tagalog: 'Harabas', image: require('../assets/images/RBG_Fall-Armyworm3.png'), color: '#357B57', iconColor: 'rgba(255, 255, 255, 1)', textColor: 'white' },
  { name: 'Aphids', tagalog: 'Aplat (Ilocano) at Dugos dugos (Cebuano)', image: require('../assets/images/RBG_corn-aphid.png'), color: '#D8EBE1', iconColor: '#357B57' , textColor: '#094F29' }
];


const InsectButton = ({ insect, index }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(`Selected pest: ${insect.name}`);
    navigation.navigate('RecommendationScreen', { insect });
  };

  return (
    
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, { backgroundColor: insect.color }]}
    >
      

      <View style={styles.imageContainer}>
        <Image source={insect.image} style={styles.image} />
        <AntDesign
          name="rightcircle"
          size={screenWidth * 0.07} // Dynamically adjust the icon size based on screen width
          color={insect.iconColor}
          left={screenWidth * 0.74}
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.name, { color: insect.textColor }]}>{insect.name}</Text>
        <Text style={[styles.tagalog, { color: insect.textColor }]}>{insect.tagalog}</Text>
      </View>
    </TouchableOpacity>
    
  );
};




const Digibook = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.header}>MGA URI NG PESTE SA PALAY</Text>
    {insects.map((insect, index) => (
      <InsectButton key={index} insect={insect} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 55,
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Lora_700Bold', 
    fontSize:16, 
    color: 'black',
    right: screenWidth * 0.11,
    top: '-2%',
  },
  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: '2%',
    right: '7%',
    resizeMode: 'contain',
    
  },
  button: {
    width: '87%',
    height: 85,
    borderRadius: 10,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    overflow: 'visible',
    position: 'relative', // Make sure this is relative for absolute positioning inside
  },
  imageContainer: {
    position: 'relative', // Ensure relative positioning to place the icon correctly
    width: 100,
    height: '100%',
  },
  image: {
    left: -25,
    top: -80,
    width: 100,
    height: 240,
    resizeMode: 'center',
    position: 'absolute',
    //zIndex: 1,
  },
  icon: {
    position: 'absolute',
    top: '35%',
    //left: '100%',  // Align relative to the right side of the button
    //transform: [{ translateX: 216 }, { translateY: -13}], // Center the icon
   
  },
  textContainer: {
    position: 'relative',
    left: -34,
    textAlign: 'left',
    flex: 1,
  },
  name: {
    textAlign: 'center',
    //marginLeft: -10,
    fontFamily: 'Lora_500Medium',
    fontSize: 16,
    //fontWeight: 'bold',
    //color: '#333',
  },
  tagalog: {
    
    fontFamily: 'Lora_400Regular_Italic',
    textAlign:'center',
    
    fontSize: 13,
    //color: '#777',
    
  },
});

export default Digibook;
