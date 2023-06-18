import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const onSubmit = async () => {
    await AsyncStorage.setItem('token', username);
    if (username === 'anthony' && password === '123456') {
      console.log('Nice');
      navigation.navigate('Home');
    } else {
      console.log('xxxxxxxxxxxx');
    }
  };

  const tokenlogin = async () => {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      navigation.navigate('Home');
      console.log('aaaaaaaaaaaaa');
    } else {
      console.log('bbbbbbbbbbbbb');
    }
  };

  tokenlogin();

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#AEAEAE"
        style={styles.loginFormTextInput}
        onChangeText={value => setUsername(value)}
        placeholder="Mobile number or email"
      />
      <TextInput
        placeholderTextColor="#AEAEAE"
        style={styles.loginFormTextInput}
        secureTextEntry
        onChangeText={value => setPassword(value)}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.Button} onPress={onSubmit}>
       <Text style={styles.TextButton}>Log in</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF5FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginFormTextInput: {
    width: '90%',
    height: 60,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#AEAEAE',
    backgroundColor: '#fff',
    paddingLeft: 15,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  Button: {
    width:'90%',
    backgroundColor: '#0063E0',
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
    marginTop:5
  },
  
  TextButton: {
    color:'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'center',
  },
});
