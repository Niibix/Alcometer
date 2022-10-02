import { View, Text, TouchableOpacity } from 'react-native'
import StyleSheet from '../Styles'

export default function Radiobutton({checked, setChecked}) {

const gender = ['Male', 'Female'];
return ( 
  <View style = { StyleSheet.buttonContainer}>
            {gender.map((gender, key) => {
                return(
                  <View key={gender}>
                    {checked == key ? (
                      <View>
                        <Text style = { StyleSheet.titles }> { gender }</Text>
                      <TouchableOpacity style={StyleSheet.radioButton}>   
                        <View style = { StyleSheet.selectedButton}/>
                      </TouchableOpacity>
                    </View>
                    ) : (
                      <View>
                        <Text> { gender }</Text>
                          <TouchableOpacity style={StyleSheet.radioButton} onPress={() => { setChecked(key) }}>
                            <View style = {StyleSheet.unselectedButton}></View>                         
                          </TouchableOpacity>
                        </View>
                    )}
                </View>
                )
            })}
          </View>
)
}