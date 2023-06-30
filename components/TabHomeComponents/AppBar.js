import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../ThemeContext';
import {AppButton, DevModal} from '../AppButton/AppButton';
import {
  AppIconMessenger,
  AppIconSearch,
  AppIconSetting,
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
    width: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    borderTopWidth: 1,
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
    width: 100,
  },
});
const AppBar = ({navigation}) => {
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
              setModalVisible(true);
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
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <DevModal style={styles.modalView}>
              <Text style={styles.modalText}>{t('funcDev')}</Text>
              <View style={styles.SeparatorHorizontal}></View>
              <View>
                <TouchableOpacity
                  style={styles.OkButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.textStyle}>{t('ok')}</Text>
                </TouchableOpacity>
              </View>
            </DevModal>
          </View>
        </Modal>
      </View>
    </>
  );
};
export default AppBar;
