import React, {useState} from 'react';
import { FlatList } from 'react-native';
import Backgroud from '../../componentes/Background';
import ListMessage from '../../componentes/ListMessage';
import Header from '../../componentes/Header';
import { Container } from './styles';

const Mensagens = ({navigation}) => {

  const [list, setList] = useState([
    {key:'1', img:'https://www.b7web.com.br/avatar1.png', nome: 'Pedro', msg: 'E aí, beleza?! gostei da coleção de livros que postou', post: 'Aulas de JS'},
    {key:'2', img:'https://www.b7web.com.br/avatar2.png', nome: 'João', msg: 'Como vai? Sou de Manaus, mas acredito que podemos', post: 'Aulas de Violão'},
    {key:'3', img:'https://www.b7web.com.br/avatar3.png', nome: 'Maria', msg: 'Olá! Vejo que tem algo de meu interesse, tenho uns jogos aqui.', post: 'Iphone 5'},
    {key:'4', img:'https://www.b7web.com.br/avatar2.png', nome: 'Gustavo', msg: 'Gostei! Vem aqui em casa para a gente trocar isso.', post: 'Bicilceta'},
    {key:'5', img:'https://www.b7web.com.br/avatar3.png', nome: 'Gina', msg: 'É verdade! Mas o preço desse serviço ainda não', post: 'Serviço em carpintaria'}
  ]);

  return ( 
    <Backgroud>
      <Header titulo="Conversas"/>
      <Container>
        <FlatList
          data={list}
          renderItem={({item}) => (<ListMessage data={item} navegar={navigation}/>)}
        />
      </Container>
    </Backgroud>
  );
}

export default Mensagens;