// src/features/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register } from '../services/authService';

export const userLogin = createAsyncThunk('auth/login', async (credentials) => {
    const response = await login(credentials);
    return response.data;
});

export const userRegister = createAsyncThunk('auth/register', async (userInfo) => {
    const response = await register(userInfo);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(userRegister.pending, (state) => {
                state.loading = true;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
