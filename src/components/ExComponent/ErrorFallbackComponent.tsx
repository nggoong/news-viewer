import React from 'react';
import styled from 'styled-components';

const ErrorFallbackComponent = () => {
	return (
		<ErrorFallbackComponentWrapper>
			<ErrorFallbackContent>
				<h1>에러가 발생했어요!</h1>
				<p>잠시 후 다시 시도해주세요😢</p>
			</ErrorFallbackContent>
		</ErrorFallbackComponentWrapper>
	);
};

export default ErrorFallbackComponent;

const ErrorFallbackComponentWrapper = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: white;
	z-index: 9999;
`;

const ErrorFallbackContent = styled.div`
	text-align: center;
	h1 {
		font-weight: bold;
		color: red;
	}
	p {
		font-size: 15px;
	}
`;
