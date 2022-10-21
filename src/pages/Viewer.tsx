import React, { useEffect } from 'react';
import styled from 'styled-components';

import NewsCard from '../components/Card/NewsCard';
import { fetchNewsBySearch } from '../axios/axiosFunc';

const Viewer:React.FC = () => {
    // useEffect(() => {
    //     fetchNewsBySearch("economy", 1).then(res => {
    //       console.log(res.data.articles);
    //     }).catch((err) => console.log(err));
    //   }, [])

    return (
        <ViewerWrapper>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </ViewerWrapper>
    )
}

export default Viewer;

const ViewerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
`