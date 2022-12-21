import React, { useEffect } from 'react';
import styled from 'styled-components';
import FavoriteCard from '../components/Card/FavoriteCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configStore';
import { fetchFavorites, favoritesActions } from '../redux/modules/favoritesSlice';
import { Helmet } from 'react-helmet-async';

const FavoriteViewer = () => {
	const FavoriteList = useSelector((state: RootState) => state.favorites.favorites);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<any>(fetchFavorites());
		return () => {
			dispatch(favoritesActions.setDefaultFavorites());
		};
	}, []);
	return (
		<FavoriteViewerWrapper>
			<Helmet>
				<title>News Viewer-즐겨찾기</title>
			</Helmet>
			{FavoriteList.map((item, index) => (
				<FavoriteCard key={index} item={item} />
			))}
		</FavoriteViewerWrapper>
	);
};

export default FavoriteViewer;

const FavoriteViewerWrapper = styled.div`
	width: 850px;
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	gap: 50px;
`;
