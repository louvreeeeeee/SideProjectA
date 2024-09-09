import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RecommendationScreen from './RecommendationScreen';

const insects = [
  { name: 'Brown Plant Hopper', tagalog: '(Kayumangging ngusong kabayo)', image: require('../assets/images/BPH-nobackground.png'), color: '#357B57', iconColor: 'rgba(255, 255, 255, 1)' , textColor: 'white' },
  { name: 'Rice Bug', tagalog: 'Atangya (Tagalog)', image: require('../assets/images/RBG-Blackricebug.png'), color: '#D8EBE1', iconColor: '#357B57', textColor: '#094F29'  },
  { name: 'Green Leafhopper', tagalog: 'Ngusong Kabayo', image: require('../assets/images/RBG-GreenPH3.png'), color: '#357B57', iconColor: 'rgba(255, 255, 255, 1)', textColor: 'white'},
  { name: 'Rice Whorl Maggot', tagalog: 'Langaw palay', image: require('../assets/images/RBG-WhorlMaggot.png'), color: '#D8EBE1', iconColor: '#357B57', textColor: '#094F29' },
  { name: 'Leaffolder', tagalog: 'Mambibilot o Maniniklup', image: require('../assets/images/RBG-Leaffolder.png'), color: '#357B57', iconColor: 'rgba(255, 255, 255, 1)', textColor: 'white' },
  { name: 'Yellow Stem Borer', tagalog: 'Dilaw na bagombong', image: require('../assets/images/RBG-YellowStemBorer.png'), color: '#D8EBE1', iconColor: '#357B57' , textColor: '#094F29' }
];


const InsectButton = ({ insect }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(`Selected pest: ${insect.name}`); // Fix string interpolation
    navigation.navigate('RecommendationScreen', { insect });
  };

  return (
    <TouchableOpacity
    onPress={handlePress} // Pass the insect data to PestDetails screen // Pass the screen name as a string
      style={[styles.button, { backgroundColor: insect.color }]}
    >
      <View style={styles.imageContainer}>
        <Image source={insect.image} style={styles.image} />
        <AntDesign name="rightcircle" size={29} color={insect.iconColor} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.name, {color: insect.textColor}]}>{insect.name} </Text>
        <Text style={[styles.tagalog, {color: insect.textColor}]}>{insect.tagalog}</Text>
      </View>
    </TouchableOpacity>
  );
};



const Digibook = () => (
  <ScrollView contentContainerStyle={styles.container}>
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
    width: 120,
    height: 240,
    resizeMode: 'center',
    position: 'absolute',
    //zIndex: 1,
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: 235 }, { translateY: -13}], // Center the icon
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
