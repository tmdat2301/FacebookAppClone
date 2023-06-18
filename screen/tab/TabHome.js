import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import AppBar from '../../components/TabHomeComponents/AppBar.js';
import ToolBar from '../../components/TabHomeComponents/ToolBar.js';
import Story from '../../components/TabHomeComponents/Story.js';
import Feed from '../../components/TabHomeComponents/Feed.js';
 
const TabHome = ({navigation}) => {
  return (
    <>
    
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <AppBar/>
          <ToolBar/>
          <Story/>
          <Feed/>
          </ScrollView>
      </SafeAreaView>

    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Containers: {
  //   flexDirection: 'row',
  //   width: '100%',
  //   height: 58,
  //   paddingRight: 11,
  //   PaddingLeft: 11,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  Row: {
    flexDirection: 'row',
  },
  Text: {
    color: '#3a86e9',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  Button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
});
export default TabHome;
