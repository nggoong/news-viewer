import React, { useState } from 'react';
import styled from 'styled-components';
import AuthModal from './AuthModal';
import { ModalPagePropsType } from '../../model/props.model';

const ModalPage:React.FC<ModalPagePropsType> = ({ setIsOpenModal, authModal }) => {

    const modalWrapperClickHandler = () => {
        setIsOpenModal!(false);
    }
    
    return(
        <ModalPageWrapper onClick={modalWrapperClickHandler}>
            <AuthModal authModal={authModal}></AuthModal>
        </ModalPageWrapper>
    );
}

export default ModalPage;

const ModalPageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    background:rgba(211,211,211, 0.7);
    width:100vw;
    height:100vh;
`