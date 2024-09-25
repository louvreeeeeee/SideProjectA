import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from "react-native";
//import { COLORS, FONTS } from "../constants";
import {
    useFonts,
    LeagueSpartan_100Thin,
    LeagueSpartan_200ExtraLight,
    LeagueSpartan_300Light,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    LeagueSpartan_600SemiBold,
    LeagueSpartan_700Bold,
    LeagueSpartan_800ExtraBold,
    LeagueSpartan_900Black,
  } from '@expo-google-fonts/league-spartan';
  import {
    LibreBaskerville_400Regular,
    LibreBaskerville_400Regular_Italic,
    LibreBaskerville_700Bold,
  } from '@expo-google-fonts/libre-baskerville';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slides = [
  {
    id: '1',
    image: require('../assets/onboarding/81.png'),
    title: 'MALIGAYANG PAGDATING!',
    subtitle: 'Narito ang iyong Gabay sa Pagkilala at Pagkontrol ng Peste sa Palay',
  },
  {
    id: '2',
    image: require('../assets/onboarding/102.jpg'),
    title: 'SURIIN AT TUKUYIN',
    subtitle: 'Alamin ang kalagayan ng iyong mga pananim. Tiyakin ang kanilang kalusugan.',
    
  },
  {
    id: '3',
    image: require('../assets/onboarding/71.png'),
    title: 'LIGTAS NA PAGSASAKA',
    subtitle:"Halina't alamin ang mga hakbang para sa ligtas na pagsasaka ng iyong mga palay!",
  },
];

const spacing = {
    '1': { titlePadding: windowHeight * 0.29, subtitleMargin: 8, titleLeft: windowWidth * -0.04, subtitleLeft: windowWidth * -0.17},
    '2': { titlePadding: windowHeight * 0.29, subtitleMargin: 8, titleLeft: windowWidth * -0.15, subtitleLeft: windowWidth * -0.15, color: '#225d41' },
    '3': { titlePadding: windowHeight * 0.25, subtitleMargin: 8, titleLeft: windowWidth * -0.10, subtitleLeft: windowWidth * -0.18 },
  };

const opacityMap = {
    '1': 0.36, // Opacity for id 1
    '2': 0.34,  // Opacity for id 2
    '3': 0.47,  // Opacity for id 3
  };
  const Slide = ({ item }) => {
    const { titlePadding, subtitleMargin, titleLeft, subtitleLeft } = spacing[item.id] || { titlePadding: 0, subtitleMargin: 0, titleLeft: '0%', subtitleLeft: '0%' };
  
    // Set opacity based on item.id
    const imageOpacity = opacityMap[item.id] || 1; // Change 0.3 to your desired opacity for id 2
  
    return (
      <View style={styles.slideContainer}>
        <Text style={[styles.title, { paddingTop: titlePadding, left: titleLeft }]}>{item.title}</Text>
        {item.subtitle && (
          <Text
            style={[
              styles.subtitle,
              { marginTop: subtitleMargin, left: subtitleLeft },
              item.id === '2' && { color: '#FFFFFF' }, // Change 'yourDesiredColor' as needed
            ]}
          >
            {item.subtitle}
          </Text>
        )}
        <Image source={item.image} style={[styles.image, { opacity: imageOpacity }]} />
      </View>
    );
  };

const Onboarding = ({ navigation }) => {
    const [loaded, error] = useFonts({ 
    LeagueSpartan_100Thin,
    LeagueSpartan_200ExtraLight,
    LeagueSpartan_300Light,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    LeagueSpartan_600SemiBold,
    LeagueSpartan_700Bold,
    LeagueSpartan_800ExtraBold,
    LeagueSpartan_900Black,
    LibreBaskerville_400Regular,
    LibreBaskerville_400Regular_Italic,
    LibreBaskerville_700Bold,
        
      });
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / windowWidth);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        {currentSlideIndex === slides.length - 1 ? (
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Main")}
          >
            <View style={styles.btn}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </View>
          </TouchableOpacity>
     
           
          </View>
        ) : null}

        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && { backgroundColor: 'gray', width: 25 },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
        style={{ flex: 1 }} // Make sure FlatList takes full screen height
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    slideContainer: {
      width: windowWidth,
      height: windowHeight,
      justifyContent: "flex-start", // Ensure items are stacked vertically
      alignItems: "center",
    },
    image: {
      width: windowWidth,
      height: windowHeight, 
      resizeMode: 'cover', // Make the image cover the entire screen
      position: 'absolute', // Ensure the image is behind the text
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      //flex: 1,
      opacity: 0.2,

    },
    title: {
      fontFamily: 'LeagueSpartan_800ExtraBold',
      color: 'white',
      fontSize: windowHeight * 0.06,
      lineHeight: windowHeight * 0.052,
      paddingTop: windowHeight * 0.17, // Adjust this to position the text
      textAlign: 'left',
      //left: '100%',
      zIndex: 1, // Ensure the text stays above the image
      //maxWidth: windowWidth * 2,
    },
    subtitle: {
        fontFamily: 'LibreBaskerville_400Regular_Italic',
        color: 'white',
        fontSize: windowHeight * 0.021, // Smaller than the title
        textAlign: 'left',
        left: '18%',
        marginTop: 8, // Adds spacing between the title and subtitle
        maxWidth: windowWidth * 0.58,
    },
    footerContainer: {
      position: "absolute",
      bottom: windowHeight * 0.03,
      left: 0,
      right: 0,
      alignItems: "center",
    },
    buttonContainer: {
      alignItems: "center",
      marginBottom: 20,
      width: windowWidth,
    },
    btn: {
        bottom: '60%',
        paddingBottom: 10,
      width: windowWidth * 0.75, 
      paddingVertical: windowWidth * 0.025,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      opacity: 0.9,
      paddingVertical: 10,
    },
    buttonText: {
        fontFamily:'LeagueSpartan_600SemiBold',
        //fontWeight: 'bold',
      //fontFamily: 'Lora_700Bold',
      color: 'white',
      fontSize: windowHeight * 0.03,
      textAlign: 'center',

      //marginRight: 3,
    },
    indicatorContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
    indicator: {
      height: 9,
      width: 15,
      backgroundColor:'white',
      marginHorizontal: 3,
      borderRadius: 20,
    },
  });
  
export default Onboarding;
