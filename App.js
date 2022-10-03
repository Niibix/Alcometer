import { StatusBar } from "expo-status-bar";
import { Text, View, Button, ScrollView, TextInput } from "react-native";
import Radiobutton from "./components/Radiobutton";
import StyleSheet from "./Styles";
import Dropdown from "./components/Dropdown";
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
  { id: 1, name: "1 hour" },
  { id: 2, name: "2 hours" },
  { id: 3, name: "3 hours" },
  { id: 4, name: "4 hours" },
  { id: 5, name: "5 hours" },
  { id: 6, name: "6 hours" },
  { id: 7, name: "7 hours" },
  { id: 8, name: "8 hours" },
  { id: 9, name: "9 hours" },
  { id: 10, name: "10 hours" },
  { id: 11, name: "11 hours" },
  { id: 12, name: "12 hours" },
  { id: 13, name: "13 hours" },

];


export default function App() {
  const [drink, setDrink] = useState(0);
  const [time, setTime] = useState(0);
  const [weight, setWeight] = useState(0);
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(0);


  const [selectedItem, setSelectedItem] = useState(null);
  const calculate = () => {
    const specialChars = /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(weight.length == 0 || specialChars.test(weight)) { 
      alert('Weight has not been given or it was not a number')
    } else {   
        let type = checked == 0 ? type = 0.7  : type = 0.6 
          let result = ((drink*0.33)*8*4.5 - (time*(weight / 10)))/(weight*type); 

        if(result > 0) {
          setTotal(result.toFixed(2)); 
        } else { 
          setTotal(0.00); 
        }
  }
  };



  const onSelect = (item) => {
    setSelectedItem(item);
  };



  return (
    <View style={StyleSheet.container}>
      <ScrollView>
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
          onChangeText={setDrink}
          open />
 
        <Text style={StyleSheet.titles}>Hours</Text>
        <Dropdown value={selectedItem}
          data={hours}
          onSelect={onSelect}
          onChangeText={setTime}
          open />
   
        <Text style={StyleSheet.titles}>Gender</Text>
        <Radiobutton checked={checked} setChecked={setChecked} />

        <Text style={StyleSheet.titles}>{total}</Text>

        <Button
          style={StyleSheet.Button}
          onPress={() => calculate()}
          title="Calculate"
        ></Button>
      </ScrollView>
    </View>
  );
}
