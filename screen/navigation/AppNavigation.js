import React, {useContext,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import TabHome from '../tab/TabHome'
import TabFriends from '../tab/TabFriends'
import TabMenu from '../tab/TabMenu'
import TabNoti from '../tab/TabNotifications'
import TabWatch from '../tab/TabWatch'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import SplashScreen from '../SplashScreen'
import { AuthContext } from '../../context/AuthContext'
import Login from '../Login';

const Stack=createNativeStackNavigator();
// const AppNavigation=()=>{
//   const {userInfo, splashLoading} = useContext(AuthContext);
//   const [token,setToken]=useState(localStorage.getItem("userToken")??null);
//   return(
//     <Stack.Navigator>

//         {token? <HomeScreen/>:<Login token={token} setToken={setToken}/>}

       
//       </Stack.Navigator>
//   )
// }

// const Tab=createBottomTabNavigator();
// const AppNavigation =()=>{
//     return(
      
//         <Tab.Navigator
//         // initialRouteName={friendName}  static navigationOptions = { header: null }
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, size }) => {
//             let iconName;
//             let rn = route.name;


//             if (rn === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';

//             } else if (rn === 'Friend') {
//               iconName = focused ? 'people' : 'people-outline';

//             } else if (rn === 'Watch') {
//               iconName =focused ? 'md-play-circle' : 'md-play-circle-outline'
//             }
//             else if (rn ==='Notification'){
//                 iconName = focused ? 'notifications' : 'notifications-outline'
//             } else if (rn === 'Menu') {
//               iconName = focused ? 'menu' : 'menu-outline';
//             }
//             return <Ionicons name={iconName} size={24} color='#2196F3' />;
//           },
//            tabBarStyle: { paddingTop: 10, height: 60,paddingBottom:10}

//         })}
//         tabBarOptions={{
//             tabBarStyle:  { height: 60 },
//           activeTintColor: '#2196F3',
//           inactiveTintColor: 'grey',
//           labelStyle: { fontSize: 12 },
         
//         }}>

//         <Tab.Screen name='Home'component={TabHome} />
//         <Tab.Screen name='Friend' component={TabFriends} />
//         <Tab.Screen name='Watch' component={TabWatch}/>
//         <Tab.Screen name='Notification' component={TabNoti} />
//         <Tab.Screen name='Menu' component={TabMenu} />
        

//       </Tab.Navigator>
//     )
// }

const Tab=createMaterialTopTabNavigator();

const PageLogedIn =()=>{
  return(
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      swipeEnabled: false,

      tabBarIcon: ({ focused, size }) => {
        let iconName;
        let rn = route.name;


        if (rn === 'Home') {
          iconName = focused ? 'home' : 'home-outline';

        } else if (rn === 'Friend') {
          iconName = focused ? 'people' : 'people-outline';

        } else if (rn === 'Watch') {
          iconName =focused ? 'md-play-circle' : 'md-play-circle-outline'
        }
        else if (rn ==='Notification'){
            iconName = focused ? 'notifications' : 'notifications-outline'
        } else if (rn === 'Menu') {
          iconName = focused ? 'menu' : 'menu-outline';
        }
        return <Ionicons name={iconName} size={24} color='#2196F3' />;
      },
       tabBarStyle: { paddingTop: 10, height: 60,paddingBottom:10}

    })}
    tabBarOptions={{
        tabBarStyle:  { height: 60, bottom:0 },
      activeTintColor: '#2196F3',
      inactiveTintColor: 'grey',
      labelStyle: { fontSize: 12 },
     
    }}>
         <Tab.Screen name='Home'component={TabHome} />
         <Tab.Screen name='Friend' component={TabFriends} />
        <Tab.Screen name='Watch' component={TabWatch}/>
       <Tab.Screen name='Notification' component={TabNoti} />
         <Tab.Screen name='Menu' component={TabMenu} />
    </Tab.Navigator>
  )
}

const AppNavigation =()=>{
  return(
    // <Tab.Navigator 
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, size }) => {
    //     let iconName;
    //     let rn = route.name;


    //     if (rn === 'Home') {
    //       iconName = focused ? 'home' : 'home-outline';

    //     } else if (rn === 'Friend') {
    //       iconName = focused ? 'people' : 'people-outline';

    //     } else if (rn === 'Watch') {
    //       iconName =focused ? 'md-play-circle' : 'md-play-circle-outline'
    //     }
    //     else if (rn ==='Notification'){
    //         iconName = focused ? 'notifications' : 'notifications-outline'
    //     } else if (rn === 'Menu') {
    //       iconName = focused ? 'menu' : 'menu-outline';
    //     }
    //     return <Ionicons name={iconName} size={24} color='#2196F3' />;
    //   },
    //    tabBarStyle: { paddingTop: 10, height: 60,paddingBottom:10}

    // })}
    // tabBarOptions={{
    //     tabBarStyle:  { height: 60 },
    //   activeTintColor: '#2196F3',
    //   inactiveTintColor: 'grey',
    //   labelStyle: { fontSize: 12 },
     
    // }}>
    //      <Tab.Screen name='Home'component={TabHome} />
    //      <Tab.Screen name='Friend' component={TabFriends} />
    //     <Tab.Screen name='Watch' component={TabWatch}/>
    //    <Tab.Screen name='Notification' component={TabNoti} />
    //      <Tab.Screen name='Menu' component={TabMenu} />
    // </Tab.Navigator>
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='HomePage' component={PageLogedIn}/>
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>
    </Stack.Navigator>
  )
    
}



export default AppNavigation