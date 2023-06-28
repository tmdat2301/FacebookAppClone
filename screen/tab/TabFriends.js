import {Text, View, TouchableOpacity, Button} from 'react-native';
import React, {useState, useContext, createContext} from 'react';
import {ThemeContext} from '../../ThemeContext';

const TabFriends = () => {
  const context = useContext(ThemeContext);

  return (
    <View style={{padding: 100}}>
      {/* <ComponentB /> */}
      <View
        style={
          context.theme === 'light'
            ? {backgroundColor: '#fff'}
            : {backgroundColor: '#000'}
        }>
        <Text
          style={
            context.theme === 'light'
              ? {fontSize: 20, color: 'black'}
              : {fontSize: 20, color: 'white'}
          }>
          {context.theme}
        </Text>
      </View>
      <Button onPress={context.toggleTheme} title="Toggle"></Button>
    </View>
  );
};

// console.log(TabFriends);
export default TabFriends;
