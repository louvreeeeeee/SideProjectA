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
      const {base64} = await cameraRef.takePictureAsync(options={base64:true,skipProcessing:true});
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
          console.log("Detected:");
          console.log(response.data.predictions);

          const detected =  response.data.predictions
          if (detected.length!==0) {
            const pests_detected = [];

            detected.forEach((pest) => {
              if (pest.confidence>=0.50) {
                pests_detected.push(pest)
              }
            });

            if (pests_detected.length!==0) {
              console.log("I am sure:");
              console.log(pests_detected);
              Alert.alert(`${pests_detected.length} pest(s) detected!!!`);
            } else {
              Alert.alert("No pest detected.");
            }
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