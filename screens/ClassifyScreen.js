import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { PinchGestureHandler } from 'react-native-gesture-handler';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [zoom, setZoom] = useState(0);
  const [facing, setFacing] = useState('back'); // State to handle camera direction

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handlePinch = (event) => {
    let scale = event.nativeEvent.scale;
    if (scale > 1) {
      setZoom(Math.min(zoom + 0.01, 1)); // Zoom in (max 1.0)
    } else {
      setZoom(Math.max(zoom - 0.01, 0)); // Zoom out (min 0.0)
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      console.log(photo.uri);
    }
  };

  const switchCamera = () => {
    setFacing((prevFacing) => (prevFacing === 'back' ? 'front' : 'back'));
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <PinchGestureHandler onGestureEvent={handlePinch}>
        <Camera
          style={styles.camera}
          type={facing}
          zoom={zoom}
          ref={(ref) => setCameraRef(ref)}
        >
          <View style={styles.captureButtonContainer}>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
              <Text style={styles.captureText}> SNAP </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.captureButton} onPress={switchCamera}>
              <Text style={styles.captureText}> SWITCH CAMERA </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </PinchGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  captureButtonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  captureButton: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  captureText: {
    fontSize: 14,
  },
});

export default CameraScreen;