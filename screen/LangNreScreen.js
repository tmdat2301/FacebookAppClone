import React, {useState, useEffect, useContext} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Modal} from 'react-native';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FIcon from 'react-native-vector-icons/Fontisto';
import {ThemeContext} from '../ThemeContext';
import {
  AppText,
  AppTextShortcut,
  TextAAA,
  TextCCC,
} from '../components/AppText/AppText';
import {IconBack} from '../components/AppButton/AppIcon';
import {ConAndRe, SectionDevider} from '../components/AppButton/AppButton';

const OPTIONS = [
  {
    id: 1,
    language: 'English',
    selected: false,
  },
  {
    id: 2,
    language: 'French',
    selected: false,
  },
  {
    id: 3,
    language: 'Chinese',
    selected: false,
  },
  {
    id: 4,
    language: 'Vietnamese',
    selected: false,
  },
];

const styles = StyleSheet.create({
  ParentContainer: {
    height: 1500,
  },
  Container: {
    flex: 1,
  },
  Text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    color: 'black',
  },
  Header: {
    flexDirection: 'row',
    height: 56,
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  Icon: {
    fontSize: 22,
    color: 'black',
    position: 'relative',
  },
  TextContainer: {
    backgroundColor: '#fff',
    height: '100%',
    paddingLeft: 12,
    paddingRight: 12,
  },
  HeadText: {
    width: '85%',
    height: '100%',
    fontSize: 18,
    color: '#000',
    fontWeight: 600,
    textAlign: 'center',
    position: 'relative',
  },
  TitleLangText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#000',
    paddingLeft: 10,
    paddingTop: 3,
  },
  SectionDevider: {
    width: '100%',
    height: 0.7,
    backgroundColor: '#CCC',
  },
  LanguageDevider: {
    height: 1,
    backgroundColor: '#CCC',
  },
  SubText: {
    color: '#646466',
    fontSize: 14,
    paddingRight: 12,
    paddingBottom: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    color: 'red',
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    borderColor: '#D0D0D0',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: -10,
      width: 0,
    },
    elevation: 100,
  },
  SeparatorHorizontal: {
    width: '100%',
    height: 0.7,
    backgroundColor: '#D0D0D0',
  },
  OkButton: {
    height: 1000,
    width: 100,
  },
  Option: {
    height: 1000,
    width: '100%',
  },
  SaveButton: {
    width: 56,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#646466',
  },
  TextLanguage: {
    fontSize: 15,
    color: '#000',
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 16,
  },
});

const ModalPicker = prop => {
  const context = useContext(ThemeContext);
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('language', value);
    } catch (e) {
      // saving error
    }
  };

  const {t, i18n} = useTranslation();

  const [langName, setLangName] = useState('');

  const onPressItem = option => {
    prop.changeModalVisibility(false);
    prop.setData(option);
  };
  const setSelectedIndex = id => {
    console.log('id receive', id);
    OPTIONS.map((item, index) => {
      if (index == id) {
        OPTIONS[index].selected = true;
        setLangName(OPTIONS[index].language);
      } else {
        OPTIONS[index].selected = false;
      }
    });
  };
  const option = OPTIONS.map((item, index) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log('index throw', index);
            setSelectedIndex(index);
          }}>
          {item.selected ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                key={index}
                style={[
                  styles.TextLanguage,
                  context.theme === 'light' ? {} : {color: '#ccc'},
                ]}>
                {item.language}
              </Text>
              <FIcon
                style={{marginTop: 15, marginRight: 16}}
                name="check"
                color="blue"
                size={10}
              />
            </View>
          ) : (
            <Text
              key={index}
              style={[
                styles.TextLanguage,
                context.theme === 'light' ? {} : {color: '#ccc'},
              ]}>
              {item.language}
            </Text>
          )}
        </TouchableOpacity>

        <View
          style={[
            styles.LanguageDevider,
            context.theme === 'light'
              ? {}
              : {backgroundColor: '#ccc', height: 0.5},
          ]}></View>
      </View>
    );
  });
  // getData("my-key");
  return (
    <ConAndRe style={styles.modalView}>
      <ConAndRe style={styles.Header}>
        <TouchableOpacity onPress={() => prop.changeModalVisibility(false)}>
          <IconBack name="angle-left" style={styles.Icon} />
        </TouchableOpacity>
        <AppText style={styles.HeadText}>{t('selectLanguage')}</AppText>
      </ConAndRe>
      <View style={styles.SectionDevider}></View>
      <AppTextShortcut style={styles.TitleLangText}>
        {t('yhtotcasitl')}
      </AppTextShortcut>
      <TouchableOpacity
        onPress={() => {
          onPressItem(langName);
          i18n.changeLanguage(langName);
          storeData(langName);
        }}
        style={[
          styles.SaveButton,
          context.theme === 'light' ? {} : {borderColor: '#ccc'},
        ]}>
        <TextCCC style={styles.SubText}>{t('save')}</TextCCC>
      </TouchableOpacity>
      <TouchableOpacity>{option}</TouchableOpacity>
    </ConAndRe>
  );
};

const LangNreScreen = ({navigation}) => {
  const context = useContext(ThemeContext);
  const {t, i18n} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState(i18n.language);
  const changeModalVisibility = bool => {
    setModalVisible(bool);
  };
  const setData = option => {
    setChooseData(option);
  };
  return (
    <View style={styles.ParentContainer}>
      <View style={styles.Container}>
        <ConAndRe style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBack style={styles.Icon} />
          </TouchableOpacity>
          <AppText style={styles.HeadText}>{t('languageAndRegion')}</AppText>
        </ConAndRe>
        <SectionDevider />
        <ConAndRe style={styles.TextContainer}>
          <TouchableOpacity onPress={() => changeModalVisibility(true)}>
            <AppTextShortcut style={styles.Text}>
              {t('lfbtaotff')}
            </AppTextShortcut>
            <TextAAA style={styles.SubText}>{chooseData}</TextAAA>
          </TouchableOpacity>
          <TouchableOpacity>
            <AppTextShortcut style={styles.Text}>
              {t('lylthpti')}
            </AppTextShortcut>
            <TextAAA style={styles.SubText}>{t('en')}</TextAAA>
          </TouchableOpacity>
          <TouchableOpacity>
            <AppTextShortcut style={styles.Text}>
              {t('lydwtbotf')}
            </AppTextShortcut>
          </TouchableOpacity>
          <TouchableOpacity>
            <AppTextShortcut style={styles.Text}>{t('lydwat')}</AppTextShortcut>
          </TouchableOpacity>
          <TouchableOpacity>
            <AppTextShortcut style={styles.Text}>
              {t('aftlypmlvoas')}
            </AppTextShortcut>
            <TextAAA style={styles.SubText}>{t('turnedOff')}</TextAAA>
          </TouchableOpacity>
        </ConAndRe>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            changeModalVisibility(false);
          }}>
          <ModalPicker
            changeModalVisibility={changeModalVisibility}
            setData={setData}
          />
        </Modal>
      </View>
    </View>
  );
};
export default LangNreScreen;
