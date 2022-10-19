import React, { useEffect } from 'react';
import Viewer from './pages/Viewer';
import Header from './components/Header/Header';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import {fetchNews} from './axios/axiosFunc';

const App:React.FC = () => {
  useEffect(() => {
    fetchNews().then(res => {
      console.log(res.data.articles[0].author);
    });
  }, [])

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Content>
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
