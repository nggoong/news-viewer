import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configStore';
import { fetchBySearch, newsActions, fetchDefault } from '../redux/modules/newsSlice';
import NewsCard from '../components/Card/NewsCard';


const Viewer:React.FC = () => {
    const newsList = useSelector((state:RootState) => state.news.news);
    const input = useSelector((state:RootState) => state.news.input);
    const dispatch = useDispatch<any>();
    const [page, setPage] = useState(1);

    useEffect(()=> {
        dispatch(fetchDefault());
        return(()=> {
            dispatch(newsActions.setDefaultNews());
            setPage(1);
        })
    }, [])


    useEffect(() => {
        if(page === 1 || !input) return;
        else {
            dispatch(fetchBySearch({input, page}));
        }
    }, [page])
    return (
        <ViewerWrapper>
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