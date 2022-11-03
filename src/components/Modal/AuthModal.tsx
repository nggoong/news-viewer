import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/modules/userSlice';
import { ModalPagePropsType } from '../../model/props.model';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import { auth } from '../../shared/firebase';

const AuthModal:React.FC<ModalPagePropsType> = ({ authModal, setIsOpenModal }) => {
    const dispatch = useDispatch();
    const firstInputRef = useRef<HTMLInputElement | null>(null);
    const [userInputs, setUserInput] = useState({
        email:"",
        password:"",
        passwordConfirm:""
    })

    const authFunction = () => {
        const { email, password, passwordConfirm } = userInputs;
        if(authModal !== "login") return createUserWithEmailAndPassword(auth, email, password);
        else return signInWithEmailAndPassword(auth, email, password);
    }

    const userInputsChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserInput((prev) => ({...prev, [e.target.name] : e.target.value}));
    }

    const AuthModalClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    const goBtnClickHandler = () => {
        authFunction().then(() => {
            if(authModal !== "login") alert("회원가입이 완료 되었습니다.");
            else alert("로그인이 완료 되었습니다.");
            setIsOpenModal(false);
        }).catch((err) => {
            if(authModal !== "login") alert("회원가입에 실패하였습니다.");
            else alert("로그인에 실패하였습니다.");
            setIsOpenModal(false);
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    useEffect(() => {
        firstInputRef.current!.focus();
    }, [])

    useEffect(() => {
        onAuthStateChanged(auth, ((user:User | null) => {
            if(user) {
                sessionStorage.setItem("user___email", user.email!);
                dispatch(userActions.setEmail(user.email!));
            }
            else {
                sessionStorage.removeItem("user___email");
                dispatch(userActions.setDefaultEmail());
                console.log("signed out");
            }
        }))
    }, [])

    return(
        <AuthModalWrapper onClick={AuthModalClickHandler}>
            <AuthModalHeader>
                {authModal === "login"?<h1>로그인</h1>:<h1>회원가입</h1>}
            </AuthModalHeader>
            <AuthModalForm>
                <AuthModalInput ref={firstInputRef} onChange={userInputsChangeHandler}
                value={userInputs.email} placeholder="이메일을 입력하세요" name="email" type="email"/>
                <AuthModalInput onChange={userInputsChangeHandler} value={userInputs.password}
                placeholder="비밀번호를 입력하세요" name="password" type="password"/>

                {authModal === "login"?null : <AuthModalInput
                onChange={userInputsChangeHandler} value={userInputs.passwordConfirm}
                placeholder="비밀번호 확인" name="passwordConfirm" type="password"/>}
            </AuthModalForm>
            <AuthActionsWrapper>
                <button onClick={goBtnClickHandler}>{authModal === "login"?"로그인하기":"회원가입하기"}</button>
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
        cursor:pointer;
    }
    
`


