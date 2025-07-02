import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import SearchBar from "./widgets/SearchBar";
import { User } from "../const-data/User";
import ExpSectionList from "./modules/ExpSectionList";

class MyFriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <SearchBar />
        </View>
        <View style={styles.body}>
          <ExpSectionList Users = {User} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5C0BF",
  },
  header: {
    flex: 1,
    backgroundColor: "pink",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  body: {
    flex: 10,
    backgroundColor: "salmon",
  },
});

export default MyFriends;
