import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../../ThemeContext';
import {useNavigation} from '@react-navigation/native';

const AppButton = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <TouchableOpacity
      style={[
        props?.style,
        theme === 'light'
          ? {backgroundColor: '#ddd'}
          : {backgroundColor: '#4E4F50'},
      ]}>
      {props?.children}
    </TouchableOpacity>
  );
};
const ShortCutItem = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <TouchableOpacity
      style={[
        props?.style,
        theme === 'light' ? {} : {backgroundColor: '#323436'},
      ]}>
      {props?.children}
    </TouchableOpacity>
  );
};

const SettingItem = props => {
  const navigation = useNavigation();
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SettingDetailScreen')}
      style={[
        props?.style,
        theme === 'light' ? {} : {backgroundColor: '#323436'},
      ]}>
      {props?.children}
    </TouchableOpacity>
  );
};
const HeadView = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <View
      style={[
        props?.style,
        theme === 'light' ? {} : {backgroundColor: '#323436'},
      ]}>
      {props?.children}
    </View>
  );
};

const ShortCutCard = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <View
      style={[
        props?.style,
        theme === 'light' ? {} : {backgroundColor: '#999'},
      ]}>
      {props?.children}
    </View>
  );
};

const LongButton = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <TouchableOpacity
      style={[
        props?.style,
        theme === 'light' ? {} : {backgroundColor: '#484848'},
      ]}>
      {props?.children}
    </TouchableOpacity>
  );
};

const Separator = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <View style={[props?.style, theme === 'light' ? {} : {color: '#fff'}]}>
      {props?.children}
    </View>
  );
};

const ConAndRe = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <View
      style={[
        props?.style,
        theme === 'light' ? {} : {backgroundColor: '#232527'},
      ]}>
      {props?.children}
    </View>
  );
};

const SectionDevider = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <View
      style={[
        props?.style,
        theme === 'light' ? {} : {backgroundColor: '#aaa', height: 0.5},
      ]}>
      {props?.children}
    </View>
  );
};

const DevModal =props =>{
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <View
      style={[
        props?.style,
        theme === 'light' ? {} : {backgroundColor: '#232527', borderColor: '#232527'},
      ]}>
      {props?.children}
    </View>
  );
}


export {
  AppButton,
  ShortCutItem,
  ShortCutCard,
  LongButton,
  Separator,
  SettingItem,
  ConAndRe,
  SectionDevider,
  DevModal,
  HeadView
};
