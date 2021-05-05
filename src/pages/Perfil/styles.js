import styled from 'styled-components/native';
import Button from '../../componentes/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #FFF;
    font-weight: bold;
    align-self: center;
    margin-top: 25px;
`;

export const LogoutButtom = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
  width: 300px;
`;
