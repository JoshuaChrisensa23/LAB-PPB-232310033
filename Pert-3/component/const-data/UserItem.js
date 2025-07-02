import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const UserItem = ({ item, usrAct}) => {
  const [state, setState] = React.useState( item.status );
  const gen = item.gender === "M" ? "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" : "https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG.png";

  const isSuggested = state === "Suggested";
  const butt = isSuggested ? "Follow" : "Followed";
  const follows = isSuggested ? "Anjay Ngefollow" : "Parah Kau Unfollow";

  const handleBut = () => {
    alert(follows);
    setState(state === "Suggested" ? "Followers" : "Suggested");
    usrAct(item);
  }

  return (
    <View style={styles.search_container}>
      <View style={styles.search_account}>
        <Image
          source={{
            uri: gen
          }}
          style={styles.story_ava}
        />
        <View>
          <Text
            style={{ ...styles.story_name, fontWeight: "bold", color: "black" }}
          >
            {item.name}
          </Text>
          <Text style={{ ...styles.story_name, color: "black" }}>
            {item.fullname}
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.6} style={styles.btn_follow} onPress={handleBut}>
          <Text style={styles.story_name}>{butt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  search_account: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  story_ava: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#f0f8ff",
    marginRight: 15,
  },
  story_name: {
    fontSize: 16,
    textAlign: "left",
  },
  btn_follow: {
    backgroundColor: "purple",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default UserItem;
