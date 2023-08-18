import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
    scroll: {},
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{path: string; position: number}>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(uiByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(uiByUsername.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(uiByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload as string;
    //         });
    // },
});

// Action creators are generated for each case reducer function
export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
