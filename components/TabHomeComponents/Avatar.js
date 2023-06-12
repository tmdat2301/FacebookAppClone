import React from 'react';
import {StyleSheet,View,Image} from 'react-native';
const styles = StyleSheet.create({
  Container: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  User:{
    width: 40,
	height: 40,
	borderRadius: 20,
	borderColor: "#1777f2",
	borderWidth: 3,
  },
  UserActive:{
    width: 15,
	height: 15,
	borderRadius: 8,
	background: "#4bcb1f",
	position: 'absolute',
	bottom: -2,
	right: -2,
	borderWidth: 2,
	borderColor: "#ffffff",
  }
});

const Avatar=({ source, online, story })=>{
    return(
        <View style={styles.Container}>
             <Image style={styles.User} source={source} story={story} />
             {online && <View style={styles.UserActive}></View>}
        </View>
    )
}
export default Avatar