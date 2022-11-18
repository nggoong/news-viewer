import { NewsArticlesType } from './news.model';

export interface NewsCardPropsType {
	item: NewsArticlesType;
	idx: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ModalPagePropsType {
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	authModal: string;
}

export interface HeaderPropsType {
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	setAuthModal: React.Dispatch<React.SetStateAction<string>>;
}

export interface FavoriteCardType {
	item: NewsArticlesType;
}
