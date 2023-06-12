import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, TouchableOpacity,TextInput} from 'react-native';
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    paddingRight: 11,
    PaddingLeft: 11,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Row: {
    flexDirection: 'row',
  },
  Text: {
    color: '#3a86e9',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    marginLeft:12
  },
  Button: {
    width: 36,
    height: 36,
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
});
const AppBar = () => {
  return (
    <View style={styles.Container}>
    
      <Text style={styles.Text}>facebook</Text>
      <View style={styles.Row}>
        <TouchableOpacity style={styles.Button}>
          <FIcon name="search" size={29} color="black"  />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <MCIcon name="facebook-messenger" size={22} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AppBar;
