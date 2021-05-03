import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-color: #ADD8E6;
  margin-horizontal: 20px;
  border-bottom-width: 1px;
  height: 80px;

  flex-direction: row;
  align-items: center;
`;

export const Imagem = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Info = styled.View`
  flex:1;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const Post = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #FFF
`;
export const Nome = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #FFF
`;

export const Msg = styled.Text`
  color: #98FB98
`;