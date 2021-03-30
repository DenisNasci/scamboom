import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #FFF;
    font-weight: bold;
    align-self: center;
    margin-top: 25px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {padding: 30},
})``;