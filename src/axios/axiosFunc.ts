import instance from '../shared/axios';
import { AxiosResponse } from 'axios';
import { News } from '../model/news.model';

export const fetchNewsBySearch:(searchInput:string, page:number)=>Promise<AxiosResponse<News>> = (searchInput, page)=> {
    return instance.get(`${process.env.REACT_APP_BASE_URL}?q=${searchInput}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}&sortBy=publishedAt`);
}