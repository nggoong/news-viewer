import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configStore';
import { fetchBySearch, newsActions, fetchDefault } from '../redux/modules/newsSlice';
import NewsCard from '../components/Card/NewsCard';
import NoItem from '../components/ExComponent/NoItem';


const Viewer:React.FC = () => {
    const newsList = useSelector((state:RootState) => state.news.news);
    const input = useSelector((state:RootState) => state.news.input);
    const dispatch = useDispatch<any>();
    const pathname = useLocation().pathname;
    const category = useParams().category!;
    const [page, setPage] = useState(1);


    // pathname이 바뀔 때 뉴스 리스트를 default로 바꿔줘야함.
    useEffect(()=> {
        if(pathname==="/viewer/topheadline" || !input) {                                                                                                                                                
            dispatch(newsActions.setDefaultNews());
            dispatch(fetchDefault()); // 이거 수정해야할거같음.
        }
        else {
            dispatch(fetchBySearch({input, page}));
        }
        return(()=> {
            dispatch(newsActions.setDefaultNews());
            setPage(1); 
        })
    }, [pathname, input])

    useEffect(() => {
        if(page === 1) return;
        dispatch(fetchBySearch({input:category, page}));
    }, [page, category])

    return (
        <ViewerWrapper>
            {!newsList.length &&<NoItem/>}
            {newsList?.map((item, index) => <NewsCard item={item} idx={index}
            key={index} setPage={setPage}/>)}
        </ViewerWrapper>
    )
}

export default Viewer;

const ViewerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
`