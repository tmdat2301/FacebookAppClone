import * as React from 'react';
import {View, Text, TouchableOpacity, Button, Alert} from 'react-native';
import i18next from 'i18next';
import 'intl-pluralrules';

export default function TabFriends({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text style={{fontSize: 26, fontWeight: 'bold'}}>Friends screen</Text> */}
      <Button
        onPress={() => Alert.alert('HELLO')}
        title="Change language"
        style={{color: 'black', fontSize: 20}}></Button>
    </View>
  );
}

i18next.init({
  lang: 'en',
  resources: {
    en: {
      translation: {
        key: 'hello',
      },
    },
  },
});
console.log(i18next.t('gerg'));
