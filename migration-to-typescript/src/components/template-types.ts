export type Iloader = {
    [key: string]: string;
};

export interface SourceArticles {
    author?: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface SourceApi {
    category: string;
    county: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}


export interface DrawNews {
    articles: Array<SourceArticles>;
    status: string;
    totalResult: number;
}

export interface DrawSource {
    status: string;
    totalResults: number;
    sources: Array<SourceApi>;
}


export type Callback<T> = (data: T) => void;