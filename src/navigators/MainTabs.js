import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Destaques from '../pages/Destaques';
import Favoritos from '../pages/Favoritos';
import Mensagens from '../pages/Favoritos';
import Perfil from '../pages/Perfil';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        initialRouteName="Destaques" 
        activeColor="#5e1088"
        screenOptions={ ({route})=>({
            
            tabBarIcon: () => {
                let icon = '';

                switch (route.name) {
                    case 'Destaques':
                        icon = 'dashboard'
                        break;
                    case 'Favoritos':
                        icon = 'favorite'
                        break;
                    case 'Mensagens':
                        icon = 'chat'
                        break;
                    case 'Perfil':
                        icon = 'person'
                        break;    
                    default:
                        break;
                }
                return <Icon name={icon} size={20} color="#FFF"/>
            }
        }) }
        tabBarOptions={{
            //labelStyle: {
            //    fontSize: 14
            // },
            //activeTintColor: "#0000CD",
            //inactiveBackgroundColor: "#2d34c1",
            showLabel:false,
            keyboardHidesTabBar: true,
            activeBackgroundColor: "#0000CD",
            style: {
                height: 60,
                backgroundColor: "#2d34c1",
            },
        }}
    >
        <Tab.Screen name="Destaques" component={Destaques}/>
        <Tab.Screen name="Mensagens" component={Mensagens}/>
        <Tab.Screen name="Favoritos" component={Favoritos}/>
        <Tab.Screen name="Perfil" component={Perfil}/>
    </Tab.Navigator>
);