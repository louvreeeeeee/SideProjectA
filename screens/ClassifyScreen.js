import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import axios from 'axios';
import { FileSystem, Base64 } from 'expo';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);

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
      const {base64} = await cameraRef.takePictureAsync(options={base64:true,quality:0});
      Alert.alert("Checking for pests...");

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
          console.log("Predictions:");
          console.log(response.data.predictions);
          if (response.data.predictions.length!==0) {
            Alert.alert('Pest detected!!!');

          } else {
            Alert.alert("No pest detected.");
          }
          
      })
      .catch(function(error) {
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
            <Text style={styles.text}>Detect Pest</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
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
});