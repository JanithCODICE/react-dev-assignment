import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Notification {
    visibility: boolean,
    message?: string,
    type?: 'success' | 'error',
}

const initialState: Notification = {
    type: undefined,
    message: undefined,
    visibility: false
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: (state, action: PayloadAction<Notification>) => {
            state.type = action.payload.type;
            state.message = action.payload.message;
            state.visibility = true;
        },
        clearNotification: (state) => {
            state.type = undefined;
            state.message = undefined;
            state.visibility = false;
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;