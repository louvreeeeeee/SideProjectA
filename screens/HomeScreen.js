import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {

  const api_request = async () => {
    await axios({
        method: "POST",
        url: "https://detect.roboflow.com/common-rice-pests-philippines/11",
        params: {
            api_key: "nckOWyg6wnD7g24gr0Bd",
            image: "https://modernfarmer.com/wp-content/uploads/2021/12/shutterstock_1673668639.jpg"
        },
        // data: image,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error.message);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen</Text>
      <Button onPress={api_request} title='API Request' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
