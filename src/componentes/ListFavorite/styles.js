import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-color: #ADD8E6;
  border-bottom-width: 1px;
  height: 80px;
  margin-horizontal: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`; 
export const ImagemItem = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`; 
export const Info = styled.View`
    margin-left: 15px;
`; 
export const Title = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #FFF;
`; 
export const Data = styled.Text`
    color: #98FB98;
    font-size: 13px;
    margin-top: 4px;
`;