import React, { useEffect } from 'react';
import styled from 'styled-components';
import FavoriteCard from '../components/Card/FavoriteCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configStore';
import { fetchFavorites, favoritesActions } from '../redux/modules/favoritesSlice';

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
	/* background:blue; */
	/* justify-content: center; */
	margin: 0 auto;
	gap: 50px;
`;

const FavoriteContentWrapper = styled.div`
	background: blue;
	display: flex;
	flex-wrap: wrap;
`;
