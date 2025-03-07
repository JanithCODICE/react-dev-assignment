import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
    id: string,
    name: string,
    email: string,
    status: number
    
}

interface UserState {
    user: User | null,
    loading: boolean,
    error: string | null
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;