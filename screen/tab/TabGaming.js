import React from 'react';
import TodoList from '../../components/TodoList';
import Filters from '../../components/Filters';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
const TabGaming = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeadText}>TODO Screen with REDUX</Text>
      <Filters/>
      {/* <TodoList/> */}
    </View>
  );
};
export default TabGaming;
const styles = StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor: '#F2F2F2',
    width: '90%',
    height: '90%',
    alignSelf:'center'
  },
  HeadText: {
    marginTop:20,
    color: 'black',
    fontSize: 20,
    textAlign:'center' 
  },
});
