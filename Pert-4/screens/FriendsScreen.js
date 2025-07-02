import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';

const friends = [
  { id: '1', name: 'Zaki', full: 'Zaki Aljibbar' },
  { id: '2', name: 'Adrian', full: 'Adrian Adhari' },
  { id: '3', name: 'Hana', full: 'Hana Yulia Rahmah' },
  { id: '4', name: 'Lukman', full: 'Lukman Nurhakim' },
  { id: '5', name: 'Cindy', full: 'Cindy Kevina' },
];

export default function FriendsScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.search} />
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text>{item.name}</Text>
            <Text style={{ color: 'gray' }}>{item.full}</Text>
            <Button title="Follow" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  search: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  friendItem: {
    marginBottom: 15,
  },
});
