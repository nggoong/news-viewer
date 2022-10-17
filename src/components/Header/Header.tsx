import React from 'react';
import styled from 'styled-components';

const Header:React.FC = () => {


    return(
        <HeaderWrapper>
            <HeaderContent>

            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
    width:100%;
    height:60px;
    background:green;
`

const HeaderContent = styled.div`
    width:80%;
    height:100%;
    background:yellow;
    margin:0 auto;
`