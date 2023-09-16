import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/NotificationSchema';

const initialState: NotificationSchema = {
    null: null,
};

export const NotificationSlice = createSlice({
    name: 'Notification',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {},
    },
});

export const { actions: NotificationActions } = NotificationSlice;
export const { reducer: NotificationReducer } = NotificationSlice;
