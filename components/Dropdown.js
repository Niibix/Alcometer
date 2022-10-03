import { View, Text, TouchableOpacity } from "react-native";
import StyleSheet from "../Styles";
import React, { useState } from "react";

const Dropdown = ({ data = [], value = {}, onSelect = () => { } }) => {
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
                onPress={() => setShowOption(!showOption)}>
                <Text>{!!value ? value?.label : 'Choose an option'} </Text>
            </TouchableOpacity>
            {showOption && (<View>
                {data.map((val, i) => {
                    return <TouchableOpacity
                        key={String(i)}
                        onPress={() => onSelectedItem(val)}
                        style={StyleSheet.DropdownList}
                    >
                        <Text>{val.label}</Text>
                    </TouchableOpacity>;
                })}
            </View>)}
        </View>
    );
};

export default Dropdown;
