import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configStore';

import NewsCard from '../components/Card/NewsCard';
import { fetchNewsBySearch } from '../axios/axiosFunc';

const Viewer:React.FC = () => {
    const newsList = useSelector((state:RootState) => state.news.news);
    useEffect(() => {
        console.log(newsList.length);
      }, [newsList])

    return (
        <ViewerWrapper>
            {newsList?.map((item, index) => <NewsCard key={index}/>)}
            
        </ViewerWrapper>
    )
}

export default Viewer;

const ViewerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
`