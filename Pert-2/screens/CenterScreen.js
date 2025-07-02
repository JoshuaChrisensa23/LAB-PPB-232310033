import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TextBox from '../component/TextBox'; // RFC
import ImageBox from '../component/ImageBox'; // RFC

export default class CenterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextBox />
        <ImageBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
