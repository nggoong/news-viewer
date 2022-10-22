import React from 'react';
import Viewer from './pages/Viewer';
import Header from './components/Header/Header';
import Searchform from './components/search/Searchform';
import theme from './styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Loading from './components/Loading/Loading';
import { useSelector } from 'react-redux';
import { RootState } from './redux/configStore';

const App:React.FC = () => {

  const isLoading = useSelector((state:RootState) => state.loading.loading);
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      {isLoading&&<Loading/>}
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
