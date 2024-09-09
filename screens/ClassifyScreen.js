import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Image, Button, ActivityIndicator, Alert} from 'react-native';
import Slider from '@react-native-community/slider';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import axios from 'axios';
import pestData from '../pests.json'; // Importing pest data from JSON file
import GuidebookSection from './GuideBookSection';
import { PestDetailsModal, ManagementDetailsModal } from './PestDetailsModal'; // Import the modal components


const getImageSource = (name) => {
  switch (name) {
    case 'brown-planthopper':
      return <Image source={require('../assets/Pests/brown.jpg')} style={{ width: "100%", height: 150 }} />;
    case 'green-leafhopper':
      return <Image source={require('../assets/Pests/green.png')} style={{ width: "100%", height: 150 }} />;
    case 'leaf-folder':
      return <Image source={require('../assets/Pests/leaffolder.jpg')} style={{ width: "100%", height: 150 }} />;
    case 'rice-bug':
      return <Image source={require('../assets/Pests/ricebug.jpg')} style={{ width: "100%", height: 150 }} />;
    case 'stem-borer':
      return <Image source={require('../assets/Pests/yellowstemborer.jpg')} style={{ width: "100%", height: 150 }} />;
    case 'whorl-maggot':
      return <Image source={require('../assets/Pests/whorl.jpg')} style={{ width: "100%", height: 150 }} />;
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
      return "Stem Borer";
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

  const openModal = (item) => {
    setSelectedPest(item);
    setShowModal(true);
  };

  const closeDetailsModal = () => {
    setShowModal(false);
    setSelectedPest(null);
  };

  const getPestDetails = (pestName) => {
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

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={styles.modalContentContainer}>
          <Text style={styles.resultTitle}>{uniqueClasses.length} Unique Pest(s) Detected!</Text>
          {uniqueClasses.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => openModal(item)} style={{ width: 300, backgroundColor: '#225D41', marginVertical: 10 }}>
              {getImageSource(item)}
              <Text style={{ color: '#FFFFFF', textAlign: 'center', marginVertical: 10 }}>{formatClass(item)}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={onClose} style={{ backgroundColor: '#225D41', width: 100, padding: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Close</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Floating modal for pest details */}
        <Modal visible={showModal} transparent={true}>
          <View style={styles.floatingModal}>
            <ScrollView contentContainerStyle={styles.floatingModalContentContainer}>
              {selectedPest && (
                <GuidebookSection {...getPestDetails(selectedPest)} />
              )}
              <Button title="Close" onPress={closeDetailsModal} />
            </ScrollView>
          </View>
        </Modal>
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

const ClassifyScreen = () => {
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

  if (!permission) {
    // Camera permissions are still loading.
    return <View><Text>Loading permissions...</Text></View>;
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
    setZoomLevel(value);
    if (cameraRef.current) {
      cameraRef.current.setZoom(value);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={ref => setCameraRef(ref)} facing={facing} zoom={zoomLevel}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={capture}>
            <MaterialIcons name="camera" size={75} color="white" />
          </TouchableOpacity>
          <Slider
            style={styles.zoomSlider}
            minimumValue={0}
            maximumValue={1}
            value={zoomLevel}
            onValueChange={handleZoomLevelChange}
            minimumTrackTintColor="#225D41"
            maximumTrackTintColor="#CCCCCC"
            thumbTintColor="#225D41"
          />
        </View>
      </CameraView>
      <LoadingModal visible={loading} />
      <DetectedModal visible={show} data={data} onClose={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '1%',
    left: '40%',
    //transform: [{ translateX: -32 }],
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    //backgroundColor: 'white',
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
    padding: 20,
    width: '100%',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#225D41',
    marginBottom: 20,
  },
  floatingModal: {
    position: 'absolute',
    top: 100, // Adjust the position as needed
    left: 20, // Adjust the position as needed
    right: 20, // Adjust the position as needed
    backgroundColor: 'white',
    borderRadius: 10,
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
});

export default ClassifyScreen;
