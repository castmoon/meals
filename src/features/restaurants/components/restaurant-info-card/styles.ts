import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.heading};
  font-size: 20px;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const Info = styled.View`
  margin: 8px;
`;
export const Address = styled.Text`
  font-family: ${({theme}) => theme.fonts.body};
  font-size: 16px;
  margin-top: 8px;
`;

export const StarWrapper = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
