import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Image, Button, ActivityIndicator, Alert} from 'react-native';
import Slider from '@react-native-community/slider';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import axios from 'axios';
import pestData from '../pests.json'; // Importing pest data from JSON file
import GuidebookSection from './GuideBookSection';
import { PestDetailsModal, ManagementDetailsModal } from './PestDetailsModal'; // Import the modal components
import { launchImageLibrary } from 'react-native-image-picker';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth , height: screenHeight} = Dimensions.get('window');

/*const PestPrediction = () => {
  const navigation = useNavigation(); 
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);*/

  const getImageSource = (name) => {
    switch (name) {
      case 'brown-planthopper':
        return <Image source={require('../assets/images/BPH-nobackground.png')} style={{ width: screenWidth * 0.13, height: screenHeight * 0.10, right: '10%' }} />;
      case 'green-leafhopper':
        return <Image source={require('../assets/images/RBG-GreenPH4.png')} style={{ width: screenWidth * 0.09, height: screenHeight * 0.11, left: '10%' }} />;
      case 'leaf-folder':
        return <Image source={require('../assets/images/RBG-Leaffolder.png')} style={{ width: screenWidth * 0.18, height: screenHeight * 0.08, right: '10%' }} />;
      case 'rice-bug':
        return <Image source={require('../assets/images/RBG-Blackricebug.png')} style={{ width: screenWidth * 0.11, height: screenHeight * 0.11, right: '10%' }} />;
      case 'stem-borer':
        return <Image source={require('../assets/images/RBG-YellowStemBorer.png')} style={{ width: screenWidth * 0.11, height: screenHeight * 0.11, right: '1%' }} />;
      case 'whorl-maggot':
        return <Image source={require('../assets/images/RBG-WhorlMaggot.png')} style={{ width: screenWidth * 0.1, height: screenHeight * 0.10, right: '1%' }} />;
      default:
        return null;
    }
  };

  const formatClass = (name) => {
    switch (name) {
      case 'brown-planthopper':
        return "Brown Planthopper";
      case 'green-leafhopper':
        return "Green Leafhopper";
      case 'leaf-folder':
        return "Leaf Folder";
      case 'rice-bug':
        return "Rice Bug";
      case 'stem-borer':
        return "Yellow Stem Borer";
      case 'whorl-maggot':
        return "Whorl Maggot";
      default:
        return name;
    }
  };

  const DetectedModal = ({ visible, data = [], onClose }) => {
    const uniqueClasses = Array.from(new Set(data.map(item => item.class)));
    const [showModal, setShowModal] = useState(false);
    const [selectedPest, setSelectedPest] = useState(null);
    const navigation = useNavigation();

    const openModal = (item) => {
      setSelectedPest(item);
      setShowModal(true);
    };
  
    const closeDetailsModal = () => {
      setShowModal(false);
      setSelectedPest(null);
    };
  
    const getPestDetails = (pestName) => {
      //const formattedPestName = formatClass(pestName);
      //const pest = pestData.pests.find(p => formatClass(p.name) === formattedPestName) || {};
      const pest = pestData.pests.find(p => p.name === formatClass(pestName)) || {};
      return {
        name: pest.name || '',
        tagalog_name: pest.tagalog_name || '',
        identifying_marks: pest.identifying_marks || '',
        where_to_find: pest.where_to_find || '',
        damage: pest.damage || '',
        life_cycle: pest.life_cycle || '',
        management: pest.management || { Cultural: [], Chemical: [], Biological: [] }
      };
    };
  
  const handlePredictionPress = (selectedPest) => {
    const pestDetails = getPestDetails(formatClass(selectedPest));
    console.log(`Selected pest: ${formatClass(selectedPest)}`);
    navigation.navigate('RecommendationScreen', { insect: pestDetails });
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.floatingModal}>
        <ScrollView contentContainerStyle={styles.modalContentContainer}>
          <Text style={styles.resultTitle}>{uniqueClasses.length} Unique Pest(s) Detected!</Text>
          {uniqueClasses.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePredictionPress(item)}
              style={[styles.modalDetected]}
            >
              {/* Use getImageSource here */}
              {getImageSource ? getImageSource(item) : null}
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: screenHeight * 0.022, fontFamily: 'Lora_500Medium' }}>{formatClass(item)}</Text>
                <Text style={{ textAlign: 'center', color: 'gray', fontSize: screenHeight * 0.016, fontFamily: 'Lora_500Medium_Italic' }}>{getPestDetails(item).tagalog_name}</Text>
              </View>
              <Image
                source={require('../assets/images/next-page-green.png')}
                style={{ width: screenWidth * 0.082, height: screenHeight * 0.04 }}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={onClose} style={{ width: 100, padding: 10, alignSelf: 'center', borderRadius: 5, bottom: '-1%', left: '40%' }}>
            <Text style={{ textAlign: 'center', color: '#225D41' }}>CLOSE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};



const LoadingModal = ({ visible }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Detecting Pests....</Text>
          <ActivityIndicator size="large" color="#225d41" />
        </View>
      </View>
    </Modal>
  );
};

