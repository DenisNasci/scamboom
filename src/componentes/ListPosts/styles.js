import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ListPost = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 2,
})`
  margin-top: 10px;
  padding: 0 20px;  
`;

export const Post = styled(RectButton)`
  background: #FFF;
  border-radius: 4px;
  height: 200px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px; 
`;

export const Imagem = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Titulo = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #9da0eb;
  text-align: center;
`;

export const Troca = styled.Text`
  margin-top: 15px;
  font-size: 13px;
  color: #333;
  text-align: center;
`;
