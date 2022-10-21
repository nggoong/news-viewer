import { NewsArticlesType } from './news.model';

export interface NewsCardPropsType {
    item:NewsArticlesType;
    len:number;
    idx:number;
    setPage:React.Dispatch<React.SetStateAction<number>>
}