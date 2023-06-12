import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TabHome from '../tab/TabHome'
import TabFriends from '../tab/TabFriends'
import TabMenu from '../tab/TabMenu'
import TabNoti from '../tab/TabNotifications'
import TabWatch from '../tab/TabWatch'

// const homeName="Home.";
// const friendName="Friend.";
// const menu="Menu.";

const Tab=createBottomTabNavigator();
const AppNavigation =()=>{
    return(
      
        <Tab.Navigator
        // initialRouteName={friendName}  static navigationOptions = { header: null }
        screenOptions={({ route }) => ({
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
            tabBarStyle:  { height: 60 },
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
export default AppNavigation