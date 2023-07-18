import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
import {ThemeContext} from '../../ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabNoti({navigation}) {
    useEffect(() => {
    storeMode(context.theme);
    console.log('mode', context.theme);
  });
  const storeMode = async value => {
    try {
      await AsyncStorage.setItem('mode', value);
    } catch (e) {}
  };

  const getMode = async () => {
    try {
      const mode = await AsyncStorage.getItem('mode');
      console.log('//////////////',mode);
      if (mode ==='light'){
        setIsEnabled(false)
      }else setIsEnabled(true);
    } catch (error) {}
  };


  const context = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(getMode);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View
      style={[
        styles.container,
        context.theme === 'light'
          ? {backgroundColor: '#F2F2F2'}
          : {backgroundColor: '#232527'},
      ]}>
      <Text
        style={[
          styles.text,
          context.theme === 'light' ? {color: 'black'} : {color: 'white'},
        ]}>
        Dark Mode
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={[
            styles.text,
            context.theme === 'light'
              ? {color: 'black', marginTop: 15, marginRight: 20}
              : {color: 'white', marginTop: 15, marginRight: 20},
          ]}>
          Off
        </Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          onChange={context.toggleTheme}
        />
        <Text
          style={[
            styles.text,
            context.theme === 'light'
              ? {color: 'black', marginTop: 15, marginLeft: 20}
              : {color: 'white', marginTop: 15, marginLeft: 20},
          ]}>
          On
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
  },
});
