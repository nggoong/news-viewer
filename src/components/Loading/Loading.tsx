import React from 'react';
import styled from 'styled-components';

const Loading:React.FC = () => {
    return (
        <LoadingWrapper>
            Loading...🙄
        </LoadingWrapper>
    )
}

export default Loading;

const LoadingWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
`