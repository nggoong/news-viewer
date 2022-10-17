import React from 'react';
import Viewer from './pages/Viewer';
import Header from './components/Header/Header';
import styled from 'styled-components';

const App:React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Content>
        <Viewer/>
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  width:100%;
  max-width:1000px;
  margin:0 auto;
  background:yellow;
`
