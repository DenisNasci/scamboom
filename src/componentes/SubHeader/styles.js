import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    padding: 20px;  
    height: 140px;
    background-color: #FFF;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    border-radius: 5px;
    margin-top: 4px;
`;

export const Image = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 30px;
`;

export const InfoPerfil = styled.View`
    padding: 15px;
`;
export const Nome = styled.Text`
    color: #333;
    font-weight: bold;
    font-size: 18px;
`;

export const Telefone = styled.Text`
    margin-top: 4px;
    color: #999;
    font-size: 15px;
`;
export const Email = styled.Text`
    margin-top: 4px;
    color: #999;
    font-size: 15px;
`;