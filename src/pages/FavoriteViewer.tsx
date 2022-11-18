import React from 'react';
import styled from 'styled-components';
import FavoriteCard from '../components/Card/FavoriteCard';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configStore';

const FavoriteViewer: React.FC = () => {
	const FavoriteList = useSelector((state: RootState) => state.favorites.favorites);
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
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	/* background:blue; */
	justify-content: center;
	margin: 0 auto;
	gap: 50px;
`;
