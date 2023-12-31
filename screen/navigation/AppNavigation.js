import React,{useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import TabHome from '../tab/TabHome'
import TabFriends from '../tab/TabFriends'
import TabMenu from '../tab/TabMenu'
import TabNoti from '../tab/TabNotifications'
import TabWatch from '../tab/TabWatch'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LoginScreen from '../LoginScreen';
import SettingDetailScreen from '../SettingDetailScreen';
import Expanding from '../../components/TabMenuComponents/Expanding';
import LangNreScreen from '../LangNreScreen';
const Stack=createNativeStackNavigator();
import {ThemeContext} from '../../ThemeContext';

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
  const context = useContext(ThemeContext);

  return(
    <Tab.Navigator 
    barStyle={{backgroundColor: '#694fad'}}
    
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
       tabBarStyle: { paddingTop: 10, height: 60,paddingBottom:10,backgroundColor:context.theme==='light'?'#fff':'#232527'}

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
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='HomePageScreen' component={PageLogedIn}/>
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>
      <Stack.Screen name='SettingDetailScreen' component={SettingDetailScreen}/>
      <Stack.Screen name='Expanding' component={Expanding}/>
      <Stack.Screen name='LanguageAndRegionScreen' component={LangNreScreen}/>
    </Stack.Navigator>
  )
    
}



export default AppNavigation