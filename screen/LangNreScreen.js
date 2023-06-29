import React, {useState, useEffect, useContext} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Modal} from 'react-native';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FIcon from 'react-native-vector-icons/Fontisto';
import {ThemeContext} from '../ThemeContext';
// import { storeData,getData } from '../languages/i18n';

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

  // const [language, setLanguage] = useState('');
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
    // setLanguage([...OPTIONS]);
    // switch (language) {
    //   case "English":
    //     console.log("eng");
    //     setLanguage("en")
    //     break;
    //   case "Vietnamese":
    //     console.log('viet');
    //     setLanguage("vi")
    //     break;

    //   default:
    //     console.log('default');
    //     setLanguage("vi");
    // }
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
              <Text key={index} style={[styles.TextLanguage,context.theme==='light'?{}:{color:'#ccc'}]}>
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
            <Text key={index} style={[styles.TextLanguage,context.theme==='light'?{}:{color:'#ccc'}]}>
              {item.language}
            </Text>
          )}
        </TouchableOpacity>

        <View style={[styles.LanguageDevider,context.theme==='light'?{}:{backgroundColor:'#ccc',height:0.5}]}></View>
      </View>
    );
  });
  // getData("my-key");
  return (
    <View style={[styles.modalView,context.theme==='light'?{}:{backgroundColor:'#232527'}]}>
      <View
        style={[
          styles.Header,
          context.theme === 'light' ? {} : {backgroundColor: '#232527'},
        ]}>
        <TouchableOpacity onPress={() => prop.changeModalVisibility(false)}>
          <FIcon name="angle-left" style={[styles.Icon,context.theme==='light'?{}:{color:'white'}]} />
        </TouchableOpacity>
        <Text style={[styles.HeadText,context.theme==='light'?{}:{color:'white'}]}>{t('selectLanguage')}</Text>
      </View>
      <View style={styles.SectionDevider}></View>
      <Text style={[styles.TitleLangText,context.theme==='light'?{}:{color:'#eee'}]}>{t('yhtotcasitl')}</Text>
      <TouchableOpacity
        onPress={() => {
          onPressItem(langName);
          i18n.changeLanguage(langName);
          storeData(langName);
        }}
        style={[styles.SaveButton,context.theme==='light'?{}:{borderColor:'#ccc'}]}>
        <Text style={[[styles.SubText,context.theme==='light'?{}:{color:'#ccc'}], {paddingLeft: 9}]}>{t('save')}</Text>
      </TouchableOpacity>
      <TouchableOpacity>{option}</TouchableOpacity>
    </View>
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
        <View
          style={[
            styles.Header,
            context.theme === 'light' ? {} : {backgroundColor: '#232527'},
          ]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FIcon name="angle-left" style={[styles.Icon,context.theme==='light'?{}:{color:'white'}]} />
          </TouchableOpacity>
          <Text
            style={[
              styles.HeadText,
              context.theme === 'light' ? {} : {color: 'white'},
            ]}>
            {t('languageAndRegion')}
          </Text>
        </View>
        <View style={[styles.SectionDevider,context.theme==='light'?{}:{backgroundColor:'#aaa',height:0.5}]}></View>
        <View style={[styles.TextContainer,context.theme==='light'?{}:{backgroundColor:'#232527'}]}>
          <TouchableOpacity onPress={() => changeModalVisibility(true)}>
            <Text style={[styles.Text,context.theme==='light'?{}:{color:'#eee'}]}>{t('lfbtaotff')}</Text>
            <Text style={[styles.SubText,context.theme==='light'?{}:{color:'#aaa'}]}>{chooseData}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.Text,context.theme==='light'?{}:{color:'#eee'}]}>{t('lylthpti')}</Text>
            <Text style={[styles.SubText,context.theme==='light'?{}:{color:'#aaa'}]}>{t('en')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.Text,context.theme==='light'?{}:{color:'#eee'}]}>{t('lydwtbotf')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.Text,context.theme==='light'?{}:{color:'#eee'}]}>{t('lydwat')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.Text,context.theme==='light'?{}:{color:'#eee'}]}>{t('aftlypmlvoas')}</Text>
            <Text style={[styles.SubText,context.theme==='light'?{}:{color:'#aaa'}]}>{t('turnedOff')}</Text>
          </TouchableOpacity>
        </View>
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
