import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text, Button } from 'react-native';

let {width} = Dimensions.get('window');

const ListPosts = (props) => {

    const {titulo, descricao, troca_por, categoria_id, imagem} = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image}/>
            <View style={styles.card}/>
            <Text style={styles.title}>
                {titulo.length > 15 ? titulo.substring(0, 15 - 3)
                    + '...' : titulo    
                }
            </Text>
            <Text style={styles.troca}>{troca_por}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        width: width/2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: "#FFF",
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    troca: {
        fontSize: 10,
        color: '#1E90FF',
        marginTop: 10
    }
});

export default ListPosts;