import React from 'react';
import styled from 'styled-components';

const Loading: React.FC = () => {
	return <LoadingWrapper>Loading...🙄</LoadingWrapper>;
};

export default Loading;

const LoadingWrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 100;
	padding-top: 50px;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(211, 211, 211, 0.7);
	font-size: 30px;
	font-weight: bold;
`;
