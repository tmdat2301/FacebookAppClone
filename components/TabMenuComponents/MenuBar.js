import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../ThemeContext';

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
  const context = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <Text style={[styles.Text,context.theme==='light'?{}:{color:'white'}]}>Menu</Text>
      <View style={styles.Row}>
        <TouchableOpacity
          style={[
            styles.Button,
            context.theme === 'light' ? {backgroundColor:'#ddd'} : {backgroundColor: '#4E4F50'},
          ]}
          onPress={() => navigation.navigate('SettingDetailScreen')}>
          <Icon name="settings-sharp" size={24} color={context.theme==='light'?'black':'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.Button,
            context.theme === 'light' ? {backgroundColor:'#ddd'} : {backgroundColor: '#4E4F50'},
          ]}>
          <Icon name="search" size={24} color={context.theme==='light'?'black':'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MenuBar;
