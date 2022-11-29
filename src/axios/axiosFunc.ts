import instance from '../shared/axios';
import { AxiosResponse } from 'axios';
import { News } from '../model/news.model';

export const fetchNewsFn = {
	fetchNewsBySearch: (searchInput: string, page: number): Promise<AxiosResponse<News>> => {
		return instance.get(
			`https://newsapi.org/v2/everything?apikey=${process.env.REACT_APP_API_KEY}&q=${searchInput}&page=${page}&sortBy=publishedAt&pageSize=10`,
		);
	},
	fetchNewsDefault: (): Promise<AxiosResponse<News>> => {
		return instance.get(
			`https://newsapi.org/v2/top-headlines?country=kr&apikey=${process.env.REACT_APP_API_KEY}&sortBy=publishedAt&pageSize=10`,
		);
	},
};
