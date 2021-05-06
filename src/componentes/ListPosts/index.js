import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { Container, ListPost, Post, Imagem, Titulo, Troca } from './styles';

const dados = require("../../assets/data/Produtos.json");

const ListPosts = (props) => {

  const [posts, setPosts] = useState([]);

  function post() {
    props.navegar.navigate('Post');
  }

  useEffect(() => {
    setPosts(dados)
  }, []);

  return (
    <Container>
      <ListPost
        data={posts}
        keyExtractor={post => String(post.id)}
        renderItem={({ item }) => (
          <Post onPress={post}>
            <Imagem source={require("../../assets/xone_and_xone_controller-512.png")} />

            <Titulo>{item.titulo.length > 13 ? item.titulo.substring(0, 13 - 3)
              + '...' : item.titulo
            }
            </Titulo>

            <Troca>Troca por:{item.troca_por.length > 9 ? item.troca_por.substring(0, 9 - 3)
              + '...' : item.troca_por
            }
            </Troca>

            <TouchableOpacity>
              <Icon name="favorite-outline" size={20} color="#9da0eb" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="message" size={20} color="#9da0eb" />
            </TouchableOpacity>

          </Post>
        )}
      />
    </Container>
  );
}

export default ListPosts;