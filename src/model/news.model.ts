export type NewsArticlesType =  {
    author:string,
    content:string,
    description:string,
    publishedAt:string,
    source:{id:any, name:string}[],
    title:string,
    url:string,
    urlToImage:string,
}

export type News = {
    status:string,
    totalResults:number,
    articles: NewsArticlesType[]
}
