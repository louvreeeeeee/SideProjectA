import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, Modal, ActivityIndicator, Image, ScrollView } from 'react-native';
import axios from 'axios';
import pestData from '../pests.json'; // Importing pest data from JSON file


const getImageSource = (name) => {
  switch (name) {
    case 'brown-planthopper':
      return <Image source={require('../assets/Pests/brown.jpg')} style={{width:"100%",height:150}} />;
    case 'green-leafhopper':
      return <Image source={require('../assets/Pests/green.png')} style={{width:"100%",height:150}} />;
    case 'leaf-folder':
      return <Image source={require('../assets/Pests/leaffolder.jpg')} style={{width:"100%",height:150}} />;
    case 'rice-bug':
      return <Image source={require('../assets/Pests/ricebug.jpg')} style={{width:"100%",height:150}} />;
    case 'stem-borer':
      return <Image source={require('../assets/Pests/yellowstemborer.jpg')} style={{width:"100%",height:150}} />;
    case 'whorl-maggot':
      return <Image source={require('../assets/Pests/whorl.jpg')} style={{width:"100%",height:150}} />;
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
  }
}

const DetectedModal = ({ visible, data, onClose }) => {
  const uniqueClasses = Array.from(new Set(data.map(item => item.class)));

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContentContainer}>
            <Text style={styles.resultTitle}>{uniqueClasses.length} Unique Pest(s) Detected!</Text>
            {uniqueClasses.map((item,ind)=>(
              <TouchableOpacity key={ind} style={{width:350,backgroundColor:'#225D41',marginVertical:10}}>
                {getImageSource(item)}
                <Text style={{color:'#FFFFFF', textAlign:'center', marginVertical:10}}>{formatClass(item)}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={onClose} style={{backgroundColor:'#225D41',width:100,padding:10}}>
              <Text style={{textAlign:'center',color:'white'}}>
                Close
              </Text>
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
  const [show, setShow] = useState(false);
  const closeModal = () => {setShow(false);}

  const [data, setData] = useState([]);


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

          const detected = response.data.predictions
          if (detected.length!==0) {
            setData(detected);
            setShow(true);
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
            <Text style={styles.text}>Click to detect pest</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <LoadingModal visible={loading} />
      <DetectedModal visible={show} data={data} onClose={closeModal}/>
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
    backgroundColor:'#225D41',
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
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },


  resultTitle: {
    fontSize:24,
    fontWeight:'bold',
    color:'#225D41'
  },
  modalContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width:'100%'
  },
});
