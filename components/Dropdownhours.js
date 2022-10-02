import { View, Text, TouchableOpacity } from "react-native";
import StyleSheet from "../Styles";
import React, { useState } from "react";

const Dropdownhours = ({ data = [], value = {}, onSelect = () => { } }) => {
    console.log("selected value", !!value)
    const [showOption, setShowOption] = useState(false);

    const onSelectedItem = (val) => {
        setShowOption(false)
       onSelect(val)
    }

    return (
        <View>
            <TouchableOpacity style={StyleSheet.Dropdown}
             activeOpacity={0.8}
             onPress={()=>setShowOption(!showOption)}>
                <Text>{!!value ? value?.name : 'Choose an option'} </Text>
            </TouchableOpacity>
            {showOption && (<View>
            {data.map((val, h) => {
                return <TouchableOpacity 
                key={String(h)}
                onPress={()=>onSelectedItem(val)}
                style={StyleSheet.DropdownList}
                >
                    <Text>{val.name}</Text>
                    </TouchableOpacity>;
            })}
            </View>)}
        </View>
    );
};

export default Dropdownhours;