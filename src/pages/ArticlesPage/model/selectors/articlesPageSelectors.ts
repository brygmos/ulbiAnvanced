import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => {
    return state.articlesPage?.isLoading || false;
};
export const getArticlesPageError = (state: StateSchema) => {
    return state.articlesPage?.error;
};
export const getArticlesPageView = (state: StateSchema) => {
    return state.articlesPage?.view || ArticleView.SMALL;
};
