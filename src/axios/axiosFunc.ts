import axios, { AxiosResponse } from 'axios';
import { News } from '../model/news.model';

export const fetchNews:()=>Promise<AxiosResponse<News>> = () => {
    return axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-09-19&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`);
}