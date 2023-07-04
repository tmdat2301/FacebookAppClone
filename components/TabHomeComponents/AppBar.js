import React, {useState, useContext,memo} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../ThemeContext';
import {AppButton} from '../AppButton/AppButton';
import {
  AppIconMessenger,
  AppIconSearch,
} from '../AppButton/AppIcon';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
    marginLeft: 12,
  },
  Button: {
    width: 36,
    height: 36,
    borderRadius: 21,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
});
const AppBar = ({prop}) => {
  const context = useContext(ThemeContext);
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.Container}>
        <Text style={styles.Text}>facebook</Text>
        <View style={styles.Row}>
          <AppButton style={styles.Button}>
            <AppIconSearch />
          </AppButton>
          <TouchableOpacity
            onPress={() => {
              prop(true);
            }}
            style={[
              styles.Button,
              context.theme === 'light'
                ? {backgroundColor: '#ddd'}
                : {backgroundColor: '#4E4F50'},
            ]}>
            <AppIconMessenger />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default memo(AppBar);
