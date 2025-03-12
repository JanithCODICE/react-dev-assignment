import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../../types/interfaces/response/auth-response-dto";
import { User } from "../../types/interfaces/Entities/User.entity";

interface UserState {
  user: User | null;
  loginSuccess: boolean;
}

const initialState: UserState = {
  user: null,
  loginSuccess: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthResponse>) => {
      const user: User = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        status: action.payload.status,
      };
      state.user = user;
      state.loginSuccess = true;
    },
    clearUser: (state) => {
      localStorage.clear();
      state.user = null;
      state.loginSuccess = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
