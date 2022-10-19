import React, { useEffect } from 'react';
import Viewer from './pages/Viewer';
import Header from './components/Header/Header';
import Searchform from './components/search/Searchform';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const App:React.FC = () => {

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Content>
        <Searchform/>
        <Viewer/>
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  padding-top:70px;
  width:100%;
  max-width:1000px;
  margin:0 auto;
`
