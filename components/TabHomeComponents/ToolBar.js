import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Avatar from './Avatar';
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
  centeredView: {
    // backgroundColor:'red',
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
const ToolBar = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
            placeholder="what's on your mind?"
            style={styles.Input}></TextInput>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <MIcon name="photo-library" size={30} color="#4CAF50" />
          </TouchableOpacity>
        </View>
        <View style={styles.Divider}></View>
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
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Function is developing</Text>
              <View style={styles.SeparatorHorizontal}></View>
              <View>
                <TouchableOpacity
                  style={styles.OkButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.textStyle}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
export default ToolBar;
