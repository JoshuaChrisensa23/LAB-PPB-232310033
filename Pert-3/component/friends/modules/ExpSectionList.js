import React from "react";
import { Text, SectionList } from "react-native";
import UserItem from "../../const-data/UserItem";

const ExpSectionList = ({ Users }) => {
  const [state, setState] = React.useState(Users || []);

  const action = (users) => {
    const updatedUsers = state.map((u) =>
      u.id === users.id
        ? { ...u, status: u.status === "Suggested" ? "Followers" : "Suggested" }
        : u
    );
    setState(updatedUsers);
  }
  const data = [{
          title: "Suggested",
          data: state.filter((user) => user.status === "Suggested"),
      },{
          title: "Followers",
          data: state.filter((user) => user.status === "Followers"),
      },
  ]

  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <UserItem item={item} usrAct={action} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ color: "black", fontSize: 18, padding: 10 }}>
          {title}
        </Text>
      )}
    />
  );
};

export default ExpSectionList;