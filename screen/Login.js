import React,{useState} from 'react'
import axios from 'axios'
import {StyleSheet  } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';

const Login =({token,setToken})=>{
    const [userName,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const loginHandler=()=>{
        axios({
            url:'https://fakestoreapi.com/auth/login',
            method:'POST',
            data:{
                username:userName,
                password:password
            }
        }).then((res)=>{
            console.log(res.data.token);
            setToken(res.data.token);
            localStorage.setItem("userToken",res.data.token)
Z        }).catch((error)=>{
            console.log(error.response);
            setError(error.response)
        }

        )
    }
    return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={userName}
          placeholder="Enter email"
          onChangeText={text => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={() => {loginHandler}}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      width: '80%',
    },
    input: {
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#bbb',
      borderRadius: 5,
      paddingHorizontal: 14,
    },
    link: {
      color: 'blue',
    },
  });
  export default Login