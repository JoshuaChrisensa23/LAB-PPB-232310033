import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={styles.storyContainer}>
        <Image source={require('../assets/user.png')} style={styles.storyImage} />
        <Text>Zaki</Text>
      </View>
      <Text style={styles.header}>Yang Cewek Liat</Text>
      <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.contentImage} />
      <Text style={styles.header}>Yang Cowok Liat</Text>
      <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.contentImage} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contentImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  header: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});
