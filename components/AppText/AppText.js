import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ThemeContext} from '../../ThemeContext';

const AppText = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <Text style={[props?.style, {color: theme === 'light' ? '#000' : '#fff'}]}>
      {props?.children}
    </Text>
  );
};
const AppTextBold = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <Text
      style={[
        props?.style,
        theme === 'light' ? {} : {color: 'white', fontWeight: 'bold'},
      ]}>
      {props?.children}
    </Text>
  );
};
const AppTextShortcut = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <Text style={[props?.style, theme === 'light' ? {} : {color: '#eee'}]}>
      {props?.children}
    </Text>
  );
};
const TextAAA = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <Text style={[props?.style, theme === 'light' ? {} : {color: '#aaa'}]}>
      {props?.children}
    </Text>
  );
};

const TextCCC = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <Text style={[props?.style, theme === 'light' ? {paddingLeft:9} : {color: '#ccc',paddingLeft:9}]}>
      {props?.children}
    </Text>
  );
};

const TextDDD = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <Text style={[props?.style, theme === 'light' ? {} : {color: '#ddd'}]}>
      {props?.children}
    </Text>
  );
};

export {AppText, AppTextShortcut, AppTextBold, TextAAA,TextCCC,TextDDD};
