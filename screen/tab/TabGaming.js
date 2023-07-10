// import {View, StyleSheet} from 'react-native';
// import React, {useContext} from 'react';
// import {ThemeContext} from '../../ThemeContext';
// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// const TabGaming = () => {
//   const context = useContext(ThemeContext);
//   return (
//     <View
//       style={[
//         styles.Container,
//         context.theme === 'light' ? {} : {backgroundColor: '#232527'},
//       ]}></View>
//   );
// };
// export default TabGaming;

import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
import {ThemeContext} from '../../ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {themeToDark, themeToLight} from '../redux/actions/updateAction';

export default function TabGaming({navigation}) {
  useEffect(() => {

    storeMode(info.state.toString());
    // getModeFirstRender();
    // console.log('modeState', info.state.toString());
  });
  const storeMode = async value => {
    try {
      await AsyncStorage.setItem('modeState', value);
    } catch (e) {}
  };

  const getMode = async () => {
    try {
      const modeState = await AsyncStorage.getItem('modeState');
      // console.log('||||||||||||',modeState);
      if (modeState ==='true'){
        setIsEnabled(true)
      }else setIsEnabled(false);
    } catch (error) {}
  };

  const getModeFirstRender = async () =>{
    try {
      const modeState =await AsyncStorage.getItem('modeState');
      console.log('|||||||',modeState);
    } catch (error) {
      
    }
  }

  const info = useSelector(state => state.themeReducer);
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(getMode);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const toggleTheme = () => {
    if (isEnabled) {
      dispatch(themeToDark(true));
      // console.log('+++++++++',info.state);
    } else {
      dispatch(themeToLight(false));
      // console.log('+++++++++',info.state);
    }
  };
  return (
    <View
      style={[
        styles.container,
        info.state === false
          ? {backgroundColor: '#232527'}
          : {backgroundColor: '#F2F2F2'},
      ]}>
      <Text
        style={[
          styles.text,
          info.state === true ? {color: 'black'} : {color: 'white'},
        ]}>
        Test Dark Mode using redux store
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          onChange={toggleTheme}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#232527',
  },
  text: {
    // color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
  },
});
