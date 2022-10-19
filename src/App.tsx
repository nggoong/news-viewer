import React from 'react';
import Viewer from './pages/Viewer';
import Header from './components/Header/Header';
import Searchform from './components/search/Searchform';
import theme from './styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const App:React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Content>
        <Searchform/>
        <Viewer/>
      </Content>
    </div>
    </ThemeProvider>
  );
}

export default App;

const Content = styled.div`
  padding-top:70px;
  width:100%;
  max-width:1000px;
  margin:0 auto;
`
