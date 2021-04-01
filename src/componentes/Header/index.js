import React from 'react';
import { Container, Text, Edit } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
  return (
      <Container>
        <Text>{props.titulo}</Text>
      </Container>
  );
}

export default Header;

/**
<Edit onPress={()  => {}}>
<Icon name="create" size={25} color="#836FFF"/>
</Edit>
 */