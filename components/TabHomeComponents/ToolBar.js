import React, {useState, useContext,memo} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Avatar from './Avatar';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../ThemeContext';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 70,
  },
  Row: {
    flexDirection: 'row',
    background: '#ffffff',
    width: '100%',
    paddingLeft: 11,
    paddingRight: 11,
    alignItems: 'center',
  },
  Input: {
    height: 50,
    width: '80%',
    paddingLeft: 8,
    paddingRight: 8,
  },
  Divider: {
    marginTop: 10,
    width: '100%',
    height: 8,
    backgroundColor: '#D0D0D0',
  },
});
const ToolBar = ({prop}) => {
  const context = useContext(ThemeContext);
  const {t} = useTranslation();

  return (
    <>
      <View style={styles.Container}>
        <View style={styles.Row}>
          <Avatar
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp8Vc5sWD8TyTlMV7ai9ZM57rtg2Wv3iaBBeriKI6&s',
            }}
          />
          <TextInput
            placeholder={t('woym')}
            placeholderTextColor={context.theme === 'light' ? 'black' : 'white'}
            style={[
              styles.Input,
              context.theme === 'light' ? {color: 'black'} : {color: 'white'},
            ]}></TextInput>
          <TouchableOpacity
            onPress={() => {
              prop(true);
            }}>
            <MIcon name="photo-library" size={30} color="#4CAF50" />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.Divider,
            context.theme === 'light'
              ? {backgroundColor: '#D0D0D0'}
              : {backgroundColor: 'black'},
          ]}></View>
      </View>
    </>
  );
};
export default memo(ToolBar);
