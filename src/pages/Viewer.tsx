import React from 'react';
import styled from 'styled-components';

import NewsCard from '../components/Card/NewsCard';

const Viewer:React.FC = () => {


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