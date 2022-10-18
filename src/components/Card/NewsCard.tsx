import React from 'react';
import styled from 'styled-components';

const NewsCard:React.FC = () => {


    return(
        <NewsCardWrapper>
            <NewsCardImgDiv>

            </NewsCardImgDiv>
            <NewsCardContent>
                <NewsCardTitle>
                    타이틀
                </NewsCardTitle>
            </NewsCardContent>
        </NewsCardWrapper>

    )
}

export default NewsCard;

const NewsCardWrapper = styled.div`
    display:flex;
    width:100%;
    border:1px solid gray;
    cursor:pointer;
`

const NewsCardImgDiv = styled.div`
    width:300px;
    background:red;
    height:300px;
`

const NewsCardContent = styled.div`
    width:calc(100% - 300px);
    background:blue;
    padding:20px;
    box-sizing:border-box;
`

const NewsCardTitle = styled.h1 `
    
`