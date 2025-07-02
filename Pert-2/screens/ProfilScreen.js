import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

const MyBio = {
  identity: {
    npm: 212310056,
    firstname: "MUHAMMAD",
    middlename: "ZIDAN",
    lastname: "AKBAR"
  },
  educations: [
    { id: 1, school: "SDN 1 Kota Bogor" },
    { id: 2, school: "SMPN 1 Kota Bogor" },
    { id: 3, school: "SMAN 1 Kota Bogor" }
  ],
  mobile_phone: "0812345679",
  email: "212310056@student.ibik.ac.id",
  gender: 'M',
  tall_body: 175,
  weight_body: 64.5
};

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: MyBio
    };
  }

  render() {
    const { bio } = this.state;
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text>Nama: {bio.identity.firstname} {bio.identity.middlename} {bio.identity.lastname}</Text>
        <Text>NPM: {bio.identity.npm}</Text>
        <Text>Email: {bio.email}</Text>
        <Text>No HP: {bio.mobile_phone}</Text>
        <Text>Gender: {bio.gender}</Text>
        <Text>Tinggi Badan: {bio.tall_body} cm</Text>
        <Text>Berat Badan: {bio.weight_body} kg</Text>
        <Text>Pendidikan:</Text>
        {bio.educations.map((item) => (
          <Text key={item.id}>- {item.school}</Text>
        ))}
      </ScrollView>
    );
  }
}
