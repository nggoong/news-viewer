import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { RootState } from '../../redux/configStore';
import { newsActions, fetchBySearch } from '../../redux/modules/newsSlice';
import useOnlyInput from '../../hooks/useOnlyInput';

const Searchform = () => {
	const [input, setInput, changeInputHandler] = useOnlyInput('');
	const selector = useSelector((state: RootState) => state.news.news);
	const dispatch = useDispatch<any>();
	const navigate = useNavigate();
	const pathname = useLocation().pathname;
	const inputRef = useRef<HTMLInputElement | null>(null);

	const inputSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(newsActions.setInput(input));

		if (!input) navigate('/viewer/topheadline');
		else navigate(`/viewer/${input}`);
	};

	useEffect(() => {
		if (pathname === '/viewer/topheadline') {
			setInput('');
			inputRef.current!.focus();
		}
	}, [pathname]);

	return (
		<SearchFormWrapper onSubmit={inputSubmitHandler}>
			<SearchFormInput onChange={changeInputHandler} value={input} ref={inputRef} placeholder="주제를 검색하세요!😁" />
			<SearchFormButton type="submit">확인</SearchFormButton>
		</SearchFormWrapper>
	);
};

export default Searchform;

const SearchFormWrapper = styled.form`
	position: relative;
	width: 100%;
	height: 60px;
	margin-bottom: 20px;
`;

const SearchFormInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 20px;
	font-size: 1.2rem;
	font-weight: 600;
`;

const SearchFormButton = styled.button`
	position: absolute;
	right: 0;
	top: 0;
	width: 100px;
	height: 100%;
	background: red;
	border-radius: 20px;
	cursor: pointer;
	font-weight: bold;
	background: ${({ theme }) => theme.colors.mainDarkBlue};
	color: ${({ theme }) => theme.colors.mainLightBlue};
`;
