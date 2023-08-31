import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleViewSelectorSchema } from '../types/ArticleViewSelectorSchema';

const initialState: ArticleViewSelectorSchema = {
    null: null,
};

export const ArticleViewSelectorSlice = createSlice({
    name: 'ArticleViewSelector',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {},
    },
});

export const { actions: ArticleViewSelectorActions } = ArticleViewSelectorSlice;
export const { reducer: ArticleViewSelectorReducer } = ArticleViewSelectorSlice;
