import instance from '../shared/axios';
import { AxiosResponse } from 'axios';
import { News } from '../model/news.model';

export const fetchNewsBySearch:(searchInput:string, page:number)=>Promise<AxiosResponse<News>> = (searchInput)=> {
    return instance.get(`https://newsapi.org/v2/everything?apikey=${process.env.REACT_APP_API_KEY}&q=${searchInput}&page=1&sortBy=publishedAt&pageSize=10`);
}