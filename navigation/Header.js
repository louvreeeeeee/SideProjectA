import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={{ height: 60, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your App Header</Text>
    </View>
  );
};

export default Header;
