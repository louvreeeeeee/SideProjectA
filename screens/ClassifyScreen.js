import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, Modal, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

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
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    </Modal>
  );
};

export default ClassifyScreen = () => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [loading, setLoading] = useState(false);


  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }


  const capture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      const {base64} = await cameraRef.takePictureAsync(options={base64:true,skipProcessing:true});
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
      .then(function(response) {
          setLoading(false);
          console.log("Detected:");
          console.log(response.data.predictions);

          const detected =  response.data.predictions
          if (detected.length!==0) {
            Alert.alert("Pest detected.");
          } else {
            Alert.alert("No pest detected.");
          }
          
      })
      .catch(function(error) {
        setLoading(false);
        Alert.alert("Sorry. Please try again.");
        console.log(error.message);
      });
      
    }
  }

  
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={(ref) => setCameraRef(ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={capture}>
            <Text style={styles.text}>Find Pest</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <LoadingModal visible={loading} />
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
});