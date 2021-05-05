import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabBarIcon = (props) => {
    let icon = '';
    let badgeCount = 0;
    let tamanho = 21;
    let color = props.color;

    switch (props.name) {
        case 'Destaques':
            icon = 'dashboard';
            break;
        case 'Favoritos':
            icon = 'favorite';
            break;
        case 'Mensagens':
            badgeCount = 5;
            icon = 'speaker-notes';
            break;
        case 'Perfil':
            icon = 'person';
            break;
        case 'Publicacao':
            icon = 'flash-on';
            color = "#00FF7F"
            tamanho = 30;
            break;  
        default:
            break;
    }
    return (
        <View>
            <Icon name={icon} size={tamanho} color={color}/>
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