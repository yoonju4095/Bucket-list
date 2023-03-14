import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { StatusBar } from 'react-native';
import Input from './components/Input';

// SafeAreaView 아이폰 노치 디자인 문제 해결
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

// 타이틀 만들기
const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px; /* y축 x축 */
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar // 상태 바 스타일 변경
          barStyle='light-content'
          backgroundColor={theme.background}
        />
        <Title>Bucket list</Title>
        <Input placeholder=' + 항목 추가' />
      </Container>
    </ThemeProvider>
  );
}
