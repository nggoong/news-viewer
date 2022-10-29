import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NewsCardPropsType } from '../../model/props.model';
import { RootState } from '../../redux/configStore';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';

const NewsCard:React.FC<NewsCardPropsType> = ({ item, idx, setPage }) => {

    const [target, setTarget] = useState<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);
    const len = useSelector((state:RootState) => state.news.news.length);
    
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
        <NewsCardWrapper ref={len - 1 === idx ? setTarget:null}>
            <NewsCardImgDiv>

            </NewsCardImgDiv>
            <NewsCardContent>
                <NewsCardTitle>
                    {item?.title}
                </NewsCardTitle>
            </NewsCardContent>
            <NewsCardStar>
                <BsBookmarkStar/>
            </NewsCardStar>
        </NewsCardWrapper>

    )
}

export default NewsCard;

const NewsCardWrapper = styled.div`
    display:flex;
    width:100%;
    box-shadow: 1px 1px 1px 1px gray;
    border-radius:10px;
    cursor:pointer;
`

const NewsCardImgDiv = styled.div`
    width:300px;
    /* background:red; */
    height:300px;
`

const NewsCardContent = styled.div`
    width:calc(100% - 300px - 50px);
    /* background:blue; */
    padding:20px;
    box-sizing:border-box;
`

const NewsCardStar = styled.div`
    width:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
    

`

const NewsCardTitle = styled.h1 `
    font-size:25px;
    
`