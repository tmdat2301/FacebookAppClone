import React from 'react'
import { View,TouchableOpacity,Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Logout({ navigation }){
    const Logout = async() => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Login')
    }
return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={Logout}>
            <Text
        style={{ fontSize: 26, fontWeight: 'bold' }}>
            Log out
        </Text>
        </TouchableOpacity>
    
</View>
)
}
