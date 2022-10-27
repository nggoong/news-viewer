import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { HeaderPropsType } from '../../model/props.model';

const Header:React.FC<HeaderPropsType> = ({ setIsOpenModal, setAuthModal }) => {

    const navigate = useNavigate();
    
    const btnClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        setIsOpenModal(true);
        if((e.target as HTMLElement).classList.contains("login-btn")) setAuthModal("login");
        else setAuthModal("signup");

    }

    const LogoClicHandler = () => {
        navigate("/viewer/topheadline");
    }

    return(
        <HeaderWrapper>
            <HeaderContent>
                <HeaderLogo>
                    <h1 onClick={LogoClicHandler}>News Viewer</h1>
                </HeaderLogo>
                <HeaderItems>
                    <div className="login-btn" onClick={btnClickHandler}>로그인</div>
                    <div className="signup-btn" onClick={btnClickHandler}>회원가입</div>
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