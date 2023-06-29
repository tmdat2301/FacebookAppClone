import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuBar from '../../components/TabMenuComponents/MenuBar';
import Profile from '../../components/TabMenuComponents/Profile';
import Shortcut from '../../components/TabMenuComponents/Shortcut';
import Expanding from '../../components/TabMenuComponents/Expanding';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../ThemeContext';
export default function TabMenu({}) {
  const context = useContext(ThemeContext);
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const scrollViewRef = useRef();

  const navigation = useNavigation();

  const Logout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('LoginScreen');
  };
  return (
    <>
      <StatusBar
        backgroundColor={context.theme === 'light' ? '#fff' : '#232527'}
        barStyle="dark-content"
      />

      <SafeAreaView
        style={[
          styles.container,
          context.theme === 'light' ? {} : {backgroundColor: '#232527'},
        ]}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: false})
          }>
          <MenuBar />
          <Profile />
          <Shortcut />
          <Expanding />
          <TouchableOpacity
            style={[
              styles.LogoutButton,
              context.theme === 'light' ? {} : {backgroundColor: '#484848'},
            ]}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text
              style={[
                styles.TextButton,
                context.theme === 'light' ? {} : {color: 'white'},
              ]}>
              {t('logout')}
            </Text>
          </TouchableOpacity>
          <View style={styles.ViewEmpty}></View>
        </ScrollView>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View
                style={[
                  styles.modalView,
                  context.theme === 'light'
                    ? {}
                    : {backgroundColor: '#232527', borderColor: '#232527'},
                ]}>
                <Text
                  style={[
                    styles.modalText,
                    context.theme === 'light' ? {} : {color: 'white'},
                  ]}>
                  {t('logoutConfirm')}
                </Text>
                <View style={styles.SeparatorHorizontal}></View>
                <View style={styles.ButtonConfirmation}>
                  <TouchableOpacity
                    style={styles.ButtonConfirmContainer}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyleCancel}>{t('cancel')}</Text>
                  </TouchableOpacity>
                  <View style={styles.SeparatorVertical}></View>
                  <TouchableOpacity
                    style={styles.ButtonConfirmContainer}
                    onPress={Logout}>
                    <Text style={styles.textStyleLogout}>{t('logout')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>

      {/* </ImageBackground> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Row: {
    flexDirection: 'row',
  },
  Text: {
    color: '#3a86e9',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  LogoutButton: {
    backgroundColor: '#DCDCDC',
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 4,
    marginTop: 15,
  },
  TextButton: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'center',
  },
  ViewEmpty: {
    color: '#fff',
    height: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '70%',
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

  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  textStyleCancel: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  textStyleLogout: {
    color: 'red',
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
    color: 'black',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  ButtonConfirmation: {
    flexDirection: 'row',
  },
  SeparatorHorizontal: {
    width: '100%',
    height: 0.7,
    backgroundColor: '#D0D0D0',
  },
  SeparatorVertical: {
    width: 0.7,
    height: '100%',
    backgroundColor: '#D0D0D0',
  },
  ButtonConfirmContainer: {
    width: '50%',
  },
});
