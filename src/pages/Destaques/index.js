import React, {useState, useEffect} from 'react';
import Backgroud from '../../componentes/Background';
import Header from '../../componentes/Header';
import { Container, ListPost, Post, Imagem, Titulo, Troca, Search, SearchInput, SearchButton} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';


const dados = require("../../assets/data/Produtos.json");

const Destaques = ({navigation}) => {
  
  const [posts, setPosts] = useState([]);

  function post(){
    navigation.navigate('Post');
  }

  useEffect(() =>{
    setPosts(dados)
  },[]);

  return (
    <Backgroud>
      <Container>
        <Header titulo="Destaques"/>
        <Search>
        <SearchInput
            icon="search"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Aulas de violão..."
            returnKeyType="send" 
          />
          <SearchButton>Buscar</SearchButton>
        </Search>
        <ListPost
          data={posts}
          keyExtractor={post => String(post.id)}
          renderItem={({item}) => (
            <Post onPress={post}>
              <Imagem source={require("../../assets/xone_and_xone_controller-512.png")}/>
              
              <Titulo>{item.titulo.length > 13 ? item.titulo.substring(0, 13 - 3)
                    + '...' : item.titulo    
                }
              </Titulo>

              <Troca>Troca por:{item.troca_por.length > 9 ? item.troca_por.substring(0, 9 - 3)
                    + '...' : item.troca_por    
                }
              </Troca>

              <TouchableOpacity>
                <Icon name="favorite-outline" size={20} color="#9da0eb"/>
              </TouchableOpacity>

              <TouchableOpacity>
                <Icon name="message" size={20} color="#9da0eb"/>
              </TouchableOpacity>
              
            </Post>
          )}
        />
      </Container>
    </Backgroud>
  );
}

export default Destaques;

/**
 *      <Pesquisa>
          <Icon name="search" size={30} color="#9da0eb"/>
        </Pesquisa>
 * 
 */