import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={{ height: 2, backgroundColor: '#225d41', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 10, fontWeight: 'bold' }}></Text>
    </View>
  );
};

export default Header;
