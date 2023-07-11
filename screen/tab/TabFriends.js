import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useContext, createContext} from 'react';
import {ThemeContext} from '../../ThemeContext';
import {useDispatch, useSelector} from 'react-redux';
import {updateEmail, updateId} from '../redux/actions/updateAction';
import axios from 'axios';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Text: {
    fontSize: 15,
    color: 'white',
  },
  TextInput: {
    color: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    borderColor: 'white',
  },
  Button: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TabFriends = () => {
  const context = useContext(ThemeContext);
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const [response, setResponse] = useState(null);
  const info = useSelector(state => state.personalInfo);
  const dispatch = useDispatch();
  const Url = 'https://jsonplaceholder.typicode.com/users';
  const callGetUrl = async () => {
    // fetch(Url)
    //   .then(res => res.json())
    //   .then(async res => {
    //     console.log('response', res);
    //     setResponse(JSON.stringify(res));
    //   })
    //   .catch(err => console.log('Error', err));

    try {
      const res = await axios.get(Url);
      setResponse(JSON.stringify(res.data));
    } catch (error) {
      setResponse(JSON.stringify(error.message));
    }
  };
  const callGetWithId = async id => {
    try {
      const res = await axios.get(`${Url}/${id}`);
      setResponse(JSON.stringify(res.data.name));
    } catch (error) {
      setResponse(JSON.stringify(error.message));
    }
  };
  const callPostUrl = async () => {
    try {
      const res = await axios.post(`${Url}/`, {
        id: 11,
        name: 'Tran Manh Dat',
        username: 'dattm',
        email: 'dat@gmail.com',
      });
      setResponse(JSON.stringify(res.data));
    } catch (error) {}
  };
  const callPostWithQuery = () => {};
  console.log('store', info);
  return (
    <View
      style={[
        styles.Container,
        context.theme === 'light' ? {} : {backgroundColor: '#232527'},
      ]}>
      <TextInput
        color
        style={styles.TextInput}
        placeholder="Enter your email"
        autoCapitalize="none"
        onChangeText={setText}
        value={text}></TextInput>
      <TextInput
        color
        style={styles.TextInput}
        placeholder="Enter your id"
        autoCapitalize="none"
        onChangeText={setId}
        value={id}></TextInput>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => dispatch(updateEmail(text))}>
        <Text style={styles.Text}>Update Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => dispatch(updateId(id))}>
        <Text style={styles.Text}>Update ID</Text>
      </TouchableOpacity>
      <Text style={styles.Text}>Email: {info.email}</Text>
      <Text style={styles.Text}>Address: {info.address}</Text>
      <Text style={styles.Text}>Score: {info.score}</Text>
      <Text style={styles.Text}>ID: {info.id}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => callGetUrl()}
          style={{
            height: 30,
            width: 50,
            backgroundColor: 'blue',
            paddingLeft: 5,
            marginRight: 10,
          }}>
          <Text style={{color: 'white', fontSize: 15}}>Get</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => callGetWithId(10)}
          style={{
            height: 30,
            width: 80,
            backgroundColor: 'blue',
            paddingLeft: 5,
            marginRight: 10,
          }}>
          <Text style={{color: 'white', fontSize: 15}}>Get with id</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>callPostUrl()}
          style={{
            height: 30,
            width: 50,
            backgroundColor: 'blue',
            paddingLeft: 5,
            marginRight: 10,
          }}>
          <Text style={{color: 'white', fontSize: 15}}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={{callPostWithQuery}}
          style={{
            height: 30,
            width: 50,
            backgroundColor: 'blue',
            paddingLeft: 5,
            marginRight: 10,
          }}>
          <Text style={{color: 'white', fontSize: 15}}>Query</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          borderWidth: 2,
          borderColor: 'white',
          width: '90%',
          height: 350,
          marginTop: 20,
        }}>
        <Text
          style={{color: 'orange', padding: 10, fontSize: 20}}
          numberOfLines={0}>
          {response}
        </Text>
      </ScrollView>
    </View>
  );
};
export default TabFriends;
