import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ModalPagePropsType } from '../../model/props.model';

const AuthModal:React.FC<ModalPagePropsType> = ({ authModal }) => {
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    const AuthModalClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    useEffect(() => {
        firstInputRef.current!.focus();
    }, [])

    return(
        <AuthModalWrapper onClick={AuthModalClickHandler}>
            <AuthModalHeader>
                {authModal === "login"?<h1>로그인</h1>:<h1>회원가입</h1>}
            </AuthModalHeader>
            <AuthModalForm>
                <AuthModalInput ref={firstInputRef} placeholder="이메일을 입력하세요"/>
                <AuthModalInput placeholder="비밀번호를 입력하세요"/>
                {authModal === "login"?null : <AuthModalInput placeholder="비밀번호 확인"/>}
            </AuthModalForm>
            <AuthActionsWrapper>
                <button>{authModal === "login"?"로그인하기":"회원가입하기"}</button>
            </AuthActionsWrapper>
        </AuthModalWrapper>
    )
}

export default AuthModal;

const AuthModalWrapper = styled.div`
    background:white;
    padding:20px;
    border-radius:20px;
`

const AuthModalHeader = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    margin-bottom:20px;

    
`

const AuthModalForm = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:20px;
`
const AuthModalInput = styled.input`
    /* width:40%; */
    width:400px;
    height:25px;
`

const AuthActionsWrapper = styled.div`
    margin-top:20px;
    width:100%;
    display:flex;
    justify-content:space-between;
    button {
        width:100%;
        height:40px;
        border-radius:20px;
        background:${({theme}) => theme.colors.mainDarkBlue};
        color:${({theme}) => theme.colors.mainLightBlue};
    }
    
`


