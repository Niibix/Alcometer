import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Image, ScrollView, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Radiobutton from "./components/Radiobutton";
import StyleSheet from "./Styles";
import Dropdown from "./components/Dropdown";
import Dropdownhours from "./components/Dropdownhours";
import React, { useState } from "react";

let bottles = [
  { id: 1, name: "1 Bottle" },
  { id: 2, name: "2 Bottles" },
  { id: 3, name: "3 Bottles" },
  { id: 4, name: "4 Bottles" },
  { id: 5, name: "5 Bottles" },
  { id: 6, name: "6 Bottles" },
];

let hours = [
  { id: 1, name: "1 hour"},
  { id: 2, name: "2 hours"},
  { id: 3, name: "3 hours"},
  { id: 4, name: "4 hours"},
  { id: 5, name: "5 hours"},
  { id: 6, name: "6 hours"},
  { id: 7, name: "7 hours"},
  { id: 8, name: "8 hours"},
  { id: 9, name: "9 hours"},
  { id: 10, name:"10 hours"},
  { id: 11, name:"11 hours"},
  { id: 12, name:"12 hours"},
  { id: 13, name:"13 hours"},

];


export default function App() {
  const [weight, setWeight] = useState(0);
  const calculate = () => {};

  const [selectedItem, setSelectedItem] = useState(null);

  const onSelect = (item) => {
    setSelectedItem(item);
  };

  

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.header}>Alcometer</Text>

      <Text style={StyleSheet.titles}>Weight</Text>
      <TextInput
        style={StyleSheet.inputs}
        placeholder={"Weight"}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      ></TextInput>

      <Text style={StyleSheet.titles}>Bottles</Text>

      <Dropdown value={selectedItem}
       data={bottles}
        onSelect={onSelect}
        open />

      <Text style={StyleSheet.titles}>Hours</Text>
      <Dropdownhours value={selectedItem}
       data={hours}
        onSelect={onSelect}
        open />

      <Text style={StyleSheet.titles}>Gender</Text>

      <Button
        style={StyleSheet.Button}
        onPress={calculate}
        title="Calculate"
      ></Button>
    </View>
  );
}
