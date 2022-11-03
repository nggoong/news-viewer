import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Viewer from './pages/Viewer';
import Header from './components/Header/Header';
import Searchform from './components/search/Searchform';
import ModalPage from './components/Modal/ModalPage';
import theme from './styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Loading from './components/Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './redux/modules/userSlice';
import { favoritesActions, fetchFavorites } from './redux/modules/favoritesSlice';
import { RootState } from './redux/configStore';
import { auth } from './shared/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

const App:React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [authModal, setAuthModal] = useState("");

  const isLoading = useSelector((state:RootState) => state.loading.loading);
  const userInfo = useSelector((state:RootState) => state.user.email);
  const favoriteList = useSelector((state:RootState) => state.favorites.favorites);
  const dispatch = useDispatch();

  // 새로고침 시 클라이언트에 유저 정보 재저장하는 로직
  useEffect(() => {
    const userEmail = sessionStorage.getItem("user___email");
    if(userEmail) {
      /** 파이어베이스에서의 로그인 유지 시간이 다 되어 만료가 되었을 수 있기 때문에 한 번 더 검사 */
      onAuthStateChanged(auth, (user:User | null) => {
        if(user){
          dispatch(userActions.setEmail(userEmail));
          dispatch<any>(fetchFavorites());
        }
        else {
          dispatch(userActions.setDefaultEmail());
          dispatch(favoritesActions.setDefaultFavorites());
        }
      })
    }
    else {
      if(!userInfo && !favoriteList.length) return;
      else{
        dispatch(userActions.setDefaultEmail());
        dispatch(favoritesActions.setDefaultFavorites());
      } 
    }
  }, [])
  
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
