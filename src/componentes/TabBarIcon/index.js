import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabBarIcon = (props) => {
    let icon = '';
    let badgeCount = 0;

    switch (props.name) {
        case 'Destaques':
            icon = 'dashboard';
            break;
        case 'Favoritos':
            icon = 'favorite';
            break;
        case 'Mensagens':
            badgeCount = 2;
            icon = 'chat';
            break;
        case 'Perfil':
            icon = 'person';
            break;    
        default:
            break;
    }
    return (
        <View>
            <Icon name={icon} size={20} color="#FFF"/>
            {badgeCount > 0 && 
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{badgeCount}</Text>
            </View>
            }   
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        right: -6,
        top: -8,
        backgroundColor: '#FF4500',
        width: 15,
        height: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    badgeText: {
        color: '#FFF',
        fontSize: 10
    }
});

export default TabBarIcon;