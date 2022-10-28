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
        if(pathname==="/topheadline" || !input) {                                                                                                                                                
            dispatch(newsActions.setDefaultNews());
            dispatch(fetchDefault()); // 이거 수정해야할거같음.
        }
        else {
            dispatch(fetchBySearch({input, page}));
        }
        return(()=> {
            dispatch(newsActions.setDefaultNews()); // 컴포넌트 리프레시 >> 기존 뉴스 리스트를 비워줘야함.
            setPage(1); // page를 1로 바꿔서 리셋해주어야함.
            //>>경제 경제 두번 입력 시 작동되지 않음.. pathname이 그대로이기 때문이다.
            // 그래서 경제 경제를 입력하면 page 1부터 시작해야하는데 그 기능이 안된다.
            // 경제경제 입력 시 배열이 비어버리는 현상도 있음.
        })
    }, [pathname, input])

    // 페이지가 바뀔 때(무한스크롤) 다음 페이지를 보여줘야함 oo
    // 카테고리가 바뀔 때 setPage(1) 후 카테고리에 맞는 리스트를 출력해야함.
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