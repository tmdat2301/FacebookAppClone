import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Fontisto';
import AIcon from 'react-native-vector-icons/AntDesign';
import Collapsible from 'react-native-collapsible';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SettingDetailScreen from '../../screen/SettingDetailScreen';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
  },
  BlockElement: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  Text: {
    color: 'black',
    fontSize: 18,
    marginLeft: 20,
  },
  TextHighlight: {
    color: 'black',
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 500,
  },
  Icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  Separator: {
    width: '100%',
    height: 0.7,
    backgroundColor: '#D0D0D0',
  },
  CollapsedText: {
    fontSize: 16,
    color: 'black',
  },
  collapsedButton: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  SubIcon: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 15,
    color: '#B1C9CF',
    fontSize: 22,
  },
});
import { useNavigation } from '@react-navigation/native';

const Expanding=({})=> {
  const navigation = useNavigation();

  const Onpress=()=>{
    navigation.navigate('SettingDetailScreen')
  }

  const [collapsed, setCollapsed] = useState(true);
  const handleExpand = () => {
    setCollapsed(!collapsed);
  };
  return (
    <View style={styles.Container}>
      <TouchableOpacity>
        <View style={styles.BlockElement}>
          <AIcon name="questioncircle" size={26} color="#B1C9CF" />
          <Text style={styles.Text}>Help & support</Text>
          <View style={styles.Icon}>
            <FAIcon name="chevron-down" size={14} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.Separator}></View>
      <TouchableOpacity onPress={handleExpand}>
        <View style={styles.BlockElement}>
          <FIcon name="player-settings" color="#B1C9CF" size={26} />
          {collapsed ? (
            <Text style={styles.Text}>Settings & privacy</Text>
          ) : (
            <Text style={styles.TextHighlight}>Settings & privacy</Text>
          )}

          <View style={styles.Icon}>
            {collapsed ? (
              <FAIcon name="chevron-down" size={14} color="black" />
            ) : (
              <FAIcon name="chevron-up" size={14} color="black" />
            )}
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View>
          <TouchableOpacity
            style={styles.collapsedButton}
            onPress={Onpress}>
            <FAIcon style={styles.SubIcon} name="user-circle" />
            <Text style={styles.CollapsedText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.collapsedButton}>
            <MIcon style={styles.SubIcon} name="perm-device-info" />
            <Text style={styles.CollapsedText}>Device requests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.collapsedButton}>
            <MIcon name="photo-camera-back" style={styles.SubIcon} />
            <Text style={styles.CollapsedText}>Recent ad activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.collapsedButton}>
            <AIcon name="wifi" style={styles.SubIcon} />
            <Text style={styles.CollapsedText}>Find Wi-Fi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.collapsedButton}>
            <MIcon name="payment" style={styles.SubIcon} />
            <Text style={styles.CollapsedText}>Orders and payments</Text>
          </TouchableOpacity>
        </View>
      </Collapsible>
    </View>
  );
}
export default Expanding;
