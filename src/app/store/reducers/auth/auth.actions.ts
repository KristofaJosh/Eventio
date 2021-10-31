import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { loginType } from "../../../../utils/apis";

const loginUserAction = createAsyncThunk("authentication/loginStatus", async (entry: loginType, { rejectWithValue }) => {
    try {
        const response = await api.authentication.login(entry);
        return {
            ...response.data,
            token: response.headers.authorization,
            refreshToken: response.headers["refresh-token"],
        };
    } catch (error: any) {
        if (error) {
            return rejectWithValue({
                message: `${error.response?.data?.error || error?.response?.message}`,
            });
        }
        throw error;
    }
});

const registerUserAction = createAsyncThunk("authentication/loginStatus", async (entry: loginType, { rejectWithValue }) => {
    try {
        const response = await api.authentication.login(entry);
        return response.data;
    } catch (error: any) {
        if (error) {
            return rejectWithValue({
                message: `${error.response?.data?.error}`,
            });
        }
        throw error;
    }
});

export { loginUserAction, registerUserAction };
