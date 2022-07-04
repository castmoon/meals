import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.bg.secondary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
