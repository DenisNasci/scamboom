import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Destaques from '../pages/Destaques';
import Favoritos from '../pages/Favoritos';
import Mensagens from '../pages/Mensagens';
import Perfil from '../pages/Perfil';
import Publicacao from '../pages/Publicacao';
import TabBarIcon from '../componentes/TabBarIcon';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        initialRouteName="Destaques" 
        activeColor="#5e1088"
        screenOptions={ ({route})=>({
            tabBarIcon: () => <TabBarIcon name={route.name}/>
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
        <Tab.Screen name="Publicacao" component={Publicacao}/>
        <Tab.Screen name="Favoritos" component={Favoritos}/>
        <Tab.Screen name="Perfil" component={Perfil}/>
    </Tab.Navigator>
);