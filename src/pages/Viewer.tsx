import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configStore';
import { fetchBySearch, newsActions, fetchDefault } from '../redux/modules/newsSlice';
import NewsCard from '../components/Card/NewsCard';


const Viewer:React.FC = () => {
    const newsList = useSelector((state:RootState) => state.news.news);
    const input = useSelector((state:RootState) => state.news.input);
    const dispatch = useDispatch<any>();
    const pathname = useLocation().pathname;
    const category = useParams().category!;
    const [page, setPage] = useState(1);

    useEffect(()=> {
        if(!category) {
            dispatch(newsActions.setDefaultNews());
            dispatch(fetchDefault());
        }
        return(()=> {
            dispatch(newsActions.setDefaultNews());
            setPage(1);
        })
    }, [pathname])


    useEffect(() => {
        console.log(category);
        dispatch(fetchBySearch({input:category, page}));
        // if(page === 1 || !input) return;
        // else {
        //     dispatch(fetchBySearch({input:category, page}));
        // }
    }, [page, category])
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