import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "./auth.actions";

type authInitType = {
    isAuthenticated: boolean;
    loading: boolean;
    error: any;
    session: {
        token: string;
        firstName: "";
        lastName: "";
        email: "";
    };
};

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        loading: false,
        error: null,
        session: {},
    } as authInitType,

    reducers: {
        authenticate: (state, action) => {
            state.isAuthenticated = true;
            state.session = action.payload;
        },
        resetAuthState: (state) => {
            state.isAuthenticated = false;
            state.session = {} as any;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.error = null;
            state.session = { ...action.payload };
            state.loading = false;
        });
        builder.addCase(loginUserAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;

            if (action.payload) {
                const err = action.payload as any;
                state.error = err?.message;
            } else {
                state.error = action.error;
            }
        });
    },
});

export const { resetAuthState } = authSlice.actions;

export default authSlice.reducer;
