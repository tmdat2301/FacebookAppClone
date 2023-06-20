import React, {useState} from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import FnDeModal from '../FnDeModal';
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
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
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
  OkButton:{
    width:100,
  }
});
const AppBar = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.Container}>
        <Text style={styles.Text}>facebook</Text>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.Button}>
            <FIcon name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={styles.Button}>
            <MCIcon name="facebook-messenger" size={24} color="black" />
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
export default AppBar;
