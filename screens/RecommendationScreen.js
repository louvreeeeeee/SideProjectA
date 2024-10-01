// PestDetails.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

// Load pests data from the JSON file
const pestsData = require('../assets/pests.json');

// Statically import all images
const pestImages = {
  'Brown Planthopper': require('../assets/Pests/brown.jpg'),
  'Rice Bug': require('../assets/Pests/ricebug.jpg'),
  'Green Leafhopper': require('../assets/Pests/green.png'),
  'Rice Whorl Maggot': require('../assets/Pests/whorl.jpg'),
  'Leaffolder': require('../assets/Pests/leaffolder.jpg'),
  'Yellow Stem Borer': require('../assets/Pests/yellow.jpg'),
};

function RecommendationScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { insect } = route.params || {}; // Use fallback to empty object in case params are undefined

  const [selectedTab, setSelectedTab] = useState('description');
  const [pestData, setPestData] = useState(null);

  useEffect(() => {
    if (!insect || !insect.name) {
      console.error("No insect data received!");
      return;
    }

    // Log the passed pest name for verification
    console.log(`Pest received in PestDetails: ${insect.name}`);

    // Fetch the pest data based on the passed insect name, handle different cases or spaces
    const selectedPest = pestsData.pests.find(
      (pest) => pest.name.toLowerCase().trim() === insect.name.toLowerCase().trim()
    );

    if (selectedPest) {
      setPestData(selectedPest);
    } else {
      console.error(`No data found for pest:  ${insect.name}`);
    }
  }, [insect]);

  // If no insect data was passed or pestData is null, show an error message
  if (!insect || !insect.name || !pestData) {
    return (
      <View style={styles.container}>
        <Text>Error: No pest data available.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Digibook')}>
          <Text style={styles.backText}>Go back to Digibook</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Digibook')}>
          <Ionicons name="arrow-back" size={29} color="#094F29" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pest Details</Text>
      </View>

      {/* Use statically imported images based on the insect name */}
      <Image source={pestImages[insect.name]} style={styles.image} />

      <Text style={styles.title}>{pestData.name}</Text>
      <Text style={styles.subtitle}>{pestData.tagalog_name}</Text>

      {/* Tab selection */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setSelectedTab('description')}
          style={[styles.tab, selectedTab === 'description' && styles.activeTab]}
        >
          <Text style={[styles.tabText, selectedTab === 'description' && styles.activeTabText]}>Paglalarawan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('management')}
          style={[styles.tab, selectedTab === 'management' && styles.activeTab]}
        >
          <Text style={[styles.tabText, selectedTab === 'management' && styles.activeTabText]}>Pamamahala</Text>
        </TouchableOpacity>
      </View>

      {/* Display content dynamically based on selected tab */}
      {selectedTab === 'description' ? (
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>MGA PALATANDAAN:</Text>
          <Text style={styles.contentText}>{pestData.identifying_marks}</Text>
          
          <Text style={styles.sectionTitle} marginTop={15}>PINSALA:</Text>
          <Text style={styles.contentText}>{pestData.damage}</Text>

          <Text style={styles.sectionTitle} marginTop={15}>Saan Matatagpuan:</Text>
          <Text style={styles.contentText}>{pestData.where_to_find}</Text>

          <Text style={styles.sectionTitle} marginTop={15}>Life Cycle:</Text>
          <Text style={styles.contentText}>{pestData.life_cycle}</Text>
        </View>
      ) : (
        <View style={styles.content}>
          {/* Add checks for cultural and biological management to ensure they exist before using map */}
          {pestData.management?.Cultural?.length > 0 ? (
            <>
              <Text style={styles.sectionTitle} marginBottom={15}>CULTURAL:</Text>
              {pestData.management.Cultural.map((item, index) => (
                <Text key={index} style={styles.contentText} marginBottom={10}>• {item}</Text>
              ))}
            </>
          ) : (
            <Text style={styles.noContent}>No cultural management available.</Text>
          )}

          {pestData.management?.Biological?.length > 0 ? (
            <>
              <Text style={styles.sectionTitle} marginTop={15}>BIOLOGICAL:</Text>
              {pestData.management.Biological.map((item, index) => (
                <Text key={index} style={styles.contentText}>• {item}</Text>
              ))}
            </>
          ) : (
            <Text style={styles.noContent}>No biological management available.</Text>
          )}

          {pestData.management?.Chemical?.length > 0 ? (
            <>
              <Text style={styles.sectionTitle} marginTop={15}>Chemical:</Text>
              {pestData.management.Chemical.map((item, index) => (
                <Text key={index} style={styles.contentText}>• {item}</Text>
              ))}
            </>
          ) : (
            <Text style={styles.noContent}>No Chemical management available.</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 24,
    color: '#000',
  },
  headerText: {
    color: '#094F29',
    fontSize: 18,
    fontFamily: 'Lora_400Regular',
    marginLeft: 100,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    //borderRadius: 10,
    marginVertical: 20,
  },
  title: {
    fontFamily: 'Lora_700Bold',
    fontSize: 24,
    color: '#1F7647',
  },
  subtitle: {
    fontFamily: 'Lora_400Regular_Italic',
    fontSize: 16,
    color: '#2A4931',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  activeTab: {
    borderBottomColor: '#094F29',
  },
  tabText: {
    fontFamily: 'Lora_400Regular',
    fontSize: 15,
    color: '#357B57',
  },
  activeTabText: {
    color: '#357B57',
    fontFamily: 'Lora_700Bold',
  },
  content: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily:'Quattrocento_700Bold',
    marginBottom: 10,
    marginTop: 5,
    color: '#132E20',
  },
  contentText: {
    textAlign: 'justify',
    fontFamily: 'Lora_400Regular',
    fontSize: 16,
    color: '#094F29',
    marginBottom: 10,
  },
  noContent: {
    textAlign: 'justify',
    fontFamily: 'Quattrocento_700Bold',
    fontSize: 18,
    color: '#132E20',
    marginTop: 5,
  },
});

export default RecommendationScreen;