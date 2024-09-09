// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        // chat: chatReducer,
        // user: userReducer,
    },
});

export default store;
