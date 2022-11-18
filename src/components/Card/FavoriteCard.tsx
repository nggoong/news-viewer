import React from 'react';
import styled from 'styled-components';
import { FavoriteCardType } from '../../model/props.model';

const FavoriteCard: React.FC<FavoriteCardType> = ({ item }) => {
	return (
		<FavoriteCardWrapper>
			<FavoriteCardImage style={{ backgroundImage: `url(${item.urlToImage})` }} />
			<FavoriteCardContent>
				<h2>{item.title}</h2>
			</FavoriteCardContent>
			<FavoriteCardActions />
		</FavoriteCardWrapper>
	);
};

export default FavoriteCard;

const FavoriteCardWrapper = styled.div`
	width: 400px;
	border-radius: 20px;
	cursor: pointer;
`;

const FavoriteCardImage = styled.div`
	background: yellow;
	width: 100%;
	height: 300px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background-position: center;
	background-size: 100% 100%;
`;

const FavoriteCardContent = styled.div`
	background: ${({ theme }) => theme.colors.mainLightBlue};
	width: 100%;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	padding: 20px;
	box-sizing: border-box;
	min-height: 100px;

	/* border-radius:20px; */
`;

const FavoriteCardActions = styled.div`
	background: ${({ theme }) => theme.colors.mainDarkBlue};
	width: 100%;
	height: 50px;
	border-radius: 20px;
`;
