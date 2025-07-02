import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TextBox() {
  return (
    <View style={styles.box}>
      <Text style={styles.header}>History of Bicycle</Text>
      <Text>A bicycle is a human-powered...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 10,
    width: 200,
    marginBottom: 10,
  },
  header: {
    fontWeight: 'bold',
    color: 'red',
  },
});
