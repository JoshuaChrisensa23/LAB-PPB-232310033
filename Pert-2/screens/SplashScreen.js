import React from 'react';
import { View, Text, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={require('../assets/logo.png')} style={{ width: 100, height: 100 }} />
      <Text style={{ color: 'white', marginTop: 20 }}>Loading...</Text>
    </View>
  );
}
