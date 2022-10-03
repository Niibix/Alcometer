import { StatusBar } from "expo-status-bar";
import { Text, View, Button, ScrollView, TextInput } from "react-native";
import Radiobutton from "./components/Radiobutton";
import StyleSheet from "./Styles";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";

let bottles = [
  { label: '1 bottle', value: 1 },
  { label: '2 bottles', value: 2 },
  { label: '3 bottles', value: 3 },
  { label: '4 bottles', value: 4 },
  { label: '5 bottles', value: 5 },
  { label: '6 bottles', value: 6 },
  { label: '7 bottles', value: 7 },
  { label: '8 bottles', value: 8 },
  { label: '9 bottles', value: 9 },
  { label: '10 bottles', value: 10 },
  { label: '11 bottles', value: 11 },
  { label: '12 bottles', value: 12 },
  { label: '13 bottles', value: 13 },
  { label: '14 bottles', value: 14 },
  { label: '15 bottles', value: 15 },
  { label: '16 bottles', value: 16 },
  { label: '17 bottles', value: 17 },
  { label: '18 bottles', value: 18 },
  { label: '19 bottles', value: 19 },
  { label: '20 bottles', value: 20 }
];

let hours = [
  { label: '1 hour', value: 1 },
  { label: '2 hours', value: 2 },
  { label: '3 hours', value: 3 },
  { label: '4 hours', value: 4 },
  { label: '5 hours', value: 5 },
  { label: '6 hours', value: 6 },
  { label: '7 hours', value: 7 },
  { label: '8 hours', value: 8 },
  { label: '9 hours', value: 9 },
  { label: '10 hours', value: 10 },
  { label: '11 hours', value: 11 },
  { label: '12 hours', value: 12 },
  { label: '13 hours', value: 13 },
  { label: '14 hours', value: 14 },
  { label: '15 hours', value: 15 },
  { label: '16 hours', value: 16 },
  { label: '17 hours', value: 17 },
  { label: '18 hours', value: 18 },
  { label: '19 hours', value: 19 },
  { label: '20 hours', value: 20 }

];


export default function App() {
  const [weight, setWeight] = useState(0);
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedBottles, setSelectedBottles] = useState(null);

  const calculate = () => {
    const specialChars = /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (weight.length == 0 || specialChars.test(weight)) {
      alert('Weight has not been given or it was not a number')
    } else {
      let type = checked == 0 ? type = 0.7 : type = 0.6
      let result = ((onSelectBottles * 0.33) * 8 * 4.5 - (onSelectTime * (weight / 10))) / (weight * type);

      if (result > 0) {
        setTotal(result.toFixed(2));
      } else {
        setTotal(0.00);
      }
    }
  };

  const onSelectTime = (value) => {
    setSelectedTime(value);
  };

  const onSelectBottles = (value) => {
    setSelectedBottles(value);
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
        <Dropdown value={selectedBottles}
          data={bottles}
          onSelect={onSelectBottles}
          open />

        <Text style={StyleSheet.titles}>Hours</Text>
        <Dropdown value={selectedTime}
          data={hours}
          onSelect={onSelectTime}
          open />

        <Text style={StyleSheet.titles}>Gender</Text>
        <Radiobutton checked={checked} setChecked={setChecked} />

        <View style={StyleSheet.total}>
          <Text style={[total <= 0.5 ? StyleSheet.green : total >= 0.5 && total <= 1.2 ? StyleSheet.yellow : StyleSheet.red]}>{total}</Text>
        </View>

        <Button
          onPress={() => calculate()}
          title={'Calculate'}
        ></Button>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
