import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ThemeContext} from '../../ThemeContext';
import {updateEmail, updateId} from '../redux/actions/updateAction';
import { useSelector} from 'react-redux';

let topData = [
  {
    id: '1',
    Name: 'Daily Oprations',
    selected: false,
  },
  {
    id: '2',
    Name: 'Financials',
    selected: false,
  },
  {
    id: '3',
    Name: 'Sharing',
    selected: false,
  },
  {
    id: '4',
    Name: 'Common Questions',
    selected: false,
  },
];

const TabWatch = () => {
  const context = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const info =useSelector(state=>state.themeReducer)

  useEffect(() => {
    setData(topData);
    console.log('effect is called');
  }, []);

  const setSelectedIndex = id => {
    topData.map((item, index) => {
      if (index == id) {
        topData[index].selected = true;
      } else {
        topData[index].selected = false;
      }
    });
    setData([...topData]);
  };

  const renderItem = ({item, index}) => {
    console.log(item);
    console.log('------------------------');
    return (
      <>
        <TouchableOpacity
          onPress={() => setSelectedIndex(index)}
          style={[
            item.selected ? styles.greenbg : styles.whitebg,
            styles.storeInformationView,
          ]}>
          <Text style={[item.selected ? styles.whitetext : styles.name]}>
            {item.Name}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View
      style={[
        styles.Container,
        info.state === false
          ? {backgroundColor: '#232527'}
          : {backgroundColor: '#F2F2F2'},
      ]}>
      <FlatList data={data} renderItem={renderItem} />

      <View style={{marginBottom: 100}}>
        <TextInput
          color
          style={{
            color: 'white',
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: '90%',
            borderColor: 'white',
          }}
          placeholder="Enter your email"
          autoCapitalize="none"
          onChangeText={setText}
          value={text}></TextInput>
        <TextInput
          color
          style={{
            color: 'white',
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: '90%',
            borderColor: 'white',
          }}
          placeholder="Enter your id"
          autoCapitalize="none"
          onChangeText={setId}
          value={id}></TextInput>
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => dispatch(updateEmail(text))}>
          <Text style={styles.Text}>Update Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => dispatch(updateId(id))}>
          <Text style={styles.Text}>Update ID</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabWatch;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
  greenbg: {
    backgroundColor: 'green',
  },
  whitebg: {
    backgroundColor: 'white',
  },
  storeInformationView: {
    borderRadius: 12,
    padding: 18,
    elevation: 15,
    marginHorizontal: 10,
    marginTop: 15,

    marginBottom: 17,
  },
  whitetext: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 15,
    color: 'white',
  },
});
