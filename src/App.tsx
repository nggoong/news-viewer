import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Viewer from './pages/Viewer';
import Header from './components/Header/Header';
import Searchform from './components/search/Searchform';
import ModalPage from './components/Modal/ModalPage';
import theme from './styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Loading from './components/Loading/Loading';
import { useSelector } from 'react-redux';
import { RootState } from './redux/configStore';

const App:React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [authModal, setAuthModal] = useState("");

  const isLoading = useSelector((state:RootState) => state.loading.loading);
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      {isOpenModal && <ModalPage setIsOpenModal={setIsOpenModal} authModal={authModal}></ModalPage>}
      
      {isLoading&&<Loading/>}
      <Header setIsOpenModal={setIsOpenModal} setAuthModal={setAuthModal}/>
      <Content>
        <Searchform/>
        <Routes>
            <Route path="/" element={<Navigate to="/viewer/topheadline"/>}/>
            <Route path="/viewer/topheadline" element={<Viewer/>}/>
            <Route path="/viewer/:category" element={<Viewer/>}/>
        </Routes>
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
