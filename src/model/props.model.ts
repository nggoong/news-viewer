import { NewsArticlesType } from './news.model';

export interface NewsCardPropsType {
    item:NewsArticlesType;
    idx:number;
    setPage:React.Dispatch<React.SetStateAction<number>>
}