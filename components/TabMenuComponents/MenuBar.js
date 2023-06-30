import React from 'react';
import { View, StyleSheet} from 'react-native';
import {AppText} from '../AppText/AppText';
import { AppIconSearch } from '../AppButton/AppIcon';
import { AppIconSetting } from '../AppButton/AppIcon';
import {AppButton} from '../AppButton/AppButton';

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
      <AppText style={styles.Text}>Menu</AppText>
      <View style={styles.Row}>
         <AppButton style={styles.Button}>
          <AppIconSetting/>
         </AppButton>
         <AppButton style={styles.Button}>
          <AppIconSearch/>
         </AppButton>
      </View>
    </View>
  );
};
export default MenuBar;