const PermissionModal = ({ isVisible, requestPermission, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer1}>
          <Text style={styles.modalText}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="Grant Permission" color={'#225D41'}/>
          <Button onPress={onClose} title="Cancel" color={'#8B8888'}/>
        </View>
      </View>
    </Modal>
  );
};

const CameraScreen = () => {
    const [imageUri, setImageUri] = useState(null);

    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraRef, setCameraRef] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(0);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const closeModal = () => { setShow(false); };
  
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    if (!permission) {
      // Camera permissions are still loading.
      return <View />;
    }
  
    if (!permission.granted) {
      // Camera permissions are not granted yet.
      return (
        <PermissionModal
          isVisible={!permission.granted}
          requestPermission={requestPermission}
          onClose={() => setIsModalVisible(false)}
        />
      );
    }

    // Function to launch image picker
  const pickImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets) {
        const source = response.assets[0].uri;
        setImageUri(source); // Set the selected image URI
      }
    });
  };
  
    const capture = async () => {
      if (cameraRef) {
        const { base64 } = await cameraRef.takePictureAsync({ base64: true, skipProcessing: true });
        setLoading(true);
  
        await axios({
          method: "POST",
          url: "https://detect.roboflow.com/common-rice-pests-philippines/11",
          params: {
            api_key: "nckOWyg6wnD7g24gr0Bd",
          },
          data: base64,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
          .then(function (response) {
            setLoading(false);
            console.log("Detected:");
            console.log(response.data.predictions);
  
            const detected = response.data.predictions;
            if (detected.length !== 0) {
              setData(detected);
              setShow(true);
            } else {
              Alert.alert("No pest detected.");
            }
  
          })
          .catch(function (error) {
            setLoading(false);
            Alert.alert("Sorry. Please try again.");
            console.log(error.message);
          });
      }
    };
  
    const handleZoomLevelChange = (value) => {
        console.log('Zoom level changed:', value);
      setZoomLevel(value);
      if (cameraRef.current) {
        cameraRef.current.setZoom(value);
      }
    };
  
    // Function to zoom in
    const zoomIn = () => {
      if (zoomLevel < 2) { // Assuming max zoom is 1
        console.log('Zooming in: Currebt zoom level:', zoomLevel);
        handleZoomLevelChange(zoomLevel + 0.1); // Increase zoom level by 0.1
      }
    };
  
    // Function to zoom out
    const zoomOut = () => {
      if (zoomLevel > 0) { // Assuming min zoom is 0
        handleZoomLevelChange(zoomLevel - 0.1); // Decrease zoom level by 0.1
      }
    };
  
    return (
      <View style={styles.container}>
        <CameraView style={styles.camera} ref={ref => setCameraRef(ref)} facing={facing} zoom={zoomLevel}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={capture}>
              <MaterialIcons name="camera" size={75} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.imageButton]} onPress={pickImage}>
            <MaterialIcons name="photo" size={55} color="white" />
          </TouchableOpacity>
            </View>
            <View style={styles.zoomButtonContainer}>
              <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
                <AntDesign name="minus" size={30} color="white" />
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
                <AntDesign name="plus" size={30} color="white" />
              </TouchableOpacity>
              
          </View>
          
        </CameraView>

        {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.selectedImage} />
      )}
        <LoadingModal visible={loading} />
        <DetectedModal visible={show} data={data} onClose={closeModal}  />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: '2%',  // Make the button responsive by placing it 5% from the bottom
    alignItems: 'center',
  },
  button: {
    //borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'normal',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  modalContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  resultTitle: {
    fontSize: 18,
    color: '#225D41',
    marginBottom: 10,
    
    textAlign: 'center',
    fontFamily: 'Lora_700Bold',
  },
  floatingModal: {
    flexGrow: 1,
    position: 'absolute',
    top: screenHeight * 0.25, // Adjust the position as needed
    left: 20, // Adjust the position as needed
    right: 20, // Adjust the position as needed
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    elevation: 5, // Add elevation for shadow on Android
    shadowColor: '#000', // Add shadow color
    shadowOpacity: 0.3, // Add shadow opacity
    shadowRadius: 5, // Add shadow radius
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  floatingModalContentContainer: {
    paddingBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer1: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 15,
  },
  zoomButtonContainer: {
    position: 'absolute',
    bottom: '12%',  // Adjust the zoom button position relative to the camera
    left: '5%',     // Keep it 5% from the left edge for consistency
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  zoomButton: {
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 10,
  },
  divider: {
    height: 2,  // Height for vertical divider
    width: '50%',
    backgroundColor: 'white',
  },
  selectedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
    top: '10%',
    left: '10%', // Use percentages for placement
  },
  imageButton: {
    position: 'absolute',
    left: '8%', // Relative positioning for responsiveness
    top: '15%',  // Move button to be responsive at the top
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalDetected: {
    flexGrow: 1,
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%', 
    backgroundColor: 'white', 
    marginVertical: 8, 
    paddingHorizontal: 4,
    padding: 2, 
    borderRadius: 10,
    alignSelf: 'center', 
    borderColor: 'gray',
    borderWidth: 0.5,
    height: screenHeight * 0.087,
}

});

export default CameraScreen;
