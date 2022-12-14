import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NewsCardPropsType } from '../../model/props.model';
import { RootState } from '../../redux/configStore';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { db } from '../../shared/firebase';
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore';

const NewsCard = ({ item, idx, setPage }: NewsCardPropsType) => {
	const [target, setTarget] = useState<HTMLDivElement | null>(null);
	const [isFavorite, setIsFavorite] = useState(false);
	const [docId, setDocId] = useState('');
	const targetRef = useRef<HTMLDivElement | null>(null);
	const len = useSelector((state: RootState) => state.news.news.length);
	const userEmail = useSelector((state: RootState) => state.user.email);
	const favoritesList = useSelector((state: RootState) => state.favorites.favorites);

	const onIntersect = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		if (entry.isIntersecting) {
			// 페이지 수 +1 로직
			setPage((prev) => prev + 1);
			observer.unobserve(entry.target);
		}
	};

	const addRmFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		if (!userEmail) {
			alert('로그인 후 이용해주세요!');
			return;
		}
		try {
			if (!isFavorite && !docId) {
				const docRef = await addDoc(collection(db, `${userEmail}_favorites`), { ...item, userEmail });
				setIsFavorite(true);
				setDocId(docRef.id);
			} else {
				await deleteDoc(doc(db, `${userEmail}_favorites`, docId));
				setIsFavorite(false);
				setDocId('');
			}
		} catch (err) {
			alert('잠시 후 다시 시도해주세요.');
			return;
		}
	};
	const cardClickHandler = () => {
		window.open(item.url);
	};

	useEffect(() => {
		const index = favoritesList.findIndex((element: any) => element.url === item.url);
		if (index !== -1) {
			setIsFavorite(true);
			setDocId(favoritesList[index].docId);
		}
	}, [favoritesList]);

	useEffect(() => {
		let observer: IntersectionObserver;
		if (target) {
			observer = new IntersectionObserver(onIntersect, { threshold: 0.3 });
			observer.observe(target);
		}

		return () => {
			observer && observer.disconnect();
		};
	}, [target]);

	return (
		<NewsCardWrapper ref={len - 1 === idx ? setTarget : null} onClick={cardClickHandler}>
			<NewsCardImgDiv style={{ backgroundImage: `url(${item.urlToImage})` }}></NewsCardImgDiv>
			<NewsCardContent>
				<NewsCardTitle>{item?.title}</NewsCardTitle>
			</NewsCardContent>
			<NewsCardStar onClick={addRmFavorite}>
				{isFavorite ? <BsBookmarkStarFill className="favorite-icons" /> : <BsBookmarkStar />}
			</NewsCardStar>
		</NewsCardWrapper>
	);
};

export default NewsCard;

const NewsCardWrapper = styled.div`
	display: flex;
	width: 100%;
	box-shadow: 1px 1px 1px 1px gray;
	border-radius: 10px;
	cursor: pointer;
`;

const NewsCardImgDiv = styled.div`
	width: 300px;
	/* background:red; */
	height: 300px;
	background-position: center;
	background-size: 300px 300px;
	border-radius: 10px;
`;

const NewsCardContent = styled.div`
	width: calc(100% - 300px - 50px);
	/* background:blue; */
	padding: 20px;
	box-sizing: border-box;
`;

const NewsCardStar = styled.div`
	width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
`;

const NewsCardTitle = styled.h1`
	font-size: 25px;
`;
