import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, Button, Switch} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import {ThemeContext} from '../../ThemeContext';

export default function TabNoti({navigation}) {
  const context = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
