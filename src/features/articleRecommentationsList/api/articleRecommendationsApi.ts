import { rtkApi } from '../../../shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommenrationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useArticleRecommenrationsList = recommendationsApi
    .useGetArticleRecommenrationsListQuery;
