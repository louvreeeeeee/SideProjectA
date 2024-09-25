import { Pressable, StyleSheet, Text, View, StatusBar } from "react-native";
import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  //const navigation = useNavigation();
  //const { navigate } = useNavigation();
  /*setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }], // Ensure HomeScreen is focused
    });
    //navigate("Main");
  }, 4200);*/
  const { navigate } = useNavigation();
  setTimeout(() => {
    navigate("Onboarding");
  }, 4000);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LottieView
        style={{
          height:300, width:550
        }}
        source={require("../assets/animations/splash_book3.json")}
        autoPlay
        loop
        speed={1.1}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#225d41',
    alignContent: "center",
    justifyContent: "center",
    //marginTop: StatusBar.currentHeight || 0,
  },
});
