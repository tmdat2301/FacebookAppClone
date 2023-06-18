import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';

const Avatar = ({source}) => {
  return <View style={styles.ContainerAvatar}>
    <Image style={styles.UserAvatar} source={source}/>
  </View>;
};

const Profile = () => {
  return <View style={styles.Container}>
    <View style={styles.Row}>
        <Avatar source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp8Vc5sWD8TyTlMV7ai9ZM57rtg2Wv3iaBBeriKI6&s'}}/>
        <View style={{paddingLeft:16}}>
            <Text style={styles.User}>Trần Mạnh Đạt</Text>
            <Text style={styles.SubText}>See your profile</Text>
        </View>
    </View>
    <View style={styles.Separator}></View>
  </View>;
};

const styles = StyleSheet.create({
  Container: {
    marginLeft:16,
    flex: 1,
  },
  ContainerAvatar: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  UserAvatar:{
    width: 40,
	height: 40,
	borderRadius: 20,
	borderColor: "#1777f2",
	borderWidth: 3,
  },
  User: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222121',
  },
  Row:{
    alignItems:'center',
    flexDirection:'row'
  },  
  SubText: {
    fontSize:12,
    color:'#747476'
  },
  Separator: {
    marginTop:10,
    width: '100%',
    height: 0.7,
    backgroundColor: '#D0D0D0',
  },
});
export default Profile;
