import React from 'react'
import { StyleSheet,View,TextInput,Text,TouchableOpacity } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import Avatar from './Avatar'
const styles=StyleSheet.create({
    Container:{
        width: '100%',
	height: 70,
    },
    Row:{
        flexDirection: 'row',
	background: '#ffffff',
	width: '100%',
	paddingLeft: 11,
    paddingRight:11,
	alignItems: 'center',
    },
    Input:{
        height: 50,
	width: '80%',
	paddingLeft:8,
	paddingRight:8,
    },
    Divider:{
        marginTop:10,
        width: '100%',
	height: 8,
	backgroundColor: '#D0D0D0',
    },


})
const ToolBar =()=>{
    return(
        <>
        <View style={styles.Container}>
            <View style={styles.Row}>
                <Avatar source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp8Vc5sWD8TyTlMV7ai9ZM57rtg2Wv3iaBBeriKI6&s'}}/>
                <TextInput placeholder="what's on your mind?" style={styles.Input}></TextInput>
                <TouchableOpacity>
                    <MIcon name="photo-library" size={30} color="#4CAF50"/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.Divider}></View>
        </View>
         
        </>
    )
}
export default ToolBar