import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ImageBox() {
  return (
    <View style={styles.box}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
  },
});

