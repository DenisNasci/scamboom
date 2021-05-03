import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ListChat = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`

`;

export const Titulo = styled.Text`
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  align-self: center
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;


export const BackgroundChat = styled(LinearGradient).attrs({
  colors: ['#9d95ff', '#f76cb5', '#fd8aa1'],
})`
  flex: 1;
`;
