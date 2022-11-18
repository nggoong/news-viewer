export interface NewsArticlesType {
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	source: { id: any; name: string }[];
	title: string;
	url: string;
	urlToImage: string;
}

export interface FavoriteArticleType extends NewsArticlesType {
	docId: string;
	userEmail: string;
}

export interface News {
	status: string;
	totalResults: number;
	articles: NewsArticlesType[];
}
