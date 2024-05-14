import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient component from Expo
import GuidebookSection from './GuideBookSection'; // Assuming this is the file containing GuidebookSection component
import pestData from '../pests.json'; // Importing pest data from JSON file

const GuidebookScreen = () => {
  const [selectedPest, setSelectedPest] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePestClick = (pest) => {
    setSelectedPest(pest);
    setModalVisible(true);
  };

  const renderPestContainers = () => {
    return pestData.pests.map((pest, index) => {
      console.log('Pest Name:', pest.name);
      return (
        <TouchableOpacity key={index} onPress={() => handlePestClick(pest)}>
          <LinearGradient
            colors={['#C8D7CF', '#245f42']}
            
            style={styles.containerWrapper} // Apply gradient to the container wrapper
          >
            <View style={styles.imageContainer}>
              {getImageSource(pest.name)}
            </View>
            <Text style={styles.imageText}>{pest.name}</Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    });
  };

  const getImageSource = (name) => {
    switch (name) {
      case 'Brown PlantHopper':
        return <Image source={require('../assets/Pests/brown.jpg')} style={styles.image} />;
      case 'Green Leafhopper':
        return <Image source={require('../assets/Pests/green.png')} style={styles.image} />;
      case 'Leaf Folder':
        return <Image source={require('../assets/Pests/leaffolder.jpg')} style={styles.image} />;
      case 'Rice Bug':
        return <Image source={require('../assets/Pests/ricebug.jpg')} style={styles.image} />;
      case 'Yellow Stem Borer':
        return <Image source={require('../assets/Pests/yellowstemborer.jpg')} style={styles.image} />;
      case 'Whorl Maggot':
        return <Image source={require('../assets/Pests/whorl.jpg')} style={styles.image} />;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
          {renderPestContainers()}
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <ScrollView contentContainerStyle={styles.modalContentContainer}>
            {selectedPest && (
              <GuidebookSection {...selectedPest} onClose={() => setModalVisible(false)} />
            )}
          </ScrollView>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  sectionContainer: {
    flexGrow: 1,
    flexDirection: 'column', // Display images vertically
    alignItems: 'center', // Align items in the center horizontally
  },
  imageContainer: {
    marginBottom: 5,
    width: '100%',
  },
  image: {
    width: 330,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  imageText: {
    color:'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  containerWrapper: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#245f42',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
});

export default GuidebookScreen;
