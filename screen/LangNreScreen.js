import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Modal,
  Flatlist,
} from 'react-native';
import FIcon from 'react-native-vector-icons/Fontisto';

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
    language: 'Spanish',
    selected: false,
  },
  {
    id: 4,
    language: 'Chinese',
    selected: false,
  },
  {
    id: 5,
    language: 'Korean',
    selected: false,
  },
  {
    id: 6,
    language: 'Dutch',
    selected: false,
  },
  {
    id: 7,
    language: 'German',
    selected: false,
  },
  {
    id: 8,
    language: 'Japanese',
    selected: false,
  },
  {
    id: 9,
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
    // position:'relative',
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
  const [language, setLanguage] = useState([]);
  const [langName,setLangName]=useState('');
  const onPressItem = option => {
    prop.changeModalVisibility(false);
    prop.setData(option);
  };
  const setSelectedIndex = id => {
    OPTIONS.map((item, index) => {
      if (index == id) {
        OPTIONS[index].selected = true;
        // onPressItem(OPTIONS[index].language)
        setLangName(OPTIONS[index].language)
      } else {
        OPTIONS[index].selected = false;
      }
    });
    setLanguage([...OPTIONS]);
  };
  const option = OPTIONS.map((item, index) => {
    return (
      <View>
        <TouchableOpacity onPress={() => setSelectedIndex(index)}>
          {item.selected ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                key={index}
                style={styles.TextLanguage}>
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
            <Text key={index} style={styles.TextLanguage}>
              {item.language}
            </Text>
          )}
        </TouchableOpacity>

        <View style={styles.LanguageDevider}></View>
      </View>
    );
  });
  return (
    <View style={styles.modalView}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => prop.changeModalVisibility(false)}>
          <FIcon name="angle-left" style={styles.Icon} />
        </TouchableOpacity>
        <Text style={styles.HeadText}>Select language</Text>
      </View>
      <View style={styles.SectionDevider}></View>
      <Text style={styles.TitleLangText}>
        You'll have the option to change app system into this language.
      </Text>
      <TouchableOpacity onPress={()=>onPressItem(langName)} style={styles.SaveButton}>
        <Text style={[styles.SubText, {paddingLeft: 9}]}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity>{option}</TouchableOpacity>
    </View>
  );
};

const LangNreScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState('...');
  const changeModalVisibility = bool => {
    setModalVisible(bool);
  };
  const setData = option => {
    setChooseData(option);
  };
  return (
    <View style={styles.ParentContainer}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FIcon name="angle-left" style={styles.Icon} />
          </TouchableOpacity>
          <Text style={styles.HeadText}>Language and region</Text>
        </View>
        <View style={styles.SectionDevider}></View>
        <View style={styles.TextContainer}>
          <TouchableOpacity onPress={() => changeModalVisibility(true)}>
            <Text style={styles.Text}>
              Language for buttons, titles and other text from Facebook
            </Text>
            <Text style={styles.SubText}>{chooseData}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>
              Language you'd like to have posts translated into
            </Text>
            <Text style={styles.SubText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>
              Languages you don't want to be offered translations for
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>
              languages you don't want automatically translated
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>
              A feature that lets you post multiple language versions of a
              status
            </Text>
            <Text style={styles.SubText}>Turned off</Text>
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
