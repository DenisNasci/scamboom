import React from 'react';
import { Container, Text} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
  return (
      <Container>
        <Text>{(props.titulo).toUpperCase()}</Text>
      </Container>
  );
}

export default Header;