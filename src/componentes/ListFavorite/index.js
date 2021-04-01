import React from 'react';
import {TouchableOpacity} from 'react-native';
import { Container, Left, ImagemItem, Info, Title, Data} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListFavorite = () => {
  return (
    <Container>
        <Left>
            <ImagemItem source={require('../../assets/game-icon-folder-28.jpg')}/>
            <Info>
                <Title>Vídeo Game</Title>
                <Data>20-04-2020 às 10 horas</Data>
            </Info>
        </Left>

        <TouchableOpacity onPress={() => {}}>
            <Icon name="favorite" size={20} color="#836FFF"></Icon>
        </TouchableOpacity>
    </Container>
  );
}

export default ListFavorite;