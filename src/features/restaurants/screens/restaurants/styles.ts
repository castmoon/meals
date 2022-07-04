import {SafeAreaView, StatusBar} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.space[3]};
  background-color: ${({theme}) => theme.colors.bg.secondary};
`;

export const Spacer = styled.View`
  margin-top: 16px;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
`;
