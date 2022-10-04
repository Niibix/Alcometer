import { StatusBar } from "expo-status-bar";
import { Text, View, Button, ScrollView, TextInput } from "react-native";
import Radiobutton from "./components/Radiobutton";
import StyleSheet from "./Styles";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";



export default function App() {
  const [weight, setWeight] = useState(0);
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(0);
  const [hours, setHours] = useState(null);
  const [bottles, setBottles] = useState(null);

  const calculate = () => {
    const specialChars = /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (weight.length == 0 || specialChars.test(weight)) {
      alert('Weight has not been given or it was not a number')
    } else {
      let type = checked == 0 ? type = 0.7 : type = 0.6
      let result = ((bottles* 0.33) * 8 * 4.5 - ( hours* (weight / 10))) / (weight * type);

      if (result > 0) {
        setTotal(result.toFixed(2));
      } else {
        setTotal(0.00);
      }
    }
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

        <View style={StyleSheet.seprator} />
        <Dropdown bottles={bottles} setBottles={setBottles} hours={hours} setHours={setHours} />
        <View style={StyleSheet.seprator} />

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
