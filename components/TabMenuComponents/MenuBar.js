import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';

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
  Text: {
    marginLeft: 16,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  Row: {
    flexDirection: 'row',
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
const MenuBar = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Menu</Text>
      <View style={styles.Row}>
        <TouchableOpacity style={styles.Button}>
            <Icon name='settings-sharp' size={24} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
            <Icon name='search' size={24} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MenuBar;
