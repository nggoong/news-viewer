import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { NewsCardPropsType } from '../../model/props.model';

const NewsCard:React.FC<NewsCardPropsType> = ({ item, len, idx, setPage }) => {

    const [target, setTarget] = useState<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);
    
    const onIntersect = ([entry]:IntersectionObserverEntry[], observer:IntersectionObserver) => {
        if(entry.isIntersecting) {
            // 페이지 수 +1 로직
            setPage(prev => prev + 1);
            observer.unobserve(entry.target);
        }
    }

    useEffect(()=> {
        let observer: IntersectionObserver;
        if(target) {
            observer = new IntersectionObserver(onIntersect, {threshold:0.3});
            observer.observe(target);
        }

        return(()=> {
            observer && observer.disconnect();
        })
    }, [target])

    return(
        <NewsCardWrapper ref={targetRef}>
            <NewsCardImgDiv>

            </NewsCardImgDiv>
            <NewsCardContent>
                <NewsCardTitle>
                    {item.title}
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
    font-size:25px;
    
`