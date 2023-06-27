import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import i18next from 'i18next';
import 'intl-pluralrules';
import {useTranslation, initReactI18next} from 'react-i18next';

export default function TabFriends({navigation}) {
  const {t, i18n} = useTranslation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, fontWeight: 'bold'}}>{t('hi')}</Text>

      <Button
        onPress={() => {
          i18n.changeLanguage('vi');
        }}
        title="Change language to VN"
        style={{color: 'black', fontSize: 20}}></Button>
      <Button
        onPress={() => {
          i18n.changeLanguage('en');
        }}
        title="Change language to English"
        style={{color: 'black', fontSize: 20, top: 20}}></Button>
      <Button
        onPress={() => {
          i18n.changeLanguage('fr');
        }}
        title="Change language to French"
        style={{color: 'black', fontSize: 20, top: 20}}></Button>
    </View>
  );
}
 