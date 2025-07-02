import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyFriends from './component/friends/MyFriends';


export default function App() {
  return (
    <View style={styles.container}>
      <MyFriends />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
