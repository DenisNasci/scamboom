import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Msg = styled.Text`
  color: #000;
`;

export const BalaoEsquerda = styled.View`
  background-color: #FFF;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  align-self: flex-start;
  margin-right: 50px;
`;

export const BalaoDireita = styled.View`
  background-color: #00FF7F;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  align-self: flex-end;
  margin-left: 50px;
`;

export const Nome = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: bold;
`;
