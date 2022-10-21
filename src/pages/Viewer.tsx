import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configStore';

import NewsCard from '../components/Card/NewsCard';
import { fetchNewsBySearch } from '../axios/axiosFunc';

const Viewer:React.FC = () => {
    const newsList = useSelector((state:RootState) => state.news.news);
    const [page, setPage] = useState(1);
    return (
        <ViewerWrapper>
            {newsList?.map((item, index) => <NewsCard item={item} len={newsList.length} idx={index}
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