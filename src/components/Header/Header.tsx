import React from 'react';
import styled from 'styled-components';

const Header:React.FC = () => {


    return(
        <HeaderWrapper>
            <HeaderContent>
                <HeaderLogo>
                    <h1>news</h1>
                </HeaderLogo>
                <HeaderItems>
                    dfsd
                </HeaderItems>
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
    width:100%;
    height:60px;
    /* background:green; */
`

const HeaderContent = styled.div`
    width:80%;
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
    }
`

const HeaderItems = styled.div`
    height:100%;
    display:flex;
    align-items:center;
`