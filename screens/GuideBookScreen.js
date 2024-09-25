import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient component from Expo
import pestData from '../pests.json'; // Importing pest data from JSON file

const GuideBookScreen = () => {
  const [selectedPest, setSelectedPest] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [managementModalVisible, setManagementModalVisible] = useState(false);

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
      case 'Brown Planthopper':
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

// Inside the renderManagementDetails function
const renderManagementDetails = (management) => {
  return Object.entries(management).map(([category, strategies]) => (
    <View key={category} style={styles.managementDetail}>
      <Text style={styles.managementDetailTitle}>{category}</Text>
      {strategies.map((strategy, index) => (
        <View key={index} style={styles.strategyContainer}>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
          </View>
          <View style={styles.strategyTextContainer}>
            <Text style={styles.strategyText}>{strategy}</Text>
          </View>
        </View>
      ))}
    </View>
  ));
};


  return (
    <View style={styles.container}>
       <Image source={require('../assets/logo1.png')} style={styles.logo} />
     
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
          {renderPestContainers()}
        </View>
        <Modal
          animationType="slide"
          transparent={true} // Set to true to make the modal floating
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <ScrollView contentContainerStyle={styles.modalContentContainer}>
                {selectedPest && (
                  <>
                  
                  <Text style={styles.modalTitle}>{selectedPest.name.toUpperCase()}</Text>     
                    <Text style={styles.modalSubTitle}>Tagalog Name</Text>
                    <Text style={styles.modalText}>{selectedPest.tagalog_name}</Text>
                    <Text style={styles.modalSubTitle}>Identifying Marks</Text>
                    <Text style={styles.modalText}>{selectedPest.identifying_marks}</Text>
                    <Text style={styles.modalSubTitle}>Where to Find</Text>
                    <Text style={styles.modalText}>{selectedPest.where_to_find}</Text>
                    <Text style={styles.modalSubTitle}>Damage</Text>
                    <Text style={styles.modalText}>{selectedPest.damage}</Text>
                    <Text style={styles.modalSubTitle}>Life Cycle</Text>
                    <Text style={styles.modalText}>{selectedPest.life_cycle}</Text>
                    <TouchableOpacity
                      style={styles.managementButton}
                      onPress={() => {
                        setModalVisible(false);
                        setManagementModalVisible(true);
                      }}
                    >
                      <Text style={styles.managementButtonText}>How to Manage</Text>
                    </TouchableOpacity>
                  </>
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true} // Set to true to make the modal floating
          visible={managementModalVisible}
          onRequestClose={() => setManagementModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.managementModalContent}>
              <ScrollView contentContainerStyle={styles.modalContentContainer}>
                {selectedPest && (
                  <>
                    <Text style={styles.managementTitle}>How to Deal w/ {selectedPest.name}</Text>
                    {renderManagementDetails(selectedPest.management)}
                  </>
                )}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setManagementModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
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
  strategyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginBottom: 5,
    paddingHorizontal: 3,
  },
  logo: {
    width: 220,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    color:'#225d41',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:5,
    paddingTop:23,
  },
  bulletPoint: {
    
    marginLeft: -25,
    width: 8,
    height: 8,
    borderRadius: 4, // Make it a circle
    backgroundColor: '#245f42', // Bullet color
    marginRight: 18,
    marginTop: 10, // Adjust vertical alignment
  },
  strategyText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'justify',
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
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  managementModalContent: {
    width: '80%',
    height: '80%', // Adjust the height as needed
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
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
  managementButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#245f42',
    borderRadius: 10,
  },
  managementButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#245f42',
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#225d41',
  },
  modalSubTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    
    
  },
  modalBackground: {
    backgroundColor: '#245f42',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  modalText: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'justify',
  },
  managementTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#225d41',
  },
  managementDetail: {
    marginBottom: 10,
    
  },
  managementDetailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  managementDetailText: {
    fontSize: 15,
    textAlign: 'justify',
  },
});

export default GuideBookScreen;
