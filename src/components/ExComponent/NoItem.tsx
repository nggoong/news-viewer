import React from 'react';
import styled from 'styled-components';

const NoItem = () => {
	return (
		<NoItemWrapper>
			<h1>검색된 뉴스가 없습니다🥺</h1>
		</NoItemWrapper>
	);
};

export default NoItem;

const NoItemWrapper = styled.div`
	width: 100%;
	height: 40vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
