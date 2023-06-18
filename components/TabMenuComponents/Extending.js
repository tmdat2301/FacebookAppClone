import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';
import OIcon from 'react-native-vector-icons/Octicons';

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
    fontSize: 20,
    marginLeft: 20,
  },
  Icon: {
    flex:1,
    justifyContent: 'center',
    alignItems:'flex-end',
    marginRight:20
  },
  Separator: {
    width: '100%',
    height: 0.7,
    backgroundColor: '#D0D0D0',
  },
});
const Extending = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity>
        <View style={styles.BlockElement}>
          <OIcon name="question" size={28} color="#536976" />
          <Text style={styles.Text}>Help & support</Text>
          <View style={styles.Icon}>
            <FAIcon name="chevron-down" size={14} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.Separator}></View>
      <TouchableOpacity>
        <View style={styles.BlockElement}>
          <FIcon name="settings" color="#536976" size={28} />
          <Text style={styles.Text}>Settings & privacy</Text>
          <View style={styles.Icon}>
            <FAIcon name="chevron-down" size={14} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Extending;
