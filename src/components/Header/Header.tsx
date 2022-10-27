import React from 'react';
import styled from 'styled-components';
import { HeaderPropsType } from '../../model/props.model';

const Header:React.FC<HeaderPropsType> = ({ setIsOpenModal, setAuthModal }) => {

    const loginBtnClickHandler = () => {
        setIsOpenModal(true);
        setAuthModal("login");
    }

    const signUpBtnClickHandler = () => {
        setIsOpenModal(true);
        setAuthModal("signup");
    }

    return(
        <HeaderWrapper>
            <HeaderContent>
                <HeaderLogo>
                    <h1>News Viewer</h1>
                </HeaderLogo>
                <HeaderItems>
                    <div onClick={loginBtnClickHandler}>로그인</div>
                    <div onClick={signUpBtnClickHandler}>회원가입</div>
                </HeaderItems>
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
    width:100%;
    height:60px;
    position:fixed;
    top:0;
    left:0;
    background:${({theme}) => theme.colors.mainLightBlue};
    z-index:1000;
    /* background:green; */
`

const HeaderContent = styled.div`
    width:100%;
    max-width:1000px;
    height:100%;
    /* background:yellow; */
    margin:0 auto;
    display:flex;
    justify-content:space-between;
`

const HeaderLogo = styled.div`
    display:flex;
    height:100%;
    align-items:center;
    h1 {
        font-size:34px;
        color:${({theme}) => theme.colors.mainDarkBlue};
        cursor:pointer;
    }
`

const HeaderItems = styled.div`
    min-width:130px;
    height:100%;
    color:${({theme}) => theme.colors.mainDarkBlue};
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-weight:bold;
    cursor: pointer;
`