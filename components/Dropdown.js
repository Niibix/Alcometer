import { View, Text, TouchableOpacity } from "react-native";
import StyleSheet from "../Styles";
import React, { useState } from "react";

export default function Dropdown({ bottles, setBottles, hours, setHours }) {

    const [booze, setBooze] = useState(false)
    const [time, setTime] = useState(false)
    const data = Array.from(Array(25).keys())

    const eventBottles = (key) => {
        setBottles(key)
        setBooze(!booze)
    }

    const eventTime = (key) => {
        setHours(key)
        setTime(!time)
    }


    return (<View>
        <Text style={StyleSheet.subTitle}>Bottles</Text>
        <TouchableOpacity onPress={() => setBooze(!booze)}>
            <Text style={StyleSheet.dropDownTitles}>{bottles} Bottles selected</Text>
            <View stlye={StyleSheet.Divider} />
        </TouchableOpacity>
        {!booze ? (
            <View></View>
        ) : (<View style={StyleSheet.dropDownContainer}>
            {data.map((data, key) => {
                return (<View key={data}>
                    <TouchableOpacity onPress={() => eventBottles(key)} >
                        <View>
                            <Text style={StyleSheet.dropDownItems}>{data} Bottles</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                )
            })}
        </View>
        )}

        <View stlye={StyleSheet.Divider} />
        <Text style={StyleSheet.subTitle}>Bottles</Text>
        <TouchableOpacity onPress={() => setTime(!time)}>
            <Text style={StyleSheet.dropDownTitles}>{hours} Hours selected</Text>
            <View stlye={StyleSheet.Divider} />
        </TouchableOpacity>
        {!time ? (
            <View></View>
        ) : (<View style={StyleSheet.dropDownContainer}>
            {data.map((data, key) => {
                return (<View key={data}>
                    <TouchableOpacity onPress={() => eventTime(key)} >
                        <View>
                            <Text style={StyleSheet.dropDownItems}>{data} hours</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                )
            })}
        </View>
        )}
    </View>)
}
