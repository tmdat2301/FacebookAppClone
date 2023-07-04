import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../../ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Fontisto';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppIconSetting = props => {
  const navigation = useNavigation();
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SettingDetailScreen')}>
      <Icon
        name="settings-sharp"
        size={24}
        style={[props?.style, {color: theme === 'light' ? '#000' : '#fff'}]}>
        {props?.children}
      </Icon>
    </TouchableOpacity>
  );
};
const AppIconSearch = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <Icon
      name="search"
      size={24}
      style={[props?.style, {color: theme === 'light' ? '#000' : '#fff'}]}>
      {props?.children}
    </Icon>
  );
};
const AppIconMessenger = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <MCIcon
      name="facebook-messenger"
      size={24}
      style={[props?.style, {color: theme === 'light' ? '#000' : '#fff'}]}>
      {props?.children}
    </MCIcon>
  );
};

const IconExpandDown = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <FAIcon
      name="chevron-down"
      size={14}
      style={[props?.style, {color: theme === 'light' ? '#000' : '#fff'}]}>
      {props?.children}
    </FAIcon>
  );
};

const IconBack = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <FIcon
      name="angle-left"
      size={14}
      style={[props?.style, {color: theme === 'light' ? '#000' : '#fff'}]}>
      {props?.children}
    </FIcon>
  );
};
const IconSearch = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <FIcon
      name="search"
      size={14}
      style={[props?.style, {color: theme === 'light' ? '#000' : '#fff'}]}>
      {props?.children}
    </FIcon>
  );
};

const IconExpandUp = props => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <FAIcon
      name="chevron-up"
      size={14}
      style={[props?.style, {color: theme === 'light' ? '#000' : '#fff'}]}>
      {props?.children}
    </FAIcon>
  );
};

const AppShortcutIcon = props => {
  return <View style={props?.style}>{props?.children}</View>;
};

export {
  AppIconSearch,
  AppIconSetting,
  AppShortcutIcon,
  IconExpandDown,
  IconExpandUp,
  IconBack,
  AppIconMessenger,
  IconSearch
};
